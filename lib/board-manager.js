'use nodent-promise';
'use nodent-es7'
'use strict'

const MongoClient = require('mongodb').MongoClient,
      EventEmitter = require('events').EventEmitter

// TODO: validation
function getMongoUrl(opts) {
  const mongo = opts.mongo
  const auth = (mongo.username && mongo.password)
    ? `${mongo.username}:${mongo.password}@`
    : ''
  const host = `${mongo.host || 'localhost'}:${mongo.port || 27017}`
  return `mongodb://${auth}${host}/${mongo.db}`
}

const NOT_CONNECTED = new Error('DB not connected'),
      BOARD_EXISTS = new Error('A board with the same name already exists')

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
    const count = await this.boards.count({ owner: user, name: board.name })
    if (count > 0) throw BOARD_EXISTS
    board.owner = user
    return this.boards.insert(board)
  }

  list(user) {
    if (!this.ready) throw NOT_CONNECTED
    return this.boards.find({ owner: user }).toArray()
  }

  update(user, info, newBoard) {
    if (!this.ready) throw NOT_CONNECTED
    info.owner = user
    return this.boards.update(info, newBoard)
  }

  remove(user, board) {
    if (!this.ready) throw NOT_CONNECTED
    board.owner = user
    return this.boards.deleteOne(board)
  }

  find(user, board) {
    if (!this.ready) throw NOT_CONNECTED
    board.owner = user
    return this.boards.find(board).toArray()
  }
}
