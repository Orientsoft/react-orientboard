import Reflux from 'reflux'
import _ from 'lodash'

import actions from '../actions/select'

import uiStore from './ui'

const state = {
  box: null,
  block: null,
  board: null,
}

uiStore.listen((newState) => {
  _.assign(state, newState)
})

const store = Reflux.createStore({
  listenables: actions,
  onSetActiveBlock: (block) => {
    if (state.mode === 'publish') return null
    if (state.block === block) return null
    actions.setActiveBox(null)
    if (state.block) state.block.deactivate()
    state.block = block
    if (block) block.activate()
    store.trigger(state)
  },
  onSetActiveBox: (box) => {
    if (state.mode === 'publish') return null
    if (state.box === box) return null
    if (state.box)
      state.box.deactivate()
    state.box = box
    if (box) box.activate()
    store.trigger(state)
  },
  onSetActiveBoard: (board) => {
    if (state.mode === 'publish') return null
    if (_.get(state, 'board.name') === board.name) return null
    if (state.box) state.box.deactivate()
    state.box = null
    state.block = null
    state.board = board
    store.trigger(state)
  },
  onSetApp: (app) => {
    console.log('set app', app)
    state.app = app
    store.trigger(state)
  },
})

store.getState = () => {
  return _.clone(state)
}

export default store
