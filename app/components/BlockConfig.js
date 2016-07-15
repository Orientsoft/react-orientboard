import React from 'react'
import { Modal, Button, Input } from 'react-bootstrap'
import autobind from 'autobind-decorator'
import { observer } from 'mobx-react'
import _ from 'lodash'

import mobxUI from '../mobx/ui-store'
import mobxBoard from '../mobx/board-store'


@observer
@autobind
export default class BlockConfigModal extends React.Component {
  close() {
    mobxUI.showBlockConfig = false
  }

  update() {
    const block = mobxBoard.activeBlock
    block.w = this.refs.width.getValue()
    block.h = this.refs.height.getValue()
    block.img = this.refs.backimg.getValue()
    block.bgcolor = this.refs.bgcolor.getValue()

    this.close()
  }

  render() {
    const block = mobxBoard.activeBlock
    if (mobxBoard.editable === false)
      mobxUI.showBlockConfig = false
    return (
      <Modal show={mobxUI.showBlockConfig}>
        <Modal.Header >Block Config</Modal.Header>
        <Modal.Body >
          {/* TODO: l3 add validation needed */}
          <Input ref="width" type="text" label="width"
            defaultValue={_.get(block, 'w')}
          />
          <Input ref="height" type="text" label="height"
            defaultValue={_.get(block, 'h')}
          />
          <Input ref="backimg" type="text" label="background image"
            defaultValue={_.get(block, 'img')}
          />
          <Input ref="bgcolor" type="text" label="background Color"
            defaultValue={_.get(block, 'bgcolor')}
          />

        </Modal.Body>
        <Modal.Footer >
          <Button onClick={this.close}>Cancle</Button>
          <Button onClick={this.update}>Confirm</Button>
        </Modal.Footer>
      </Modal>
    )
  }

}

BlockConfigModal.propTypes = {
  show: React.PropTypes.bool,
}
