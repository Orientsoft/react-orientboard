import Reflux from 'reflux'

let boardActions = Reflux.createActions([
  'openConfig'
, 'openBlockConfig'
, 'closeBlockConfig'
, 'openBoardConfig'
, 'closeBoardConfig'
].reduce((pv, cv) => {
  pv[cv] = {asyncResult: true}
  return pv
}, {}))

export default boardActions
