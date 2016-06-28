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
            data: {}
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
        data: {}
      })
  }

  render() {
    const divStyle = {
      height: '800px'
    }

    return (
      <div {...this.props}>

    <div>
     <div id="palette" style={divStyle}>

          <ul className="submenu">
                                {
                                    _.keys(cm).map((component, i) => {
                                    //  console.log(i)
                                      return (
                                  <li key={i} >
                                  <a href="#" key={i}
                                    onClick={this._newComponentFuns[component]}
                                  >
                                <i className="fa  fa-file-o"></i> {component}
                                </a></li>
                                )
                                    })
                            }
          </ul>

</div>
<div id="workspace"></div>
</div>

      <h5 className={"text-center"} style={{ color: '#fff' }}><i className={"fa fa-cog fa-1.5x "} ></i>组件列表</h5>

        {/* <ButtonGroup vertical block>
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
        </ButtonGroup> */}
      </div>
    )
  }
}

LeftNav.propTypes = {
  modals: React.PropTypes.object
}

LeftNav.defaultProps = {

}
