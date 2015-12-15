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


gulp.task('build', function () {
  browserify({
    entries: ['./app/main.js']
  , transform: [babelify]
  , debug: false
  })
  .plugin(cssModulesify, {
    rootDir: __dirname
  , output: './public/css/bundle.css'
  })
  .bundle()
  .pipe(source('main.js'))
  .pipe(streamify(uglify.js()))
  .pipe(gulp.dest('./public/js'))
})

gulp.task('watch', function () {
  var file = argv.f || './app/main.js'
  var outdir = './public/js'
  var bundler = browserify({
    entries: [file]
  , transform: [babelify]
  , debug: true
  , cache: {}
  , packageCache: {}
  // , fullPaths: true
  }).plugin(cssModulesify, {
    rootDir: __dirname
  , output: `./public/css/${path.basename(file, '.js')}.css`
  })

  gutil.log('Start watching', file)

  var watcher = watchify(bundler)

  watcher.build = function () {
    gutil.log('Start building')
    watcher.bundle()
           .on('error', printErrorStack)
           .pipe(source(file))
           .pipe(require('gulp-rename')({dirname: ''}))
           .pipe(gulp.dest(outdir))
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
  gutil.log('Start npm install')
  exec('npm i', { cwd: componentDir }, (err, stdout, stderr) => {
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
      return `${name}: require(\'${dep}\').default`
    }).join('\n, ')
  }\n}`
  fs.writeFileSync('app/lib/components.js', output)
  var config = {
    components: utils.getComponents()
  }
  fs.writeJsonSync('./config/components.json', config)
})

// remove a component from node_modules
gulp.task('rm', function() {

})

gulp.task('default', ['production'])
