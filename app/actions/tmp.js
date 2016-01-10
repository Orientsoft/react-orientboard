import Reflux from 'reflux'

let actions = Reflux.createActions([
  'saveBoard'
].reduce((pv, cv) => {
  pv[cv] = {asyncResult: true}
  return pv
}, {}))

export default actions
