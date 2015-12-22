import React from 'react'
import pubsub from 'pubsub-js'

class Text extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: this.props.text
    }
  }

  componentDidMount() {
    // boardStore.getState()
    pubsub.publish('new-text', this.props.text)
  }

  render() {
    return (
      <div {...this.props}>
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
    pubsub.publish('new-text', event.target.value)
  }
}

Text.propTypes = {
  text: React.PropTypes.string
}

Text.defaultProps = {
  text: 'default'
}

export default Text
