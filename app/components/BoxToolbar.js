import React from 'react'
import autobind from 'autobind-decorator'
import {ButtonGroup, Glyphicon, Button} from 'react-bootstrap'

import boxActions from '../actions/box'
import styles from '../css/app.css'

@autobind
export default class BoxToolbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <ButtonGroup className={styles.box_toolbar}>
        <Button className={styles.box_button}
                onClick={boxActions.addZIndex.bind(null, 1)}>
          <Glyphicon glyph='chevron-up'/>
        </Button>
        <Button className={styles.box_button}
                onClick={boxActions.addZIndex.bind(null, -11)}>
          <Glyphicon glyph='chevron-down'/>
        </Button>
        <Button className={styles.box_button}
                onClick={boxActions.openConfig}>
          <Glyphicon glyph='cog'/>
        </Button>
        <Button className={styles.box_button}
                onClick={boxActions.removeBox}>
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
