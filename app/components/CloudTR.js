import React from 'react'
import { observable } from 'mobx'
import autobind from 'autobind-decorator'
import { Modal, Button, Input, Row, Col, Tabs, Tab, Glyphicon, Alert } from 'react-bootstrap'

import cloudUIActions from '../actions/cloudui'
import cloudUIStore from '../stores/cloudui'


import styles from '../css/app.css'

import cm from '../lib/components'

const UserType = { 'admin': '管理员', 'worker': '开发者', 'guest': '使用者' }


@autobind
class UserTR extends React.Component {
  constructor(props) {
    super(props)

    let type = 'guest'

    if (UserType[props.type]) {
      type = props.type
    }

    this.state = {
      email: props.email,
      password: props.password,
      idx: props.idx,
      frozen: props.frozen || false,
      type,
      uid: props.uid,
    }
  }

  componentDidMount() {
    console.log(this.state)
  }

  getTypeLabel() {
    return UserType[this.state.type]
  }

  frozenSetup() {
    console.log(this.state.frozen)
    if (this.state.type !== 'admin') {
      this.setState({ 'frozen': !this.state.frozen })
      cloudUIActions.updateUser('frozen', { 'uid': this.state.uid, 'frozen': !this.state.frozen })
    } else {
      alert('管理员账户无法冻结,请联系数据管理员')
    }
  }


  deleteUser() {
    if (this.state.type === 'admin') {
      return alert('不能删除 Board 管理员')
    } else {
      cloudUIActions.removeUserConfrim(this.state.idx)
    }
  }

  changePassword() {
    console.log('changePassword', this.state.idx)
    cloudUIActions.changePassword(this.state.idx)
  }


  render() {
    var btnLable = this.state.frozen ? '解冻用户' : '冻结用户'


    return (

      <tr>
          <td data-title="ID">{this.state.idx}</td>
          <td data-title="Type">{this.state.email}</td>
          <td data-title="Type">{this.getTypeLabel()}</td>
          <td data-title="Action">
            <a className="changePWD btn btn-sm btn-success" onClick={this.changePassword}>修改密码</a> &nbsp;
            <Button className="foizen btn btn-sm btn-warning" onClick={this.frozenSetup} >{btnLable}</Button> &nbsp;
            <a className="delete btn btn-sm btn-danger" onClick={this.deleteUser}>删除用户</a>
            <br />
          </td>
      </tr>)
  }

}


@autobind
class BoardTR extends React.Component {


  constructor(props) {
    super(props)

    let type = 'guest'

    if (UserType[props.type]) {
      type = props.type
    }

    this.state = {
      email: props.email,
      password: props.password,
      idx: props.idx,
      frozen: props.frozen || false,
      type,
      uid: props.uid,
    }
  }

  componentDidMount() {
    console.log(this.state)
  }

  getTypeLabel() {
    return UserType[this.state.type]
  }

  frozenSetup() {
    console.log(this.state.frozen)
    if (this.state.type !== 'admin') {
      this.setState({ 'frozen': !this.state.frozen })
      cloudUIActions.updateUser('frozen', { 'uid': this.state.uid, 'frozen': !this.state.frozen })
    } else {
      alert('管理员账户无法冻结,请联系数据管理员')
    }
  }


  deleteBoard() {
    if (this.state.type === 'admin') {
      return alert('不能删除 Board 管理员')
    } else {
       // cloudUIActions.removeUserConfrim(this.state.idx)
      console.log('click delete board')
    }
  }

  render() {
    var btnLable = this.state.frozen ? '停用' : '启用'


    return (

      <tr>
          <td data-title="ID">{this.state.idx}</td>
          <td data-title="Type">{this.state.email}</td>
          <td data-title="Type">{this.getTypeLabel()}</td>
          <td data-title="Action">
            <a className="delete btn btn-sm btn-primary" onClick={this.deleteBoard}>预览</a> &nbsp;
            <Button className="foizen btn btn-sm btn-warning" onClick={this.frozenSetup} >{btnLable}</Button> &nbsp;
            <a className="delete btn btn-sm btn-danger" onClick={this.deleteBoard}>删除</a>
            <br />
          </td>
      </tr>)
  }

}

exports.UserTR = UserTR
exports.BoardTR = BoardTR
