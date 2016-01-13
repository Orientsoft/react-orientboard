import React from 'react'
import {Navbar, NavItem, Nav, Input} from 'react-bootstrap'

import boardActions from '../actions/board'
import uiActions from '../actions/ui'
import styles from '../css/app.css'

export default class TopNav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      boards: this.props.boards
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
          <NavItem eventKey={1} onClick={()=>{boardActions.changeMode('publish')}}>
            Publish
          </NavItem>
          <NavItem eventKey={2} onClick={()=>{boardActions.changeMode('edit')}}>
            Edit
          </NavItem>
          <NavItem eventKey={3}
            onClick={()=>{
              let currentLayout = this.refs.block_1.toJson()
              console.log(JSON.stringify(currentLayout, null, 2))
            }}>
            getjson
          </NavItem>
          <NavItem eventKey={4}
              onClick={boardActions.saveBoard}>
            Save
          </NavItem>
          <NavItem eventKey={5} onClick={uiActions.openBoardConfig}>
            Create Board
          </NavItem>
          <Input type='select'>
          {
            this.state.boards.map((board, i) => {
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

}

TopNav.defaultProps = {

}
