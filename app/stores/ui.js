import Reflux from 'reflux'
import _ from 'lodash'

import uiActions from '../actions/ui'
import selectActions from '../actions/select'

let state = {
  showBlockConfig: false
, showBoardConfig: false
, mode: 'edit'
}

let store = Reflux.createStore({
  listenables: uiActions
, onOpenBlockConfig() {
    state.showBlockConfig = true
    store.trigger(state)
  }
, onCloseBlockConfig() {
    state.showBlockConfig = false
    store.trigger(state)
  }
, onOpenBoardConfig: () => {
    state.showBoardConfig = true
    store.trigger(state)
  }
, onCloseBoardConfig: () => {
    state.showBoardConfig = false
    store.trigger(state)
  }
, onSetMode: (mode) => {
    if (state.mode === mode) return null
    state.mode = mode
    selectActions.setActiveBox(null)
    selectActions.setActiveBlock(null)
    store.trigger(state)
  }
})

store.getState = () => {
  return _.clone(state)
}

export default store
