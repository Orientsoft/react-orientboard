import Reflux from 'reflux'

const blockActions = Reflux.createActions([
    'setActiveBlock',
    'removeBox',
    'createBox',
    'setBlockConfig',
    'newComponent'
].reduce((pv, cv) => {
    pv[cv] = { asyncResult: true }
    return pv
}, {}))

export default blockActions
