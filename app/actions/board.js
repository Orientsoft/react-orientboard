import Reflux from 'reflux'

// TODO: split this pile of crap
let boardActions = Reflux.createActions([
  'startDrag'
, 'stopDrag'
, 'startRotate'
, 'startResize'
, 'stopAll'
, 'setActiveBox'
, 'deactivateAll'
, 'addZIndex'
, 'init'
, 'getComponent'
, 'changeMode'
, 'setActiveBlock'
, 'removeBox'
, 'loadLayout'
, 'getLayout'
, 'newComponent'
, 'openConfig'
, 'openBlockConfig'
, 'closeBlockConfig'
, 'openBoardConfig'
, 'closeBoardConfig'
, 'setBlockConfig'
, 'saveBoard'
, 'createBoard'
, 'listBoards'
, 'findBoard'
, 'removeBoard'
, 'updateBoard'
].reduce((pv, cv) => {
  pv[cv] = {asyncResult: true}
  return pv
}, {}))

export default boardActions
