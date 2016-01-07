var express = require('express')
var router = express.Router()
var fs = require('fs-extra')
var _ = require('lodash')
var path = require('path')
var layouts = {}


const COMPONENTS_CONFIG = path.join(__dirname, '../config/components.json')

for (var component of fs.readJsonSync(COMPONENTS_CONFIG).components) {
  layouts[component] = loadLayout(component)
}

function loadLayout(component) {
  var layoutPath = require.resolve(path.join(component, 'test-layout.js'))
  fs.watch(layoutPath, function (e, f) {
    console.log('layout change', component)
    delete require.cache[layoutPath]
    layouts[component] = require(layoutPath)
  })
  return require(layoutPath )
}

fs.watch(COMPONENTS_CONFIG, function (event, filename) {
  try {
    var cc = fs.readJsonSync(COMPONENTS_CONFIG)
    for (var component of cc.components) {
      if (!layouts[component]) {
        layouts[component] = loadLayout(component)
      }
    }
  } catch (e) {
    console.log(e.stack)
  }

})

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'board demo'
  , main_script: '/js/main.js'
  , main_css: '/css/main.css'
  })
})

router.get('/get-test-layout/:name', function (req, res) {
  console.log('sending layout', layouts[`orientboard-component-${req.params.name}`])
  res.json(layouts[`orientboard-component-${req.params.name}`])
})

router.get('/dev/:name', function (req, res) {
  res.render('index', {
    title: `${req.params.name}-dev`
  , main_script: '/js/component-test.js'
  , main_css: '/css/component-test.css'
  })
})

router.get('/mocha/:test', function (req, res) {
  res.render('test', {
    test: req.params.test
  })
})

module.exports = router
