import Reflux from 'reflux'
import restActions from '../actions/rest'
import BoardManager from '../../lib/client'

var bm = new BoardManager()

var state = {

}

var store = Reflux.createStore({
  listenables: restActions
, onCreateBoard: async (board) => {
    var res = await bm.create(board)
    state.boards.push(res)
  }
, onListBoards: async () => {
    var res = await bm.list()
    state.boards = res
    console.log(state.boards)
  }
, onFindBoard: () => {

  }
, onRemoveBoard: () => {

  }
, onUpdateBoard: () => {

  }
})

store.getState = () => {
  return state
}

export default store
