import { observable } from 'mobx'

import BoardManager from '../../lib/client'
import Board from './board'
import Box from './box'
import Block from './block'

class Store {
  @observable boards
  @observable activeBoard
  @observable activeBlock
  @observable activeBox
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

  }

  createBlock(config) {
    const i = this.activeBoard.blocks.indexOf(this.activeBlock)
    const newBlock = new Block(config)
    this.activeBoard.blocks.splice(i + 1, 0, newBlock)
    this.activeBlock = newBlock
  }

  createBox(config) {
    this.activeBlock.boxes.push(new Box(config))
  }

  removeBox() {
    this.activeBlock.boxes.remove(this.activeBox)
  }

  addZIndex(amount) {
    this.activeBox.z += amount
  }
}

export default new Store()
