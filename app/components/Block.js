import React from 'react'
import autobind from 'autobind-decorator'
import classnames from 'classnames'
import { observer } from 'mobx-react'
import { Button, ButtonGroup, Glyphicon } from 'react-bootstrap'

import Box from './Box'

import mobxBoard from '../mobx/board-store'
import mobxUI from '../mobx/ui-store'

import styles from '../css/block.css'


export const BoxButton = (props) => (
  <Button className={styles.box_button} {...props}>
    <Glyphicon glyph={props.icon} />
  </Button>
)

BoxButton.propTypes = {
  // onClick: React.PropTypes.function,
  icon: React.PropTypes.string,
}


@observer
@autobind
export default class Block extends React.Component {
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

    // TODO: use css and class instead
    if (!mobxBoard.editable) {
      css.margin = 'auto'
      css.position = 'absolute'
    } else {
      css.margin = '10px 5px 15px 50px'
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

  _removeBlock() {
    mobxBoard.removeBlock()
  }

  _moveUp() {
    mobxBoard.moveBlock(-1)
  }

  _moveDown() {
    mobxBoard.moveBlock(1)
  }

  _openConfig() {
    mobxUI.showBlockConfig = true
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
          <BoxButton onClick={this._moveUp} icon="chevron-up" />
          <BoxButton onClick={this._moveDown} icon="chevron-down" />
          <BoxButton onClick={this._openConfig} icon="cog" />
          <BoxButton onClick={this._createBlock} icon="plus" />
          <BoxButton onClick={this._removeBlock} icon="remove" />
        </ButtonGroup>
        {
          this.props.block.boxes.map(box => (<Box key={box.id} box={box} />))
        }
      </div>
    )
  }
}

Block.propTypes = {
  block: React.PropTypes.object,
}
