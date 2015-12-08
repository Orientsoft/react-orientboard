import React from 'react'
import ReactDOM from 'react-dom'
import _ from 'lodash'
import boardActions from '../actions/board'
import boardStore from '../stores/board'
import classnames from 'classnames'
import cm from '../lib/components'
import {Button, Glyphicon} from 'react-bootstrap'
import Reflux from 'reflux'

class Box extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      h: props.h
    , w: props.w
    , left: props.x
    , top: props.y
    , rotate: props.rotate
    , z: props.z
    , active: false
    , classes: {
        'active': false
      , 'box': true
      }
    , edit: true
    , boardState: {}
    }
  }

  componentDidMount() {
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
        <Button className='box-button zup'
                bsStyle='success'
                onClick={()=>{boardActions.addZIndex(1)}}>
          <Glyphicon glyph='plus'/>
        </Button>
        <Button className='box-button zdown'
                bsStyle='danger'
                onClick={()=>{boardActions.addZIndex(-1)}}>
          <Glyphicon glyph='minus'/>
        </Button>
        <div className='rotate anchor'
             onMouseDown={this._startRotate.bind(this)}/>
        <div className='scale anchor'
             onMouseDown={this._startScale.bind(this)}/>
        {
          () => {
            let child = cm[this.props.type]
            let props = _.omit(this.props, 'type')
            return React.createElement(child, props)
          }()
        }
      </div>
    )
  }

  activate() {
    if (!this.state.active) {
      console.log('activating')
      this.setState({
        active: true
      , classes: _.set(this.state.classes, 'active', true)
      })
    }
  }

  deactivate() {
    this.setState({
      active: false
    , classes: _.set(this.state.classes, 'active', false)
    })
  }

  moveTo(x, y) {
    this.state.left = x
    this.state.top = y
    this.setState(this.state)
  }

  rotate(theta) {
    this.setState({
      rotate: theta
    })
  }

  scale(h, w) {
    this.setState({
      h: h
    , w: w
    })
  }

  addZIndex(amount) {
    this.setState({
      z: this.state.z + amount
    })
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
    , WebkitTransform: this._getTransform()
    }
  }

  _getTransform() {
    return `translate(${this.state.left}px, ${this.state.top}px)`
      + ` rotate(${this.state.rotate}deg)`
  }

  _startDrag(e) {
    if (this.state.active)
      boardActions.startDrag( e.clientX - this.state.left
                            , e.clientY - this.state.top)
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

  _startScale(e) {
    boardActions.startScale(this.state.h, this.state.w, e.clientX, e.clientY)
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
