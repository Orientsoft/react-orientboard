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
import BlockConfigModal from './BlockConfig'

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
              Publish
            </NavItem>
            <NavItem eventKey={2} onClick={()=>{boardActions.changeMode('edit')}}>
              Edit
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
            <NavItem eventKey={4}
                onClick={boardActions.saveBoard}>
              Save
            </NavItem>

          </Nav>
        </Navbar>

        <div >
          {
            _.map(cm, (component, i) => {
              if (component.NewComponentConfig)
                return <component.NewComponentConfig
                    key={i} ref={`new-${i}`} actions={boardActions}/>
            })
          }
        </div>

        <BlockConfigModal show={this.state.showBlockConfig}/>

        <div>
          <div className={styles.left_nav}>
            New Component
            <ButtonGroup vertical block>
            {
              _.keys(cm).map((component, i) => {
                return (
                  <Button key={i} onClick={() => {
                    if (this.refs[`new-${component}`])
                      this.refs[`new-${component}`].open()
                    else {
                      boardActions.newComponent({
                        x: 0
                      , y: 0
                      , h: 100
                      , w: 100
                      , rotate: 0
                      , type: component
                      , data:{}
                      })
                    }
                  }}>
                    {component}
                  </Button>
                )
              })
            }
            </ButtonGroup>

          </div>
          <div className={styles.workspace}>
            <div >
            <ButtonGroup className={styles.box_toolbar}>
              <Button className={styles.box_button}
                      onClick={boardActions.addZIndex.bind(null, 1)}>
                <Glyphicon glyph='chevron-up'/>
              </Button>
              <Button className={styles.box_button}
                      onClick={boardActions.addZIndex.bind(null, -11)}>
                <Glyphicon glyph='chevron-down'/>
              </Button>
              <Button className={styles.box_button}
                      onClick={boardActions.openConfig}>
                <Glyphicon glyph='cog'/>
              </Button>
              <Button className={styles.box_button}
                      onClick={boardActions.removeBox}>
                <Glyphicon glyph='remove'/>
              </Button>

            </ButtonGroup>
            </div>
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
      // if (newState.layout !== this.state.layout) {
      //   this.setState({
      //     layout: newState.layout
      //   })
      // }
      this.setState(newState)
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
