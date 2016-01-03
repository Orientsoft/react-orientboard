'use nodent-promise';
'use nodent-es7'
'use strict'
var expect = require('chai').expect
  , _ = require('lodash')

var BoardManager = require('../lib/board-manager')

var bm
  , board = {
      name: 'test'
    , owner: 'test'
    }

describe('Board Manager', () => {
  it('should create a board manager instance', () => {
    bm = new BoardManager({
      mongo: {
        host: 'localhost'
      , port: 27017
      , db: 'orientboard'
      }
    })
  })

  it('should connect to mongodb', async () => {
    await bm.connect()
    expect(bm.ready).to.be.true
  })

  it('should create a new board', async () => {
    try {
      await bm.create(board.owner, board)
    }
    catch (e) {
      expect(e).to.deep.equal(
        new Error('A board with the same name already exists')
      )
    }
  })

  it('should remove the board', async () => {
    var found = await bm.find(board.owner, board)
    console.log(found)
    var res = await bm.remove(board.owner, board)
    console.log(res.result)
  })
})
