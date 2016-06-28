import React from 'react'
import autobind from 'autobind-decorator'
import _ from 'lodash'

import Block from './Block2'

import { observer } from 'mobx-react'

@observer
@autobind
export default class Board extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      board: this.props.board,
    }
  }

  toJson() {
    const keys = _.keys(this.refs).filter((key) => (/^box-/.test(key)))
    const board = _.clone(this.props.board)
    delete board._id
    board.blocks = keys.map((key) => (this.refs[key].toJson()))
    return board
  }

  render() {
    return (
      <div>
      {
        this.props.board2 ? this.props.board2.blocks.map((block, i) => (
          <Block config={block} ref={`box-${i}`}
            // adding board name to key attribute distinguishes blocks of
            // diffrent boards, and block id distinguishes blocks in the
            // same board. These are necessary for correct rendering
            key={`${this.props.board2.name}-${block.id}`}
            block={block}
            mode={this.props.mode}
          />
        )) : null
      }
      </div>
    )
  }
}

Board.propTypes = {
  board: React.PropTypes.object,
  board2: React.PropTypes.object,
  mode: React.PropTypes.string,
}

Board.defaultProps = {

}
