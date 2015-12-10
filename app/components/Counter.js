import React from 'react'
import pubsub from 'pubsub-js'

export default class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  componentDidMount() {
    pubsub.subscribe('new-text', (topic, data) => {
      this.setState({
        count: data.length
      })
    })
  }

  render() {
    return (
      <div >
        <p>{this.state.count}</p>
      </div>
    )
  }

  toJson() {
    return {
      src: this.props.src
    }
  }
}

Counter.propTypes = {
  src: React.PropTypes.string
}

Counter.defaultProps = {
  src: ''
}
