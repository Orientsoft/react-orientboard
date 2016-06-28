import React from 'react'
import _ from 'lodash'
import autobind from 'autobind-decorator'
import { observer } from 'mobx-react'

import blockActions from '../actions/block'
import mobxBoard from '../mobx/board-store'

import Board from './Board'
import BlockConfigModal from './BlockConfig'
import BoardConfigModal from './BoardConfig'
import BoxToolbar from './BoxToolbar'
import TopNav from './TopNav'
import LeftNav from './LeftNav'

import styles from '../css/app.css'

import cm from '../lib/components'
import { init as initBoxMovement } from '../mobx/move'

@observer
@autobind
class App extends React.Component {
  componentDidMount() {
    mobxBoard.fetchBoards()
    initBoxMovement()
  }

  render() {
    return (
      <div>
        <div id="topnav" className="container-fluid p-t-60">
          <TopNav/>
        </div>

        <BlockConfigModal/>
        <BoardConfigModal/>

        <div>
          <LeftNav className={styles.left_nav} modals={this.refs}/>
          <div className={styles.workspace}>
            <BoxToolbar/>
            <Board board={mobxBoard.activeBoard}/>
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

export default App
