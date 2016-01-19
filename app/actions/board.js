import Reflux from 'reflux'

const actions = Reflux.createActions([
  'saveBoard',
  'createBoard',
  'listBoards',
  'findBoard',
  'removeBoard',
  'updateBoard',
  'addBlock',
  'moveBlock',
  'removeBlock',
].reduce((pv, cv) => {
  pv[cv] = { asyncResult: true }
  return pv
}, {}))

export default actions
