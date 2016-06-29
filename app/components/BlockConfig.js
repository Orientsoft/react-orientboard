import React from 'react'
import { Modal, Button, Input, Tabs, Tab } from 'react-bootstrap'
import autobind from 'autobind-decorator'
import { observer } from 'mobx-react'
import classnames from 'classnames'

import mobxUI from '../mobx/ui-store'
import mobxBoard from '../mobx/board-store'


@observer
@autobind
class BlockConfigModal extends React.Component {
  close() {
    mobxUI.showBlockConfig = false
  }

  update() {
    const block = mobxBoard.activeBlock
    block.w = this.refs.width.getValue()
    block.h = this.refs.height.getValue()
    block.img = this.refs.backimg.getValue()
    block.pubType = this.refs.pubType.getValue()
    block.password = this.refs.password.getValue()
    block.desc = this.refs.desc.getValue()

    this.close()
  }

  handleChange(e){
    this.setState({pubType:this.refs.pubType.getValue(),password:this.refs.password.getValue()})
  }

  render() {

    var privateShow=(this.state.pubType==='private')?true:false;
    var authShow=(this.state.pubType==='auth')?true:false;


    let bid='';
    if(this.state.board){
      bid=this.state.board._id;
    }
    const block = mobxBoard.activeBlock
    return (
      <Modal show={mobxUI.showBlockConfig}>
        <Modal.Header >Block Config</Modal.Header>
        <Modal.Body >
          {/* TODO: l3 add validation needed */}
          <Tabs defaultActiveKey={1}>
            <Tab eventKey={1} title="基础设置">
              <Input ref="desc" type="text" label="描述"
                defaultValue={block.desc}
              />
              <Input ref="width" type="text" label="width"
                defaultValue={block.w}
              />
              <Input ref="height" type="text" label="height"
                defaultValue={block.h}
              />
              <Input ref="backimg" type="text" label="background image"
                defaultValue={block.img}
              />
            </Tab>
            <Tab eventKey={2} title="发布设置">
              <Input type="select" label="发布方式" ref="pubType"
                defaultValue={this.state.pubType}
                onChange={this.handleChange}
              >
                <option value="public">公开访问</option>
                <option value="private">密码访问</option>
                <option value="auth">授权</option>
              </Input>

              <div className={classnames({ hidden: privateShow })}>
                <span>URL</span>
                <Input type="text" ref="url" readOnly
                  defaultValue={`${window.location.origin}/api/display/${bid}`}
                />
                <span>密码</span>
                <Input type="text" ref="password" defaultValue="welcome1" />
              </div>

              <div className={classnames({ hidden: authShow })}>
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
  show: React.PropTypes.bool,
}

BlockConfigModal.defaultProps = {

}

export default BlockConfigModal
