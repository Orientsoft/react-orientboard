import Reflux from 'reflux'

let actions = Reflux.createActions([
  'saveBoard'
, 'createBoard'
, 'listBoards'
, 'findBoard'
, 'removeBoard'
, 'updateBoard'
].reduce((pv, cv) => {
  pv[cv] = {asyncResult: true}
  return pv
}, {}))

export default actions
