import { expect } from 'chai'
import _ from 'lodash'
import boardActions from '../app/actions/board'
import boardStore from '../app/stores/board'

var bm
  , board = {
    name: 'test' + Date.now()
    , owner: 'test'
  }

boardStore.listen((state) => {
  console.log('update', state)
})

describe('BoardManager REST api Client', () => {
  it('should create a new board', async () => {
    await boardActions.createBoard(board)
  })

  it('should list boards', async () => {
    await boardActions.listBoards()
    console.log(boardStore.getState())
  })

  it('should get an error if board with the same name exists', async () => {
    boardActions.createBoard(board)
  })

  it('should find the board', () => {
    var res = boardStore.findBoard(board)
    console.log('found', res)
  })

  it('should update the board', async () => {
    var nb = _.clone(board)
    nb.change = 1
    var res = await boardActions.updateBoard.triggerAsync(board, nb)
    var f = boardStore.findBoard(board)
  })

  it('should remove the board', async () => {

  })

})
