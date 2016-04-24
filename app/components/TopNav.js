import React from 'react'
import { Navbar, NavItem, Nav, Input,DropdownButton,MenuItem } from 'react-bootstrap'
import autobind from 'autobind-decorator'
import _ from 'lodash'

import uiActions from '../actions/ui'
import styles from '../css/app.css'
import selectActions from '../actions/select'
import selectStore from '../stores/select'
import boardStore from '../stores/board'
import boardActions from '../actions/board'

@autobind
export default class TopNav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      board: {},
    }
  }

  componentDidMount() {
    selectStore.listen((newState) => {
      this.setState(newState)
    })
  }


  _hangleChange(e) {
    const board = boardStore.findBoard({ name: e.target.value })
    selectActions.setActiveBoard(board)
    //selectActions.setActiveBlock(board)

    console.log('sdfsdfsfsf');
  }

  _setPublishMode() {
    uiActions.setMode('publish')
  }

  _setEditMode() {
    uiActions.setMode('edit')
  }
  _returnHome(){
    const link = window.location.origin + `/`
    window.location=link
  }

  render() {

   
    var divStyle = {
    marginBottom: "15px",
    marginTop: "20px"
    };




    return (
      <Navbar className={styles.navbar} className="navbar-custom" style={divStyle}>
        <Navbar.Header>
          
           <div className="row">

           <br/>
             <Input type='select'   value={_.get(this.state, 'board.name')} onChange={this._hangleChange} >
          {
            this.props.boards.map((board, i) => {
              return <option key={i} value={board.name}>{board.name}</option>
            })
          }
          </Input>
          </div>
          
        </Navbar.Header>
        <Nav className="pull-right">

         {/*
         <NavItem  eventKey={1} onClick={this._setPublishMode}>
          
          </NavItem>
         */}
        
         
          
          {/*<NavItem className="pull-right" eventKey={2} onClick={this._setEditMode}>
            点击
          </NavItem>*/}
          <NavItem  eventKey={5} onClick={() => {
              uiActions.openBoardConfig(null,'create')
            }}>
            <i className="fa  fa-file-o"></i>创建
          </NavItem>
        
          <NavItem  eventKey={4} onClick={boardActions.saveBoard}>
            <i className="fa  fa-save"></i>保存
          </NavItem>

          <NavItem  eventKey={10} 
                    onClick={() => {
              uiActions.openBoardConfig("board_"+(new Date().getTime()),'clone')
            }}
           >
          <i className="fa  fa-clone"></i>克隆
          </NavItem>

          <NavItem  eventKey={9} 
                    onClick={() => {
              uiActions.openBoardConfig(_.get(this.state, 'board.name'),'rename')
            }}
           >
          <i className="fa  fa-external-link"></i>更名
          </NavItem>

          <NavItem eventKey={8}
            onClick={() => {
                if (window.confirm('你确定要删除 '+_.get(this.state, 'board.name')+' 吗？')) {
                    boardActions.removeBoard({
                        name: _.get(this.state, 'board.name'),
                    })
                    return true;
                } else {
                    return false;
                }
            
            }}
          >
          <i className="fa  fa-trash-o"></i>删除
          </NavItem>
          
          <NavItem eventKey={6} onClick={boardActions.getDisplayLink}>
             <i className="fa  fa-link"></i>获取URL
          </NavItem>
          <NavItem  eventKey={7} onClick={boardActions.openDisplayLink}>
             <i className="fa fa-eye"></i>预览
          </NavItem>
           <NavItem eventKey={1} onClick={this._setPublishMode}>
            <i className="fa fa-share">发布</i>
          </NavItem>

        </Nav>
      </Navbar>
    )
  }

}

TopNav.propTypes = {
  boards: React.PropTypes.array,
}

TopNav.defaultProps = {

}
