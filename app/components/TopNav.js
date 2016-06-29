import React from 'react'
import {
  Navbar, NavItem, Nav, Input,
} from 'react-bootstrap'
import autobind from 'autobind-decorator'
import _ from 'lodash'
import classnames from 'classnames'
import { observer } from 'mobx-react'

import styles from '../css/app.css'
import boardActions from '../actions/board'

import mobxBoard from '../mobx/board-store'
import mobxUI from '../mobx/ui-store'

@observer
@autobind
export default class TopNav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      board: {},
    }
  }

  _hangleChange(e) {
    const newAvtiveBoard = mobxBoard.boards.find(
      board => board.name === e.target.value
    )
    if (newAvtiveBoard) mobxBoard.activeBoard = newAvtiveBoard
  }

  _setPublishMode() {
    // uiActions.setMode('publish')
    boardActions.publishBoard()
  }

  _createBoard() {
    mobxUI.boardAction = 'create'
    mobxUI.showBoardConfig = true
  }

  _renameBoard() {
    mobxUI.boardAction = 'rename'
    mobxUI.showBoardConfig = true
  }

  _cloneBoard() {
    mobxUI.boardAction = 'clone'
    mobxUI.showBoardConfig = true
  }

  _returnHome() {
    const link = window.location.origin + `/`
    window.location = link
  }

  _saveBoard() {
    return mobxBoard.saveActiveBoard()
  }

  _removeBoard() {
    // TODO: use custom comfirmation UI
    if (window.confirm(`你确定要删除${_.get(mobxBoard.activeBoard, 'name')}吗?`))
      mobxBoard.removeBoard()
  }

  render() {
    var divStyle = {
      marginBottom: '15px',
      marginTop: '20px',
    }

    return (
      <Navbar className={classnames(styles.navbar, 'navbar-custom')}
        style={divStyle}
      >
        <Navbar.Header>
          <div className="row">
            <br/>

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
            <i className="fa  fa-file-o"/>创建
          </NavItem>
          <NavItem eventKey={2} onClick={this._saveBoard}>
            <i className="fa  fa-save"/>保存
          </NavItem>
          <NavItem eventKey={3} onClick={this._cloneBoard}>
            <i className="fa  fa-clone"/>克隆
          </NavItem>
          <NavItem eventKey={4} onClick={this._renameBoard}>
            <i className="fa  fa-external-link"/>更名
          </NavItem>
          <NavItem eventKey={5} onClick={this._removeBoard}>
            <i className="fa  fa-trash-o"/>删除
          </NavItem>
          <NavItem eventKey={6} onClick={boardActions.getDisplayLink}>
             <i className="fa fa-link"/>获取URL
          </NavItem>
          <NavItem eventKey={7} onClick={boardActions.openDisplayLink}>
             <i className="fa fa-eye"/>预览
          </NavItem>
           <NavItem eventKey={8} onClick={this._setPublishMode}>
            <i className="fa fa-share"/>发布
          </NavItem>
        </Nav>
      </Navbar>
    )
  }

}
