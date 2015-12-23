import React from 'react'
import ReactDOM from 'react-dom'
import autobind from 'autobind-decorator'
import _ from 'lodash'

import Box from './Box'
import boardActions from '../actions/board'

@autobind
class Block extends React.Component {
  constructor(props) {
    var p = _.clone(props)
    p.layout = p.layout.map((info, i) => {
      info.id = i
      return info
    })
    super(p)
    this.state = {

    }
  }

  componentDidMount() {

  }

  render() {
    return (
      <div style={this._getCss()} onMouseDown={this._handleMouseDown}>
      {
        this.props.layout.map((info, i) => {
          return <Box key={i} ref={`box-${i}`} {...info}/>
        })
      }
      </div>
    )
  }

  get w() {
    return this.props.w
  }

  get h() {
    return this.props.h
  }

  toJson() {
    return _.map(this.refs, (box) => {
      return box.toJson()
    })
  }

  _getCss() {
    return {
      border: 'solid'
    , width: this.props.w
    , height: this.props.h
    }
  }

  _handleMouseDown(e) {
    boardActions.setActiveBlock(this)
  }
}

Block.propTypes = {

}

Block.defaultProps = {

}

export default Block
