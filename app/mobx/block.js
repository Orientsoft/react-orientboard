import { observable } from 'mobx'
import uuid from 'uuid'

import Box from './box'

export default class Block {
  @observable w
  @observable h
  @observable img
  @observable bgcolor
  @observable boxes = []

  constructor(info) {
    this.id = info.id || uuid.v4()
    this.w = info.w || 800
    this.h = info.h || 600
    this.img = info.img
    this.bgcolor = info.bgcolor || '#FFF'
    this.boxes = info.boxes.map(box => (new Box(box)))
  }
}
