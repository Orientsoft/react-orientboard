import React from 'react'
import ReactDOM from 'react-dom'
import _ from 'lodash'
import boardActions from '../actions/board'
import boardStore from '../stores/board'
import classnames from 'classnames'
import cm from '../lib/components'
import {Button, Glyphicon} from 'react-bootstrap'
import Reflux from 'reflux'

import styles from '../css/box.css'

class Box extends React.Component {
  constructor(props) {
    super(props)
    let classes = {}
    classes[styles.active] = false
    classes[styles.box] = true
    this.state = {
      h: props.h
    , w: props.w
    , x: props.x
    , y: props.y
    , rotate: props.rotate
    , z: props.z
    , active: false
    , classes: classes
    , edit: true
    , boardState: {}
    }
  }

  componentDidMount() {
    // console.log(styles)
    this.setState({boardState: boardStore.getState()})
    boardStore.listen((newState) => {
      this.setState({
        boardState: newState
      })
    })
  }

  render() {
    return (
      <div className={classnames(this.state.classes)}
          onClick={()=>{
            if (this.state.boardState.mode === 'edit')
              boardActions.setActiveBox(this)
          }}
          onMouseDown={this._startDrag.bind(this)}
          onMouseUp={this._stopDrag.bind(this)}
          style={this._getCss()}>
        <Button className={styles['box-button']}
                bsStyle='success'
                onClick={this.addZIndex.bind(this, 1)}>
          <Glyphicon glyph='plus'/>
        </Button>
        <Button className={`${styles['box-button']} ${styles.zdown}`}
                bsStyle='danger'
                onClick={this.addZIndex.bind(this, -1)}>
          <Glyphicon glyph='minus'/>
        </Button>
        <div className={`${styles.rotate} ${styles.anchor}`}
             onMouseDown={this._startRotate.bind(this)}/>
        <div className={`${styles.scale} ${styles.anchor}`}
             onMouseDown={this._startResize.bind(this)}/>
        {
          function() {
            let child = cm[this.props.type]
            let props = _.clone(this.props.data)
            props.edit = (this.state.boardState.mode === 'edit')
            props.ref = 'content'
            props.className = styles['box-content']
            return React.createElement(child, props)
          }.bind(this)()
        }
      </div>
    )
  }

  activate() {
    if (!this.state.active) {
      console.log('activating')
      this.setState({
        active: true
      , classes: _.set(this.state.classes, styles.active, true)
      })
    }
  }

  deactivate() {
    this.setState({
      active: false
    , classes: _.set(this.state.classes, styles.active, false)
    })
  }

  moveTo(x, y) {
    this.state.x = x
    this.state.y = y
    this.setState(this.state)
  }

  rotate(theta) {
    this.setState({
      rotate: theta
    })
  }

  resize(h, w) {
    this.setState({
      h: h
    , w: w
    })
  }

  addZIndex(amount) {
    this.setState({
      z: (this.state.z + amount < 0) ? 0 : (this.state.z + amount)
    })
  }

  toJson() {
    let j = _.pick(this.state, [
      'x', 'y', 'z', 'h' , 'w', 'rotate'
    ])
    j.type = this.props.type
    j.data = {}
    if (this.refs.content.toJson)
      j.data = this.refs.content.toJson()
    return j
  }

  _getCenter() {
    let rect = ReactDOM.findDOMNode(this).getBoundingClientRect()
    return {
      x: (rect.left + rect.right) / 2
    , y: (rect.bottom + rect.top) / 2
    }
  }

  _getCss() {
    return {
      height: this.state.h
    , width: this.state.w
    , zIndex: this.state.z
    , WebkitTransform: `translate(${this.state.x}px, ${this.state.y}px)`
      + ` rotate(${this.state.rotate}deg)`
    }
  }

  _startDrag(e) {
    if (this.state.active)
      boardActions.startDrag( e.clientX - this.state.x
                            , e.clientY - this.state.y)
  }

  _stopDrag() {
    if (this.state.active)
      boardActions.stopDrag()
  }

  _startRotate(e) {
    if (this.state.active)
      boardActions.startRotate(
        this._getCenter(), e.clientX, e.clientY, this.state.rotate
      )
    e.stopPropagation()
  }

  _startResize(e) {
    boardActions.startResize(this.state.h, this.state.w, e.clientX, e.clientY)
    e.stopPropagation()
  }

}

Box.propTypes = {
  h: React.PropTypes.number
, w: React.PropTypes.number
, x: React.PropTypes.number
, y: React.PropTypes.number
, z: React.PropTypes.number
, rotate: React.PropTypes.number
}

Box.defaultProps = {
  h: 100
, w: 100
, x: 0
, y: 0
, z: 0
, rotate: 0
}

export default Box