import React from 'react'
import cm from '../lib/components'
import _ from 'lodash'
import autobind from 'autobind-decorator'
import { observer } from 'mobx-react'

import mobxBoard from '../mobx/board-store'

function createBox(config) {
  mobxBoard.createBox(config)
}

@observer
@autobind
export default class LeftNav extends React.Component {
  _createBoxFun(type) {
    return () => {
      if (this.refs[`new-${type}`])
        this.refs[`new-${type}`].open()
      else
        mobxBoard.createBox({ type })
    }
  }

  render() {
    // TODO: use css
    const divStyle = {
      height: '800px',
    }

    return (
      <div {...this.props}>
        <div>
          <div id="palette" style={divStyle}>
            <ul className="submenu">
            {
              _.keys(cm).map((type, i) => {
                return (
                  <li key={i} >
                    <a href="#" key={i}
                      onClick={this._createBoxFun(type)}
                    >
                      <i className="fa  fa-file-o"></i> {type}
                    </a>
                  </li>
                )
              })
            }
            </ul>
          </div>

          <div>
          {
            _.map(cm, (component, type) => (
              // Backwards compatibility, may consider refactoring component
              <component.NewComponentConfig
                key={`new-${type}`} ref={`new-${type}`}
                actions={{ newComponent: createBox }}
              />
            ))
          }
          </div>

        </div>

        <h5 className="text-center" style={{ color: '#fff' }}>
          <i className={'fa fa-cog fa-1.5x'} />组件列表
        </h5>

      </div>
    )
  }
}

LeftNav.propTypes = {
  modals: React.PropTypes.object,
}

LeftNav.defaultProps = {

}
