import Reflux from 'reflux'
import _ from 'lodash'

import uiActions from '../actions/ui'
import selectActions from '../actions/select'

const state = {
  showBlockConfig: false,
  showBoardConfig: false,
  mode: 'edit',
  theme: 'default',
}

const store = Reflux.createStore({
  listenables: uiActions,
  onOpenBlockConfig() {
    state.showBlockConfig = true
    store.trigger(state)
  },
  onCloseBlockConfig() {
    state.showBlockConfig = false
    store.trigger(state)
  },
  onOpenBoardConfig: (name,action) => {
    state.showBoardConfig = true
    if(name){
      state.boardName=name
    }
    
    state.boardAction=action
    store.trigger(state)
  },
  onCloseBoardConfig: () => {
    state.showBoardConfig = false
    store.trigger(state)
  },
  onSetMode: (mode) => {
    if (state.mode === mode) return null
    state.mode = mode
    selectActions.setActiveBox(null)
    selectActions.setActiveBlock(null)
    store.trigger(state)
     console.log("-------1xxxx",state);
  },
  onSetTheme: (theme) => {
    if (state.theme === theme) return null
    state.theme = theme
    store.trigger(state)
  },
})

store.getState = () => {
  return _.clone(state)
}

export default store
