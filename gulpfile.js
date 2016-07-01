'use strict'

const gulp = require('gulp'),
      browserify = require('browserify'),
      babelify = require('babelify'),
      watchify = require('watchify'),
      source = require('vinyl-source-stream'),
      streamify = require('gulp-streamify'),
      path = require('path'),
      fs = require('fs-extra'),
      childProcess = require('child_process'),
      exec = childProcess.exec,
      uglifyjs = require('gulp-uglify'),
      cssModulesify = require('css-modulesify'),
      gutil = require('gulp-util'),
      _ = require('lodash'),
      utils = require('./lib/util'),
      sequence = require('gulp-sequence'),
      gitbook = require('gitbook'),
      eslint = require('gulp-eslint'),
      mocha = require('gulp-mocha'),
      gulpIf = require('gulp-if'),
      rimraf = require('gulp-rimraf'),
      PrettyError = require('pretty-error'),
      chalk = require('chalk'),
      merge = require('merge-stream')

require('nodent')()

const pe = new PrettyError()

pe.appendStyle({
  'pretty-error > trace > item': {
    marginTop: 0,
    marginBottom: 0,
  },
  'pretty-error > trace > item > header': {
    display: 'inline',
  },
  'pretty-error > trace > item > footer': {
    display: 'inline',
    marginLeft: 2,
  },
  'pretty-error > trace > item > footer > addr': {
    display: 'inline',
    color: 'grey',
  },
  'pretty-error > trace > item > footer > extra': {
    display: 'inline',
    color: 'grey',
  },
})

pe.start()
pe.skipNodeFiles()

const argv = require('minimist')(process.argv.slice(2))

function printErrorStack(err) {
  if (err) gutil.log(pe.render(err))
  // if (err) console.log(err.stack || err)
}

gulp.task('install', () => {
  gulp.src(['./node_modules/bootstrap/dist/**'])
    .pipe(gulp.dest('./public/vendor/bootstrap'))
  gulp.src(['./node_modules/babel-polyfill/dist/**'])
    .pipe(gulp.dest('./public/vendor/babel-polyfill'))
  gulp.src(['./node_modules/mocha/mocha.*'])
    .pipe(gulp.dest('./public/vendor/mocha'))
})

// modules that will go to vendor bundle
const VENDORS = [
  'react',
  'react-dom',
  'react-bootstrap',
  'classnames',
  'jquery',
  'lodash',
  'reflux',
  'autobind-decorator',
  'pubsub-js',
]

// app bundle entries
const ENTRIES = [
  './app/main.js',
  './app/component-test.js',
  './app/display.js',
  './app/cloud.js'
]

function getBrowserifyStream(opts) {
  return browserify({
    entries: [opts.file],
    transform: [babelify],
    debug: opts.debug,
    cache: {},
    packageCache: {},
  })
  .plugin(cssModulesify, {
    rootDir: __dirname,
    output: `./public/css/${path.basename(opts.file, '.js')}.css`,
    global: true,
  })
  .external(VENDORS)
}

gulp.task('build-vendor', () => {
  browserify()
    .require(VENDORS)
    .bundle()
    .pipe(source('vendor.js'))
    .pipe(streamify(uglifyjs()))
    .pipe(gulp.dest('./public/js'))
})

function buildJsAndCss(file) {
  fs.mkdirpSync('public/css')
  return getBrowserifyStream({
    file,
    debug: false,
  })
  .on('error', (err) => {
    gutil.log(pe.render(err))
  })
  .bundle()
  .pipe(source(path.basename(file)))
  .pipe(streamify(uglifyjs()))
  .pipe(gulp.dest('./public/js'))
}

gulp.task('build-all', () => {
  return merge(ENTRIES.map((file) => {
    return buildJsAndCss(file)
  }))
})

gulp.task('build', () => {
  const file = argv.f || './app/main.js'
  return buildJsAndCss(file)
})

const BROWSER_TESTS = [
  'board-actions',
  'board-client',
  // 'socketio',
]

gulp.task('build-test', () => {
  return merge(BROWSER_TESTS.map((test) => {
    return buildJsAndCss(`./tests/${test}.js`)
  }))
})

function watchFile(file) {
  const bundler = getBrowserifyStream({
    file,
    debug: true,
  })

  gutil.log('Start watching', file)

  const watcher = watchify(bundler)

  watcher.build = () => {
    gutil.log('Building', chalk.yellow(path.basename(file)))
    watcher.bundle()
           .on('error', printErrorStack)
           .pipe(source(file))
           .pipe(require('gulp-rename')({ dirname: '' }))
           .pipe(gulp.dest('./public/js'))
  }

  watcher.on('error', printErrorStack)
    .on('update', watcher.build)
    .on('time', (time) => {
      gutil.log(
        'Built %s in %s %s',
        chalk.yellow(path.basename(file)),
        chalk.magenta(time > 1000 ? +((time / 1000).toFixed(2)) : time),
        chalk.magenta(time > 1000 ? 's' : 'ms')
      )
    })

  watcher.build()
}

gulp.task('watch', () => {
  const file = argv.f || './app/main.js'
  watchFile(file)
})

gulp.task('watch-all', () => {
  fs.mkdirpSync('./public/css')
  fs.mkdirpSync('./public/js')

  ENTRIES.map((file) => {
    watchFile(file)
  })
})

gulp.task('new', (cb) => {
  if (!argv.n)
    return gutil.log(
      gutil.colors.red('Error'), 'Name missing, use -n to name your component'
    )
  const name = `orientboard-component-${argv.n}`,
        configPath = path.join('..', name, 'package.json'),
        componentDir = path.join(__dirname, '..', name)
  fs.copySync('component-example', componentDir)
  const p = fs.readJsonSync(configPath)
  p.name = name
  p.orientboard.name = argv.n
  fs.writeJsonSync(configPath, p)
  fs.symlinkSync(componentDir, path.join('./node_modules', name))

  if (!argv.i) {
    gutil.log('Please run npm install manually')
    return cb()
  }

  gutil.log('Running npm install')
  exec('npm i', { cwd: componentDir }, (err, stdout, stderr) => {
    if (err) return cb(err)
    console.log(stderr)
    gutil.log('Finished npm install')
    sequence('gen')(cb)
  })
})

gulp.task('gen', () => {
  gutil.log('Generating config...')
  const devComponents = utils.getComponents()
  const output = `export default {\n  ${
    devComponents.map((dep) => {
      const name = dep.substr(22)
      return `\'${name}\': require(\'${dep}\').default`
    }).join('\n, ')
  }\n}`
  fs.writeFileSync('app/lib/components.js', output)
  const config = {
    components: utils.getComponents(),
  }
  fs.mkdirpSync('./config')
  fs.writeJsonSync('./config/components.json', config)
})

gulp.task('link', (cb) => {
  const components = fs.readdirSync('..').filter((dep) => {
    return dep.match(/^orientboard-component-/)
  })
  for (const component of components)
    fs.ensureSymlinkSync(
      path.join('..', component),
      path.join('node_modules', component)
    )
  sequence('gen')(cb)
})

gulp.task('unlink', () => {
  const components = utils.getComponents()
  console.log(components)
  for (const component of components)
    fs.removeSync(`node_modules/${component}`)
})

gulp.task('assets', () => {
  for (const component of utils.getComponents())
    gulp.src(`../${component}/assets/**`)
      .pipe(gulp.dest(`public/components/${utils.getComponentName(component)}`))
})

// remove a component from node_modules
gulp.task('rm', (cb) => {
  const name = argv.n
  if (!name)
    return gutil.log('Component name is needed.')
  const components = utils.getComponents().map((fullname) => {
    return utils.getComponentName(fullname)
  })
  if (_.contains(components, name)) {
    fs.remove(path.join('node_modules', `orientboard-component-${name}`))
    if (argv.d)
      fs.remove(path.join('..', `orientboard-component-${name}`))
    gutil.log(`Symlink for component ${name} removed`)
    sequence('gen')(cb)
  } else {
    gutil.log(`Component ${name} not found`)
    cb()
  }
})

gulp.task('ls', () => {
  gutil.log('Installed components:')
  for (const component of utils.getComponents())
    console.log(`\t - ${utils.getComponentName(component)}`)
})

gulp.task('doc', (cb) => {
  const book = new gitbook.Book('doc/', {
    config: {
      otuput: '_book',
    },
  })

  book.parse().then(() => {
    return book.generate('website')
  }).then(() => {
    gutil.log('Documentation built')
    fs.ensureSymlink('doc/_book', 'public/doc', cb)
  }, cb)
})


gulp.task('postinstall', (cb) => {
  // sequence('install', 'gen', 'build-vendor', 'build-all', 'doc')(cb)
  sequence('install', 'gen', 'build-vendor', 'build-all')(cb)
})

function isFixed(file) {
  return _.get(file, 'eslint.fixed')
}

gulp.task('lint', () => {
  return gulp.src([
    'app/**/*.js', 'lib/**/*.js', 'routes/**/*.js', 'tests/**/*.js',
    'routes/**/*.js', 'app.js',
  ])
    .pipe(eslint({
      fix: true,
      quiet: argv.q,
    }))
    .pipe(eslint.format())
    .pipe(gulpIf(isFixed, gulp.dest((file) => { return file.base })))
    .pipe(eslint.failAfterError())
})

gulp.task('test', () => {
  const file = argv.f || 'board.js'
  return gulp.src(`tests/${file}`, { read: false })
      .pipe(mocha())
      .once('error', process.exit.bind(null, 1))
      .once('end', process.exit)
})

gulp.task('clean', () => {
  return gulp.src([
    'public/js/**',
    'public/css/**',
  ], { read: false })
    .pipe(rimraf())
})

gulp.task('default', ['lint'])
