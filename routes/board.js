'use nodent-promise';
'use nodent-es7'
'use strict'

const BoardManager = require('../lib/board-manager'),
      router = require('express').Router()

let bm

// create board
router.put('/board', async (req, res) => {
  const user = 'test'
  try {
    const result = await bm.create(user, req.body.board)
    return res.json(result.ops[0])
  } catch (e) {
    console.log(e.stack)
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

module.exports = (opts) => {
  bm = bm || new BoardManager(opts)
  bm.connect()
  return router
}
