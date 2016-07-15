import { observable } from 'mobx'

const UserType = { admin: '管理员', worker: '开发者', guest: '使用者' }

export default class User {
  @observable idx
  @observable name
  @observable desc
  @observable email
  @observable frozen
  @observable type
  @observable password

  constructor(info) {
    this.idx = info.idx
    this.name = info.name
    this.desc = info.desc
    this.email = info.email
    this.frozen = info.frozen || false
    if (UserType[info.type])
      this.type = info.type
    this.password = info.password
  }
}
