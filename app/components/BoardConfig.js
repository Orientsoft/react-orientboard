import React from 'react'
import {Modal, Button, Input} from 'react-bootstrap'
import autobind from 'autobind-decorator'

import uiActions from '../actions/ui'
import tmpActions from '../actions/tmp'

@autobind
class BoardConfigModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

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
          <Input ref='name' type='text' label='name'
              defaultValue={this.state.name}/>
        </Modal.Body>
        <Modal.Footer >
          <Button onClick={this.close}>Cancle</Button>
          <Button onClick={this.create}>Confirm</Button>
        </Modal.Footer>
      </Modal>
    )
  }

  close() {
    uiActions.closeBoardConfig()
  }

  create() {
    tmpActions.createBoard({
      name: this.refs.name.getValue()
    , blocks: [
        {
          id: 1
        , w: 800
        , h: 600
        , boxes: [

          ]
        }
      ]
    })
    this.close()
  }
}

BoardConfigModal.propTypes = {

}

BoardConfigModal.defaultProps = {

}

export default BoardConfigModal
