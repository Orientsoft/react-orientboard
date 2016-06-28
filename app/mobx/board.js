import { observable } from 'mobx'

import Block from './block'

export default class Board {
  @observable blocks = []

  constructor(info) {
    this._id = info._id
    this.w = info.w || 800
    this.h = info.h || 600
    this.blocks = info.blocks.map(block => (new Block(block)))
  }
}
