import React from 'react'
import {Navbar, NavItem, Nav, Input} from 'react-bootstrap'
import autobind from 'autobind-decorator'

import boardActions from '../actions/board'
import uiActions from '../actions/ui'
import styles from '../css/app.css'
import selectActions from '../actions/select'
import tmpStore from '../stores/tmp'
import tmpActions from '../actions/tmp'

@autobind
export default class TopNav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // boards: this.props.boards
      board: ''
    }
  }

  render() {
    return (
      <Navbar className={styles.navbar}>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">OrientSoft</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1}
              onClick={()=>{boardActions.changeMode('publish')}}>
            Publish
          </NavItem>
          <NavItem eventKey={2} onClick={()=>{boardActions.changeMode('edit')}}>
            Edit
          </NavItem>
          <NavItem eventKey={4}
              onClick={tmpActions.saveBoard}>
            Save
          </NavItem>
          <NavItem eventKey={5} onClick={uiActions.openBoardConfig}>
            Create Board
          </NavItem>
          <Input type='select' value={this.state.board}
              onChange={this._hangleChange}>
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

  _hangleChange(e) {
    console.log('change', e.target.value)
    this.setState({board: e.target.value})
    let board = tmpStore.findBoard({name: e.target.value})
    console.log(board)
    selectActions.setActiveBoard(board)
  }
}

TopNav.propTypes = {

}

TopNav.defaultProps = {

}
