import React from 'react'
import _ from 'lodash'
import autobind from 'autobind-decorator'
import {
  Button, ButtonGroup
} from 'react-bootstrap'

import blockActions from '../actions/block'
import blockStore from '../stores/block'
import boxActions from '../actions/box'
import boxStore from '../stores/box'
import uiStore from '../stores/ui'
import selectActions from '../actions/select'
import selectStore from '../stores/select'
import boardStore from '../stores/tmp'
import boardActions from '../actions/tmp'

import Board from './Board'
import BlockConfigModal from './BlockConfig'
import BoardConfigModal from './BoardConfig'
import BoxToolbar from './BoxToolbar'
import TopNav from './TopNav'

import styles from '../css/app.css'

import cm from '../lib/components'

@autobind
class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      layout: this.props.layout || []
    , boards: []
    , board: null
    }
  }

  render() {
    return (
      <div>
        <TopNav boards={this.state.boards}/>
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
                      blockActions.newComponent({
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
            <Board
              board={this.state.board}
              ref='board'/>
          </div>
        </div>

        {/* Modals for creating new boxes */}
        <div >
        {
          _.map(cm, (component, i) => {
            if (component.NewComponentConfig)
              return <component.NewComponentConfig
                  key={i} ref={`new-${i}`} actions={blockActions}/>
          })
        }
        </div>
      </div>
    )
  }

  componentDidMount() {
    boxActions.init(this)
    boardStore.listen((newState) => {
      this.setState(newState)
      if ((!this.state.board) && newState.boards[0]) {
        selectActions.setActiveBoard(newState.boards[0])
      }
    })
    uiStore.listen((newState) => {
      this.setState(newState)
    })
    selectStore.listen((newState) => {
      this.setState(newState)
    })
    selectActions.setApp(this)
    boardActions.listBoards()
  }
}

App.propTypes = {

}

App.defaultProps = {

}

export default App
