import React from 'react'

class Text extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: this.props.text
    }
  }

  componentDidMount() {
    // boardStore.getState()
  }

  render() {
    return (
      <div {...this.props} className='box-content text'>
        <textarea
            style={{
              height: '100%'
            , width: '100%'
            , resize: 'none'
            , overflow: 'hidden'
            }}
            readOnly={!this.props.edit}
            disabled={!this.props.edit}
            value={this.state.text}
            onChange={this._handleChange.bind(this)} />
      </div>
    )
  }

  toJson() {
    return {
      text: this.state.text
    }
  }

  _handleChange(event) {
    this.setState({
      text: event.target.value
    })
  }
}

Text.propTypes = {
  text: React.PropTypes.string
}

Text.defaultProps = {
  text: 'default'
}

export default Text
