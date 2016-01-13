import Reflux from 'reflux'
import _ from 'lodash'

import uiActions from '../actions/ui'

let state = {
  showBlockConfig: false
, showBoardConfig: false
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
})

store.getState = () => {
  return _.clone(state)
}

export default store
