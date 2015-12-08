import Reflux from 'reflux'

import boardActions from '../actions/board'

import {Line} from '../lib/util'
import Vector from 'victor'

const ACTIONS = {
  NONE: 0
, ROTATE: 1
, DRAG: 2
, RESIZE: 3
}

let state = {
  box: null
, dragStart: {
    x: 0
  , y: 0
  }
, rCenter: {
    x: 0
  , y: 0
  }
, rStart: {
    x: 0
  , y: 0
  }
, rInit: 0
, action: ACTIONS.NONE
, mode: 'edit'
}

// let components = {}
import cm from '../lib/components'

// get the angle between vector(rStart.x - rCenter.x, rStart.y - rCenter.y)
// and vector(x - rCenter.x, y - rCenter.y) in degree
function getRotateAngle(x, y) {
  let {rStart, rCenter} = state
  let vStart = new Vector(rStart.x - rCenter.x, rStart.y - rCenter.y)
  let vEnd = new Vector(x - rCenter.x, y - rCenter.y)
  return vEnd.angleDeg() - vStart.angleDeg()
}

let boardStore = Reflux.createStore({
  listenables: boardActions
, onInit: () => {
    if (state.ready) return

    document.documentElement.onmousemove = function (e) {
      switch (state.action) {
      case ACTIONS.DRAG:
        state.box.moveTo( e.clientX - state.dragStart.x
                        , e.clientY - state.dragStart.y)
        break

      case ACTIONS.ROTATE:
        state.box.rotate(state.rInit + getRotateAngle(e.clientX, e.clientY))
        break

      case ACTIONS.RESIZE:
        state.box.scale( state.sStart.h + e.clientY - state.sStart.y
                       , state.sStart.w + e.clientX - state.sStart.x)
        break

      }
    }

    document.documentElement.onmouseup = function () {
      state.action = ACTIONS.NONE
    }
  }
, onSetActiveBox: function (box) {
    if (state.box === box) return
    if (state.box)
      state.box.deactivate()
    state.box = box
    box.activate()
    this.trigger(state)
  }
, onStartRotate: (center, x, y, theta) => {
    state.action = ACTIONS.ROTATE
    state.rCenter = center
    state.rStart = {x, y}
    state.rInit = theta
  }
, onStartDrag: (x, y) => {
    state.action = ACTIONS.DRAG
    state.dragStart = {x, y}
  }
, onStartScale: (h, w, x, y) => {
    state.action = ACTIONS.RESIZE
    state.sStart = {x, y, h, w}
  }
, onStopDrag: (x, y) => {
    state.action = ACTIONS.NONE
  }
, onStopAll: () => {
    state.action = ACTIONS.NONE
  }
, onAddZIndex: (amount) => {
    if (state.box)
      state.box.addZIndex(amount)
  }
, onGetComponent: (name) => {
    return components[name]
  }
, onChangeMode: (mode) => {
    state.mode = mode
    if (mode === 'publish')
      boardActions.deactivateAll()
    this.trigger(state)
  }
, onDeactivateAll: () => {
    state.box.deactivate()
  }
})

boardStore.getState = () => {
  return state
}

export default boardStore
