import React from 'react'
import { ButtonGroup, Button } from 'react-bootstrap'
import cm from '../lib/components'
import _ from 'lodash'
import blockActions from '../actions/block'

export default class LeftNav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  _newComponent(component) {
    if (this.refs[`new-${component}`])
      this.refs[`new-${component}`].open()
    else
      blockActions.newComponent({
        x: 0,
        y: 0,
        h: 100,
        w: 100,
        rotate: 0,
        type: component,
        data: {},
      })
  }

  render() {
    return (
      <div {...this.props}>
        New Component
        <ButtonGroup vertical block>
        {
          _.keys(cm).map((component, i) => {
            return (
              <Button key={i}
                // TODO: make _newComponent for components static
                onClick={this._newComponent.bind(this, component)}
              >
                {component}
              </Button>
            )
          })
        }
        </ButtonGroup>
      </div>
    )
  }
}

LeftNav.propTypes = {

}

LeftNav.defaultProps = {

}
