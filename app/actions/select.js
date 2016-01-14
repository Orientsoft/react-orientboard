import Reflux from 'reflux'

let actions = Reflux.createActions([
  'setActiveBlock',
  'setActiveBox',
  'setActiveBoard',
  'setApp',
].reduce((pv, cv) => {
  pv[cv] = {asyncResult: true}
  return pv
}, {}))

export default actions
