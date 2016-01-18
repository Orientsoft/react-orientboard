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
    await bm.create(board.owner, board)
  })

  it('should throw an error if board with the same name exists', async () => {
    var thrown = false
    try {
      await bm.create(board.owner, board)
    }
    catch (e) {
      thrown = true
      expect(e).to.deep.equal(
        new Error('A board with the same name already exists')
      )
    }
    expect(thrown).to.be.true
  })

  it('should find the board created', async () => {
    var res = await bm.find(board.owner, board)
    expect(res).to.have.length(1)
  })

  it('should list the boards belong to user test', async () => {
    var res = await bm.list(board.owner)
    expect(res).to.have.length(1)
  })

  it('should update the board', async () => {
    var newBoard = _.clone(board)
    newBoard.new = 'yes'
    var res = await bm.update(board.owner, board, { $set: newBoard })
    expect(res.result.ok).to.equal(1)
    expect(res.result.nModified).to.equal(1)
    expect(res.result.n).to.equal(1)
    res = await bm.find(board.owner, board)
    expect(res).to.have.length(1)
    expect(res[0].new).to.equal('yes')
  })

  it('should remove the board', async () => {
    var res = await bm.remove(board.owner, board)
    expect(res.result.ok).to.equal(1)
    expect(res.result.n).to.equal(1)
  })
})
