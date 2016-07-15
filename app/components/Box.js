import React from 'react'
import ReactDOM from 'react-dom'
import _ from 'lodash'
import classnames from 'classnames'
import cm from '../lib/components'
import autobind from 'autobind-decorator'
import mqtt from 'mqtt'

import mobxBoard from '../mobx/board-store'
import mobxUI from '../mobx/ui-store'
import { startRotate, startResize, startDrag, stopMovement } from '../mobx/move'
import { observer } from 'mobx-react'

import styles from '../css/box.css'

import mqttPool from '../lib/mqttPool'
import timerPool from '../lib/timerPool'
import socketIOPool from '../lib/socketiopool'

import { startDynamic, stopDynamic } from '../lib/util'


@observer
@autobind
class Box extends React.Component {
  openConfig() {
    if (this.refs.content.openConfig)
      this.refs.content.openConfig()
  }

  _getCenter() {
    const rect = ReactDOM.findDOMNode(this).getBoundingClientRect()
    return {
      x: (rect.left + rect.right) / 2,
      y: (rect.bottom + rect.top) / 2,
    }
  }

  _getCss() {
    const box = this.props.box
    return {
      height: box.h,
      width: box.w,
      zIndex: box.z,
      WebkitTransform: `translate(${box.x}px, ${box.y}px)`
      + ` rotate(${box.rotate}deg)`,
    }
  }

  _isActive() {
    return this.props.box === mobxBoard.activeBox
  }

  _startDrag(e) {
    if (this._isActive())
      startDrag(
        e.clientX - this.props.box.x, e.clientY - this.props.box.y
      )
  }

  _stopDrag() {
    if (this._isActive())
      stopMovement()
  }

  _startRotate(e) {
    if (this._isActive())
      startRotate(
        this._getCenter(), e.clientX, e.clientY, this.props.box.rotate
      )
    e.stopPropagation()
  }

  _startResize(e) {
    startResize(this.props.box.h, this.props.box.w, e.clientX, e.clientY)
    e.stopPropagation()
  }

  _selectSelf() {
    console.log(mobxBoard.editable)
    if (mobxBoard.editable) {
      mobxBoard.activeBox = this.props.box
      mobxBoard.activeBoxRef = this
    }
  }

  render() {
    const box = this.props.box
    return (
      <div
        className={classnames({
          [styles.box]: true,
          [styles.active]: box === mobxBoard.activeBox,
        })}
        onClick={this._selectSelf}
        onMouseDown={this._startDrag}
        onMouseUp={stopMovement}
        style={this._getCss()}
      >
        <span className={styles.pos_info}>
          x: {box.x}, y: {box.y}, h: {box.h},
          w: {box.w}, rotate: {box.rotate}
        </span>

        <div className={`${styles.rotate} ${styles.anchor}`}
          onMouseDown={this._startRotate}
        />
        <div className={`${styles.scale} ${styles.anchor}`}
          onMouseDown={this._startResize}
        />
        {
          // 在这里就可以使用全局的props,把相关push,socketio的库派生出来
          (function renderContent() {
            const child = cm[box.type]
            const props = _.pick(box, ['x', 'y', 'h', 'w', 'rotate'])

            console.log('creat dynamic lib')
            // props.data = this.props.data
            props.data = box.data
            props.edit = mobxBoard.editable
            props.ref = 'content'
            props.theme = mobxUI.theme
            props.socketioPool = socketIOPool
            props.mqtt = mqtt
            props.mqttPool = mqttPool
            props.timerPool = timerPool
            props.startDynamic = startDynamic
            props.stopDynamic = stopDynamic
            props.className = styles.box_content
            return React.createElement(child, props)
          })()
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
  id: React.PropTypes.string,
  box: React.PropTypes.object,
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
