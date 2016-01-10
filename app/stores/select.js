import Reflux from 'reflux'
import _ from 'lodash'

import actions from '../actions/select'

let state = {
  box: null
, block: null
}

let store = Reflux.createStore({
  listenables: actions
, onSetActiveBlock: (block) => {
    if (state.block === block) return null
    state.block = block
    store.trigger(state)
  }
, onSetActiveBox: (box) => {
    if (state.box === box) return null
    if (state.box)
      state.box.deactivate()
    state.box = box
    box.activate()
    store.trigger(state)
  }
})

store.getState = () => {
  return _.clone(state)
}

export default store
