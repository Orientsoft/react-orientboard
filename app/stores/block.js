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
, onSetActiveBlock: (block) => {
    if (state.block === block) return null
    state.block = block
    console.log('active block', block)
    store.trigger(state)
  }
, onRemoveBox: (box) => {
    // console.log(state.box.id, box)
    // var boxId = box instanceof Box ? box.id : state.box.id
    // if (state.box === box) {
    //   state.box.deactivate()
    //   state.box = null
    // }
    // var layout = state.app.getLayout()
    // var newLayout = layout.filter((info) => {
    //   return info.id !== boxId
    // })
    // boardActions.loadLayout(newLayout)
  }
, onNewComponent: (box) => {
    console.log('oh!!!!', box)
    box = ensureComponentInfo(box)
    console.log('ready to create box', box)
    state.block.createBox(box)
  }

})

store.getState = () => {
  return _.clone(state)
}

store.findBoard = (board) => {
  return _.find(state.boards, board)
}

export default store
