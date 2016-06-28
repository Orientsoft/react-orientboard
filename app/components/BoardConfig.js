import React from 'react'
import { Modal, Button, Input } from 'react-bootstrap'
import autobind from 'autobind-decorator'
import { observer } from 'mobx-react'
import { computed } from 'mobx'
import uuid from 'uuid'

import mobxBoard from '../mobx/board-store'
import mobxUI from '../mobx/ui-store'

@observer
@autobind
class BoardConfigModal extends React.Component {
  close() {
    mobxUI.showBoardConfig = false
  }

  create() {
    switch (mobxUI.boardAction) {
    case 'rename':
      mobxBoard.activeBoard.name = this.refs.name.getValue()
      mobxBoard.activeBoard.desc = this.refs.desc.getValue()
      break
    case 'clone':
      mobxBoard.createBoard({
        name: this.refs.name.getValue(),
        desc: this.refs.desc.getValue(),
        owner: this.activeBoard.owner,
        // give new id to each block and box
        blocks: this.activeBoard.blocks.map(block => {
          const newBlock = block.toJSON()
          newBlock.id = uuid.v4()
          for (const box of block.boxes)
            box.id = uuid.v4()
        }),
      })
      break
    case 'create':
      mobxBoard.createBoard({
        name: this.refs.name.getValue(),
        desc: this.refs.desc.getValue(),
        owner: mobxBoard.activeBoard.owner,
        // create an empty block
        blocks: [{
          w: 800,
          h: 600,
          id: uuid.v4(),
          boxes: [],
        }],
      })
      break
    default:
      throw new Error('Unsupported action')
    }
  }

  @computed
  get defaultName() {
    switch (mobxUI.boardAction) {
    case 'rename':
      return mobxBoard.activeBoard.name
    case 'clone':
      return `${mobxBoard.activeBoard.name}-${Date.now()}`
    default:
      return ''
    }
  }

  @computed
  get defaultDesc() {
    return mobxUI.boardAction === 'create' ? '' : mobxBoard.activeBoard.desc
  }

  render() {
    return (
      <Modal show={mobxUI.showBoardConfig}>
        <Modal.Header >Board名字</Modal.Header>
        <Modal.Body >
          <Input ref="name" type="text" label="名字"
            defaultValue={this.defaultName}
          />
          <Input ref="desc" type="text" label="描述"
            defaultValue={this.defaultDesc}
          />
        </Modal.Body>
        <Modal.Footer >
          <Button onClick={this.close}>取消</Button>
          <Button onClick={this.create}>
            { mobxUI.boardAction === 'rename' ? '确认更改' : '确认创建' }
          </Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default BoardConfigModal
