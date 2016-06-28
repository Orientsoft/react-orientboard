import React from 'react'
import autobind from 'autobind-decorator'
import _ from 'lodash'
import classnames from 'classnames'
import { observer } from 'mobx-react'

import { Button, ButtonGroup, Glyphicon } from 'react-bootstrap'

import Box from './Box'
import uiActions from '../actions/ui'
import selectActions from '../actions/select'
import boardActions from '../actions/board'

import mobxBoard from '../mobx/board-store'

import styles from '../css/block.css'

@observer
@autobind
class Block extends React.Component {
  constructor() {
    super()
    this._moveUp = boardActions.moveBlock.bind(boardActions, -1)
    this._moveDown = boardActions.moveBlock.bind(boardActions, 1)
  }

  _getCss() {
    const block = this.props.block
    const css = {
      width: block.w,
      height: block.h,
      backgroundImage: block.img ? `url(${block.img})` : 'none',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    }

    if (this.props.mode === 'publish') {
      css.margin = 'auto'
      css.position = 'absolute'
    } else {
      css.margin = '10px 5px 15px 50px'
      //css.marginTop='30px'
    }

    return css
  }

  _handleMouseDown() {
    mobxBoard.activeBlock = this.props.block
  }

  _createBlock() {
    const block = mobxBoard.activeBlock
    mobxBoard.createBlock({
      w: block.w,
      h: block.h,
      img: block.img,
      boxes: [],
    })
  }

  render() {
    return (
      <div {...this.props} style={this._getCss()}
        className={classnames({
          [styles.block]: true,
          [styles.active]: this.props.block === mobxBoard.activeBlock,
        })}
        onMouseDown={this._handleMouseDown}
      >
        <ButtonGroup className={styles.block_toolbar} vertical>
        <Button className={styles.box_button}
          onClick={this._moveUp}
        >
          <Glyphicon glyph="chevron-up"/>
        </Button>
        <Button className={styles.box_button}
          onClick={this._moveDown}
        >
          <Glyphicon glyph="chevron-down"/>
        </Button>
        <Button className={styles.box_button}
          onClick={uiActions.openBlockConfig}
        >
          <Glyphicon glyph="cog"/>
        </Button>
        <Button className={styles.box_button}
          onClick={this._createBlock}
        >
          <Glyphicon glyph="plus"/>
        </Button>
        <Button className={styles.box_button}
          onClick={boardActions.removeBlock}
        >
          <Glyphicon glyph="remove"/>
        </Button>
        </ButtonGroup>
        {
          this.props.block.boxes.map(box => (<Box key={box.id} box={box}/>))
        }
      </div>
    )
  }
}

Block.propTypes = {
  config: React.PropTypes.object,
  block: React.PropTypes.object,
}

Block.defaultProps = {

}

export default Block
