import React from 'react'

import Board from './Board'


// TODO: l1 better display page

export default class Display extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {

  }

  render() {
    return (
      <div>
        <Board board={this.props.board} mode="publish" />
      </div>
    )
  }
}

Display.propTypes = {
  board: React.PropTypes.object,
}

Display.defaultProps = {

}
