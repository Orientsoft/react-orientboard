var express = require('express')
var router = express.Router()

/* GET users listing. */
router.post('/board', function(req, res, next) {
  var board = req.body
  console.log(board)
  res.send('good')
})

module.exports = router
