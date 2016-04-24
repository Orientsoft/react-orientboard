'use strict'

var Promise = require('bluebird'),
    mongodb = require('mongodb');
Promise.promisifyAll(mongodb);


const MAX = 100

// TODO: l3 validation
function getMongoUrl(opts) {
    const mongo = opts.mongo
    const auth = (mongo.username && mongo.password) ? `${mongo.username}:${mongo.password}@` : ''
    const host = `${mongo.host || 'localhost'}:${mongo.port || 27017}`
    return `mongodb://${auth}${host}/${mongo.db}`

}


function getConnectionAsync(url) {
    // process.env.MongoDbUrl stored in my .env file using the require above
    console.log("init")
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
                this.users = db.collection('users')
                this.ready = true
            }).catch(
            (e) => {
                throw e
            }
        )
        return null
    }

    create(user) {
        if (!this.ready) throw NOT_CONNECTED
        return this.users.insertAsync(user)
    }

    list(user) {
        if (!this.ready) throw NOT_CONNECTED
        var query ={}
        if(user)query=user
        return this.users.findAsync(query)
        .then(function(items) {
        return items.limit(MAX).toArray();
      })

    }

    update(user,newUser) {
        if (!this.ready) throw NOT_CONNECTED
        return this.users.updateAsync(user, newUser)
    }

    remove(user) {
        return this.users.deleteOneAsync(user)
    }

    findOne(user) {
        if (!this.ready) throw NOT_CONNECTED
            // HACK: bypass user validation 
        return this.users.findOneAsync(user)
    }
}