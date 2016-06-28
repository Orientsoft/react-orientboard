import uuid from 'uuid'
import { observable } from 'mobx'

export default class Box {
  @observable w
  @observable h
  @observable x
  @observable y
  @observable z
  @observable rotate
  @observable data

  constructor(info) {
    this.id = info.id || uuid.v4()
    this.w = info.w || 100
    this.h = info.h || 100
    this.x = info.x || 0
    this.y = info.y || 0
    this.z = info.z || 0
    this.rotate = info.rotate || 0
    this.data = info.data || Object.create(null)
    this.type = info.type
  }
}
