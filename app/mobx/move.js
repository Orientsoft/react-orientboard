import Vector from 'victor'

import mobxBoard from './board-store'

const ACTIONS = {
  NONE: 0,
  ROTATE: 1,
  DRAG: 2,
  RESIZE: 3,
}

const ROTATE_STEP = 15,
      GRID_SIZE = 10

const state = {
  center: {
    x: 0,
    y: 0,
  },
  dragStart: {
    x: 0,
    y: 0,
  },
  rotateStart: {
    x: 0,
    y: 0,
  },
  resizeStart: {
    x: 0,
    y: 0,
  },
  rInit: 0,
  action: ACTIONS.NONE,
}


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
  const box = mobxBoard.activeBox
  const block = mobxBoard.activeBlock
  x = x + box.w <= block.w ? x : block.w - box.w
  x = x < 0 ? 0 : x
  y = y + box.h <= block.h ? y : block.h - box.h
  y = y < 0 ? 0 : y
  return { x, y }
}

export function startRotate(center, x, y, theta) {
  state.action = ACTIONS.ROTATE
  state.center = center
  state.rotateStart = { x, y }
  state.rInit = theta
}

export function startResize(h, w, x, y) {
  state.action = ACTIONS.RESIZE
  state.resizeStart = { x, y, h, w }
}

export function startDrag(x, y) {
  state.action = ACTIONS.DRAG
  state.dragStart = { x, y }
}

export function stopMovement() {
  state.action = ACTIONS.NONE
}

export function init() {
  document.documentElement.onmousemove = function handleMouseMove(e) {
    const box = mobxBoard.activeBox
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
      box.x = x
      box.y = y
      break

    case ACTIONS.ROTATE:
      let angle = state.rInit + getRotateAngle(e.clientX, e.clientY)
      if (e.altKey)
        angle -= angle % ROTATE_STEP
      box.rotate = angle
      break

    case ACTIONS.RESIZE:
      let h = state.resizeStart.h + e.clientY - state.resizeStart.y,
          w = state.resizeStart.w + e.clientX - state.resizeStart.x

      if (e.altKey) {
        h -= h % GRID_SIZE
        w -= w % GRID_SIZE
      }
      box.h = h
      box.w = w
      break

    default:
      break
    }
  }

  document.documentElement.onmouseup = stopMovement
}
