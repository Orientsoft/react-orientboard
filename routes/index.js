'use strict'

const express = require('express'),
      router = express.Router(),
      fs = require('fs-extra'),
      path = require('path'),
      layouts = {}

const COMPONENTS_CONFIG = path.join(__dirname, '../config/components.json')

function loadLayout(component) {
  const layoutPath = require.resolve(path.join(component, 'test-layout.js'))
  fs.watch(layoutPath, () => {
    console.log('layout change', component)
    delete require.cache[layoutPath]
    layouts[component] = require(layoutPath)
  })
  return require(layoutPath)
}

for (const component of fs.readJsonSync(COMPONENTS_CONFIG).components)
  layouts[component] = loadLayout(component)

fs.watch(COMPONENTS_CONFIG, () => {
  try {
    const cc = fs.readJsonSync(COMPONENTS_CONFIG)
    for (const component of cc.components)
      if (!layouts[component])
        layouts[component] = loadLayout(component)
  } catch (e) {
    console.log(e.stack)
  }
})

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', {
    title: 'board demo',
    main_script: '/js/main.js',
    main_css: '/css/main.css',
  })
})

router.get('/get-test-layout/:name', (req, res) => {
  console.log(
    'sending layout',
    layouts[`orientboard-component-${req.params.name}`]
  )
  res.json(layouts[`orientboard-component-${req.params.name}`])
})

router.get('/dev/:name', (req, res) => {
  res.render('index', {
    title: `${req.params.name}-dev`,
    main_script: '/js/component-test.js',
    main_css: '/css/component-test.css',
  })
})

router.get('/mocha/:test', (req, res) => {
  res.render('test', { test: req.params.test })
})

module.exports = router
