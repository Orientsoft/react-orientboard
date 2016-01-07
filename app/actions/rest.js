import Reflux from 'reflux'

let boardActions = Reflux.createActions([
  'createBoard'
, 'listBoards'
, 'findBoard'
, 'removeBoard'
, 'updateBoard'
].reduce((pv, cv) => {
  pv[cv] = {asyncResult: true}
  return pv
}, {}))

export default boardActions
