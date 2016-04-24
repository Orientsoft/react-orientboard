'use strict'


const express = require('express'),
      router = express.Router(),
      fs = require('fs-extra'),
      path = require('path'),
      crypto =require('crypto'),
      layouts = {}


const UserManager = require('../lib/user-manager')

let um







// create user
router.get('/', (req, res) => {
  console.log(req.body)
 return res.render("cloud")

})



module.exports = (opts) => {
  console.log(opts)
  um = um || new UserManager(opts)
  um.connect()

  return router
}
