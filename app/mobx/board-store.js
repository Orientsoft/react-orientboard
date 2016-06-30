import { observable } from 'mobx'

import BoardManager from '../../lib/client'
import Board from './board'
import Box from './box'
import Block from './block'
import { swapElements } from '../lib/util'

class BoardStore {
  @observable boards = []
  @observable activeBoard
  @observable activeBlock
  @observable activeBox
  @observable editable = true
  activeBoxRef = undefined

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

  async createBoard(config) {
    const newBoard = new Board(await this.bm.create(config))
    this.boards.push(newBoard)
    this.activeBoard = newBoard
  }

  async removeBoard() {
    const { name, owner } = this.activeBoard
    const res = await this.bm.remove({ name, owner })
    if (res.ok === 1) {
      const i = this.boards.indexOf(this.activeBoard)
      this.boards.remove(this.activeBoard)
      if (this.boards.length > 0)
        this.activeBoard = this.boards[i <= this.boards.length - 1 ? i : i - 1]
      return
    }
    console.log(res)
  }

  async publishBoard() {
    return (await this.bm.publish(this.activeBoard._id)).status === 'ok'
  }

  createBlock(config) {
    console.log('create with', config)
    const i = this.activeBoard.blocks.indexOf(this.activeBlock)
    const newBlock = new Block(config)
    this.activeBoard.blocks.splice(i + 1, 0, newBlock)
    this.activeBlock = newBlock
  }

  removeBlock() {
    this.activeBoard.blocks.remove(this.activeBlock)
  }

  moveBlock(offset) {
    // TODO: Currently offset can only be 1 or -1. Replace swapElements so
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

export default new BoardStore()
