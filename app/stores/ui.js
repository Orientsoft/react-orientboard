import Reflux from 'reflux'
import _ from 'lodash'

import uiActions from '../actions/ui'

let state = {
  showBlockConfig: false
, showBoardConfig: false
}

let store = Reflux.createStore({
  listenables: uiActions
, onOpenConfig() {
    if (state.box) {
      state.box.openConfig()
    }
  }
, onOpenBlockConfig() {
    state.showBlockConfig = true
    store.trigger(state)
  }
, onCloseBlockConfig() {
    state.showBlockConfig = false
    store.trigger(state)
  }
, onSetBlockConfig(config) {
    // state.block.setConfig(config)
    state.blockConfig = config
    store.trigger({
      blockConfig: config
    })
  }
})

store.getState = () => {
  return _.clone(state)
}

export default store
