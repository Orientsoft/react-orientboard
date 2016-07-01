import React from 'react'
import _ from 'lodash'
import autobind from 'autobind-decorator'
import {
  Button, ButtonGroup,
} from 'react-bootstrap'

import blockActions from '../actions/block'
import boxActions from '../actions/box'
import uiStore from '../stores/ui'
import selectActions from '../actions/select'
import selectStore from '../stores/select'

import Board from './Board'
import BlockConfigModal from './BlockConfig'
import BoardConfigModal from './BoardConfig'
import BoxToolbar from './BoxToolbar'

import styles from '../css/app.css'

import cm from '../lib/components'

@autobind
class App extends React.Component {
  constructor(props) {
    super(props)

    let testBoard
    if (this.props.testComponent)
      testBoard = {
        name: `testboard-${this.props.testComponent[0].type}`,
        blocks: [{
          w: 800,
          h: 600,
          boxes: this.props.testComponent,
        }],
      }

    this.state = {
      boards: [],
      board: this.props.testComponent ? testBoard : null,
    }
  }

  componentDidMount() {
    boxActions.init(this)
    selectActions.setActiveBoard(this.state.board)
    uiStore.listen((newState) => {
      this.setState(newState)
    })
    selectStore.listen((newState) => {
      this.setState(newState)
    })
    selectActions.setApp(this)
  }

  render() {
    return (
      <div>
        <BlockConfigModal show={this.state.showBlockConfig} />
        <BoardConfigModal show={this.state.showBoardConfig} />

        <div>
          <div className={styles.left_nav}>
            New Component
            <ButtonGroup vertical block>
            {
              _.keys(cm).map((component, i) => {
                return (
                  <Button key={i}
                    onClick={() => {
                      if (this.refs[`new-${component}`])
                        this.refs[`new-${component}`].open()
                      else
                        blockActions.createBox({
                          x: 0,
                          y: 0,
                          h: 100,
                          w: 100,
                          rotate: 0,
                          type: component,
                          data: {},
                        })
                    }}
                  >
                    {component}
                  </Button>
                )
              })
            }
            </ButtonGroup>

          </div>
          <div className={styles.workspace}>
            <BoxToolbar />
            <Board board={this.state.board} ref="board" />
          </div>
        </div>

        {/* Modals for creating new boxes */}
        <div >
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
  testComponent: React.PropTypes.object,
}

App.defaultProps = {

}

export default App
