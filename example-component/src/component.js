import React from 'react'
import classnames from 'classnames'
import autobind from 'autobind-decorator'
import styles from '../css/component.css'

@autobind
class ExampleComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <div {...this.props}>
        {/*Your layout goes here*/}
        <h1>Example</h1>
      </div>
    )
  }

  toJson() {
    // return the data you want to save as an object
    return {

    }
  }
}

// ExampleComponent.propTypes = {
//   master: React.PropTypes.object
// , edit: React.PropTypes.bool
// }
//
// ExampleComponent.defaultProps = {
//   master: {}
// , edit: false
// }

export default ExampleComponent
