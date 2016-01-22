import React from 'react'
import { Navbar, NavItem, Nav, Input } from 'react-bootstrap'
import autobind from 'autobind-decorator'
import _ from 'lodash'

import uiActions from '../actions/ui'
import styles from '../css/app.css'
import selectActions from '../actions/select'
import selectStore from '../stores/select'
import boardStore from '../stores/board'
import boardActions from '../actions/board'

@autobind
export default class TopNav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      board: {},
    }
  }

  componentDidMount() {
    selectStore.listen((newState) => {
      this.setState(newState)
    })
  }


  _hangleChange(e) {
    const board = boardStore.findBoard({ name: e.target.value })
    selectActions.setActiveBoard(board)
  }

  _setPublishMode() {
    uiActions.setMode('publish')
  }

  _setEditMode() {
    uiActions.setMode('edit')
  }

  render() {
    return (
      <Navbar className={styles.navbar}>
        <Navbar.Header>
          <Navbar.Brand>
            <a href='#'>OrientSoft</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} onClick={this._setPublishMode}>
            Publish
          </NavItem>
          <NavItem eventKey={2} onClick={this._setEditMode}>
            Edit
          </NavItem>
          <NavItem eventKey={4} onClick={boardActions.saveBoard}>
            Save
          </NavItem>
          <NavItem eventKey={5} onClick={uiActions.openBoardConfig}>
            Create Board
          </NavItem>
          <NavItem eventKey={6} onClick={boardActions.getDisplayLink}>
            Get Link
          </NavItem>
          <NavItem eventKey={6}
            onClick={() => {
              boardActions.removeBoard({
                name: _.get(this.state, 'board.name'),
              })
            }}
          >
            Remove Board
          </NavItem>
          <Input type='select' value={_.get(this.state, 'board.name')}
            onChange={this._hangleChange}
          >
          {
            this.props.boards.map((board, i) => {
              return <option key={i} value={board.name}>{board.name}</option>
            })
          }
          </Input>

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
