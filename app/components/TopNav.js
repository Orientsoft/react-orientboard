import React from 'react'
import {
  Navbar, NavItem, Nav, Input,
} from 'react-bootstrap'
import autobind from 'autobind-decorator'
import _ from 'lodash'
import classnames from 'classnames'
import { observer } from 'mobx-react'

import styles from '../css/app.css'
import { openWindow, copyToClipboard } from '../lib/util'
import mobxBoard from '../mobx/board-store'
import mobxUI from '../mobx/ui-store'

@observer
@autobind
export default class TopNav extends React.Component {
  _hangleChange(e) {
    const newAvtiveBoard = mobxBoard.boards.find(
      board => board.name === e.target.value
    )
    if (newAvtiveBoard) mobxBoard.activeBoard = newAvtiveBoard
  }

  _publishBoard() {
    // TODO: Custom notification
    if (mobxBoard.publishBoard()) {
      alert('发布成功')
      return openWindow(
        `${window.location.origin}/publish/${mobxBoard.activeBoard._id}.html`
      )
    }
    alert('发布失败')
  }

  _createBoard() {
    mobxUI.boardAction = 'create'
    mobxUI.showBoardConfig = true
  }

  _updateBoard() {
    mobxUI.boardAction = 'update'
    mobxUI.showBoardConfig = true
  }

  _cloneBoard() {
    mobxUI.boardAction = 'clone'
    mobxUI.showBoardConfig = true
  }

  _returnHome() {
    window.location = `${window.location.origin}/`
  }

  _saveBoard() {
    return mobxBoard.saveActiveBoard()
  }

  _removeBoard() {
    // TODO: use custom comfirmation UI
    if (window.confirm(`你确定要删除${_.get(mobxBoard.activeBoard, 'name')}吗?`))
      mobxBoard.removeBoard()
  }

  _showDisplayLink() {
    copyToClipboard(
      `${window.location.origin}/api/display/${mobxBoard.activeBoard._id}`
    )
  }

  _openDisplayLink() {
    openWindow(
      `${window.location.origin}/api/display/${mobxBoard.activeBoard._id}`
    )
  }

  render() {
    // TODO: Use css instead
    const divStyle = {
      marginBottom: '15px',
      marginTop: '20px',
    }

    return (
      <Navbar className={classnames(styles.navbar, 'navbar-custom')}
        style={divStyle}
      >
        <Navbar.Header>
          <div className="row">
            <br />
            <Input type="select"
              value={_.get(mobxBoard.activeBoard, 'name')}
              onChange={this._hangleChange}
            >
            {
              mobxBoard.boards.map(board => (
                <option key={board.id} value={board.name}>{board.name}</option>
              ))
            }
            </Input>
          </div>
        </Navbar.Header>

        <Nav className="pull-right">
          <NavItem eventKey={1} onClick={this._createBoard}>
            <i className="fa  fa-file-o" />创建
          </NavItem>
          <NavItem eventKey={2} onClick={this._saveBoard}>
            <i className="fa  fa-save" />保存
          </NavItem>
          <NavItem eventKey={3} onClick={this._cloneBoard}>
            <i className="fa  fa-clone" />克隆
          </NavItem>
          <NavItem eventKey={4} onClick={this._updateBoard}>
            <i className="fa  fa-external-link" />更改
          </NavItem>
          <NavItem eventKey={5} onClick={this._removeBoard}>
            <i className="fa  fa-trash-o" />删除
          </NavItem>
          <NavItem eventKey={6} onClick={this._showDisplayLink}>
             <i className="fa fa-link" />获取URL
          </NavItem>
          <NavItem eventKey={7} onClick={this._openDisplayLink}>
             <i className="fa fa-eye" />预览
          </NavItem>
           <NavItem eventKey={8} onClick={this._publishBoard}>
            <i className="fa fa-share" />发布
          </NavItem>
        </Nav>
      </Navbar>
    )
  }

}
