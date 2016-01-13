import React from 'react'
import autobind from 'autobind-decorator'
import _ from 'lodash'

import {Button, ButtonGroup, Glyphicon} from 'react-bootstrap'

import Box from './Box'
import uiActions from '../actions/ui'
import selectActions from '../actions/select'

import styles from '../css/block.css'

@autobind
class Block extends React.Component {
  constructor(props) {
    var p = _.clone(props)
    p.boxes = p.boxes.map((info, i) => {
      info.id = i
      return info
    })
    super(p)
    this.state = {
      w: this.props.w || 800
    , h: this.props.h || 600
    , img: null
    , boxes: this.props.boxes
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

  render() {
    return (
      <div {...this.props} style={this._getCss()} className={styles.block}
          onMouseDown={this._handleMouseDown}>
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
                onClick={uiActions.openBlockConfig}>
          <Glyphicon glyph='cog'/>
        </Button>
        <Button className={styles.box_button} disabled
                onClick={null}>
          <Glyphicon glyph='plus'/>
        </Button>
        <Button className={styles.box_button} disabled
                onClick={null}>
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

  removeBox(target) {
    this.setState({boxes: this.state.boxes.filter((box) => {
      return box.id !== target.id
    })})
  }

  get w() {
    return this.state.w
  }

  get h() {
    return this.state.h
  }

  get img() {
    return this.state.img
  }

  toJson() {
    return {
      boxes: _.map(this.refs, box => { return box.toJson() })
    , w: this.state.w
    , h: this.state.h
    , img: this.state.img
    }
  }

  createBox(info) {
    this.state.boxes.push(info)
    this.setState({
      boxes: this.state.boxes
    })
  }

  _getCss() {
    return {
      border: 'solid'
    , width: this.state.w
    , height: this.state.h
    , backgroundImage: this.state.img ? `url(${this.state.img})` : 'none'
    }
  }

  _handleMouseDown() {
    selectActions.setActiveBlock(this)
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
