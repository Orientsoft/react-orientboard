import React from 'react'
import {Modal, Button, Input} from 'react-bootstrap'
import autobind from 'autobind-decorator'

import boardActions from '../actions/board'
import boardStore from '../stores/board'

@autobind
class BlockConfigModal extends React.Component {
  constructor(props) {
    super(props)
    let {w, h} = boardStore.getState().blockConfig || {w: 800, h: 600}
    this.state = {
      w: w || 800
    , h: h || 600
    }
  }

  componentDidMount() {

  }

  render() {
    return (
      <Modal show={this.props.show}>
        <Modal.Header >Block Config</Modal.Header>
        <Modal.Body >
          {/*validation needed*/}
          <Input ref='width' type='text' label='width'
              defaultValue={this.state.w}/>
          <Input ref='height' type='text' label='height'
              defaultValue={this.state.h}/>
        </Modal.Body>
        <Modal.Footer >
          <Button onClick={this.close}>Cancle</Button>
          <Button onClick={this.update}>Confirm</Button>
        </Modal.Footer>
      </Modal>
    )
  }

  close() {
    boardActions.closeBlockConfig()
  }

  update() {
    let w = this.refs.width.getValue()
      , h = this.refs.height.getValue()
    console.log(w, h)
    this.setState({
      w: w
    , h: h
    })
    boardActions.setBlockConfig({
      w: w
    , h: h
    })
    this.close()
  }
}

BlockConfigModal.propTypes = {

}

BlockConfigModal.defaultProps = {

}

export default BlockConfigModal
