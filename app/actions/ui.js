import Reflux from 'reflux'

const actions = Reflux.createActions([
  'openBlockConfig',
  'closeBlockConfig',
  'openBoardConfig',
  'closeBoardConfig',
  'setMode',
  'setTheme',
].reduce((pv, cv) => {
  pv[cv] = { asyncResult: true }
  return pv
}, {}))

export default actions
