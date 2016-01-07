import BoardManager from '../lib/client'
import {expect} from 'chai'
import _ from 'lodash'

var bm
  , board = {
    name: 'test' + Date.now()
  , owner: 'test'
  }

describe('BoardManager REST api Client', () => {
  it('should create a new client', () => {
    bm = new BoardManager()
    console.log(bm)
  })

  it('should create a new board', async () => {
    var res = await bm.create(board)
    expect(res).to.have.property('_id')
    console.log(res)
  })

  it('should get an error if board with the same name exists', async () => {
    var thrown = false
    try {
      var res = await bm.create(board)
    } catch (e) {
      thrown = true
      expect(e).to.exists
    }
    expect(thrown).to.be.true
  })

  it('should list boards', async () => {
    var res = bm.list()
    console.log(res)
  })

  it('should find the board', async () => {
    var res = bm.find(board)
    console.log(res)
  })

  it('should update the board', async () => {
    var nb = _.clone(board)
    nb.change = 1
    var res = bm.update(board, nb)
    console.log(res)
  })

  it('should remove the board', async () => {
    var res = bm.remove(board)
    console.log(res)
  })

})
