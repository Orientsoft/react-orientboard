import React from 'react'
import ReactDOM from 'react-dom'
import _ from 'lodash'
import autobind from 'autobind-decorator'

import {
  Navbar, Nav, NavItem, Button, Glyphicon, ButtonGroup
} from 'react-bootstrap'

import boardActions from '../actions/board'
import boardStore from '../stores/board'

import Box from './Box'
import Block from './Block'

import styles from '../css/app.css'

import cm from '../lib/components'

let mew = _.range(0, 100).map(() => {
  return '喵'
}).join('')

@autobind
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      layout: this.props.layout || []
    }
  }

  render() {
    return (
      <div>
        <Navbar className={styles.navbar}>
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
                let currentLayout = this.refs.block_1.toJson()
                // for (var ref in this.refs) {
                //   currentLayout.push(this.refs[ref].toJson())
                // }
                console.log(JSON.stringify(currentLayout, null, 2))
              }}>
              getjson
            </NavItem>

          </Nav>
        </Navbar>

        <div>
          <div className={styles.left_nav}>
            New Component
            <ButtonGroup vertical block>
            {
              _.keys(cm).map((component) => {
                return (
                    <Button onClick={() => {
                      boardActions.newComponent({
                        x: 0
                      , y: 0
                      , h: 100
                      , w: 100
                      , rotate: 0
                      , type: component
                      , data:{}
                      })
                    }}>
                      {component}
                    </Button>
                )
              })
            }
            </ButtonGroup>

          </div>
          <div className={styles.block}>
            <Block ref='block_1' layout={this.state.layout} h={600} w={800}/>
          </div>
        </div>



      </div>
    )
  }

  componentDidMount() {
    boardActions.init(this)
    if (this.props.layout) {
      boardActions.loadLayout(this.props.layout)
    }
    boardStore.listen((newState) => {
      if (newState.layout !== this.state.layout) {
        this.setState({
          layout: newState.layout
        })
      }
    })
  }

  getLayout() {
    let currentLayout = this.refs.block_1.toJson()
    return currentLayout
  }
}

App.propTypes = {

}

App.defaultProps = {

}

export default App
