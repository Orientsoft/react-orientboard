import React from 'react'

import Board from './Board'
import uiAction from '../actions/ui'

// TODO: l1 better display page

export default class Display extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  componentDidMount() {
    uiAction.setMode('publish')
  }

  render() {
    return (
      <div>
        <Board board={this.props.board}/>
      </div>
    )
  }
}

Display.propTypes = {
  board: React.PropTypes.object,
}

Display.defaultProps = {

}
