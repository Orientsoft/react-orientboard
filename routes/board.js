'use nodent-promise';
'use nodent-es7'
'use strict'

const BoardManager = require('../lib/board-manager'),
      router = require('express').Router(),
      objectId = require('mongodb').ObjectId

const logger = require('tracer').colorConsole({
  format: '{{timestamp}} [{{title}}] {{message}} (in {{file}}:{{line}})',
  dateformat: 'yyyy-mm-dd HH:MM:ss',
})

let bm

// create board
router.put('/board', async (req, res) => {
  const user = 'test'
  try {
    const result = await bm.create(user, req.body.board)
    return res.json(result.ops[0])
  } catch (e) {
    logger.error(e)
    return res.status(500).send(e.toString())
  }
})

// delete board
router.delete('/board', async (req, res) => {
  const user = 'test'
  try {
    const result = await bm.remove(user, req.body.board)
    return res.json(result.result)
  } catch (e) {
    return res.send(e.toString())
  }
})

// update board
router.patch('/board', async (req, res) => {
  const user = 'test'
  try {
    console.log(req.body.query, req.body.board)
    req.body.board.owner = user
    const result = await bm.update(user, req.body.query, req.body.board)
    return res.json(result.result)
  } catch (e) {
    return res.send(e.toString())
  }
})

// list boards
router.get('/boards', async (req, res) => {
  const user = 'test'
  try {
    const result = await bm.list(user)
    return res.json(result)
  } catch (e) {
    return res.send(e.toString())
  }
})

// find board
router.get('/board', async (req, res) => {
  const user = 'test'
  try {
    const result = await bm.find(user, req.query)
    return res.json(result)
  } catch (e) {
    return res.send(e.toString())
  }
})

router.get('/display/:id', async (req, res) => {
  try {
    const result = await bm.find(null, { _id: objectId(req.params.id) })
    // res.json(result)
    console.log(result[0])
    res.render('display', {
      title: result[0].name || 'Not Found',
      main_script: '/js/display.js',
      main_css: '/css/main.css',
      // HACK: add board json to html
      board: escape(JSON.stringify(result[0])),
    })
  } catch (e) {
    res.status(404)
  }
})

module.exports = (opts) => {
  bm = bm || new BoardManager(opts)
  bm.connect().catch((err) => {
    logger.error(err.toString())
  })

  return router
}
