'use nodent-promise';
'use nodent-es7'
'use strict'

var MongoClient = require('mongodb').MongoClient
  , EventEmitter = require('events').EventEmitter

// TODO: validation
function getMongoUrl(opts) {
  var mongo = opts.mongo
  var auth = (mongo.username && mongo.password)
           ? `${mongo.username}:${mongo.password}@`
           : ''
  var host = `${mongo.host||'localhost'}:${mongo.port||27017}`
  return `mongodb://${auth}${host}/${mongo.db}`
}

const NOT_CONNECTED = new Error('DB not connected')
    , BOARD_EXISTS = new Error('A board with the same name already exists')

module.exports = class BoardManager extends EventEmitter {
  constructor(opts) {
    super()
    this.ready = false
    this.mongoUrl = getMongoUrl(opts)
  }

  async connect() {
    this.db = await MongoClient.connect(this.mongoUrl)
    this.boards = this.db.collection('boards')
    this.ready = true
    return null
  }

  async create(user, board) {
    if (!this.ready) throw NOT_CONNECTED
    var count = await this.boards.count({owner: user, name: board.name})
    if (count > 0) throw BOARD_EXISTS
    board.owner = user
    return this.boards.insert(board)
  }

  async list(user) {
    if (!this.ready) throw NOT_CONNECTED
    return await this.boards.find({owner: user}).toArray()
  }

  async update(user, info, newBoard) {
    if (!this.ready) throw NOT_CONNECTED
    var res = await this.boards.update(info, newBoard)
    console.log(res)
    return res
  }

  remove(user, board) {
    if (!this.ready) throw NOT_CONNECTED
    board.owner = user
    console.log(board)
    return this.boards.deleteOne(board)
  }

  find(user, board) {
    if (!this.ready) throw NOT_CONNECTED
    board.owner = user
    return this.boards.find(board).toArray()
  }
}
