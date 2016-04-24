import React from 'react'
import { Modal, Button, Input } from 'react-bootstrap'
import autobind from 'autobind-decorator'

import uiActions from '../actions/ui'
import boardActions from '../actions/board'
import uiStore from '../stores/ui'
@autobind
class BoardConfigModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      
    }
  }

  componentDidMount() {
    
    uiStore.listen((newState) => {
      this.state.action=newState.boardAction;
      console.log(this.state.action,"xxxx")
      if(this.state.action=="rename"){
         this.state.name=newState.boardName
       }else if(this.state.action=="create"){
        this.state.name=""
       }else if(this.state.action=="clone"){
        this.state.name="board"+(new Date().getTime())
      }else{
        console.log("action not support")
      }
      
    })
  }

  close() {
    uiActions.closeBoardConfig()
  }

  create() {
    console.log("xxcvxcvxvxv",this.state.action)
    if(this.state.action=="rename"){
      console.log("ssss",boardActions)
      boardActions.renameBoard(this.refs.name.getValue())
      this.state.name=this.refs.name.getValue();
    }else if(this.state.action=="clone"){
      console.log("--------clone")
      boardActions.cloneBoard(this.refs.name.getValue());
    }else if(this.state.action=="create"){
      boardActions.createBoard({
      name: this.refs.name.getValue(),
      blocks: [{
        id: Date.now(),
        w: 800,
        h: 600,
        img: null,
        boxes: [],
      }],
    })
    }
    
    this.close()
  }
  

  render() {

    var buttonValue=this.state.name?"确认更改":"确认创建"

    return (
      <Modal show={this.props.show}>
        <Modal.Header >Block Config</Modal.Header>
        <Modal.Body >
          {/* validation needed */}
          <Input ref='name' type='text' label='name'
            defaultValue={this.state.name}
          />
        </Modal.Body>
        <Modal.Footer >
          <Button onClick={this.close}>Cancle</Button>
          <Button onClick={this.create}>{buttonValue}</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

BoardConfigModal.propTypes = {
  show: React.PropTypes.bool,
}

BoardConfigModal.defaultProps = {

}

export default BoardConfigModal
