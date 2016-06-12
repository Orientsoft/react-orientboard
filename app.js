'use strict'


const express = require('express'),
      path = require('path'),
      logger = require('morgan'),
      cookieParser = require('cookie-parser'),
      bodyParser = require('body-parser'),
      fs = require('fs-extra'),
      session = require('express-session'),
      swig = require('swig'),
      RedisStore = require('connect-redis')(session);

const routes = require('./routes/index'),
      users = require('./routes/users'),
      board = require('./routes/board'),
      chart = require('./routes/chart'),
      cloud = require('./routes/cloud'),
      apis  = require('./routes/apis')

const tracer = require('./lib/util').logger

let configFile
switch (process.env.MODE) {
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
app.set('view engine', 'html');

app.engine('html',swig.renderFile)

//app.set('view engine', 'jade')

// uncomment after placing your favicon in /public
// app.use(require('serve-favicon')(__dirname + '/public/favicon.ico'))
//app.use(session({ secret: 'keyboard cat',resave:false, cookie: { maxAge: 60000 }}))

app.use(session({
    store: new RedisStore({
      host:'localhost',
      pass:'2@9T4m6H'
    }),
    secret: 'keyboard cat'
}));



var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
}

app.use(allowCrossDomain);

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))


require('express-dynamic-helpers-patch')(app);

 app.dynamicHelpers({ isAdmin: function(req, res){
            var isAdmin=false;
             if(req.session.user&&req.session.user.type=="admin"){
                isAdmin=true;
            }
          return isAdmin;
       }
    });

 app.dynamicHelpers({ session: function(req, res){ return req.session; } });

 app.dynamicHelpers({ user: function(req, res){

        if(!req.session.user){
                return null;
        }else{
                return req.session.user;
        }

       }});


// midware to disable cache
function nocache(req, res, next) {
  res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate')
  res.header('Expires', '-1')
  res.header('Pragma', 'no-cache')
  next()
}

app.use('/', routes({
  mongo: config.mongo
}))

//api 入口
app.use('/cloud', cloud({
  mongo: config.mongo
}))


//api 入口
app.use('/api/v1', apis({
  mongo: config.mongo
}))

// use themes css contorl
app.use('/themes/fonts', express.static(path.join(__dirname, 'public/vendor/bootstrap/fonts')));

app.get("/themes/css/bootstrap.css", function(req, res) {
    
    var themes ='cerulean';
    
    if(req.session.themes){
        themes=req.session.themes;
    }

    var filePath =  __dirname + "/public/vendor/bootstrap/themes/" +themes+"_bootstrap.min.css" /* path to file here */;
    var path = require('path');

    if (fs.existsSync(filePath)){
        res.sendFile(path.resolve(filePath));
    }
    else{
       console.log("样式:",themes,'不存在, 采用默认样式');
       filePath =  __dirname + "/public/vendor/bootstrap/css/bootstrap.min.css"
       res.sendFile(path.resolve(filePath));
      }
});


app.use('/api', nocache, board({
  mongo: config.mongo,
}))

app.use('/chart',chart)

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
