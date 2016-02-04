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

const tracer = require('tracer').colorConsole({
  format: '{{timestamp}} [{{title}}] {{message}} (in {{file}}:{{line}})',
  dateformat: 'yyyy-mm-dd HH:MM:ss',
})

let configFile
switch (process.env.MODE) {
case 'docker-dev':
  configFile = 'config/docker-dev.json'
  break
case 'local':
  configFile = 'config/local.json'
  break
default:
  if (fs.existsSync('/var/react-orientboard/config.json'))
    configFile = '/var/react-orientboard/config.json'
  else
    configFile = 'config/default.json'
}

// const DEFAULT_CONFIG = 'config/default.json'
// const CUSTOM_CONFIG = '/var/react-orientboard/config.json'
// const TEST_CONFIG = 'test-config/config.json'
//
// const configFile = (function getConfigFile() {
//   if (fs.existsSync(CUSTOM_CONFIG))
//     return CUSTOM_CONFIG
//   if (fs.existsSync(TEST_CONFIG))
//     return TEST_CONFIG
//   return DEFAULT_CONFIG
// })()

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
