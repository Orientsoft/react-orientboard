'use nodent-promise';
'use nodent-es7'
'use strict'

var BoardManager = require('../lib/board-manager')
var router = require('express').Router()

var bm

// create board
router.put('/board', async (req, res) => {
  var user = 'test'
  try {
    var result = await bm.create(user, req.body.board)
    return res.json(result.ops[0])
  } catch (e) {
    console.log(e.stack)
    return res.status(500).send(e.toString())
  }
})

// delete board
router.delete('/board', async (req, res) => {
  var user = 'test'
  try {
    var result = await bm.remove(user, req.body.board)
    return res.json(result.result)
  } catch (e) {
    return res.send(e.toString())
  }
})

// update board
router.patch('/board', async (req, res) => {
  var user = 'test'
  try {
    console.log(req.body.query, req.body.boa)
    var result = await bm.update(user, req.body.query, req.body.board)
    return res.json(result.result)
  } catch (e) {
    return res.send(e.toString())
  }
})

// list boards
router.get('/boards', async (req, res) => {
  var user = 'test'
  try {
    var result = await bm.list(user)
    return res.json(result)
  } catch (e) {
    return res.send(e.toString())
  }
})

// find board
router.get('/board', async (req, res) => {
  var user = 'test'
  try {
    var result = await bm.find(user, req.query)
    return res.json(result)
  } catch (e) {
    return res.send(e.toString())
  }
})

module.exports = (opts) => {
  bm = bm || new BoardManager(opts)
  bm.connect()
  return router
}
