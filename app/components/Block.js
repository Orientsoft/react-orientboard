import React from 'react'
import ReactDOM from 'react-dom'
import autobind from 'autobind-decorator'
import _ from 'lodash'

import {Button, ButtonGroup, Glyphicon} from 'react-bootstrap'

import Box from './Box'
import boardActions from '../actions/board'
import boardStore from '../stores/board'

import styles from '../css/block.css'

@autobind
class Block extends React.Component {
  constructor(props) {
    var p = _.clone(props)
    p.layout = p.layout.map((info, i) => {
      info.id = i
      return info
    })
    super(p)
    let {w, h} = boardStore.getState().blockConfig || {w: 800, h: 600}
    this.state = {
      w: w || 800
    , h: h || 600
    }
  }

  componentDidMount() {
    this.unsub = boardStore.listen((newState) => {
      if (newState.blockConfig) {
        this.setState(newState.blockConfig)
      }
    })
  }

  componentWillUnmount() {
    this.unsub()
  }

  // shouldComponentUpdate(newProps) {
  //   return !_.isEqual(newProps.layout, this.props.layout)
  // }

  render() {
    return (
      <div {...this.props} style={this._getCss()} className={styles.block} onMouseDown={this._handleMouseDown}>
        <ButtonGroup className={styles.block_toolbar} vertical>
        <Button className={styles.box_button} disabled
                onClick={null}>
          <Glyphicon glyph='chevron-up'/>
        </Button>
        <Button className={styles.box_button} disabled
                onClick={null}>
          <Glyphicon glyph='chevron-down'/>
        </Button>
        <Button className={styles.box_button}
                onClick={boardActions.openBlockConfig}>
          <Glyphicon glyph='cog'/>
        </Button>
        <Button className={styles.box_button} disabled
                onClick={null}>
          <Glyphicon glyph='remove'/>
        </Button>
        </ButtonGroup>
      {
        this.props.layout.map((info, i) => {
          return <Box key={i} ref={`box-${i}`} {...info}/>
        })
      }
      </div>
    )
  }

  get w() {
    return this.state.w
  }

  get h() {
    return this.state.h
  }

  toJson() {
    return _.map(this.refs, (box) => {
      return box.toJson()
    })
  }

  _getCss() {
    return {
      border: 'solid'
    , width: this.state.w
    , height: this.state.h
    }
  }

  _handleMouseDown(e) {
    boardActions.setActiveBlock(this)
  }

  setConfig(config) {
    this.setState(config)
  }
}

Block.propTypes = {

}

Block.defaultProps = {

}

export default Block
