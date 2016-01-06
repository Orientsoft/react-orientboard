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
    var res = await bm.create('test', req.body.board)
    return req.json(res.ops[0])
  } catch (e) {
    return req.status(403).send(e.toString())
  }
})

// delete board
router.del('/board', (req, res) => {

})

// update board
router.patch('/board', (req, res) => {

})

// list boards
router.get('/boards', (req, res) => {

})

// find board
router.get('/board', (req, res) => {

})

module.exports = (otps) => {
  bm = bm || new BoardManager(opts)
  return router
}
