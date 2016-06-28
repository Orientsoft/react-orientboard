import Reflux from 'reflux'
import _ from 'lodash'
import Vector from 'victor'

import actions from '../actions/box'

import selectStore from '../stores/select'

const ACTIONS = {
  NONE: 0,
  ROTATE: 1,
  DRAG: 2,
  RESIZE: 3
}

const ROTATE_STEP = 15,
  GRID_SIZE = 10

let state = {
  box: null,
  dragStart: {
    x: 0,
    y: 0
  },
  center: {
    x: 0,
    y: 0
  },
  rotateStart: {
    x: 0,
    y: 0
  },
  resizeStart: {
    x: 0,
    y: 0
  },
  rInit: 0,
  action: ACTIONS.NONE,
  mode: 'edit',
  boards: []
}


selectStore.listen((newState) => {
  state = _.assign(state, newState)
})

// get the angle between vector(rotateStart.x - center.x,
// rotateStart.y - center.y)
// and vector(x - center.x, y - center.y) in degree
function getRotateAngle(x, y) {
  const { rotateStart, center } = state
  const vStart = new Vector(rotateStart.x - center.x, rotateStart.y - center.y)
  const vEnd = new Vector(x - center.x, y - center.y)
  return vEnd.angleDeg() - vStart.angleDeg()
}

// ensures box being dragged stays in block
function constrainDrag(x, y) {
  x = x + state.box.w <= state.block.w ? x : state.block.w - state.box.w
  x = x < 0 ? 0 : x
  y = y + state.box.h <= state.block.h ? y : state.block.h - state.box.h
  y = y < 0 ? 0 : y
  return { x, y }
}

const store = Reflux.createStore({
  listenables: actions,
  onInit: (app) => {
    console.log('init started')
    if (state.ready) return null

    state.app = app

    document.documentElement.onmousemove = function (e) {
      switch (state.action) {
      case ACTIONS.DRAG:
        let { x, y } = constrainDrag(
          e.clientX - state.dragStart.x
        , e.clientY - state.dragStart.y
        )

        if (e.altKey) {
          x -= x % GRID_SIZE
          y -= y % GRID_SIZE
        }

        state.box.moveTo(x, y)
        break

      case ACTIONS.ROTATE:
        let angle = state.rInit + getRotateAngle(e.clientX, e.clientY)
        if (e.altKey)
          angle -= angle % ROTATE_STEP
        state.box.rotate(angle)
        break

      case ACTIONS.RESIZE:
        let h = state.resizeStart.h + e.clientY - state.resizeStart.y,
          w = state.resizeStart.w + e.clientX - state.resizeStart.x

        if (e.altKey) {
          h -= h % GRID_SIZE
          w -= w % GRID_SIZE
        }
        state.box.resize(h, w)
        break

      default:
        break
      }
    }

    document.documentElement.onmouseup = function () {
      state.action = ACTIONS.NONE
    }
    document.documentElement.ondblclick = function () {
      if (state.box)
        state.box.openConfig()
    }

    state.ready = true
  },
  // TODO: l2 prevent too many renders
  onStartRotate: (center, x, y, theta) => {
    state.action = ACTIONS.ROTATE
    state.center = center
    state.rotateStart = { x, y }
    state.rInit = theta
  },
  onStartDrag: (x, y) => {
    state.action = ACTIONS.DRAG
    state.dragStart = { x, y }
  },
  onStartResize: (h, w, x, y) => {
    state.action = ACTIONS.RESIZE
    state.resizeStart = { x, y, h, w }
  },
  onStopDrag: () => {
    state.action = ACTIONS.NONE
  },
  onStopAll: () => {
    state.action = ACTIONS.NONE
  },
  onAddZIndex: (amount) => {
    if (state.box)
      state.box.addZIndex(amount)
  },
  onOpenConfig() {
    console.log('openning config', state.box)
    if (state.box)
      state.box.openConfig()
  }

})

store.getState = () => {
  return _.clone(state)
}

export default store
