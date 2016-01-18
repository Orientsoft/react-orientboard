import React from 'react'
import { Modal, Button, Input } from 'react-bootstrap'
import autobind from 'autobind-decorator'
import _ from 'lodash'

import blockActions from '../actions/block'
import uiActions from '../actions/ui'
import selectStore from '../stores/select'


@autobind
class BlockConfigModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      w: 800,
      h: 600,
    }
  }

  componentDidMount() {
    selectStore.listen((newState) => {
      this.setState(newState)
    })
  }

  close() {
    uiActions.closeBlockConfig()
  }

  update() {
    const w = this.refs.width.getValue(),
          h = this.refs.height.getValue(),
          img = this.refs.backimg.getValue()

    this.setState({ w, h, img })
    blockActions.setBlockConfig({ w, h, img })
    this.close()
  }

  render() {
    return (
      <Modal show={this.props.show}>
        <Modal.Header >Block Config</Modal.Header>
        <Modal.Body >
          {/* TODO: add validation needed */}
          <Input ref='width' type='text' label='width'
            defaultValue={_.get(this.state, 'block.w')}
          />
          <Input ref='height' type='text' label='height'
            defaultValue={_.get(this.state, 'block.h')}
          />
          <Input ref='backimg' type='text' label='background image'
            defaultValue={_.get(this.state, 'block.img')}
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

BlockConfigModal.defaultProps = {

}

export default BlockConfigModal
