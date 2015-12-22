import React from 'react'

export default class Image extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <div >
        <img src={this.props.src} height='100%' width='100%' draggable={false}/>
      </div>
    )
  }

  toJson() {
    return {
      src: this.props.src
    }
  }
}

Image.propTypes = {
  src: React.PropTypes.string
}

Image.defaultProps = {
  src: ''
}
