import React from 'react'
import autobind from 'autobind-decorator'
import { observer } from 'mobx-react'

import Block from './Block'


@observer
@autobind
export default class Board extends React.Component {
  render() {
    return (
      <div {...this.props}>
      {
        this.props.board ? this.props.board.blocks.map(block => (
          <Block
            key={`${this.props.board.name}-${block.id}`}
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
  mode: React.PropTypes.string,
}
