import { observable } from 'mobx'

import Block from './block'

export default class Board {
  @observable blocks = []
  @observable name
  @observable desc
  @observable pubType
  @observable password

  constructor(info) {
    this._id = info._id
    this.name = info.name
    this.desc = info.desc
    this.owner = info.owner
    this.blocks = (info.blocks || []).map(block => (new Block(block)))
    this.pubType = info.pubType || 'public'
    this.password = info.password
  }

  toJSON() {
    return {
      name: this.name,
      desc: this.desc,
      owner: this.owner,
      blocks: this.blocks.toJSON(),
    }
  }
}
