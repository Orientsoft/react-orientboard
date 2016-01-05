var BoardManager = require('../lib/board-manager')
var router = require('express').Router()

var bm

router.post('/board', (req, res, next) => {
  var board = req.body
  console.log(board)
  res.send('good')
})

// create board
router.put('/board', (req, res) => {

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
  bm = new BoardManager(opts)
  return router
}
