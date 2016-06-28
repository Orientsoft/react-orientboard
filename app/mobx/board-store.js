import { observable } from 'mobx'

import BoardManager from '../../lib/client'
import Board from './board'
import Box from './box'
import Block from './block'
import { swapElements } from '../lib/util'

class Store {
  @observable boards
  @observable activeBoard
  @observable activeBlock
  @observable activeBox
  @observable editable = true
  constructor() {
    this.bm = new BoardManager()
  }

  async fetchBoards() {
    this.boards = (await this.bm.list()).map(board => new Board(board))
    if (this.boards.length === 0) return
    this.activeBoard = this.boards[0]
    if (this.activeBoard.blocks.length === 0) return
    this.activeBlock = this.activeBoard.blocks[0]
  }

  saveActiveBoard() {
    const board = this.activeBoard
    if (board._id)
      return this.bm.update(
        { name: board.name, owner: board.owner }, board.toJSON()
      )

    return this.bm.create(board.toJSON())
  }

  createBlock(config) {
    const i = this.activeBoard.blocks.indexOf(this.activeBlock)
    const newBlock = new Block(config)
    this.activeBoard.blocks.splice(i + 1, 0, newBlock)
    this.activeBlock = newBlock
  }

  removeBlock() {
    this.activeBoard.blocks.remove(this.activeBlock)
  }

  moveBlock(offset) {
    // FIXME: Currently offset can only be 1 or -1. Replace swapElements so
    // blocks can be moved by multiple levels a time
    const i = this.activeBoard.blocks.indexOf(this.activeBlock)
    if ((i + offset) >= 0 && (i + offset) < this.activeBoard.blocks.length)
      swapElements(this.activeBoard.blocks, i, i + offset)
  }

  createBox(config) {
    this.activeBlock.boxes.push(new Box(config))
  }

  removeBox() {
    this.activeBlock.boxes.remove(this.activeBox)
  }

  addZIndex(amount) {
    // TODO: prevent box from sinking under the block
    this.activeBox.z += amount
  }
}

export default new Store()
