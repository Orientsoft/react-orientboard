'use strict'

var Promise = require('bluebird'),
    mongodb = require('mongodb');
Promise.promisifyAll(mongodb);


// TODO: l3 validation
function getMongoUrl(opts) {
    const mongo = opts.mongo
    const auth = (mongo.username && mongo.password) ? `${mongo.username}:${mongo.password}@` : ''
    const host = `${mongo.host || 'localhost'}:${mongo.port || 27017}`
    return `mongodb://${auth}${host}/${mongo.db}`

}


function getConnectionAsync(url) {
    // process.env.MongoDbUrl stored in my .env file using the require above
    return mongodb.MongoClient.connectAsync(url)
        // .disposer is what handles cleaning up the connection
}


const NOT_CONNECTED = new Error('DB not connected'),
    BOARD_EXISTS = new Error('A board with the same name already exists')

module.exports = class BoardManager {
    constructor(opts) {
        this.ready = false
        this.mongoUrl = getMongoUrl(opts)
    }

    connect() {
        var that = this;
        getConnectionAsync(this.mongoUrl).then(
            (db) => {
                this.db = db;
                this.boards = db.collection('boards')
                this.ready = true
            }).catch(
            (e) => {
                throw e
            }
        )
        return null
    }

    create(user, board) {
        if (!this.ready) throw NOT_CONNECTED
        const count = this.boards.count({
            owner: user,
            name: board.name
        })
        if (count > 0) throw BOARD_EXISTS
        board.owner = user
        return this.boards.insertAsync(board)
    }

    list(user) {
        if (!this.ready) throw NOT_CONNECTED
        var query ={}
        if(user)query.owner=user
        return this.boards.findAsync(query).then((items)=>{return items.toArray()})
    }

    update(user, info, newBoard) {
        if (!this.ready) throw NOT_CONNECTED
        info.owner = user
        return this.boards.updateAsync(info, newBoard)
    }

    remove(user, board) {
        if (!this.ready) throw NOT_CONNECTED
        board.owner = user
        return this.boards.deleteOneAsync(board)
    }

    findOne(user, board) {
        if (!this.ready) throw NOT_CONNECTED
            // HACK: bypass user validation
        if (user) board.owner = user
        
        return this.boards.findOneAsync(board)
    }
}