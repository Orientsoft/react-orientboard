import Reflux from 'reflux'

const actions = Reflux.createActions([
  'startDrag',
  'stopDrag',
  'startRotate',
  'startResize',
  'stopAll',
  'addZIndex',
  'removeBox',
  'init',
  'openConfig',
].reduce((pv, cv) => {
  pv[cv] = { asyncResult: true }
  return pv
}, {}))

export default actions
