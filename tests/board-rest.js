'use nodent-promise';
'use nodent-es7'
'use strict'
var expect = require('chai').expect
  , _ = require('lodash')
  , request = require('request')

// var BoardManager = require('../libboard-manager')

var bm
  , board = {
    name: 'test' + Date.now()
    , owner: 'test'
  }

function url(endpoint) {
  return `http://localhost:3000/api/${endpoint}`
}

describe('Board Manager', () => {
  it('should create a new board', async (cb) => {
    request.put(url('board'), {
      body: {
        board: board
      }
    , json: true
    }, (e, r, b) => {
      expect(e).to.not.exists
      expect(b).to.have.property('_id')
      cb(e)
    })
  })

  it('should get an error if board with the same name exists', async (cb) => {
    request.put(url('board'), {
      body: {
        board: board
      }
    , json: true
    }, (e, r, b) => {
      console.log(e, b)
      expect(e).to.not.exists
      expect(b).to.equal('Error: A board with the same name already exists')
      cb(e)
    })
  })

  it('should list boards', async (cb) => {
    request.get(url('boards'), { json: true }, (e, r, b) => {
      expect(e).to.not.exists
      expect(b).to.be.an(Array)
      console.log(_.pluck(b, '_id'))
      cb(e)
    })
  })

  it('should find the board', async (cb) => {
    request.get(url('board'), {
      qs: board
    , json: true
    }, (e, r, b) => {
      expect(e).to.not.exists
      expect(b).to.have.length(1)
      cb(e)
    })
  })

  it('should update the board', async (cb) => {
    var nb = _.clone(board)
    nb.change = 1
    request.patch(url('board'), {
      body: {
        query: board
      , board: nb
      }
    , json: true
    }, (e, r, b) => {
      expect(b.ok).to.equal(1)
      expect(b.nModified).to.equal(1)
      expect(b.n).to.equal(1)
      expect(e).to.not.exists
      cb(e)
    })
  })

  it('should remove the board', async (cb) => {
    request.del(url('board'), {
      body: {
        board: board
      }
    , json: true
    }, (e, r, b) => {
      console.log(e, b)
      cb(e)
    })
  })
})
