import React from 'react'
import ReactDOM from 'react-dom'
import _ from 'lodash'
import blockActions from '../actions/block'
import classnames from 'classnames'
import cm from '../lib/components'
import autobind from 'autobind-decorator'
import boxActions from '../actions/box'
import selectActions from '../actions/select'
import uiStore from '../stores/ui'

import styles from '../css/box.css'

@autobind
class Box extends React.Component {
  constructor(props) {
    super(props)
    const classes = Object.create(null)
    classes[styles.active] = false
    classes[styles.box] = true
    this.state = {
      h: props.h,
      w: props.w,
      x: props.x,
      y: props.y,
      rotate: props.rotate,
      z: props.z,
      active: false,
      classes,
      mode: 'edit',
      boardState: {},
    }
  }

  componentDidMount() {
    this.unsubUiStore = uiStore.listen((newState) => {
      this.setState({
        mode: newState.mode,
        theme: newState.theme,
      })
    })
  }

  componentWillUnmount() {
    this.unsubUiStore()
  }

  get w() {
    return this.state.w
  }

  get h() {
    return this.state.h
  }

  activate() {
    if (!this.state.active) {
      console.log('activating', this.props.id)
      this.setState({
        active: true,
        classes: _.set(this.state.classes, styles.active, true),
      })
    }
  }

  deactivate() {
    this.setState({
      active: false,
      classes: _.set(this.state.classes, styles.active, false),
    })
  }

  moveTo(x, y) {
    this.state.x = x
    this.state.y = y
    this.setState(this.state)
  }

  rotate(theta) {
    this.setState({ rotate: theta })
  }

  resize(h, w) {
    this.setState({ h, w })
  }

  addZIndex(amount) {
    this.setState({
      z: (this.state.z + amount < 0) ? 0 : (this.state.z + amount),
    })
  }

  toJson() {
    const j = _.pick(this.state, [
      'x', 'y', 'z', 'h', 'w', 'rotate', 'id',
    ])
    j.id = this.props.id
    j.type = this.props.type
    j.data = {}
    if (this.refs.content.toJson)
      j.data = this.refs.content.toJson()
    return j
  }

  get id() { return this.props.id }

  openConfig() {
    if (this.refs.content.openConfig)
      this.refs.content.openConfig()
  }

  destroy() {
    blockActions.removeBox(this)
  }

  _onStoreChange(newState) {
    this.setState({ boardState: newState })
  }

  _getCenter() {
    const rect = ReactDOM.findDOMNode(this).getBoundingClientRect()
    return {
      x: (rect.left + rect.right) / 2,
      y: (rect.bottom + rect.top) / 2,
    }
  }

  _getCss() {
    return {
      height: this.state.h,
      width: this.state.w,
      zIndex: this.state.z,
      WebkitTransform: `translate(${this.state.x}px, ${this.state.y}px)`
      + ` rotate(${this.state.rotate}deg)`,
    }
  }

  _startDrag(e) {
    if (this.state.active)
      boxActions.startDrag(
        e.clientX - this.state.x, e.clientY - this.state.y
      )
  }

  _stopDrag() {
    if (this.state.active)
      boxActions.stopDrag()
  }

  _startRotate(e) {
    if (this.state.active)
      boxActions.startRotate(
        this._getCenter(), e.clientX, e.clientY, this.state.rotate
      )
    e.stopPropagation()
  }

  _startResize(e) {
    boxActions.startResize(this.state.h, this.state.w, e.clientX, e.clientY)
    e.stopPropagation()
  }

  _selectSelf() {
    if (this.state.mode === 'edit')
      selectActions.setActiveBox(this)
  }

  render() {
    return (
      <div className={classnames(this.state.classes)}
        onClick={this._selectSelf}
        onMouseDown={this._startDrag}
        onMouseUp={this._stopDrag}
        style={this._getCss()}
      >
        <span className={styles.pos_info}>
          x: {this.state.x}, y: {this.state.y}, h: {this.state.h},
          w: {this.state.w}, rotate: {this.state.rotate}
        </span>

        <div className={`${styles.rotate} ${styles.anchor}`}
          onMouseDown={this._startRotate}
        />
        <div className={`${styles.scale} ${styles.anchor}`}
          onMouseDown={this._startResize}
        />
        {
          function renderContent() {
            const child = cm[this.props.type]
            const props = _.pick(this.state, ['x', 'y', 'h', 'w', 'rotate'])
            props.data = this.props.data
            props.edit = (this.state.mode === 'edit')
            props.ref = 'content'
            props.theme = this.state.theme
            props.className = styles.box_content
            return React.createElement(child, props)
          }.bind(this)()
        }
      </div>
    )
  }
}

Box.propTypes = {
  h: React.PropTypes.number,
  w: React.PropTypes.number,
  x: React.PropTypes.number,
  y: React.PropTypes.number,
  z: React.PropTypes.number,
  rotate: React.PropTypes.number,
  data: React.PropTypes.object,
  type: React.PropTypes.string,
}

Box.defaultProps = {
  h: 100,
  w: 100,
  x: 0,
  y: 0,
  z: 0,
  rotate: 0,
}

export default Box
