import React from 'react'
import { ButtonGroup, Button } from 'react-bootstrap'
import cm from '../lib/components'
import _ from 'lodash'
import blockActions from '../actions/block'
import autobind from 'autobind-decorator'

@autobind
export default class LeftNav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
    this._newComponentFuns = Object.create(null)
    _.keys(cm).map((component) => {
      this._newComponentFuns[component] = () => {
        if (this.props.modals[`new-${component}`])
          this.props.modals[`new-${component}`].open()
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
    })
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
                onClick={this._newComponentFuns[component]}
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
  modals: React.PropTypes.object,
}

LeftNav.defaultProps = {

}
