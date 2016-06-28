'use strict'

const express = require('express'),
    router = express.Router(),
    fs = require('fs-extra'),
    path = require('path'),
    crypto = require('crypto'),
    layouts = {}


const UserManager = require('../lib/user-manager')

let um

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


router.use((req, res, next) => {
    const _path = req.path.toLowerCase()

    if (!req.session.user) {
        if ( _path.indexOf('/api/display/') !== -1 || _path.indexOf('/api/v1/') !== -1 || _path.indexOf('/chart/') !== -1)
            return next()

        if (req.path.toLowerCase() !== '/login')
            return res.redirect('/login')
    }
    next()
})

/* GET home page. */
// router.get('/', (req, res) => {
//   //编辑页面都是使用原始的bootstrap
//   req.session.themes='default'
//   res.render('board', {
//     title: 'board demo',
//     main_script: '/js/main.js',
//     main_css: '/css/main.css',
//   })
// })


/* GET home page. */
router.get('/board', (req, res) => {
    // 编辑页面都是使用原始的bootstrap
    req.session.themes = 'default'
    res.render('board', {
        title: 'Board WorkSpace',
        main_script: '/js/main.js',
        main_css: '/css/main.css'
    })
})


/* User  home page. */
router.get('/', (req, res) => {
    // 编辑页面都是使用原始的bootstrap
    req.session.themes = 'default'
    res.render('home', { user: req.session.user })
})

router.get('/home', (req, res) => {
   // 编辑页面都是使用原始的bootstrap
    req.session.themes = 'default'
    res.render('home', { user: req.session.user })
})

/* User login home page. */
router.get('/login', (req, res) => {
  // 编辑页面都是使用原始的bootstrap
    req.session.themes = 'default'
    res.render('login')
})


/* User login home page. */
router.post('/login', (req, res) => {
  // 编辑页面都是使用原始的bootstrap
    req.session.themes = 'default'
    req.session.user = { id: 'test' }

    if (!req.body.userAccount || !req.body.userAccount)
        res.rediect('/home')
    else {
        const sha1 = crypto.createHash('sha1')
        sha1.update(req.body.userPassword)

        const user = { email: req.body.userAccount,
                       password: sha1.digest('hex') }
        console.log(user)
        um.findOne(user)
            .then((result) => {
                if (result) {
                    req.session.user = result
                    res.redirect('/home')
                } else
                      return res.json({ msg: '登录信息错误!' })
            })
            .catch((e) => {
                return res.status(500).json({
                    msg: e
                })
            })
    }
})


/* User login home page. */
router.get('/logout', (req, res) => {
  // 编辑页面都是使用原始的bootstrap
    req.session.user = null
    res.redirect('/login')
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
        main_css: '/css/component-test.css'
    })
})

router.get('/mocha/:test', (req, res) => {
    res.render('test', { test: req.params.test })
})

module.exports = (opts) => {
    um = um || new UserManager(opts)
    um.connect()

    return router
}
