import Reflux from 'reflux'
import _ from 'lodash'

import actions from '../actions/block'

import selectStore from '../stores/select'

let state = {

}

selectStore.listen((newState) => {
  state = _.assign(state, newState)
})

function ensureComponentInfo(info) {
  const defaults = {
    x: 0,
    y: 0,
    rotate: 0,
    h: 100,
    w: 100,
    data: {},
  }

  // let valid = _.clone(info)
  //
  // _.map(defaults, (value, key) => {
  //   valid[key] = valid[key] || value
  // })

  return _.assign(defaults, info)
}

const store = Reflux.createStore({
  listenables: actions,
  onRemoveBox: () => {
    state.block.removeBox(state.box)
  },
  onNewComponent: (box) => {
    console.log(state.block.createBox)
    box = ensureComponentInfo(box)
    state.block.createBox(box)
  },
  onSetBlockConfig: (config) => {
    state.block.setConfig(config)
  },

})

store.getState = () => {
  return _.clone(state)
}

store.findBoard = (board) => {
  return _.find(state.boards, board)
}

export default store
