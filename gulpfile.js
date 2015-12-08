var gulp = require('gulp')
  , browserify = require('browserify')
  , babelify = require('babelify')
  , watchify = require('watchify')
  , source = require('vinyl-source-stream')
  , streamify = require('gulp-streamify')
  // , less = require('gulp-less')
  // , path = require('path')
  // , fs = require('fs-extra')
  // , child_process = require('child_process')
  // , exec = child_process.exec
  // , spawn = child_process.spawn
  , uglify = {
      js: require('gulp-uglify')
  //   , css: require('gulp-uglifycss')
    }

// var argv = require('minimist')(process.argv.slice(2))

function printErrorStack(err) {
  if (err) console.log(err.stack || err)
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
  .bundle()
  .pipe(source('main.js'))
  .pipe(streamify(uglify.js()))
  .pipe(gulp.dest('./public/js'))
})



gulp.task('watch', function () {
  var file = './app/main.js'
  var outdir = './public/js'
  var bundler = browserify({
    entries: [file]
  , transform: [babelify]
  , debug: true
  , cache: {}
  , packageCache: {}
  // , fullPaths: true
  })

  console.log('Start watching', file)

  var watcher = watchify(bundler)

  watcher.build = function () {
    console.log('Start building')
    watcher.bundle()
           .on('error', printErrorStack)
           .pipe(source(file))
           .pipe(require('gulp-rename')({dirname: ''}))
           .pipe(gulp.dest(outdir))
  }

  watcher.on('error', printErrorStack)
         .on('update', watcher.build)
         .on('time', function (time) {
           console.log('Finished building after', time, 'ms')
         })

  watcher.build()
})

gulp.task('default', ['production'])
