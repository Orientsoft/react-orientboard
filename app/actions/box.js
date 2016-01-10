import Reflux from 'reflux'

let boardActions = Reflux.createActions([
  'startDrag'
, 'stopDrag'
, 'startRotate'
, 'startResize'
, 'stopAll'
, 'addZIndex'
, 'removeBox'
, 'init'
].reduce((pv, cv) => {
  pv[cv] = {asyncResult: true}
  return pv
}, {}))

export default boardActions
