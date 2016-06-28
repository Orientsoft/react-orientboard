import React from "react"
import { Modal, Button, Input, Tabs, Tab } from "react-bootstrap"
import autobind from "autobind-decorator"
import _ from "lodash"

import blockActions from "../actions/block"
import uiActions from "../actions/ui"
import selectStore from "../stores/select"


@autobind
class BlockConfigModal extends React.Component {
  constructor(props) {
    super(props)
    console.log("props", props)
    this.state = {
      w: 800,
      h: 600,
      pubType: (this.props.data && this.props.data.pubType) ? this.props.data.pubType : "public"
    }
  }

  componentDidMount() {
    selectStore.listen((newState) => {
      this.setState(newState)
    })

    console.log(this.state)
  }

  close() {
    uiActions.closeBlockConfig()
  }

  update() {
    const w = this.refs.width.getValue(),
      h = this.refs.height.getValue(),
      img = this.refs.backimg.getValue(),
      pubType = this.refs.pubType.getValue(),
      password = this.refs.password.getValue(),
      desc = this.refs.desc.getValue()

    this.setState({ w, h, img, pubType, password })
    blockActions.setBlockConfig({ w, h, img, pubType, password, desc })
    console.log(w, h, img, pubType, password, desc)
    this.close()
  }

  handleChange(e) {
    this.setState({ pubType: this.refs.pubType.getValue(),
                    password: this.refs.password.getValue() })
  }

  render() {
    const privateShow = (this.state.pubType === "private") ? true : false
    const authShow = (this.state.pubType === "auth") ? true : false

    let bid = ""
    if (this.state.board)
      bid = this.state.board._id


    return (
      <Modal show={this.props.show}>
        <Modal.Header >Block Config</Modal.Header>
        <Modal.Body >
          {/* TODO: l3 add validation needed */}
           <Tabs defaultActiveKey={1}>
            <Tab eventKey={1} title="基础设置">
              <Input ref="desc" type="text" label="描述" defaultValue={_.get(this.state, 'block.desc')}/>
              <Input ref="width" type="text" label="width" defaultValue={_.get(this.state, 'block.w')}/>
              <Input ref="height" type="text" label="height" defaultValue={_.get(this.state, 'block.h')}/>
              <Input ref="backimg" type="text" label="background image" defaultValue={_.get(this.state, 'block.img')}/>
            </Tab>
             <Tab eventKey={2} title="发布设置">
             <Input type="select" label="发布方式" ref="pubType" defaultValue={this.state.pubType}
                        onChange={ this.handleChange }>
                <option value="public">公开访问</option>
                <option value="private">密码访问</option>
                <option value="auth">授权</option>
              </Input>

              <div className={privateShow ? '' : 'hidden' }>
               <span>URL</span>
               <Input type="text" ref="url" defaultValue={window.location.origin + `/api/display/${bid}`} readOnly />
               <span>密码</span>
               <Input type="text" ref="password" defaultValue="welcome1" />
              </div>

              <div className={authShow ? '' : 'hidden'}>
              <span>授权访问,暂未实现</span>

            </div>

            </Tab>
          </Tabs>
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
  show: React.PropTypes.bool
}

BlockConfigModal.defaultProps = {

}

export default BlockConfigModal
