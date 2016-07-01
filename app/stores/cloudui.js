import Reflux from 'reflux'
import _ from 'lodash'


import actions from '../actions/cloudui'
import BoardManager from '../../lib/client'


const bm = new BoardManager()

let state = {
  users: [],
}


const store = Reflux.createStore({
  listenables: actions,


  onAddUser: async(user) => {
    console.log('-->addUser', user)
    try {
      const res = await bm.createUser(user).then((newUser) => {
        console.log(newUser.result[0].uid)
        user.uid = newUser.result[0].uid
        state.users.push(user)
        state.idx = null
        store.trigger(state)
      })


      return 'ok'
    } catch (e) {
      console.log(e)
      return
    }
  },

  onRemoveUser: async (user) => {
    console.log('-->removeUser', user)

    bm.removeUser(user).then(() => {
      let idx = 0
      for (var i = 0; i < state.users.length; i++) {
        if (state.users[i].email == user.email) {
          idx = i
          break
        }
      }

      state.users.splice(idx, 1)
      state.idx = null
      state.confrim = false
      store.trigger(state)
    })

    return ''
  },

  onRemoveUserConfrim: async (idx) => {
    console.log('-->removeUserConfrim', idx)
    state.showConfig = false
    state.confrim = true
    state.confrimMsg = '删除用户'
    state.idx = idx
    store.trigger(state)

    return ''
  },

  onUpdateUser: async (op, user) => {
    console.log('-->updateUser', user)

     // if(op=="changePassword"){
     //  console.log(user);
     // }else if(op=="forzen"){
     //  console.log(user)
     // }

    bm.updateUser(user).then((result) => {
      console.log(result)
      state.showConfig = false
      state.idx = null
      store.trigger(state)
    })

    return ''
  },

  onChangePassword: async(idx) => {
    state.showConfig = true
    state.idx = idx
    state.configTitle = '修改用户密码'
    store.trigger(state)
  },

  onListUser: async (user) => {
    console.log('-->listUser', user)
    // const nb = state.app.refs.board.toJson()
    // const oldName=nb.name
    // nb.name=boardName


    // actions.updateBoard({ name: oldName }, nb)
    // state.boards[_.findIndex(state.boards, { name: boardName })] = nb
    // store.trigger(state)
    // return actions.updateBoard.completed()
    bm.listUser().then((users) => {
      _.forEach(users, (user) => {
        // console.log(user);
        if (state.users.indexOf(user) == -1) {
          state.users.push(user)
        }
      })
      console.log(state)
      store.trigger(state)
    })

    return 'aa'
  },

})

store.getState = () => {
  return _.clone(state)
}


export default store
