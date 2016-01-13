import Reflux from 'reflux'
import _ from 'lodash'
import Vector from 'victor'
import Box from '../components/Box'

import boardActions from '../actions/board'
import BoardManager from '../../lib/client'

var bm = new BoardManager()

const ACTIONS = {
  NONE: 0
, ROTATE: 1
, DRAG: 2
, RESIZE: 3
}

const ROTATE_STEP = 15
    , GRID_SIZE = 10

let state = {
  box: null
, dragStart: {
    x: 0
  , y: 0
  }
, center: {
    x: 0
  , y: 0
  }
, rotateStart: {
    x: 0
  , y: 0
  }
, resizeStart: {
    x: 0
  , y: 0
  }
, rInit: 0
, action: ACTIONS.NONE
, mode: 'edit'
, boards: []
}

// get the angle between vector(rotateStart.x - center.x,
// rotateStart.y - center.y)
// and vector(x - center.x, y - center.y) in degree
function getRotateAngle(x, y) {
  let {rotateStart, center} = state
  let vStart = new Vector(rotateStart.x - center.x, rotateStart.y - center.y)
  let vEnd = new Vector(x - center.x, y - center.y)
  return vEnd.angleDeg() - vStart.angleDeg()
}

// ensures box being dragged stays in block
function constrainDrag(x, y) {
  x = x + state.box.w <= state.block.w ? x : state.block.w - state.box.w
  x = x < 0 ? 0 : x
  y = y + state.box.h <= state.block.h ? y : state.block.h - state.box.h
  y = y < 0 ? 0 : y
  return {x, y}
}

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
  listenables: boardActions
, onInit: (app) => {
    if (state.ready) return

    state.app = app

    document.documentElement.onmousemove = function (e) {
      switch (state.action) {
      case ACTIONS.DRAG:
        let {x, y} = constrainDrag(
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
        var angle = state.rInit + getRotateAngle(e.clientX, e.clientY)
        if (e.altKey)
          angle -= angle % ROTATE_STEP
        state.box.rotate(angle)
        break

      case ACTIONS.RESIZE:
        let h = state.resizeStart.h + e.clientY - state.resizeStart.y
          , w = state.resizeStart.w + e.clientX - state.resizeStart.x

        if (e.altKey) {
          h -= h % GRID_SIZE
          w -= w % GRID_SIZE
        }
        state.box.resize(h, w)
        break

      }
    }

    document.documentElement.onmouseup = function () {
      state.action = ACTIONS.NONE
    }
  }
, onLoadLayout: (layout) => {
    console.log('loading layout')
    state.layout = layout
    store.trigger(state)
  }
, onSetActiveBox: (box) => {
    if (state.box === box) return
    if (state.box)
      state.box.deactivate()
    state.box = box
    box.activate()
    store.trigger(state)
  }
, onStartRotate: (center, x, y, theta) => {
    state.action = ACTIONS.ROTATE
    state.center = center
    state.rotateStart = {x, y}
    state.rInit = theta
  }
, onStartDrag: (x, y) => {
    state.action = ACTIONS.DRAG
    state.dragStart = {x, y}
  }
, onStartResize: (h, w, x, y) => {
    state.action = ACTIONS.RESIZE
    state.resizeStart = {x, y, h, w}
  }
, onStopDrag: () => {
    state.action = ACTIONS.NONE
  }
, onStopAll: () => {
    state.action = ACTIONS.NONE
  }
, onAddZIndex: (amount) => {
    if (state.box)
      state.box.addZIndex(amount)
  }
, onChangeMode: (mode) => {
    state.mode = mode
    if (mode === 'publish') {
      boardActions.deactivateAll()
    }
    store.trigger(state)
  }
, onDeactivateAll: () => {
    state.box.deactivate()
    state.box = null
    store.trigger(state)
  }
, onSetActiveBlock: (block) => {
    if (state.block === block) return null
    state.block = block
    store.trigger(state)
  }
, onRemoveBox: (box) => {
    // console.log(state.box.id, box)
    var boxId = box instanceof Box ? box.id : state.box.id
    if (state.box === box) {
      state.box.deactivate()
      state.box = null
    }
    var layout = state.app.getLayout()
    var newLayout = layout.filter((info) => {
      return info.id !== boxId
    })
    boardActions.loadLayout(newLayout)
  }
, onNewComponent: (newComponent) => {
    var layout = state.app.getLayout()
    layout.push(ensureComponentInfo(newComponent))
    layout = layout.map((info, i) => {
      info.id = i
      return info
    })
    boardActions.loadLayout(layout)
  }
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
, onSaveBoard() {
    
  }
, onCreateBoard: async (board) => {
    try {
      var res = await bm.create(board)
      state.boards.push(res)
      store.trigger(state)
      return boardActions.createBoard.completed()
    } catch (e) {
      return boardActions.createBoard.failed(e)
    }
  }
, onCreateBoardFailed: () => {
    console.log('create failed')
  }
, onListBoards: async () => {
    var res = await bm.list()
    state.boards = res
    console.log(res)
    console.log('listing')
    store.trigger(state)
    return boardActions.listBoards.completed()
  }
, onFindBoard: (board) => {
    console.log(_.filter('this is it', state.boards, board))
    return boardActions.findBoard.completed(_.filter(state.boards, board))
  }
, onRemoveBoard: async (board) => {
    if (!_.filter(state.boards, board))
      return boardActions.removeBoard.failed('Board not found')
    await bm.remove(board)
    state.boards = state.boards.filter((b) => {
      return b.name === board.name
    })
    store.trigger(state)
  }
, onUpdateBoard: async (query, board) => {
    console.log('inside update')
    if (!_.filter(state.boards, board))
      return boardActions.removeBoard.failed('Board not found')
    await bm.update(query, board)
    let target = _.find(state.boards, query)
    target = board
    store.trigger(state)
    return boardActions.updateBoard.completed()
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

store.findBoard = (board) => {
  return _.find(state.boards, board)
}

export default store
