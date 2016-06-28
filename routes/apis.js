'use strict'


const router = require('express').Router(),
    users = require('./users'),
    _ = require('lodash')


const logger = require('../lib/util').logger

const version = 'v1'

const servers = ['mqtt://127.0.0.1:3883',
    'ws://127.0.0.1:8080',
    'socketio://127.0.0.1:10000'
]


let _opts


// API Description
router.get('/', (req, res) => {
    return res.json({ version: version,
                      Description: 'OrientBoard API' })
})

/* pull server api , 暂时还没有使用到数据库 */
router.get('/servers', (req, res) => {
    return res.json(servers)
})

router.post('/servers', (req, res) => {
    if (req.body.servers) {
        const _servers = req.body.servers
        _.forEach(_servers, (item) => {
            if (servers.indexOf(item) === -1)
                servers.push(item)
        })
    }

    return res.json({
        status: 'ok'
    })
})

router.delete('/servers', (req, res) => {
    if (req.body.servers) {
        const _servers = req.body.servers
        _.forEach(_servers, (item) => {
            if (servers.indexOf(item) > -1)
                servers.splice(servers.indexOf(item), 1)
        })
    }
    return res.json({
        status: 'ok'
    })
})


function init() {
    router.use('/user', users({
        mongo: _opts.mongo
    }))
}


module.exports = (opts) => {
    _opts = opts
    init()
    return router
}
