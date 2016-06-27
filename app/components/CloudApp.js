import React from 'react'
import _ from 'lodash'
import autobind from 'autobind-decorator'
import { Modal, Button,Input,Row,Col,Tabs,Tab ,Glyphicon, Alert} from 'react-bootstrap'

import blockActions from '../actions/block'
import boxActions from '../actions/box'
import uiStore from '../stores/ui'
import selectActions from '../actions/select'
import selectStore from '../stores/select'


import cloudUIActions from '../actions/cloudui'
import cloudUIStore from '../stores/cloudui'


import styles from '../css/app.css'

import cm from '../lib/components'

import {Notification} from './Notification'

import {UserTR,BoardTR} from './CloudTR'

const UserType={"admin":"管理员","worker":"开发者","guest":"使用者"}

import $  from 'jquery'



function _jsonReq(method, data, endpoint) {
    const opts = {
      method,
      data: JSON.stringify(data),
      contentType: 'application/json; charset=utf-8',
      dataType: 'json',
      url: endpoint,
    }
    if (method === 'GET')
      opts.data = data
    else {
      opts.data = JSON.stringify(data)
      opts.contentType = 'application/json; charset=utf-8'
      opts.dataType = 'json'
    }
    return $.ajax(opts)
  }
  



@autobind
class AlertDismissable extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
     alertVisible: true,
     title:"",
     msg:"",
     type:"success"
    }

  }





  showalert(){
     this.setState({alertVisible: true,title:"标题",msg:"消息"});
  }

  render() {
    if (this.state.alertVisible) {
      return (
        <Alert bsStyle={this.state.type} onDismiss={this.handleAlertDismiss}>
          <h4>{this.state.title}</h4>
          <p>{this.state.msg}</p>
          <p>
          </p>
        </Alert>
      );
    }

    return (
       <Button onClick={this.showalert}>测试</Button>
    );
  }

  handleAlertDismiss() {
    this.setState({alertVisible: false});
  }

  handleAlertShow() {
    this.setState({alertVisible: true});
  }
}


@autobind
class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showConfig: false,
      
    }

  }

  componentDidMount() {
   
   this.loadPushServer()

   cloudUIStore.listen((newState) => {
      this.setState(newState)
    })

    cloudUIActions.listUser();

  }


  addUserConfig(){
    
     this.setState({showConfig: !this.state.showConfig,idx:null,confrim:false,configTitle:"添加用户" })
  }
  showNotifiy(){
    this.refs.notifiy.show("标题","内容");
  }
  closeConfrim(){
     this.setState({confrim: false,idx:null })
  }

  removeUser(){

    let user={};
    
    if(this.state.idx){
      user=this.state.users[this.state.idx-1]
      cloudUIActions.removeUser(user);
     }


     this.setState({confrim:  false})
    

  }

  saveUser(){
    
    let pwd=this.refs.password.getValue();

    let email=this.refs.email.getValue();

    let type=this.refs.type.getValue();

    if(pwd==""||email==""||type==""){
      alert("请检查输入项目");
      return;
    }
    
    if(pwd!=this.refs.password1.getValue()){
      alert("密码不一致!");
      return;
    }
  

    if(this.state.idx){
      let user = this.state.users[this.state.idx-1];
      console.log("update user ", user)

      cloudUIActions.updateUser("changePassword",{"uid":user.uid,"password":pwd});

    }else{
    
      
    cloudUIActions.addUser({"email":email,"password":pwd, "type" : type})
    this.setState({showConfig: false,idx:null,confrim:false,configTitle:"添加用户" })
    }
  }




  onCodeChange(code) {
    this.setState({servers:this.refs.pushServer.getValue()})
  }

  loadPushServer(){
    $.get('/api/v1/servers', (result) => {

            console.log(result)
            this.setState({
                servers: JSON.stringify(result, null, 4)
            })
            console.log("远程调用server", result)
        });

  }

  showPushserverConfig(){
    this.setState({'showPushserver':true});

  }

  hidePushserverConfig(){
    this.setState({'showPushserver':false});

  }

  savePushServer(){
    
    console.log(this.refs.pushServerURL.getValue())
    try{
      var protocol=["mqtt","ws","socketio"];
      let server=this.refs.pushServerURL.getValue()
      
      if(protocol.indexOf(server.split("://")[0])<0){
          alert('服务列表解析错误,请检查'+server);
          }else{

           _jsonReq('POST',  {"servers":[server]} , '/api/v1/servers')
           this.loadPushServer();
          }
       
    }catch(e){
      console.log(e)
      alert('服务列表解析错误,请检查');

    }
  

    this.setState({'showPushserver':false});

   
  }

  deletePushServer(){

     console.log(this.refs.pushServerURL.getValue())
    try{
      var protocol=["mqtt","ws","socketio"];
      let server=this.refs.pushServerURL.getValue()
      
      if(protocol.indexOf(server.split("://")[0])<0){
          alert('服务列表解析错误,请检查'+server);
          }else{

           _jsonReq('DELETE',  {"servers":[server]} , '/api/v1/servers')
           this.loadPushServer();
          }
       
    }catch(e){
      console.log(e)
      alert('服务列表解析错误,请检查');

    }
  

    this.setState({'showPushserver':false});

  }

  render() {

     let user={}
     let deletConfirm=false;

     if(this.state.idx){
      user=this.state.users[this.state.idx-1]
      deletConfirm=true
     }


    return (
    <div className="container p-t-60">

     <Notification ref="notifiy" />

    <Modal show={this.state.showPushserver}>
        <Modal.Header >添加/删除 Push数据源</Modal.Header>
        <Modal.Body >
          
          <Input ref='pushServerURL' type='text' label='Push Server URL'/>

        </Modal.Body>
        <Modal.Footer >
          <Button onClick={this.hidePushserverConfig}>取消</Button>
          <Button onClick={this.savePushServer}>确认添加</Button>
          <Button className="btn-danger" onClick={this.deletePushServer}>确认删除</Button>
        </Modal.Footer>
      </Modal>

    <Modal show={this.state.confrim} onHide={this.closeConfrim}>
        <Modal.Header>
            <Modal.Title>用户管理</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Row>
              <p/>
              {this.state.confrimMsg} {user.email}
            </Row>
               
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={this.closeConfrim}>取消</Button>
            <Button onClick={this.removeUser}>确认</Button>
        </Modal.Footer>
    </Modal>

    <Modal show={this.state.showConfig} onHide={this.closeConfig}>
        <Modal.Header>
            <Modal.Title>{this.state.configTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
             <form>
                        <Row>
                            <p/>
                            <Col xs={8}>
                            <Input type='email' label='用户邮箱' ref="email" defaultValue={user.email}/>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={4}>
                            <Input type='password' label='用户密码' ref="password" defaultValue={this.state.password}/>
                            </Col>
                            <Col xs={4}>
                            <Input type='password' label='重复密码' ref="password1" defaultValue={this.state.password}/>
                            </Col>
                        </Row>
                        <Row>
                            <p/>
                            <Col xs={8}>
                            <Input type='select' label='用户类型' ref="type" defaultValue={user.type} onChange={this.handleChange}>
                             <option value='worker'>Board开发人员</option>
                             <option value='guest'>Board使用人员</option>
                             <option value='admin'>Board管理人员</option>
                            </Input>
                            </Col>
                            <Col xs={1}>
                            <p>
                                <br/>
                            </p><i className={ "fa fa-"+this.state.icon+ " fa-2x pull-right"}></i>
                            </Col>
                        </Row>
                    </form>
                
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={this.addUserConfig}>取消</Button>
            <Button onClick={this.saveUser}>确认</Button>
        </Modal.Footer>
    </Modal>
    <div className="row p-t-10">
        <div className="col-sm-12">
            <ol className="breadcrumb">
                <li> <a href="#">OrientBoard</a> </li>
                <li className="active"> 云管理 </li>
            </ol>
        </div>
    </div>
    <div className="wrapper">
        <div className="container pt25">
          
  {/*<AlertDismissable/>*/}
            <div className="row text-center ">
                <Tabs defaultActiveKey={1}>
                    <Tab eventKey={1} title="用户管理">
                        <Row>
                            <p/>
                            <Col xs={1}>
                            <Button onClick={this.addUserConfig} className="btn btn-primary btn-sm ">添加用户</Button>
                           {/* <Button onClick={this.showNotifiy} className="btn btn-primary btn-sm ">show notifiy</Button> */}
                            
                            </Col>
                        </Row>
                        <Row>
                            <p/>
                            <Col xs={12}>
                            <div className="table-responsive-vertical shadow-z-1">
                                <table id="table" className="table table-hover table-mc-light-blue">
                                    <thead>
                                        <tr>
                                            <th><center>ID</center></th>
                                            <th><center>用户名</center></th>
                                            <th><center>类型</center></th>
                                            <th><center>操作</center></th>
                                        </tr>
                                    </thead>
                                    <tbody className="user">
                                    {
                                      _.keys(this.state.users).map((user, i) => {
                                        console.log(this.state.users[i].email, i)
                                      return (
                                        <UserTR key={i+1} idx={i+1} uid={this.state.users[i].uid} email={this.state.users[i].email} password="12345" type={this.state.users[i].type} frozen={this.state.users[i].frozen}/>
                                        
                                        )
                                    })
                                    }
                                    </tbody>
                                </table>
                            </div>
                            <div>
                                <ul className="pagination pagination-lg ">
                                    <li className="disabled"><a href="javascript:void(0)">«</a></li>
                                    <li className="active"><a href="javascript:void(0)">1</a></li>
                                    <li><a href="javascript:void(0)">2</a></li>
                                    <li><a href="javascript:void(0)">3</a></li>
                                    <li><a href="javascript:void(0)">»</a></li>
                                </ul>
                            </div>
                            </Col>
                        </Row>
                    </Tab>
                    {/*
                    <Tab eventKey={2} title="Board管理">
                        <Row>
                           <p/>
                            <Col xs={12}>
                            <div className="table-responsive-vertical shadow-z-1">
                                <table id="table" className="table table-hover table-mc-light-blue">
                                    <thead>
                                        <tr>
                                            <th><center>ID</center></th>
                                            <th><center>Board描述</center></th>
                                            <th><center>所有者</center></th>
                                            <th><center>操作</center></th>
                                        </tr>
                                    </thead>
                                    <tbody className="user">
                                    {
                                      _.keys(this.state.users).map((user, i) => {
                                        console.log(this.state.users[i].email, i)
                                      return (
                                        <BoardTR key={i+1} idx={i+1} uid={this.state.users[i].uid} email={this.state.users[i].email} password="12345" type={this.state.users[i].type} frozen={this.state.users[i].frozen}/>
                                        
                                        )
                                    })
                                    }
                                    </tbody>
                                </table>
                            </div>
                            <div>
                                <ul className="pagination pagination-lg ">
                                    <li className="disabled"><a href="javascript:void(0)">«</a></li>
                                    <li className="active"><a href="javascript:void(0)">1</a></li>
                                    <li><a href="javascript:void(0)">2</a></li>
                                    <li><a href="javascript:void(0)">3</a></li>
                                    <li><a href="javascript:void(0)">»</a></li>
                                </ul>
                            </div>
                            </Col>
                        </Row>
                    </Tab>
                  */}
                   {/* <Tab eventKey={3} title="组件管理">
                        <Row>
                            <p/>
                            <Col xs={1}>
                            <Button onClick={this.addComponet} className="btn btn-primary btn-sm ">添加组件</Button>
                            </Col>
                        </Row>
                    </Tab>
                  */}
                    <Tab eventKey={4} title="Push Server">
                        <Row>
                            <p/>
                            <Col xs={1}>
                            <Button onClick={this.showPushserverConfig} className="btn btn-primary btn-sm ">添加/删除</Button>
                            </Col>
                        </Row>
                         <Row>
                            <p/>
                            <Col xs={10}>
                            &nbsp; <Input type='textarea'  ref="pushServer"  rows="10" value={this.state.servers} onChange={this.onCodeChange}/> 
                            </Col>
                        </Row>
                    </Tab>
                </Tabs>
            </div>
        </div>
    </div>
</div>

    )
  }

}



App.defaultProps = {

}

export default App
