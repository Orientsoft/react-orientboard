import React from 'react'
import autobind from 'autobind-decorator'
import { ButtonGroup, Glyphicon, Button } from 'react-bootstrap'

import boxActions from '../actions/box'
import styles from '../css/app.css'
import blockActions from '../actions/block'

@autobind
export default class BoxToolbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  _zIndexUp() {
    boxActions.addZIndex(1)
  }

  _zIndexDown() {
    boxActions.addZIndex(-1)
  }

  render() {
    return (
      <ButtonGroup className={styles.box_toolbar}>
        <Button className={styles.box_button} onClick={this._zIndexUp}>
          <Glyphicon glyph='chevron-up'/>
        </Button>
        <Button className={styles.box_button} onClick={this._zIndexDown}>
          <Glyphicon glyph='chevron-down'/>
        </Button>
        <Button className={styles.box_button} onClick={boxActions.openConfig}>
          <Glyphicon glyph='cog'/>
        </Button>
        <Button className={styles.box_button} onClick={blockActions.removeBox}>
          <Glyphicon glyph='remove'/>
        </Button>

      </ButtonGroup>
    )
  }
}

BoxToolbar.propTypes = {

}

BoxToolbar.defaultProps = {

}
