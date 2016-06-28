import Reflux from 'reflux'

const actions = Reflux.createActions([
    'addUser',
    'removeUserConfrim',
    'removeUser',
    'updateUser',
    'listUser',
    'changePassword'
].reduce((pv, cv) => {
    pv[cv] = { asyncResult: true }
    return pv
}, {}))

export default actions
