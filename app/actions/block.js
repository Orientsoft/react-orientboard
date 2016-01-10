import Reflux from 'reflux'

let blockActions = Reflux.createActions([
  'setActiveBlock'
, 'removeBox'
, 'createBox'
, 'setBlockConfig'
, 'newComponent'
].reduce((pv, cv) => {
  pv[cv] = {asyncResult: true}
  return pv
}, {}))

export default blockActions
