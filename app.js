'use strict'

const express = require('express'),
      path = require('path'),
      logger = require('morgan'),
      cookieParser = require('cookie-parser'),
      bodyParser = require('body-parser'),
      fs = require('fs-extra')

const routes = require('./routes/index'),
      users = require('./routes/users'),
      board = require('./routes/board')

const tracer = require('./lib/util').logger

let configFile
switch (process.env.MODE) {
case 'docker-dev':
  // config for developing in docker
  configFile = 'config/docker-dev.json'
  break
case 'local':
  // config for developing on local machine
  configFile = 'config/local.json'
  break
default:
  if (fs.existsSync('/var/react-orientboard/config.json'))
    // use custom config if available
    configFile = '/var/react-orientboard/config.json'
  else
    // use default config as fall back
    configFile = 'config/default.json'
}

// TODO: catch possible error when reading config.json
const config = fs.readJsonSync(configFile)

tracer.log('Using config at %s\n %j', configFile, config)

const app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

// uncomment after placing your favicon in /public
// app.use(require('serve-favicon')(__dirname + '/public/favicon.ico'))
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

// midware to disable cache
function nocache(req, res, next) {
  res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate')
  res.header('Expires', '-1')
  res.header('Pragma', 'no-cache')
  next()
}

app.use('/', routes)
app.use('/users', users)
app.use('/api', nocache, board({
  mongo: config.mongo,
}))

// catch 404 and forward to error handler
app.use(function notFoundHandler(req, res, next) {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development')
  app.use(function devErrorHandler(err, req, res) {
    res.status(err.status || 500)
    res.render('error', {
      message: err.message,
      error: err,
    })
  })

// production error handler
// no stacktraces leaked to user
app.use(function productionErrorHandler(err, req, res) {
  res.status(err.status || 500)
  res.render('error', {
    message: err.message,
    error: {},
  })
})


module.exports = app
