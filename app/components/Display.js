import React from 'react'

import Board from './Board'

export default class Display extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <div >
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
