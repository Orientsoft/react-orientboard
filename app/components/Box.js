import React from 'react'
import ReactDOM from 'react-dom'
import _ from 'lodash'
import boardActions from '../actions/board'
import boardStore from '../stores/board'
import classnames from 'classnames'
import cm from '../lib/components'
import {Button, ButtonGroup, Glyphicon} from 'react-bootstrap'
import Reflux from 'reflux'
import autobind from 'autobind-decorator'

import styles from '../css/box.css'

@autobind
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
          onMouseDown={this._startDrag}
          onMouseUp={this._stopDrag}
          style={this._getCss()}>



        <div className={`${styles.rotate} ${styles.anchor}`}
             onMouseDown={this._startRotate}/>
        <div className={`${styles.scale} ${styles.anchor}`}
             onMouseDown={this._startResize}/>
        {
          function() {
            let child = cm[this.props.type]
            let props = _.clone(this.props)
            props.edit = (this.state.boardState.mode === 'edit')
            props.ref = 'content'
            props.className = styles.box_content
            return React.createElement(child, props)
          }.bind(this)()
        }

        <ButtonGroup className={styles.box_toolbar}>
          <Button className={styles.box_button}
                  onClick={this.addZIndex.bind(this, 1)}>
            <Glyphicon glyph='chevron-up'/>
          </Button>
          <Button className={styles.box_button}
                  onClick={this.addZIndex.bind(this, -1)}>
            <Glyphicon glyph='chevron-down'/>
          </Button>
          <Button className={styles.box_button}
                  onClick={this.openConfig}>
            <Glyphicon glyph='cog'/>
          </Button>
          <Button className={styles.box_button}
                  onClick={this.destroy}>
            <Glyphicon glyph='remove'/>
          </Button>

        </ButtonGroup>
      </div>
    )
  }

  get w() {
    return this.state.w
  }

  get h() {
    return this.state.h
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
      'x', 'y', 'z', 'h' , 'w', 'rotate', 'id'
    ])
    j.id = this.props.id
    j.type = this.props.type
    j.data = {}
    if (this.refs.content.toJson)
      j.data = this.refs.content.toJson()
    return j
  }

  get id() {
    return this.props.id
  }

  openConfig() {
    if (this.refs.content.openConfig)
      this.refs.content.openConfig()
  }

  destroy() {
    boardActions.removeBox(this)
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
