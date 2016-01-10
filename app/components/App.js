import React from 'react'
import _ from 'lodash'
import autobind from 'autobind-decorator'
import {
  Navbar, Nav, NavItem, Button, ButtonGroup, Input
} from 'react-bootstrap'

import boardActions from '../actions/board'
import boardStore from '../stores/board'
import blockActions from '../actions/block'
import blockStore from '../stores/block'
import boxActions from '../actions/box'
import boxStore from '../stores/box'

import Board from './Board'
import BlockConfigModal from './BlockConfig'
import BoardConfigModal from './BoardConfig'
import BoxToolbar from './BoxToolbar'

import styles from '../css/app.css'

import BoardManager from '../../lib/client'

import cm from '../lib/components'

let bm = new BoardManager()

@autobind
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      layout: this.props.layout || []
    , boards: []
    }
  }

  render() {
    console.log(this.props.testComponent)
    let testBoard = {
      name: `testboard-${this.props.testComponent[0].type}`
    , blocks: [
        {
          w: 800
        , h: 600
        , boxes: this.props.testComponent
        }
      ]
    }
    console.log(testBoard)
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
                console.log(JSON.stringify(currentLayout, null, 2))
              }}>
              getjson
            </NavItem>
            <NavItem eventKey={4}
                disabled={this.props.testComponent?true:false}
                onClick={() => {

                  let board = this.refs.board.toJson()
                  console.log('saving', board)
                  bm.update(_.pick(board, ['name']), board)
                }}>
              Save
            </NavItem>
            <NavItem eventKey={5} onClick={boardActions.openBoardConfig}>
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

        <div >
          {
            _.map(cm, (component, i) => {
              if (component.NewComponentConfig)
                return <component.NewComponentConfig
                    key={i} ref={`new-${i}`} actions={blockActions}/>
            })
          }
        </div>

        <BlockConfigModal show={this.state.showBlockConfig}/>
        <BoardConfigModal show={this.state.showBoardConfig}/>

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
                      blockActions.createBox({
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
            <BoxToolbar />
            <Board board={this.props.testComponent?testBoard:this.state.boards[0]} ref='board'/>
          </div>
        </div>
      </div>
    )
  }

  componentDidMount() {
    console.log('app did mount')
    boxActions.init(this)
    // if (this.props.layout) {
    //   boardActions.loadLayout(this.props.layout)
    // }
    boardStore.listen((newState) => {
      // if (newState.layout !== this.state.layout) {
      //   this.setState({
      //     layout: newState.layout
      //   })
      // }
      this.setState(newState)
    })
    boardActions.listBoards()
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
