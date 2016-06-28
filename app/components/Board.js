import React from 'react'
import autobind from 'autobind-decorator'
import _ from 'lodash'

import Block from './Block'

@autobind
export default class Board extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      board: this.props.board
    }
  }

  toJson() {
    const keys = _.keys(this.refs).filter((key) => {
      return /^box-/.test(key)
    })
    const board = _.clone(this.props.board)
    delete board._id
    board.blocks = keys.map((key) => {
      return this.refs[key].toJson()
    })
    return board
  }

  render() {
    return (
      <div >
      {
        this.props.board
        ?
        this.props.board.blocks.map((block, i) => {
          return (
            <Block config={block} ref={`box-${i}`}
              // adding board name to key attribute distinguishes blocks of
              // diffrent boards, and block id distinguishes blocks in the
              // same board. These are necessary for correct rendering
              key={`${this.props.board.name}-${block.id}`} mode={this.props.mode}
            />
          )
        })
        :
        null
      }
      </div>
    )
  }
}

Board.propTypes = {
  board: React.PropTypes.object,
  mode: React.PropTypes.string
}

Board.defaultProps = {

}
