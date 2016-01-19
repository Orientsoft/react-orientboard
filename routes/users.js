const express = require('express'),
      router = express.Router()

/* GET users listing. */
router.all('*', (req, res, next) => {
  next()
})

module.exports = router
