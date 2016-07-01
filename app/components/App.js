import React from 'react'
import autobind from 'autobind-decorator'
import { observer } from 'mobx-react'

import mobxBoard from '../mobx/board-store'
import { init as initBoxMovement } from '../mobx/move'

import Board from './Board'
import BlockConfigModal from './BlockConfig'
import BoardConfigModal from './BoardConfig'
import BoxToolbar from './BoxToolbar'
import TopNav from './TopNav'
import LeftNav from './LeftNav'

import styles from '../css/app.css'


@observer
@autobind
export default class App extends React.Component {
  componentDidMount() {
    mobxBoard.fetchBoards()
    initBoxMovement()
  }

  render() {
    return (
      <div>
        <div id="topnav" className="container-fluid p-t-60">
          <TopNav />
        </div>

        <BlockConfigModal />
        <BoardConfigModal />

        <div>
          <LeftNav className={styles.left_nav} modals={this.refs} />
          <div className={styles.workspace}>
            <BoxToolbar />
            <Board board={mobxBoard.activeBoard} />
          </div>
        </div>
      </div>
    )
  }
}
