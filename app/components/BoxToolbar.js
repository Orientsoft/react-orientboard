import React from 'react'
import autobind from 'autobind-decorator'
import { ButtonGroup, Glyphicon, Button } from 'react-bootstrap'

import boxActions from '../actions/box'
import styles from '../css/app.css'
import mobxBoard from '../mobx/board-store'

@autobind
export default class BoxToolbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
    }
  }

  _zIndexUp() {
    mobxBoard.addZIndex(1)
  }

  _zIndexDown() {
    mobxBoard.addZIndex(-1)
  }

  _removeBox() {
    mobxBoard.removeBox()
  }

  render() {
    return (
      <ButtonGroup className={styles.box_toolbar} show={this.props.show}>
        <Button className={styles.box_button} onClick={this._zIndexUp}>
          <Glyphicon glyph="chevron-up"/>
        </Button>
        <Button className={styles.box_button} onClick={this._zIndexDown}>
          <Glyphicon glyph="chevron-down"/>
        </Button>
         <Button className={styles.box_button} onClick={this._zIndexDown}>
          <Glyphicon glyph="retweet"/>
        </Button>

        <Button className={styles.box_button} onClick={boxActions.openConfig}>
          <Glyphicon glyph="cog"/>
        </Button>
        <Button className={styles.box_button} onClick={this._removeBox}>
          <Glyphicon glyph="remove"/>
        </Button>

      </ButtonGroup>
    )
  }
}

BoxToolbar.propTypes = {

}

BoxToolbar.defaultProps = {

}
