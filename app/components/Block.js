import React from 'react'
import autobind from 'autobind-decorator'
import _ from 'lodash'
import classnames from 'classnames'

import { Button, ButtonGroup, Glyphicon } from 'react-bootstrap'

import Box from './Box'
import uiActions from '../actions/ui'
import selectActions from '../actions/select'
import boardActions from '../actions/board'

import styles from '../css/block.css'

@autobind
class Block extends React.Component {
  constructor(props) {
    const p = _.clone(props)
    p.config.boxes = p.config.boxes.map((info, i) => {
      info.id = i
      return info
    })
    super(p)
    const classes = Object.create(null)
    classes[styles.block] = true
    classes[styles.active] = false

    this.state = {
      w: this.props.config.w || 800,
      h: this.props.config.h || 600,
      img: this.props.config.img || null,
      boxes: this.props.config.boxes,
      active: false,
      classes,
    }
  }

  componentDidMount() {
    // this.unsub = boardStore.listen((newState) => {
    //   if (newState.blockConfig) {
    //     this.setState(newState.blockConfig)
    //   }
    // })
  }

  componentWillUnmount() {
    // this.unsub()
  }

  setConfig(config) {
    this.setState(config)
  }

  toJson() {
    return {
      boxes: _.map(this.refs, box => { return box.toJson() }),
      w: this.state.w,
      h: this.state.h,
      img: this.state.img,
    }
  }

  createBox(info) {
    this.state.boxes.push(info)
    this.setState({
      boxes: this.state.boxes,
    })
  }

  _getCss() {
    return {
      width: this.state.w,
      height: this.state.h,
      backgroundImage: this.state.img ? `url(${this.state.img})` : 'none',
    }
  }

  _handleMouseDown() {
    selectActions.setActiveBlock(this)
  }

  removeBox(target) {
    this.setState({
      boxes: this.state.boxes.filter((box) => {
        return box.id !== target.id
      }),
    })
  }

  activate() {
    this.setState({
      active: true,
      classes: _.set(this.state.classes, styles.active, true),
    })
  }

  deactivate() {
    this.setState({
      active: false,
      classes: _.set(this.state.classes, styles.active, false),
    })
  }

  get w() { return this.state.w }

  get h() { return this.state.h }

  get img() { return this.state.img }

  get id() { return this.props.id }

  render() {
    return (
      <div {...this.props} style={this._getCss()}
        className={classnames(this.state.classes)}
        onMouseDown={this._handleMouseDown}
      >
        <ButtonGroup className={styles.block_toolbar} vertical>
        <Button className={styles.box_button} disabled
          onClick={null}
        >
          <Glyphicon glyph='chevron-up'/>
        </Button>
        <Button className={styles.box_button} disabled
          onClick={null}
        >
          <Glyphicon glyph='chevron-down'/>
        </Button>
        <Button className={styles.box_button}
          onClick={uiActions.openBlockConfig}
        >
          <Glyphicon glyph='cog'/>
        </Button>
        <Button className={styles.box_button}
          onClick={boardActions.addBlock}
        >
          <Glyphicon glyph='plus'/>
        </Button>
        <Button className={styles.box_button} disabled
          onClick={null}
        >
          <Glyphicon glyph='remove'/>
        </Button>
        </ButtonGroup>
        {
          this.state.boxes.map((info, i) => {
            return <Box key={i} ref={`box-${i}`} {...info}/>
          })
        }
      </div>
    )
  }
}

Block.propTypes = {
  config: React.PropTypes.object,
}

Block.defaultProps = {

}

export default Block
