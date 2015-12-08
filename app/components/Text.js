import React from 'react'

class Text extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <div {...this.props} className='box-content text'>
        <p >{this.props.text}</p>
      </div>
    )
  }

  toJson() {

  }
}

Text.propTypes = {
  text: React.PropTypes.string
}

Text.defaultProps = {
  text: 'default'
}

export default Text
