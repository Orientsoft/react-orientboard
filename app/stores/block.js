import Reflux from 'reflux'
import _ from 'lodash'

import actions from '../actions/block'

import selectStore from '../stores/select'
import selectActions from '../actions/select'

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
, onRemoveBox: () => {
    // var boxId = box.id || state.box.id
    // selectActions.setActiveBox(null)
    state.block.removeBox(state.box)

  }
, onNewComponent: (box) => {
    box = ensureComponentInfo(box)
    state.block.createBox(box)
  }
, onSetBlockConfig: (config) => {
    state.block.setConfig(config)
  }

})

store.getState = () => {
  return _.clone(state)
}

store.findBoard = (board) => {
  return _.find(state.boards, board)
}

export default store
