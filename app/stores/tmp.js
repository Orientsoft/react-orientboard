import Reflux from 'reflux'
import _ from 'lodash'

import actions from '../actions/tmp'

import selectStore from '../store/select'

let state = {

}

selectStore.listen((newState) => {
  state = _.assign(state, newState)
})


function ensureComponentInfo(info) {
  const defaults = {
    x: 0
  , y: 0
  , rotate: 0
  , h: 100
  , w: 100
  , data: {}
  }

  _.map(defaults, (value, key) => {
    info[key] = info[key] || value
  })

  return info
}

let store = Reflux.createStore({
  listenables: actions
, onSaveBoard: () => {
    
  }
})

store.getState = () => {
  return _.clone(state)
}

store.findBoard = (board) => {
  return _.find(state.boards, board)
}

export default store
