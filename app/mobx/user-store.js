import { observable } from 'mobx'
import BoardManager from '../../lib/client'

import User from '../components/User'

class UserStore {
  @observable users = []
  @observable selectUser
  @observable idx
  @observable confirm
  @observable confirmMsg
  @observable showConfig
  @observable configTitle

  constructor() {
    this.bm = new BoardManager()
  }

  async AddUser(user) {
    const newUser = await this.bm.createUser(user)
    this.users.push(newUser)
    this.selectUser = newUser
    this.idx = null
  }

  async RemoveUser(user) {
    this.selectUser = user
    const res = this.bm.removeUser(this.selectUser)
    if (res.ok === 1) {
      this.idx = this.users.indexOf(this.selectUser)
      this.users.remove(this.selectUser)
    }

    this.confirm = false

    return
  }

  async UpdateUser() {
    const res = this.bm.updateUser(this.selectUser)
    if (res.ok === 1) {
      console.log(res)
      this.showConfig = false
      this.idx = null
    }
    return
  }

  async ListUser() {
    this.users = (await this.bm.listUser()).map(listUser => new User(listUser))
    if (this.users.length === 0)
      this.selectUser = this.users[0]

    return
  }

}


export default new UserStore()
