import Reflux from 'reflux'

const actions = Reflux.createActions([
  'saveBoard',
  'cloneBoard',
  'createBoard',
  'listBoards',
  'findBoard',
  'renameBoard',
  'removeBoard',
  'updateBoard',
  'addBlock',
  'moveBlock',
  'removeBlock',
  'getDisplayLink',
  'openDisplayLink',
].reduce((pv, cv) => {
  pv[cv] = { asyncResult: true }
  return pv
}, {}))

export default actions
