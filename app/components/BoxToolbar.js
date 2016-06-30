import React from 'react'
import autobind from 'autobind-decorator'
import { ButtonGroup } from 'react-bootstrap'
import { computed } from 'mobx'
import { observer } from 'mobx-react'
import classnames from 'classnames'

import mobxBoard from '../mobx/board-store'

import { BoxButton } from './Block'

import styles from '../css/app.css'


@observer
@autobind
export default class BoxToolbar extends React.Component {
  _zIndexUp() {
    mobxBoard.addZIndex(1)
  }

  _zIndexDown() {
    mobxBoard.addZIndex(-1)
  }

  _removeBox() {
    mobxBoard.removeBox()
  }

  _openConfig() {
    alert('FIXME: Find a workaround to open box config')
  }

  @computed
  get showBoxToolbar() {
    return mobxBoard.activeBox !== undefined
  }

  render() {
    return (
      <ButtonGroup
        className={classnames(
          styles.box_toolbar, { hidden: !this.showBoxToolbar }
        )}
      >
        <BoxButton onClick={this._zIndexUp} icon="chevron-up"/>
        <BoxButton onClick={this._zIndexDown} icon="chevron-down"/>
        <BoxButton onClick={null} icon="retweet"/>
        <BoxButton onClick={this._openConfig} icon="cog"/>
        <BoxButton onClick={this._removeBox} icon="remove"/>
      </ButtonGroup>
    )
  }
}

BoxToolbar.propTypes = {

}

BoxToolbar.defaultProps = {

}
