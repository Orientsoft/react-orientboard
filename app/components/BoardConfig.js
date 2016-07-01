import React from 'react'
import { Modal, Button, Input, Tabs, Tab } from 'react-bootstrap'
import autobind from 'autobind-decorator'
import { observer } from 'mobx-react'
import { computed } from 'mobx'
import uuid from 'uuid'
import classnames from 'classnames'
import _ from 'lodash'

import mobxBoard from '../mobx/board-store'
import mobxUI from '../mobx/ui-store'

@observer
@autobind
export default class BoardConfigModal extends React.Component {
  close() {
    mobxUI.showBoardConfig = false
  }

  update() {
    switch (mobxUI.boardAction) {
    case 'update':
      mobxBoard.activeBoard.name = this.refs.name.getValue()
      mobxBoard.activeBoard.desc = this.refs.desc.getValue()
      break
    case 'clone':
      mobxBoard.createBoard({
        name: this.refs.name.getValue(),
        desc: this.refs.desc.getValue(),
        pubType: this.refs.pubType.getValue(),
        password: this.refs.password.getValue(),
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
        pubType: this.refs.pubType.getValue(),
        password: this.refs.password.getValue(),
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
    case 'update':
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
    const board = mobxBoard.activeBoard || {}
    return (
      <Modal show={mobxUI.showBoardConfig}>
        <Modal.Header >Board 设置</Modal.Header>
        <Modal.Body >
          <Tabs defaultActiveKey={1}>
            <Tab eventKey={1} title="基础设置">
              <Input ref="name" type="text" label="名字"
                defaultValue={this.defaultName}
              />
              <Input ref="desc" type="text" label="描述"
                defaultValue={this.defaultDesc}
              />
            </Tab>
            <Tab eventKey={2} title="发布设置">
              <Input type="select" label="发布方式" ref="pubType"
                defaultValue={_.get(board, 'pubType')}
              >
                <option value="public">公开访问</option>
                <option value="private">密码访问</option>
                <option value="auth">授权</option>
              </Input>

              <div
                className={classnames({ hidden: board.pubType !== 'private' })}
              >
                <span>URL</span>
                <Input type="text" ref="url" readOnly
                  defaultValue={
                    `${window.location.origin}/api/display/${board.id}`
                  }
                />
                <span>密码</span>
                <Input type="text" ref="password" defaultValue="welcome1" />
              </div>

              <div className={classnames({ hidden: board.pubType !== 'auth' })}>
                <span>授权访问,暂未实现</span>
              </div>

            </Tab>
          </Tabs>
        </Modal.Body>

        <Modal.Footer >
          <Button onClick={this.close}>取消</Button>
          <Button onClick={this.update}>
            {mobxUI.boardAction === 'update' ? '确认更改' : '确认创建'}
          </Button>
        </Modal.Footer>
      </Modal>
    )
  }
}
