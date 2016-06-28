import React from 'react'
import {
  Navbar, NavItem, Nav, Input,
} from 'react-bootstrap'
import autobind from 'autobind-decorator'
import _ from 'lodash'
import classnames from 'classnames'

import uiActions from '../actions/ui'
import styles from '../css/app.css'
import selectActions from '../actions/select'
import selectStore from '../stores/select'
import boardStore from '../stores/board'
import boardActions from '../actions/board'

import mobxBoard from '../mobx/board-store'

@autobind
export default class TopNav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      board: {},
    }
  }

  _hangleChange(e) {
    const board = boardStore.findBoard({ name: e.target.value })
    selectActions.setActiveBoard(board)
  }

  _setPublishMode() {
    // uiActions.setMode('publish')
    boardActions.publishBoard()
  }

  _setEditMode() {
    uiActions.setMode('edit')
  }

  _returnHome() {
    const link = window.location.origin + `/`
    window.location = link
  }

  async _saveBoard() {
    console.log('save')
    const res = await mobxBoard.saveActiveBoard()
    console.log('save res', res)
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
              value={_.get(this.state, 'board.name')}
              onChange={this._hangleChange}
            >
            {
              this.props.boards.map((board, i) => {
                return <option key={i} value={board.name}>{board.name}</option>
              })
            }
            </Input>
          </div>
        </Navbar.Header>

        <Nav className="pull-right">
          <NavItem eventKey={5} onClick={() => {
            uiActions.openBoardConfig(null, 'create')
          }}>
            <i className="fa  fa-file-o"></i>创建
          </NavItem>

          <NavItem eventKey={4} onClick={this._saveBoard}>
            <i className="fa  fa-save"></i>保存
          </NavItem>

          <NavItem eventKey={10}
            onClick={() => {
              uiActions.openBoardConfig(
                `board_${new Date().getTime()}`, 'clone',
              )
            }}
          >
            <i className="fa  fa-clone"></i>克隆
          </NavItem>

          <NavItem  eventKey={9}
                    onClick={() => {
              uiActions.openBoardConfig(_.get(this.state, 'board.name'),'rename')
            }}
           >
          <i className="fa  fa-external-link"></i>更名
          </NavItem>

          <NavItem eventKey={8}
            onClick={() => {
                if (window.confirm('你确定要删除 '+_.get(this.state, 'board.name')+' 吗？')) {
                    boardActions.removeBoard({
                        name: _.get(this.state, 'board.name'),
                    })
                    return true;
                } else {
                    return false;
                }

            }}
          >
          <i className="fa  fa-trash-o"></i>删除
          </NavItem>

          <NavItem eventKey={6} onClick={boardActions.getDisplayLink}>
             <i className="fa fa-link"></i>获取URL
          </NavItem>
          <NavItem eventKey={7} onClick={boardActions.openDisplayLink}>
             <i className="fa fa-eye"></i>预览
          </NavItem>
           <NavItem eventKey={1} onClick={this._setPublishMode}>
            <i className="fa fa-share">发布</i>
          </NavItem>

        </Nav>
      </Navbar>
    )
  }

}

TopNav.propTypes = {
  boards: React.PropTypes.array,
}

TopNav.defaultProps = {

}
