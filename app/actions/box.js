import Reflux from 'reflux'

let actions = Reflux.createActions([
  'startDrag'
, 'stopDrag'
, 'startRotate'
, 'startResize'
, 'stopAll'
, 'addZIndex'
, 'removeBox'
, 'init'
, 'openConfig'
].reduce((pv, cv) => {
  pv[cv] = {asyncResult: true}
  return pv
}, {}))

export default actions
