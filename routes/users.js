'use strict'


const UserManager = require('../lib/user-manager'),
      router = require('express').Router(),
      objectId = require('mongodb').ObjectId,
      crypto = require('crypto'),
      uuid = require('node-uuid')


const logger = require('../lib/util').logger


let um


// create user
router.post('/', (req, res) => {
  console.log(req.body)
  let user = req.body

  user.uid = uuid.v1()
  user.status = 'ok'
  user.org = 'orientsoft'

  let sha1 = crypto.createHash('sha1')

  sha1.update(req.body.password)
  user.password = sha1.digest('hex')


  um.findOne({ 'email': user.email }).then((item) => {
    if (item) {
      return res.json({ status: 'error', 'msg': 'user already exit' })
    } else {
      um.create(user).then((result) => {
        return res.json({ status: 'ok', 'msg': 'create success', 'result': result.ops })
      }).catch((e) => {
        return res.json({ status: 'error', 'msg': e })
      })
    }
  })
})

// update user
router.put('/:uid', (req, res) => {
  try {
    let user = req.body
    if (user.password) {
      let sha1 = crypto.createHash('sha1')
      sha1.update(req.body.password)
      user.password = sha1.digest('hex')
    }

    um.update({ 'uid': req.params.uid }, { '$set': user })
        .then((result) => { return res.json(result) })
        .catch((e) => {
          return res.status(500).json({
            'msg': e,
          })
        })
  } catch (e) { console.log(e + '')
    return res.status(500).json({ 'msg': e + '' })
  }
})


// delete user
router.delete('/:uid', (req, res) => {
  try {
    um.remove({ 'uid': req.params.uid })
        .then((result) => { return res.json(result) })
        .catch((e) => {
          return res.status(500).json({
            'msg': e,
          })
        })
  } catch (e) { console.log(e + '')
    return res.status(500).json({ 'msg': e + '' })
  }
})


// list users
router.get('/', (req, res) => {
  um.list()
        .then((result) => { return res.json(result) })
        .catch((e) => {
          return res.status(500).json({
            'msg': e,
          })
        })
})


// list users
router.get('/:id', (req, res) => {
  try {
    um.findOne({ '_id': new objectId(req.params.id) })
        .then((result) => { return res.json(result) })
        .catch((e) => {
          return res.status(500).json({
            'msg': e,
          })
        })
  } catch (e) { console.log(e + '')
    return res.status(500).json({ 'msg': e + '' })
  }
})


module.exports = (opts) => {
  um = um || new UserManager(opts)
  um.connect()

  return router
}
