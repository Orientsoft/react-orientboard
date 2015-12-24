var gulp = require('gulp')
  , browserify = require('browserify')
  , babelify = require('babelify')
  , watchify = require('watchify')
  , source = require('vinyl-source-stream')
  , streamify = require('gulp-streamify')
  // , less = require('gulp-less')
  , path = require('path')
  , fs = require('fs-extra')
  , child_process = require('child_process')
  , exec = child_process.exec
  // , spawn = child_process.spawn
  , uglify = {
      js: require('gulp-uglify')
  //   , css: require('gulp-uglifycss')
    }
  , cssModulesify = require('css-modulesify')
  , gutil = require('gulp-util')
  , _ = require('lodash')
  , utils = require('./lib/util')
  , sequence = require('gulp-sequence')

var argv = require('minimist')(process.argv.slice(2))

function printErrorStack(err) {
  if (err) gutil.log(err.stack || err)
}

gulp.task('install', function () {
  gulp.src(['./node_modules/bootstrap/dist/**'])
    .pipe(gulp.dest('./public/vendor/bootstrap'))
  gulp.src(['./node_modules/babel-polyfill/dist/**'])
    .pipe(gulp.dest('./public/vendor/babel-polyfill'))
})

var vendors = [
  'react'
, 'react-dom'
, 'react-bootstrap'
, 'classnames'
, 'jquery'
, 'lodash'
, 'reflux'
, 'autobind-decorator'
]

function getBrowserifyStream(opts) {
  return browserify({
    entries: [opts.file]
  , transform: [babelify]
  , debug: opts.debug
  , cache: {}
  , packageCache: {}
  })
  .plugin(cssModulesify, {
    rootDir: __dirname
  , output: `./public/css/${path.basename(opts.file, '.js')}.css`
  })
  .external(vendors)
}

gulp.task('build-vendor', () => {
  browserify()
    .require(vendors)
    .bundle()
    .pipe(source('vendor.js'))
    .pipe(streamify(uglify.js()))
    .pipe(gulp.dest('./public/js'))
})

gulp.task('build', function () {
  fs.mkdirpSync('public/css')
  getBrowserifyStream({
    file: './app/main.js'
  , debug: false
  })
  .bundle()
  .pipe(source('main.js'))
  .pipe(streamify(uglify.js()))
  .pipe(gulp.dest('./public/js'))
})

gulp.task('watch', function () {
  var file = argv.f || './app/main.js'
  var bundler = getBrowserifyStream({
    file: file
  , debug: true
  })

  gutil.log('Start watching', file)

  var watcher = watchify(bundler)

  watcher.build = function () {
    gutil.log('Start building')
    watcher.bundle()
           .on('error', printErrorStack)
           .pipe(source(file))
           .pipe(require('gulp-rename')({dirname: ''}))
           .pipe(gulp.dest('./public/js'))
  }

  watcher.on('error', printErrorStack)
         .on('update', watcher.build)
         .on('time', function (time) {
           gutil.log('Finished building after', time, 'ms')
         })

  watcher.build()
})

gulp.task('new', function() {
  if (!argv.n)
    return gutil.log(
      gutil.colors.red('Error'), 'Name missing, use -n to name your component'
    )
  var name = `orientboard-component-${argv.n}`
  var configPath = path.join('..', name, 'package.json')
  var componentDir = path.join(__dirname, '..', name)
  fs.copySync('example-component', componentDir)
  var p = fs.readJsonSync(configPath)
  p.name = name
  p.orientboard.name = argv.n
  fs.writeJsonSync(configPath, p)
  fs.symlinkSync(componentDir, path.join('./node_modules', name))

  var cmd = argv.c ? 'cnpm i' : 'npm i'
  gutil.log('Running', cmd)
  exec(cmd, { cwd: componentDir }, (err, stdout, stderr) => {
    if (err) {
      return gutil.log(gutil.colors.red('Error'), err)
    }
    console.log(stderr)
    gutil.log('Finished npm install')
    sequence('gen')()
  })
})

gulp.task('gen', function() {
  gutil.log('Generating config...')
  var devComponents = utils.getComponents()
  var output = `export default {\n  ${
    devComponents.map((dep, i) => {
      var name = dep.substr(22)
      return `\'${name}\': require(\'${dep}\').default`
    }).join('\n, ')
  }\n}`
  fs.writeFileSync('app/lib/components.js', output)
  var config = {
    components: utils.getComponents()
  }
  fs.mkdirp('./config')
  fs.writeJsonSync('./config/components.json', config)
})

gulp.task('link', () => {
  var components = fs.readdirSync('..').filter((dep) => {
    return dep.match(/^orientboard-component-/)
  })
  for (var component of components) {
    fs.ensureSymlinkSync(
      path.join('..', component)
    , path.join('node_modules', component)
    )
  }
  sequence('gen')()
})

gulp.task('assets', () => {
  for (var component of utils.getComponents())
    gulp.src(`../${component}/assets/**`)
        .pipe(gulp.dest(`public/components/${component}`))
})

// remove a component from node_modules
gulp.task('rm', function() {
  var name = argv.n
  if (!name)
    return gutil.log('Component name is needed.')
  var components = utils.getComponents().map((fullname) => {
    return utils.getComponentName(fullname)
  })
  if (_.contains(components, name)) {
    fs.remove(path.join('node_modules', `orientboard-component-${name}`))
    if (argv.d)
      fs.remove(path.join('..', `orientboard-component-${name}`))
    gutil.log(`Symlink for component ${name} removed`)
    sequence('gen')()
  }
  else {
    gutil.log(`Component ${name} not found`)
  }
})

gulp.task('ls', function () {
  gutil.log('Installed components:')
  for (var component of utils.getComponents())
    console.log(`\t - ${utils.getComponentName(component)}`)
})

gulp.task('default', ['production'])
