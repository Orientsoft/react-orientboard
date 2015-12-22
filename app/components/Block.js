import React from 'react'
import ReactDOM from 'react-dom'
import autobind from 'autobind-decorator'

import Box from './Box'
import boardActions from '../actions/board'

@autobind
class Block extends React.Component {
  constructor(props) {
    super(props)
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
