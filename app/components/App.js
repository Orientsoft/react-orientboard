import React from 'react'
import ReactDOM from 'react-dom'
import _ from 'lodash'

import {Navbar, Nav, NavItem} from 'react-bootstrap'

import boardActions from '../actions/board'

import Box from './Box'
import Block from './Block'

let mew = _.range(0, 100).map(() => {
  return '喵'
}).join('')

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">OrientSoft</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1} onClick={()=>{boardActions.changeMode('publish')}}>
              publish
            </NavItem>
            <NavItem eventKey={2} onClick={()=>{boardActions.changeMode('edit')}}>
              edit
            </NavItem>
            <NavItem eventKey={3}
              onClick={()=>{
                let currentLayout = []
                for (var ref in this.refs) {
                  currentLayout.push(this.refs[ref].toJson())
                }
                console.log(JSON.stringify(currentLayout, null, 2))
              }}>
              getjson
            </NavItem>

          </Nav>
        </Navbar>

        <Block layout={this.props.layout} h={600} w={800}/>

      </div>
    )
  }

  componentDidMount() {
    boardActions.init()
  }
}

App.propTypes = {

}

App.defaultProps = {

}

export default App
