'use strict'


const UserManager = require('../lib/user-manager'),
      router = require('express').Router(),
      objectId = require('mongodb').ObjectId

const logger = require('../lib/util').logger

let um





// create user
router.post('/', (req, res) => {
  console.log(req.body)
  um.create(req.body).then((result)=>{
  	return res.json({"msg":"create success","result":result.ops})
  }).catch((e)=>{
  	return res.json({"msg":e})
  })

})

//update user
router.put('/:id', (req, res) => {
   try {
        um.update({"_id": new objectId(req.params.id)},req.body)
        .then((result) => {return res.json(result);})
        .catch((e) => {
            return res.status(500).json({
                "msg": e
            })
        })
    } catch (e) {
    	console.log(e+"")
        return res.status(500).json({"msg": e+""})
    }
})




// delete user
router.delete('/:id', (req, res) => {
  try {
        um.list({"_id": new objectId(req.params.id)})
        .then((result) => {return res.json(result);})
        .catch((e) => {
            return res.status(500).json({
                "msg": e
            })
        })
    } catch (e) {
    	console.log(e+"")
        return res.status(500).json({"msg": e+""})
    }
})



// list users
router.get('/', (req, res) => {
  
  um.list()
        .then((result) => {return res.json(result);})
        .catch((e) => {
            return res.status(500).json({
                "msg": e
            })
        })
})


// list users
router.get('/:id', (req, res) => {
    try {
        um.findOne({"_id": new objectId(req.params.id)})
        .then((result) => {return res.json(result);})
        .catch((e) => {
            return res.status(500).json({
                "msg": e
            })
        })
    } catch (e) {
    	console.log(e+"")
        return res.status(500).json({"msg": e+""})
    }
})




module.exports = (opts) => {
  console.log(opts)
  um = um || new UserManager(opts)
  um.connect()

  return router
}
