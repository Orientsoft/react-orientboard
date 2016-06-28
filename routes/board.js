'use strict'


const fs = require('fs'),
    swig = require('swig'),
    BoardManager = require('../lib/board-manager'),
    router = require('express').Router(),
    objectId = require('mongodb').ObjectId

const logger = require('../lib/util').logger


let bm

// create board
router.post('/board/publish/:id', (req, res) => {
    let boardId

    try {
        boardId = objectId(req.params.id)
    } catch (e) {
        return res.status(500).json({ msg: 'Wrong Parameter' })
    }

    console.log(boardId)
    bm.findOne(null, { _id: boardId }).then((result) => {
        console.log(req.params.id, result)
        const tpl = swig.compileFile('views/display.html')
        const context = tpl({ title: result.name || 'Not Found',
                        main_script: '/js/display.js',
                        main_css: '/css/main.css',
                        // HACK: add board json to html
                        board: escape(JSON.stringify(result))
                      })

        fs.writeFile('public/publish/' + boardId + '.html', context, (err) => {
            if (err)
                return res.status(500).send({ status: err })
            return res.status(200).send({ status: 'ok' })
        })
    })
})


// create board
router.put('/board', (req, res) => {
    const user = req.session.user.email

    bm.create(user, req.body.board).then((result) => {
        return res.json(result.ops[0])
    }).catch((e) => {
        logger.error(e)
        return res.status(500).send(e.toString())
    })
})

// delete board
router.delete('/board', (req, res) => {
    const user = req.session.user.email

    bm.remove(user, req.body.board).then((result) => {
        return res.json(result.result)
    }).catch((e) => {
        return res.send(e.toString())
    })
})

// update board
router.patch('/board', (req, res) => {
    const user = req.session.user.email

    console.log(req.body.query, req.body.board)
    req.body.board.owner = user

    bm.update(user, req.body.query, req.body.board).then((result) => {
        return res.json(result.result)
    }).catch((e) => {
        return res.send(e.toString())
    })
})

// list boards
router.get('/boards', (req, res) => {
    console.log(req.session.user.email)

    const user = req.session.user.email


    bm.list(user).then((result) => {
        return res.json(result)
    }).catch((e) => {
        return res.send(e.toString())
    })
})

// find board
router.get('/board', (req, res) => {
    const user = 'test'

    bm.find(user, req.query).then((result) => {
        return res.json(result)
    }).catch((e) => {
        return res.send(e.toString())
    })
})

router.get('/display/:id', (req, res) => {
     // 样式定义
    if (req.query['themes']) {
        console.log(req.query['themes'])
        req.session.themes = req.query['themes']
    } else
        req.session.themes = 'cerulean'


    let boardId

    try {
        boardId = objectId(req.params.id)
    } catch (e) {
        return res.status(500).json({ msg: 'Wrong Parameter' })
    }

    bm.findOne(null, { _id: boardId }).then((result) => {
        console.log(req.params.id, result)

        if (!result)
            return res.status(401).json({ msg: 'Board Access URL Wrong' })

        if (result.blocks[0].pubType !== 'public') {
            const password = result.blocks[0].password || 'welcome1'
            // change this

            const b64auth = (req.headers.authorization || '').split(' ')[1] || ''
            const auth = new Buffer(b64auth, 'base64').toString().split(':')

            if (auth[1] !== password) {
                res.set('WWW-Authenticate', 'Basic realm="OrientBoard Access Control"')
                // change this
                return res.status(401).json({
                    msg: 'No Right Access'
                }) // custom message
            } else
                res.render('display', {
                    title: result.name || 'Not Found',
                    main_script: '/js/display.js',
                    main_css: '/css/main.css',
                    // HACK: add board json to html
                    board: escape(JSON.stringify(result))
                })
        } else

        return res.render('display', {
            title: result.name || 'Not Found',
            main_script: '/js/display.js',
            main_css: '/css/main.css',
            // HACK: add board json to html
            board: escape(JSON.stringify(result))
        })
    }).catch((e) => {
        res.status(404)
        console.log('error' + e)
    })
})

module.exports = (opts) => {
    bm = bm || new BoardManager(opts)
    bm.connect()

    return router
}
