import Reflux from 'reflux'
import _ from 'lodash'

import actions from '../actions/board'

import selectActions from '../actions/select'
import selectStore from '../stores/select'
import BoardManager from '../../lib/client'

import { swapElements } from '../lib/util'

const bm = new BoardManager()
let state = {
  boards: [],
}

selectStore.listen((newState) => {
  state = _.assign(state, newState)
})

const store = Reflux.createStore({
  listenables: actions,
  onSaveBoard: () => {
    const nb = state.app.refs.board.toJson()
    actions.updateBoard({ name: nb.name }, nb)
  },
  onCreateBoard: async (board) => {
    try {
      const res = await bm.create(board)
      state.boards.push(res)
      store.trigger(state)
      return actions.createBoard.completed(board)
    } catch (e) {
      return actions.createBoard.failed(e)
    }
  },
  onCreateBoardFailed: () => {
    console.log('create failed')
  },
  onCreateBoardCompleted: (board) => {
    selectActions.setActiveBoard(board)
  },
  onListBoards: async () => {
    const res = await bm.list()
    state.boards = res
    store.trigger(state)
    return actions.listBoards.completed()
  },
  onFindBoard: (board) => {
    return actions.findBoard.completed(_.filter(state.boards, board))
  },
  onRemoveBoard: async (board) => {
    if (!_.filter(state.boards, board))
      return actions.removeBoard.failed('Board not found')
    await bm.remove(board)
    state.boards = state.boards.filter((b) => {
      return b.name !== board.name
    })
    selectActions.setActiveBoard(state.boards[0])
    store.trigger(state)
  },
  onUpdateBoard: async (query, board) => {
    if (!_.filter(state.boards, board))
      return actions.removeBoard.failed('Board not found')
    await bm.update(query, board)
    state.boards[_.findIndex(state.boards, query)] = board
    store.trigger(state)
    return actions.updateBoard.completed()
  },
  onAddBlock: () => {
    state.board.blocks.push({
      boxes: [],
      // use timestamp as id to distinguish blocks in the same board
      id: Date.now().toString(),
      w: _.get(state, 'board.blocks[0].w') || 800,
      h: _.get(state, 'board.blocks[0].h') || 600,
      img: null,
    })
    store.trigger(state)
  },
  onRemoveBlock: () => {
    state.board.blocks.splice(
      _.findIndex(state.board.blocks, { id: state.block.id }), 1
    )
    store.trigger(state)
  },
  onMoveBlock: (step) => {
    const idx = _.findIndex(state.board.blocks, { id: state.block.id })
    if (state.board.blocks[idx + step]) {
      swapElements(state.board.blocks, idx, idx + step)
      store.trigger(state)
    }
  },
})

store.getState = () => {
  return _.clone(state)
}

store.findBoard = (board) => {
  return _.find(state.boards, board)
}

export default store
