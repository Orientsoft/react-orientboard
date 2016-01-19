import React from 'react'
import _ from 'lodash'
import autobind from 'autobind-decorator'

import blockActions from '../actions/block'
import boxActions from '../actions/box'
import uiStore from '../stores/ui'
import selectActions from '../actions/select'
import selectStore from '../stores/select'
import boardStore from '../stores/board'
import boardActions from '../actions/board'

import Board from './Board'
import BlockConfigModal from './BlockConfig'
import BoardConfigModal from './BoardConfig'
import BoxToolbar from './BoxToolbar'
import TopNav from './TopNav'
import LeftNav from './LeftNav'

import styles from '../css/app.css'

import cm from '../lib/components'

@autobind
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      boards: [],
      board: null,
    }
  }

  componentDidMount() {
    boxActions.init(this)
    boardStore.listen((newState) => {
      this.setState(newState)
      if ((!this.state.board) && newState.boards[0])
        selectActions.setActiveBoard(newState.boards[0])
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

  render() {
    return (
      <div>
        <TopNav boards={this.state.boards}/>
        <BlockConfigModal show={this.state.showBlockConfig}/>
        <BoardConfigModal show={this.state.showBoardConfig}/>

        <div>
          <LeftNav className={styles.left_nav} modals={this.refs}/>
          <div className={styles.workspace}>
            <BoxToolbar />
            <Board board={this.state.board} ref='board'/>
          </div>
        </div>

        {/* Modals for creating new boxes, invisible */}
        <div>
        {
          _.map(cm, (component, i) => {
            if (component.NewComponentConfig)
              return (
                <component.NewComponentConfig
                  key={i} ref={`new-${i}`} actions={blockActions}
                />
              )
          })
        }
        </div>
      </div>
    )
  }

}

App.propTypes = {

}

App.defaultProps = {

}

export default App
