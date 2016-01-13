import Reflux from 'reflux'
import _ from 'lodash'

import actions from '../actions/tmp'

import selectStore from '../stores/select'
import BoardManager from '../../lib/client'

let bm = new BoardManager()

let state = {
  boards: []
}

selectStore.listen((newState) => {
  state = _.assign(state, newState)
})

let store = Reflux.createStore({
  listenables: actions
, onSaveBoard: () => {
    let nb = state.app.refs.board.toJson()
    actions.updateBoard({name: nb.name}, nb)
  }
, onCreateBoard: async (board) => {
    try {
      let res = await bm.create(board)
      state.boards.push(res)
      store.trigger(state)
      return actions.createBoard.completed()
    } catch (e) {
      return actions.createBoard.failed(e)
    }
  }
, onCreateBoardFailed: () => {
    console.log('create failed')
  }
, onListBoards: async () => {
    let res = await bm.list()
    state.boards = res
    console.log(res)
    console.log('listing')
    store.trigger(state)
    return actions.listBoards.completed()
  }
, onFindBoard: (board) => {
    return actions.findBoard.completed(_.filter(state.boards, board))
  }
, onRemoveBoard: async (board) => {
    if (!_.filter(state.boards, board))
      return actions.removeBoard.failed('Board not found')
    await bm.remove(board)
    state.boards = state.boards.filter((b) => {
      return b.name === board.name
    })
    store.trigger(state)
  }
, onUpdateBoard: async (query, board) => {
    if (!_.filter(state.boards, board))
      return actions.removeBoard.failed('Board not found')
    await bm.update(query, board)
    state.boards[_.findIndex(state.boards, query)] = board
    store.trigger(state)
    return actions.updateBoard.completed()
  }
})

store.getState = () => {
  return _.clone(state)
}

store.findBoard = (board) => {
  return _.find(state.boards, board)
}

export default store
