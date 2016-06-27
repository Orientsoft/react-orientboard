import React from 'react'
import ReactDOM from 'react-dom'
import autobind from 'autobind-decorator'
import _ from 'lodash'
import classnames from 'classnames'

import { Button, ButtonGroup, Glyphicon } from 'react-bootstrap'

import Box from './Box'
import uiActions from '../actions/ui'
import selectActions from '../actions/select'
import boardActions from '../actions/board'

import styles from '../css/block.css'

@autobind
class Block extends React.Component {
  constructor(props) {
    const p = _.clone(props)
    p.config.boxes = p.config.boxes.map((info, i) => {
      info.id = i
      return info
    })
    super(p)
    const classes = Object.create(null)
    classes[styles.block] = true
    classes[styles.active] = false

    this.state = {
      w: this.props.config.w || 800,
      h: this.props.config.h || 600,
      img: this.props.config.img || null,
      pubType:this.props.config.pubType||'public',
      password:this.props.config.password||'welcome1',
      boxes: this.props.config.boxes,
      active: false,
      classes,
    }

    this._moveUp = boardActions.moveBlock.bind(boardActions, -1)
    this._moveDown = boardActions.moveBlock.bind(boardActions, 1)

    
  }

  componentDidMount() {
    // this.unsub = boardStore.listen((newState) => {
    //   if (newState.blockConfig) {
    //     this.setState(newState.blockConfig)
    //   }
    // })

     if(this.props.mode&&this.props.mode==='publish'){

    }else{
      selectActions.setActiveBlock(this);//组件加载后就自动变成ActiveBlock
     
    }
  }

  componentWillUnmount() {
    // this.unsub()
  }

  setConfig(config) {
    this.setState(config)
  }

  toJson() {
    return {
      boxes: _.map(this.refs, box => { return box.toJson() }),
      w: this.state.w,
      h: this.state.h,
      img: this.state.img,
      pubType:this.state.pubType,
      password:this.state.password,
      id: this.props.config.id,
    }
  }

  createBox(info) {
    this.state.boxes.push(info)
    this.setState({
      boxes: this.state.boxes,
    })
  }

  _getCss() {


    var css= {
      width: this.state.w,
      height: this.state.h,
      backgroundImage: this.state.img ? `url(${this.state.img})` : 'none',
      top: 0, 
      left: 0,
      bottom: 0,
      right: 0

    }
    if(this.props.mode==='publish'){
      css.margin='auto'
      css.position='absolute'
    }else{
      css.margin='10px 5px 15px 50px'
      //css.marginTop='30px'
    }
    return css;
  }

  _handleMouseDown() {
    selectActions.setActiveBlock(this)
  }

  removeBox(target) {
    this.state.boxes.forEach((box)=>{
      if(box.id == target.id){
        console.log("=====target",box)
      }
    })

    this.setState({
      boxes: this.state.boxes.filter((box) => {
        return box.id !== target.id
      }),
    })

    this.props.config.boxes=this.state.boxes

     console.log("remove", this.props.config.boxes)
  }

  activate() {
    this.setState({
      active: true,
      classes: _.set(this.state.classes, styles.active, true),
      model:'edit'
    })
  }

  deactivate() {
    this.setState({
      active: false,
      classes: _.set(this.state.classes, styles.active, false),
    })
  }

  get w() { return this.state.w }

  get h() { return this.state.h }

  get img() { return this.state.img }

  get id() { return this.props.config.id }

  

  render() {

    return (
      <div {...this.props} style={this._getCss()}
        className={classnames(this.state.classes)}
        onMouseDown={this._handleMouseDown}
      >
        <ButtonGroup className={styles.block_toolbar} vertical>
        <Button className={styles.box_button}
          onClick={this._moveUp}
        >
          <Glyphicon glyph='chevron-up'/>
        </Button>
        <Button className={styles.box_button}
          onClick={this._moveDown}
        >
          <Glyphicon glyph='chevron-down'/>
        </Button>
        <Button className={styles.box_button}
          onClick={uiActions.openBlockConfig}
        >
          <Glyphicon glyph='cog'/>
        </Button>
        <Button className={styles.box_button}
          onClick={boardActions.addBlock}
        >
          <Glyphicon glyph='plus'/>
        </Button>
        <Button className={styles.box_button}
          onClick={boardActions.removeBlock}
        >
          <Glyphicon glyph='remove'/>
        </Button>
        </ButtonGroup>
        {
          this.state.boxes.map((info, i) => {
            console.log("boxes--->",info)
            return <Box key={i} ref={`box-${i}`} {...info}/>
          })
        }
      </div>
    )
  }
}

Block.propTypes = {
  config: React.PropTypes.object,
}

Block.defaultProps = {

}

export default Block
