import React from 'react'
import _ from 'lodash'
import autobind from 'autobind-decorator'
import { Modal, Button,Input,Row,Col,Tabs,Tab ,Glyphicon, Alert} from 'react-bootstrap'


// TODO: l1 better display page
@autobind
export default class Notification extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    	show:this.props.show||false,
    	title:this.props.title||"",
    	msg:this.props.msg||""
    }
  }

  componentDidMount() {
    
  }

  show(title,msg){
  	this.setState({show: true,title,msg})
  }

  close(){
     this.setState({show: false})
  }


  render() {
    return (
      <Modal show={this.state.show} onHide={this.close}>
        <Modal.Header>
            <Modal.Title>{this.state.title}</Modal.Title>
        </Modal.Header>
       
        
         <Modal.Body>
            <Row>
                &nbsp; {"   info:  "} {this.state.msg} 
            </Row>
           </Modal.Body>   
       
        <Modal.Footer>
            <Button onClick={this.close}>关闭</Button>
        </Modal.Footer>
    </Modal>
    )
  }
}




exports.Notification= Notification;

