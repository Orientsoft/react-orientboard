(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reflux = require('reflux');

var _reflux2 = _interopRequireDefault(_reflux);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var blockActions = _reflux2.default.createActions(['setActiveBlock', 'removeBox', 'createBox', 'setBlockConfig', 'newComponent'].reduce(function (pv, cv) {
  pv[cv] = { asyncResult: true };
  return pv;
}, {}));

exports.default = blockActions;

},{"reflux":"reflux"}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reflux = require('reflux');

var _reflux2 = _interopRequireDefault(_reflux);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var actions = _reflux2.default.createActions(['saveBoard', 'cloneBoard', 'createBoard', 'listBoards', 'findBoard', 'renameBoard', 'removeBoard', 'updateBoard', 'addBlock', 'moveBlock', 'removeBlock', 'getDisplayLink', 'openDisplayLink', 'publishBoard'].reduce(function (pv, cv) {
  pv[cv] = { asyncResult: true };
  return pv;
}, {}));

exports.default = actions;

},{"reflux":"reflux"}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reflux = require('reflux');

var _reflux2 = _interopRequireDefault(_reflux);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var actions = _reflux2.default.createActions(['startDrag', 'stopDrag', 'startRotate', 'startResize', 'stopAll', 'addZIndex', 'removeBox', 'init', 'openConfig'].reduce(function (pv, cv) {
  pv[cv] = { asyncResult: true };
  return pv;
}, {}));

exports.default = actions;

},{"reflux":"reflux"}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reflux = require('reflux');

var _reflux2 = _interopRequireDefault(_reflux);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var actions = _reflux2.default.createActions(['addUser', 'removeUserConfrim', 'removeUser', 'updateUser', 'listUser', 'changePassword'].reduce(function (pv, cv) {
  pv[cv] = { asyncResult: true };
  return pv;
}, {}));

exports.default = actions;

},{"reflux":"reflux"}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reflux = require('reflux');

var _reflux2 = _interopRequireDefault(_reflux);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var actions = _reflux2.default.createActions(['setActiveBlock', 'setActiveBox', 'setActiveBoard', 'setApp'].reduce(function (pv, cv) {
  pv[cv] = { asyncResult: true };
  return pv;
}, {}));

exports.default = actions;

},{"reflux":"reflux"}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reflux = require('reflux');

var _reflux2 = _interopRequireDefault(_reflux);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var actions = _reflux2.default.createActions(['openBlockConfig', 'closeBlockConfig', 'openBoardConfig', 'closeBoardConfig', 'setMode', 'setTheme'].reduce(function (pv, cv) {
  pv[cv] = { asyncResult: true };
  return pv;
}, {}));

exports.default = actions;

},{"reflux":"reflux"}],7:[function(require,module,exports){
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _CloudApp = require('./components/CloudApp');

var _CloudApp2 = _interopRequireDefault(_CloudApp);

var _util = require('./lib/util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _util.initStores)();

_reactDom2.default.render(_react2.default.createElement(_CloudApp2.default, null), document.querySelector('#mount-app'));

},{"./components/CloudApp":8,"./lib/util":13,"react":"react","react-dom":"react-dom"}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _autobindDecorator = require('autobind-decorator');

var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);

var _reactBootstrap = require('react-bootstrap');

var _block = require('../actions/block');

var _block2 = _interopRequireDefault(_block);

var _box = require('../actions/box');

var _box2 = _interopRequireDefault(_box);

var _ui = require('../stores/ui');

var _ui2 = _interopRequireDefault(_ui);

var _select = require('../actions/select');

var _select2 = _interopRequireDefault(_select);

var _select3 = require('../stores/select');

var _select4 = _interopRequireDefault(_select3);

var _cloudui = require('../actions/cloudui');

var _cloudui2 = _interopRequireDefault(_cloudui);

var _cloudui3 = require('../stores/cloudui');

var _cloudui4 = _interopRequireDefault(_cloudui3);

var _app = require('../css/app.css');

var _app2 = _interopRequireDefault(_app);

var _components = require('../lib/components');

var _components2 = _interopRequireDefault(_components);

var _Notification = require('./Notification');

var _CloudTR = require('./CloudTR');

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UserType = { admin: '管理员', worker: '开发者', guest: '使用者' };

function _jsonReq(method, data, endpoint) {
  var opts = {
    method: method,
    data: JSON.stringify(data),
    contentType: 'application/json; charset=utf-8',
    dataType: 'json',
    url: endpoint
  };
  if (method === 'GET') opts.data = data;else {
    opts.data = JSON.stringify(data);
    opts.contentType = 'application/json; charset=utf-8';
    opts.dataType = 'json';
  }
  return _jquery2.default.ajax(opts);
}

var AlertDismissable = (0, _autobindDecorator2.default)(_class = function (_React$Component) {
  _inherits(AlertDismissable, _React$Component);

  function AlertDismissable(props) {
    _classCallCheck(this, AlertDismissable);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AlertDismissable).call(this, props));

    _this.state = {
      alertVisible: true,
      title: '',
      msg: '',
      type: 'success'
    };
    return _this;
  }

  _createClass(AlertDismissable, [{
    key: 'showalert',
    value: function showalert() {
      this.setState({ alertVisible: true, title: '标题', msg: '消息' });
    }
  }, {
    key: 'handleAlertDismiss',
    value: function handleAlertDismiss() {
      this.setState({ alertVisible: false });
    }
  }, {
    key: 'handleAlertShow',
    value: function handleAlertShow() {
      this.setState({ alertVisible: true });
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.state.alertVisible) {
        return _react2.default.createElement(
          _reactBootstrap.Alert,
          { bsStyle: this.state.type, onDismiss: this.handleAlertDismiss },
          _react2.default.createElement(
            'h4',
            null,
            this.state.title
          ),
          _react2.default.createElement(
            'p',
            null,
            this.state.msg
          ),
          _react2.default.createElement('p', null)
        );
      }

      return _react2.default.createElement(
        _reactBootstrap.Button,
        { onClick: this.showalert },
        '测试'
      );
    }
  }]);

  return AlertDismissable;
}(_react2.default.Component)) || _class;

var App = (0, _autobindDecorator2.default)(_class2 = function (_React$Component2) {
  _inherits(App, _React$Component2);

  function App(props) {
    _classCallCheck(this, App);

    var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(App).call(this, props));

    _this2.state = {
      showConfig: false

    };
    return _this2;
  }

  _createClass(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this3 = this;

      this.loadPushServer();

      _cloudui4.default.listen(function (newState) {
        _this3.setState(newState);
      });

      _cloudui2.default.listUser();
    }
  }, {
    key: 'addUserConfig',
    value: function addUserConfig() {
      this.setState({ showConfig: !this.state.showConfig,
        idx: null,
        confrim: false,
        configTitle: '添加用户' });
    }
  }, {
    key: 'showNotifiy',
    value: function showNotifiy() {
      this.refs.notifiy.show('标题', '内容');
    }
  }, {
    key: 'closeConfrim',
    value: function closeConfrim() {
      this.setState({ confrim: false, idx: null });
    }
  }, {
    key: 'removeUser',
    value: function removeUser() {
      var user = {};

      if (this.state.idx) {
        user = this.state.users[this.state.idx - 1];
        _cloudui2.default.removeUser(user);
      }

      this.setState({ confrim: false });
    }
  }, {
    key: 'saveUser',
    value: function saveUser() {
      var pwd = this.refs.password.getValue();
      var email = this.refs.email.getValue();
      var type = this.refs.type.getValue();

      if (pwd === '' || email === '' || type === '') {
        alert('请检查输入项目');
        return;
      }

      if (pwd != this.refs.password1.getValue()) {
        alert('密码不一致!');
        return;
      }

      if (this.state.idx) {
        var user = this.state.users[this.state.idx - 1];
        console.log('update user ', user);

        _cloudui2.default.updateUser('changePassword', { 'uid': user.uid, 'password': pwd });
      } else {

        _cloudui2.default.addUser({ 'email': email, 'password': pwd, 'type': type });
        this.setState({ showConfig: false, idx: null, confrim: false, configTitle: '添加用户' });
      }
    }
  }, {
    key: 'onCodeChange',
    value: function onCodeChange(code) {
      this.setState({ servers: this.refs.pushServer.getValue() });
    }
  }, {
    key: 'loadPushServer',
    value: function loadPushServer() {
      var _this4 = this;

      _jquery2.default.get('/api/v1/servers', function (result) {

        console.log(result);
        _this4.setState({
          servers: JSON.stringify(result, null, 4)
        });
        console.log('远程调用server', result);
      });
    }
  }, {
    key: 'showPushserverConfig',
    value: function showPushserverConfig() {
      this.setState({ 'showPushserver': true });
    }
  }, {
    key: 'hidePushserverConfig',
    value: function hidePushserverConfig() {
      this.setState({ 'showPushserver': false });
    }
  }, {
    key: 'savePushServer',
    value: function savePushServer() {

      console.log(this.refs.pushServerURL.getValue());
      try {
        var protocol = ['mqtt', 'ws', 'socketio'];
        var server = this.refs.pushServerURL.getValue();

        if (protocol.indexOf(server.split('://')[0]) < 0) {
          alert('服务列表解析错误,请检查' + server);
        } else {

          _jsonReq('POST', { 'servers': [server] }, '/api/v1/servers');
          this.loadPushServer();
        }
      } catch (e) {
        console.log(e);
        alert('服务列表解析错误,请检查');
      }

      this.setState({ 'showPushserver': false });
    }
  }, {
    key: 'deletePushServer',
    value: function deletePushServer() {

      console.log(this.refs.pushServerURL.getValue());
      try {
        var protocol = ['mqtt', 'ws', 'socketio'];
        var server = this.refs.pushServerURL.getValue();

        if (protocol.indexOf(server.split('://')[0]) < 0) {
          alert('服务列表解析错误,请检查' + server);
        } else {

          _jsonReq('DELETE', { 'servers': [server] }, '/api/v1/servers');
          this.loadPushServer();
        }
      } catch (e) {
        console.log(e);
        alert('服务列表解析错误,请检查');
      }

      this.setState({ 'showPushserver': false });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this5 = this;

      var user = {};
      var deletConfirm = false;

      if (this.state.idx) {
        user = this.state.users[this.state.idx - 1];
        deletConfirm = true;
      }

      return _react2.default.createElement(
        'div',
        { className: 'container p-t-60' },
        _react2.default.createElement(_Notification.Notification, { ref: 'notifiy' }),
        _react2.default.createElement(
          _reactBootstrap.Modal,
          { show: this.state.showPushserver },
          _react2.default.createElement(
            _reactBootstrap.Modal.Header,
            null,
            '添加/删除 Push数据源'
          ),
          _react2.default.createElement(
            _reactBootstrap.Modal.Body,
            null,
            _react2.default.createElement(_reactBootstrap.Input, { ref: 'pushServerURL', type: 'text', label: 'Push Server URL' })
          ),
          _react2.default.createElement(
            _reactBootstrap.Modal.Footer,
            null,
            _react2.default.createElement(
              _reactBootstrap.Button,
              { onClick: this.hidePushserverConfig },
              '取消'
            ),
            _react2.default.createElement(
              _reactBootstrap.Button,
              { onClick: this.savePushServer },
              '确认添加'
            ),
            _react2.default.createElement(
              _reactBootstrap.Button,
              { className: 'btn-danger', onClick: this.deletePushServer },
              '确认删除'
            )
          )
        ),
        _react2.default.createElement(
          _reactBootstrap.Modal,
          { show: this.state.confrim, onHide: this.closeConfrim },
          _react2.default.createElement(
            _reactBootstrap.Modal.Header,
            null,
            _react2.default.createElement(
              _reactBootstrap.Modal.Title,
              null,
              '用户管理'
            )
          ),
          _react2.default.createElement(
            _reactBootstrap.Modal.Body,
            null,
            _react2.default.createElement(
              _reactBootstrap.Row,
              null,
              _react2.default.createElement('p', null),
              this.state.confrimMsg,
              ' ',
              user.email
            )
          ),
          _react2.default.createElement(
            _reactBootstrap.Modal.Footer,
            null,
            _react2.default.createElement(
              _reactBootstrap.Button,
              { onClick: this.closeConfrim },
              '取消'
            ),
            _react2.default.createElement(
              _reactBootstrap.Button,
              { onClick: this.removeUser },
              '确认'
            )
          )
        ),
        _react2.default.createElement(
          _reactBootstrap.Modal,
          { show: this.state.showConfig, onHide: this.closeConfig },
          _react2.default.createElement(
            _reactBootstrap.Modal.Header,
            null,
            _react2.default.createElement(
              _reactBootstrap.Modal.Title,
              null,
              this.state.configTitle
            )
          ),
          _react2.default.createElement(
            _reactBootstrap.Modal.Body,
            null,
            _react2.default.createElement(
              'form',
              null,
              _react2.default.createElement(
                _reactBootstrap.Row,
                null,
                _react2.default.createElement('p', null),
                _react2.default.createElement(
                  _reactBootstrap.Col,
                  { xs: 8 },
                  _react2.default.createElement(_reactBootstrap.Input, { type: 'email', label: '用户邮箱', ref: 'email', defaultValue: user.email })
                )
              ),
              _react2.default.createElement(
                _reactBootstrap.Row,
                null,
                _react2.default.createElement(
                  _reactBootstrap.Col,
                  { xs: 4 },
                  _react2.default.createElement(_reactBootstrap.Input, { type: 'password', label: '用户密码', ref: 'password', defaultValue: this.state.password })
                ),
                _react2.default.createElement(
                  _reactBootstrap.Col,
                  { xs: 4 },
                  _react2.default.createElement(_reactBootstrap.Input, { type: 'password', label: '重复密码', ref: 'password1', defaultValue: this.state.password })
                )
              ),
              _react2.default.createElement(
                _reactBootstrap.Row,
                null,
                _react2.default.createElement('p', null),
                _react2.default.createElement(
                  _reactBootstrap.Col,
                  { xs: 8 },
                  _react2.default.createElement(
                    _reactBootstrap.Input,
                    { type: 'select', label: '用户类型', ref: 'type', defaultValue: user.type, onChange: this.handleChange },
                    _react2.default.createElement(
                      'option',
                      { value: 'worker' },
                      'Board开发人员'
                    ),
                    _react2.default.createElement(
                      'option',
                      { value: 'guest' },
                      'Board使用人员'
                    ),
                    _react2.default.createElement(
                      'option',
                      { value: 'admin' },
                      'Board管理人员'
                    )
                  )
                ),
                _react2.default.createElement(
                  _reactBootstrap.Col,
                  { xs: 1 },
                  _react2.default.createElement(
                    'p',
                    null,
                    _react2.default.createElement('br', null)
                  ),
                  _react2.default.createElement('i', { className: "fa fa-" + this.state.icon + " fa-2x pull-right" })
                )
              )
            )
          ),
          _react2.default.createElement(
            _reactBootstrap.Modal.Footer,
            null,
            _react2.default.createElement(
              _reactBootstrap.Button,
              { onClick: this.addUserConfig },
              '取消'
            ),
            _react2.default.createElement(
              _reactBootstrap.Button,
              { onClick: this.saveUser },
              '确认'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row p-t-10' },
          _react2.default.createElement(
            'div',
            { className: 'col-sm-12' },
            _react2.default.createElement(
              'ol',
              { className: 'breadcrumb' },
              _react2.default.createElement(
                'li',
                null,
                ' ',
                _react2.default.createElement(
                  'a',
                  { href: '#' },
                  'OrientBoard'
                ),
                ' '
              ),
              _react2.default.createElement(
                'li',
                { className: 'active' },
                ' 云管理 '
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'wrapper' },
          _react2.default.createElement(
            'div',
            { className: 'container pt25' },
            _react2.default.createElement(
              'div',
              { className: 'row text-center ' },
              _react2.default.createElement(
                _reactBootstrap.Tabs,
                { defaultActiveKey: 1 },
                _react2.default.createElement(
                  _reactBootstrap.Tab,
                  { eventKey: 1, title: '用户管理' },
                  _react2.default.createElement(
                    _reactBootstrap.Row,
                    null,
                    _react2.default.createElement('p', null),
                    _react2.default.createElement(
                      _reactBootstrap.Col,
                      { xs: 1 },
                      _react2.default.createElement(
                        _reactBootstrap.Button,
                        { onClick: this.addUserConfig, className: 'btn btn-primary btn-sm ' },
                        '添加用户'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    _reactBootstrap.Row,
                    null,
                    _react2.default.createElement('p', null),
                    _react2.default.createElement(
                      _reactBootstrap.Col,
                      { xs: 12 },
                      _react2.default.createElement(
                        'div',
                        { className: 'table-responsive-vertical shadow-z-1' },
                        _react2.default.createElement(
                          'table',
                          { id: 'table', className: 'table table-hover table-mc-light-blue' },
                          _react2.default.createElement(
                            'thead',
                            null,
                            _react2.default.createElement(
                              'tr',
                              null,
                              _react2.default.createElement(
                                'th',
                                null,
                                _react2.default.createElement(
                                  'center',
                                  null,
                                  'ID'
                                )
                              ),
                              _react2.default.createElement(
                                'th',
                                null,
                                _react2.default.createElement(
                                  'center',
                                  null,
                                  '用户名'
                                )
                              ),
                              _react2.default.createElement(
                                'th',
                                null,
                                _react2.default.createElement(
                                  'center',
                                  null,
                                  '类型'
                                )
                              ),
                              _react2.default.createElement(
                                'th',
                                null,
                                _react2.default.createElement(
                                  'center',
                                  null,
                                  '操作'
                                )
                              )
                            )
                          ),
                          _react2.default.createElement(
                            'tbody',
                            { className: 'user' },
                            _lodash2.default.keys(this.state.users).map(function (user, i) {
                              console.log(_this5.state.users[i].email, i);
                              return _react2.default.createElement(_CloudTR.UserTR, { key: i + 1, idx: i + 1, uid: _this5.state.users[i].uid, email: _this5.state.users[i].email, password: '12345', type: _this5.state.users[i].type, frozen: _this5.state.users[i].frozen });
                            })
                          )
                        )
                      ),
                      _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(
                          'ul',
                          { className: 'pagination pagination-lg ' },
                          _react2.default.createElement(
                            'li',
                            { className: 'disabled' },
                            _react2.default.createElement(
                              'a',
                              { href: 'javascript:void(0)' },
                              '«'
                            )
                          ),
                          _react2.default.createElement(
                            'li',
                            { className: 'active' },
                            _react2.default.createElement(
                              'a',
                              { href: 'javascript:void(0)' },
                              '1'
                            )
                          ),
                          _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(
                              'a',
                              { href: 'javascript:void(0)' },
                              '2'
                            )
                          ),
                          _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(
                              'a',
                              { href: 'javascript:void(0)' },
                              '3'
                            )
                          ),
                          _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(
                              'a',
                              { href: 'javascript:void(0)' },
                              '»'
                            )
                          )
                        )
                      )
                    )
                  )
                ),
                _react2.default.createElement(
                  _reactBootstrap.Tab,
                  { eventKey: 4, title: 'Push Server' },
                  _react2.default.createElement(
                    _reactBootstrap.Row,
                    null,
                    _react2.default.createElement('p', null),
                    _react2.default.createElement(
                      _reactBootstrap.Col,
                      { xs: 1 },
                      _react2.default.createElement(
                        _reactBootstrap.Button,
                        { onClick: this.showPushserverConfig, className: 'btn btn-primary btn-sm ' },
                        '添加/删除'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    _reactBootstrap.Row,
                    null,
                    _react2.default.createElement('p', null),
                    _react2.default.createElement(
                      _reactBootstrap.Col,
                      { xs: 10 },
                      '  ',
                      _react2.default.createElement(_reactBootstrap.Input, { type: 'textarea', ref: 'pushServer', rows: '10', value: this.state.servers, onChange: this.onCodeChange })
                    )
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return App;
}(_react2.default.Component)) || _class2;

App.defaultProps = {};

exports.default = App;

},{"../actions/block":1,"../actions/box":3,"../actions/cloudui":4,"../actions/select":5,"../css/app.css":11,"../lib/components":12,"../stores/cloudui":17,"../stores/select":18,"../stores/ui":19,"./CloudTR":9,"./Notification":10,"autobind-decorator":"autobind-decorator","jquery":"jquery","lodash":"lodash","react":"react","react-bootstrap":"react-bootstrap"}],9:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _autobindDecorator = require('autobind-decorator');

var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);

var _reactBootstrap = require('react-bootstrap');

var _block = require('../actions/block');

var _block2 = _interopRequireDefault(_block);

var _box = require('../actions/box');

var _box2 = _interopRequireDefault(_box);

var _ui = require('../stores/ui');

var _ui2 = _interopRequireDefault(_ui);

var _select = require('../actions/select');

var _select2 = _interopRequireDefault(_select);

var _select3 = require('../stores/select');

var _select4 = _interopRequireDefault(_select3);

var _cloudui = require('../actions/cloudui');

var _cloudui2 = _interopRequireDefault(_cloudui);

var _cloudui3 = require('../stores/cloudui');

var _cloudui4 = _interopRequireDefault(_cloudui3);

var _app = require('../css/app.css');

var _app2 = _interopRequireDefault(_app);

var _components = require('../lib/components');

var _components2 = _interopRequireDefault(_components);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UserType = { admin: '管理员', worker: '开发者', guest: '使用者' };

var UserTR = (0, _autobindDecorator2.default)(_class = function (_React$Component) {
  _inherits(UserTR, _React$Component);

  function UserTR(props) {
    _classCallCheck(this, UserTR);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(UserTR).call(this, props));

    var type = 'guest';

    if (UserType[props.type]) {
      type = props.type;
    }

    _this.state = {
      email: props.email,
      password: props.password,
      idx: props.idx,
      frozen: props.frozen || false,
      type: type,
      uid: props.uid
    };

    return _this;
  }

  _createClass(UserTR, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      console.log(this.state);
    }
  }, {
    key: 'getTypeLabel',
    value: function getTypeLabel() {
      return UserType[this.state.type];
    }
  }, {
    key: 'frozenSetup',
    value: function frozenSetup() {
      console.log(this.state.frozen);
      if (this.state.type != 'admin') {
        this.setState({ 'frozen': !this.state.frozen });
        _cloudui2.default.updateUser('frozen', { 'uid': this.state.uid, 'frozen': !this.state.frozen });
      } else {
        alert('管理员账户无法冻结,请联系数据管理员');
      }
    }
  }, {
    key: 'deleteUser',
    value: function deleteUser() {
      if (this.state.type === 'admin') return alert('不能删除 Board 管理员');else _cloudui2.default.removeUserConfrim(this.state.idx);
    }
  }, {
    key: 'changePassword',
    value: function changePassword() {
      console.log('changePassword', this.state.idx);
      _cloudui2.default.changePassword(this.state.idx);
    }
  }, {
    key: 'render',
    value: function render() {
      var btnLable = this.state.frozen ? '解冻用户' : '冻结用户';

      return _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          { 'data-title': 'ID' },
          this.state.idx
        ),
        _react2.default.createElement(
          'td',
          { 'data-title': 'Type' },
          this.state.email
        ),
        _react2.default.createElement(
          'td',
          { 'data-title': 'Type' },
          this.getTypeLabel()
        ),
        _react2.default.createElement(
          'td',
          { 'data-title': 'Action' },
          _react2.default.createElement(
            'a',
            { className: 'changePWD btn btn-sm btn-success', onClick: this.changePassword },
            '修改密码'
          ),
          _react2.default.createElement(
            _reactBootstrap.Button,
            { className: 'foizen btn btn-sm btn-warning', onClick: this.frozenSetup },
            btnLable
          ),
          _react2.default.createElement(
            'a',
            { className: 'delete btn btn-sm btn-danger', onClick: this.deleteUser },
            '删除用户'
          ),
          _react2.default.createElement('br', null)
        )
      );
    }
  }]);

  return UserTR;
}(_react2.default.Component)) || _class;

var BoardTR = (0, _autobindDecorator2.default)(_class2 = function (_React$Component2) {
  _inherits(BoardTR, _React$Component2);

  function BoardTR(props) {
    _classCallCheck(this, BoardTR);

    var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(BoardTR).call(this, props));

    var type = 'guest';

    if (UserType[props.type]) {
      type = props.type;
    }

    _this2.state = {
      email: props.email,
      password: props.password,
      idx: props.idx,
      frozen: props.frozen || false,
      type: type,
      uid: props.uid
    };

    return _this2;
  }

  _createClass(BoardTR, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      console.log(this.state);
    }
  }, {
    key: 'getTypeLabel',
    value: function getTypeLabel() {
      return UserType[this.state.type];
    }
  }, {
    key: 'frozenSetup',
    value: function frozenSetup() {
      console.log(this.state.frozen);
      if (this.state.type != 'admin') {
        this.setState({ 'frozen': !this.state.frozen });
        _cloudui2.default.updateUser('frozen', { 'uid': this.state.uid, 'frozen': !this.state.frozen });
      } else {
        alert('管理员账户无法冻结,请联系数据管理员');
      }
    }
  }, {
    key: 'deleteBoard',
    value: function deleteBoard() {

      if (this.state.type == 'admin') {
        return alert('不能删除 Board 管理员');
      } else {
        //cloudUIActions.removeUserConfrim(this.state.idx)
        console.log('click delete board');
      }
    }
  }, {
    key: 'render',
    value: function render() {

      var btnLable = this.state.frozen ? '停用' : '启用';

      return _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          { 'data-title': 'ID' },
          this.state.idx
        ),
        _react2.default.createElement(
          'td',
          { 'data-title': 'Type' },
          this.state.email
        ),
        _react2.default.createElement(
          'td',
          { 'data-title': 'Type' },
          this.getTypeLabel()
        ),
        _react2.default.createElement(
          'td',
          { 'data-title': 'Action' },
          _react2.default.createElement(
            'a',
            { className: 'delete btn btn-sm btn-primary', onClick: this.deleteBoard },
            '预览'
          ),
          '  ',
          _react2.default.createElement(
            _reactBootstrap.Button,
            { className: 'foizen btn btn-sm btn-warning', onClick: this.frozenSetup },
            btnLable
          ),
          '  ',
          _react2.default.createElement(
            'a',
            { className: 'delete btn btn-sm btn-danger', onClick: this.deleteBoard },
            '删除'
          ),
          _react2.default.createElement('br', null)
        )
      );
    }
  }]);

  return BoardTR;
}(_react2.default.Component)) || _class2;

exports.UserTR = UserTR;
exports.BoardTR = BoardTR;

},{"../actions/block":1,"../actions/box":3,"../actions/cloudui":4,"../actions/select":5,"../css/app.css":11,"../lib/components":12,"../stores/cloudui":17,"../stores/select":18,"../stores/ui":19,"autobind-decorator":"autobind-decorator","lodash":"lodash","react":"react","react-bootstrap":"react-bootstrap"}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _autobindDecorator = require('autobind-decorator');

var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// TODO: l1 better display page

var Notification = (0, _autobindDecorator2.default)(_class = function (_React$Component) {
  _inherits(Notification, _React$Component);

  function Notification(props) {
    _classCallCheck(this, Notification);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Notification).call(this, props));

    _this.state = {
      show: _this.props.show || false,
      title: _this.props.title || '',
      msg: _this.props.msg || ''
    };
    return _this;
  }

  _createClass(Notification, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'show',
    value: function show(title, msg) {
      this.setState({ show: true, title: title, msg: msg });
    }
  }, {
    key: 'close',
    value: function close() {
      this.setState({ show: false });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactBootstrap.Modal,
        { show: this.state.show, onHide: this.close },
        _react2.default.createElement(
          _reactBootstrap.Modal.Header,
          null,
          _react2.default.createElement(
            _reactBootstrap.Modal.Title,
            null,
            this.state.title
          )
        ),
        _react2.default.createElement(
          _reactBootstrap.Modal.Body,
          null,
          _react2.default.createElement(
            _reactBootstrap.Row,
            null,
            '  ',
            "   info:  ",
            ' ',
            this.state.msg
          )
        ),
        _react2.default.createElement(
          _reactBootstrap.Modal.Footer,
          null,
          _react2.default.createElement(
            _reactBootstrap.Button,
            { onClick: this.close },
            '关闭'
          )
        )
      );
    }
  }]);

  return Notification;
}(_react2.default.Component)) || _class;

exports.default = Notification;


Notification.propTypes = {
  show: _react2.default.PropTypes.bool,
  msg: _react2.default.PropTypes.string,
  title: _react2.default.PropTypes.string
};

Notification.defaultProps = {};

exports.Notification = Notification;

},{"autobind-decorator":"autobind-decorator","lodash":"lodash","react":"react","react-bootstrap":"react-bootstrap"}],11:[function(require,module,exports){
module.exports = {"left_nav":"_app_css_app__left_nav","workspace":"_app_css_app__workspace","navbar":"_app_css_app__navbar","box_toolbar_deactive":"_app_css_app__box_toolbar_deactive","box_toolbar_active":"_app_css_app__box_toolbar_active","logo":"_app_css_app__logo"}
},{}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  'example': require('orientboard-component-example').default
};

},{"orientboard-component-example":22}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTestLayout = getTestLayout;
exports.swapElements = swapElements;
exports.initStores = initStores;
exports.copyToClipboard = copyToClipboard;
exports.openWindow = openWindow;
exports.startDynamic = startDynamic;
exports.stopDynamic = stopDynamic;

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _block = require('../stores/block');

var _block2 = _interopRequireDefault(_block);

var _board = require('../stores/board');

var _board2 = _interopRequireDefault(_board);

var _box = require('../stores/box');

var _box2 = _interopRequireDefault(_box);

var _select = require('../stores/select');

var _select2 = _interopRequireDefault(_select);

var _ui = require('../stores/ui');

var _ui2 = _interopRequireDefault(_ui);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getTestLayout(title, cb) {
  var name = /(.*)-dev$/.exec(title)[1];
  if (name) return _jquery2.default.ajax({
    url: '/get-test-layout/' + name,
    method: 'GET',
    success: cb
  });
  return null;
}

function swapElements(list, x, y) {
  list[x] = [list[y], list[y] = list[x]][0];
}

function initStores() {
  // HACK: import all stores and bypass eslint no-unused rules
  (function () {})(_block2.default, _board2.default, _box2.default, _select2.default, _ui2.default);
}

function copyToClipboard(text) {
  window.prompt('Copy to clipboard: Ctrl+C, Enter', text);
}

function openWindow(text) {
  window.open(text);
}

function startDynamic(component) {
  if (!component.state.datasource) {
    return;
  }

  var cb = component.handleDynamicData ? function (data) {
    if (!component.state.datasource.startDynamic) {
      return;
    }
    console.log('data', data);
    component.handleDynamicData(data);

    if (component.refs.ds && component.refs.ds.state.show) {
      component.refs.ds.handleLog(data);
    }
  } : function (data) {
    console.log(data);
  };

  var serverURL = component.state.datasource.server;

  if (component.state.datasource.dataType === 'pull') {
    if (component.state.datasource.startDynamic) {
      if (!component.state.datasource.repeat) {
        component.props.timerPool.start(component.state.datasource.url, component.state.datasource.interval, cb, true);
      } else {
        var id = component.props.timerPool.start(component.state.datasource.url, component.state.datasource.interval, cb);
        component.setState({ timerId: id });
      }
    }
  } else if (component.state.datasource.dataType === 'push') {
    var _conn = null;
    var pool = null;

    if (serverURL.indexOf('mqtt') > -1) {
      _conn = component.props.mqttPool.get('ws://' + serverURL.split('mqtt://')[1]);
      pool = component.props.mqttPool;
    } else if (serverURL.indexOf('socketio') > -1) {
      _conn = component.props.socketioPool.get('http://' + serverURL.split('socketio://')[1]);
      pool = component.props.socketioPool;
    } else {
      console.log('未支持协议', serverURL);
      return;
    }

    if (component.state.datasource.startDynamic) {
      pool.sub(_conn, component.state.datasource.channel, cb);
    } else {
      pool.unsub(_conn, component.state.datasource.channel, cb);
    }
  }
}

function stopDynamic(component) {
  var cb = component.handleDynamicData ? component.handleDynamicData : function (data) {
    console.log(data);
  };

  if (component.state.dataType === 'pull') {
    component.props.timerPool.stop(component.state.timerId);
    component.setState({ timerId: null });
  } else if (component.state.dataType === 'push') {
    component.props.mqttPool.unsub(conn, component.state.channel, cb);
  }
}

},{"../stores/block":14,"../stores/board":15,"../stores/box":16,"../stores/select":18,"../stores/ui":19,"jquery":"jquery"}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reflux = require('reflux');

var _reflux2 = _interopRequireDefault(_reflux);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _block = require('../actions/block');

var _block2 = _interopRequireDefault(_block);

var _select = require('../stores/select');

var _select2 = _interopRequireDefault(_select);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var state = {};

_select2.default.listen(function (newState) {
  state = _lodash2.default.assign(state, newState);
});

function ensureComponentInfo(info) {
  var defaults = {
    x: 0,
    y: 0,
    rotate: 0,
    h: 100,
    w: 100,
    data: {}
  };
  return _lodash2.default.assign(defaults, info);
}

var store = _reflux2.default.createStore({
  listenables: _block2.default,
  onRemoveBox: function onRemoveBox() {
    state.block.removeBox(state.box);
  },
  onNewComponent: function onNewComponent(box) {
    console.log(state.block.createBox);
    box = ensureComponentInfo(box);
    state.block.createBox(box);
  },
  onSetBlockConfig: function onSetBlockConfig(config) {
    state.block.setConfig(config);
  }

});

store.getState = function () {
  return _lodash2.default.clone(state);
};

store.findBoard = function (board) {
  return _lodash2.default.find(state.boards, board);
};

exports.default = store;

},{"../actions/block":1,"../stores/select":18,"lodash":"lodash","reflux":"reflux"}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reflux = require('reflux');

var _reflux2 = _interopRequireDefault(_reflux);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _board = require('../actions/board');

var _board2 = _interopRequireDefault(_board);

var _select = require('../actions/select');

var _select2 = _interopRequireDefault(_select);

var _select3 = require('../stores/select');

var _select4 = _interopRequireDefault(_select3);

var _client = require('../../lib/client');

var _client2 = _interopRequireDefault(_client);

var _util = require('../lib/util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

var bm = new _client2.default();
var state = {
  boards: []
};

_select4.default.listen(function (newState) {
  state = _lodash2.default.assign(state, newState);
});

var store = _reflux2.default.createStore({
  listenables: _board2.default,
  onSaveBoard: function onSaveBoard() {
    var nb = state.app.refs.board.toJson();
    console.log(nb);
    _board2.default.updateBoard({ name: nb.name }, nb);
    alert('保存成功');
  },
  onCloneBoard: function () {
    var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(newName) {
      var nb, res;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              nb = state.app.refs.board.toJson();

              nb.name = newName;
              _context.prev = 2;
              _context.next = 5;
              return bm.create(nb);

            case 5:
              res = _context.sent;

              state.boards.push(res);
              store.trigger(state);

              return _context.abrupt('return', _board2.default.createBoard.completed(nb));

            case 11:
              _context.prev = 11;
              _context.t0 = _context['catch'](2);
              return _context.abrupt('return', _board2.default.createBoard.failed(_context.t0));

            case 14:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined, [[2, 11]]);
    }));

    return function onCloneBoard(_x) {
      return ref.apply(this, arguments);
    };
  }(),
  onCreateBoard: function () {
    var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(board) {
      var res;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return bm.create(board);

            case 3:
              res = _context2.sent;

              state.boards.push(res);
              store.trigger(state);
              return _context2.abrupt('return', _board2.default.createBoard.completed(board));

            case 9:
              _context2.prev = 9;
              _context2.t0 = _context2['catch'](0);
              return _context2.abrupt('return', _board2.default.createBoard.failed(_context2.t0));

            case 12:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, undefined, [[0, 9]]);
    }));

    return function onCreateBoard(_x2) {
      return ref.apply(this, arguments);
    };
  }(),

  onRenameBoard: function () {
    var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(boardName, boardDesc) {
      var nb, oldName;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              nb = state.app.refs.board.toJson();
              oldName = nb.name;

              nb.name = boardName;
              nb.desc = boardDesc;

              // console.log("rename",boardDesc)

              _board2.default.updateBoard({ name: oldName }, nb);
              state.boards[_lodash2.default.findIndex(state.boards, { name: boardName, desc: boardDesc })] = nb;
              store.trigger(state);
              return _context3.abrupt('return', _board2.default.updateBoard.completed());

            case 8:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, undefined);
    }));

    return function onRenameBoard(_x3, _x4) {
      return ref.apply(this, arguments);
    };
  }(),

  onCreateBoardFailed: function onCreateBoardFailed() {
    console.log('create failed');
  },
  onCreateBoardCompleted: function onCreateBoardCompleted(board) {
    _select2.default.setActiveBoard(board);
  },
  onListBoards: function () {
    var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
      var res;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return bm.list();

            case 2:
              res = _context4.sent;

              state.boards = res;
              store.trigger(state);
              return _context4.abrupt('return', _board2.default.listBoards.completed());

            case 6:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, undefined);
    }));

    return function onListBoards() {
      return ref.apply(this, arguments);
    };
  }(),
  onFindBoard: function onFindBoard(board) {
    return _board2.default.findBoard.completed(_lodash2.default.filter(state.boards, board));
  },
  onRemoveBoard: function () {
    var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee5(board) {
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              if (_lodash2.default.filter(state.boards, board)) {
                _context5.next = 2;
                break;
              }

              return _context5.abrupt('return', _board2.default.removeBoard.failed('Board not found'));

            case 2:
              _context5.next = 4;
              return bm.remove(board);

            case 4:
              state.boards = state.boards.filter(function (b) {
                return b.name !== board.name;
              });
              _select2.default.setActiveBoard(state.boards[0]);
              store.trigger(state);

            case 7:
            case 'end':
              return _context5.stop();
          }
        }
      }, _callee5, undefined);
    }));

    return function onRemoveBoard(_x5) {
      return ref.apply(this, arguments);
    };
  }(),
  onUpdateBoard: function () {
    var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee6(query, board) {
      return regeneratorRuntime.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              if (_lodash2.default.filter(state.boards, board)) {
                _context6.next = 2;
                break;
              }

              return _context6.abrupt('return', _board2.default.removeBoard.failed('Board not found'));

            case 2:
              _context6.next = 4;
              return bm.update(query, board);

            case 4:
              state.boards[_lodash2.default.findIndex(state.boards, query)] = board;
              store.trigger(state);
              return _context6.abrupt('return', _board2.default.updateBoard.completed());

            case 7:
            case 'end':
              return _context6.stop();
          }
        }
      }, _callee6, undefined);
    }));

    return function onUpdateBoard(_x6, _x7) {
      return ref.apply(this, arguments);
    };
  }(),
  onAddBlock: function onAddBlock() {
    state.board.blocks.push({
      boxes: [],
      // use timestamp as id to distinguish blocks in the same board
      id: Date.now().toString(),
      w: _lodash2.default.get(state, 'board.blocks[0].w') || 800,
      h: _lodash2.default.get(state, 'board.blocks[0].h') || 600,
      img: null
    });
    store.trigger(state);
  },
  onRemoveBlock: function onRemoveBlock() {
    state.board.blocks.splice(_lodash2.default.findIndex(state.board.blocks, { id: state.block.id }), 1);
    store.trigger(state);
  },
  onMoveBlock: function onMoveBlock(step) {
    var idx = _lodash2.default.findIndex(state.board.blocks, { id: state.block.id });
    if (state.board.blocks[idx + step]) {
      (0, _util.swapElements)(state.board.blocks, idx, idx + step);
      store.trigger(state);
    }
  },
  onPublishBoard: function () {
    var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee7() {
      var board, res, link;
      return regeneratorRuntime.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              // const link = window.location.origin + `/api/display/${state.board._id}`
              // copyToClipboard(link)

              board = _lodash2.default.findIndex(state.boards, { _id: state.board._id });
              _context7.next = 3;
              return bm.publish(state.board._id);

            case 3:
              res = _context7.sent;


              if (res.status === 'ok') {
                alert('发布成功');
                link = window.location.origin + ('/publish/' + state.board._id + '.html');

                (0, _util.openWindow)(link);
              } else {
                alert('发布失败');
              }
              return _context7.abrupt('return');

            case 6:
            case 'end':
              return _context7.stop();
          }
        }
      }, _callee7, undefined);
    }));

    return function onPublishBoard() {
      return ref.apply(this, arguments);
    };
  }(),

  onGetDisplayLink: function onGetDisplayLink() {
    var link = window.location.origin + ('/api/display/' + state.board._id);
    (0, _util.copyToClipboard)(link);
  },
  onOpenDisplayLink: function onOpenDisplayLink() {
    var link = window.location.origin + ('/api/display/' + state.board._id);
    (0, _util.openWindow)(link);
  }
});

store.getState = function () {
  return _lodash2.default.clone(state);
};

store.findBoard = function (board) {
  return _lodash2.default.find(state.boards, board);
};

exports.default = store;

},{"../../lib/client":20,"../actions/board":2,"../actions/select":5,"../lib/util":13,"../stores/select":18,"lodash":"lodash","reflux":"reflux"}],16:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reflux = require('reflux');

var _reflux2 = _interopRequireDefault(_reflux);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _victor = require('victor');

var _victor2 = _interopRequireDefault(_victor);

var _box = require('../actions/box');

var _box2 = _interopRequireDefault(_box);

var _select = require('../stores/select');

var _select2 = _interopRequireDefault(_select);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ACTIONS = {
  NONE: 0,
  ROTATE: 1,
  DRAG: 2,
  RESIZE: 3
};

var ROTATE_STEP = 15,
    GRID_SIZE = 10;

var state = {
  box: null,
  dragStart: {
    x: 0,
    y: 0
  },
  center: {
    x: 0,
    y: 0
  },
  rotateStart: {
    x: 0,
    y: 0
  },
  resizeStart: {
    x: 0,
    y: 0
  },
  rInit: 0,
  action: ACTIONS.NONE,
  mode: 'edit',
  boards: []
};

_select2.default.listen(function (newState) {
  state = _lodash2.default.assign(state, newState);
});

// get the angle between vector(rotateStart.x - center.x,
// rotateStart.y - center.y)
// and vector(x - center.x, y - center.y) in degree
function getRotateAngle(x, y) {
  var _state = state;
  var rotateStart = _state.rotateStart;
  var center = _state.center;

  var vStart = new _victor2.default(rotateStart.x - center.x, rotateStart.y - center.y);
  var vEnd = new _victor2.default(x - center.x, y - center.y);
  return vEnd.angleDeg() - vStart.angleDeg();
}

// ensures box being dragged stays in block
function constrainDrag(x, y) {
  x = x + state.box.w <= state.block.w ? x : state.block.w - state.box.w;
  x = x < 0 ? 0 : x;
  y = y + state.box.h <= state.block.h ? y : state.block.h - state.box.h;
  y = y < 0 ? 0 : y;
  return { x: x, y: y };
}

var store = _reflux2.default.createStore({
  listenables: _box2.default,
  onInit: function onInit(app) {
    console.log('init started');
    if (state.ready) return null;

    state.app = app;

    document.documentElement.onmousemove = function (e) {
      switch (state.action) {
        case ACTIONS.DRAG:
          var _constrainDrag = constrainDrag(e.clientX - state.dragStart.x, e.clientY - state.dragStart.y);

          var x = _constrainDrag.x;
          var y = _constrainDrag.y;


          if (e.altKey) {
            x -= x % GRID_SIZE;
            y -= y % GRID_SIZE;
          }

          state.box.moveTo(x, y);
          break;

        case ACTIONS.ROTATE:
          var angle = state.rInit + getRotateAngle(e.clientX, e.clientY);
          if (e.altKey) angle -= angle % ROTATE_STEP;
          state.box.rotate(angle);
          break;

        case ACTIONS.RESIZE:
          var h = state.resizeStart.h + e.clientY - state.resizeStart.y,
              w = state.resizeStart.w + e.clientX - state.resizeStart.x;

          if (e.altKey) {
            h -= h % GRID_SIZE;
            w -= w % GRID_SIZE;
          }
          state.box.resize(h, w);
          break;

        default:
          break;
      }
    };

    document.documentElement.onmouseup = function () {
      state.action = ACTIONS.NONE;
    };
    document.documentElement.ondblclick = function () {
      if (state.box) state.box.openConfig();
    };

    state.ready = true;
  },
  // TODO: l2 prevent too many renders
  onStartRotate: function onStartRotate(center, x, y, theta) {
    state.action = ACTIONS.ROTATE;
    state.center = center;
    state.rotateStart = { x: x, y: y };
    state.rInit = theta;
  },
  onStartDrag: function onStartDrag(x, y) {
    state.action = ACTIONS.DRAG;
    state.dragStart = { x: x, y: y };
  },
  onStartResize: function onStartResize(h, w, x, y) {
    state.action = ACTIONS.RESIZE;
    state.resizeStart = { x: x, y: y, h: h, w: w };
  },
  onStopDrag: function onStopDrag() {
    state.action = ACTIONS.NONE;
  },
  onStopAll: function onStopAll() {
    state.action = ACTIONS.NONE;
  },
  onAddZIndex: function onAddZIndex(amount) {
    if (state.box) state.box.addZIndex(amount);
  },
  onOpenConfig: function onOpenConfig() {
    console.log('openning config', state.box);
    if (state.box) state.box.openConfig();
  }
});

store.getState = function () {
  return _lodash2.default.clone(state);
};

exports.default = store;

},{"../actions/box":3,"../stores/select":18,"lodash":"lodash","reflux":"reflux","victor":24}],17:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reflux = require('reflux');

var _reflux2 = _interopRequireDefault(_reflux);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _cloudui = require('../actions/cloudui');

var _cloudui2 = _interopRequireDefault(_cloudui);

var _client = require('../../lib/client');

var _client2 = _interopRequireDefault(_client);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

var bm = new _client2.default();

var state = {
  users: []
};

var store = _reflux2.default.createStore({
  listenables: _cloudui2.default,

  onAddUser: function () {
    var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(user) {
      var res;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log('-->addUser', user);
              _context.prev = 1;
              _context.next = 4;
              return bm.createUser(user).then(function (newUser) {
                console.log(newUser.result[0].uid);

                user.uid = newUser.result[0].uid;
                state.users.push(user);
                state.idx = null;
                store.trigger(state);
              });

            case 4:
              res = _context.sent;
              return _context.abrupt('return', 'ok');

            case 8:
              _context.prev = 8;
              _context.t0 = _context['catch'](1);

              console.log(_context.t0);
              return _context.abrupt('return', 'error');

            case 12:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined, [[1, 8]]);
    }));

    return function onAddUser(_x) {
      return ref.apply(this, arguments);
    };
  }(),

  onRemoveUser: function () {
    var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(user) {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              console.log('-->removeUser', user);

              bm.removeUser(user).then(function () {
                var idx = 0;
                for (var i = 0; i < state.users.length; i++) {
                  if (state.users[i].email === user.email) {
                    idx = i;
                    break;
                  }
                }

                state.users.splice(idx, 1);
                state.idx = null;
                state.confrim = false;
                store.trigger(state);
              });

              return _context2.abrupt('return', '');

            case 3:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, undefined);
    }));

    return function onRemoveUser(_x2) {
      return ref.apply(this, arguments);
    };
  }(),

  onRemoveUserConfrim: function () {
    var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(idx) {
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              console.log('-->removeUserConfrim', idx);
              state.showConfig = false;
              state.confrim = true;
              state.confrimMsg = '删除用户';
              state.idx = idx;
              store.trigger(state);

              return _context3.abrupt('return', '');

            case 7:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, undefined);
    }));

    return function onRemoveUserConfrim(_x3) {
      return ref.apply(this, arguments);
    };
  }(),

  onUpdateUser: function () {
    var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee4(op, user) {
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              console.log('-->updateUser', user);

              // if(op=="changePassword"){
              //  console.log(user);
              // }else if(op=="forzen"){
              //  console.log(user)
              // }

              bm.updateUser(user).then(function (result) {
                console.log(result);
                state.showConfig = false;
                state.idx = null;
                store.trigger(state);
              });

              return _context4.abrupt('return', '');

            case 3:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, undefined);
    }));

    return function onUpdateUser(_x4, _x5) {
      return ref.apply(this, arguments);
    };
  }(),

  onChangePassword: function () {
    var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee5(idx) {
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              state.showConfig = true;
              state.idx = idx;
              state.configTitle = '修改用户密码';
              store.trigger(state);

            case 4:
            case 'end':
              return _context5.stop();
          }
        }
      }, _callee5, undefined);
    }));

    return function onChangePassword(_x6) {
      return ref.apply(this, arguments);
    };
  }(),

  onListUser: function () {
    var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee6(user) {
      return regeneratorRuntime.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              console.log('-->listUser', user);
              // const nb = state.app.refs.board.toJson()
              // const oldName=nb.name
              // nb.name=boardName

              // actions.updateBoard({ name: oldName }, nb)
              // state.boards[_.findIndex(state.boards, { name: boardName })] = nb
              // store.trigger(state)
              // return actions.updateBoard.completed()
              bm.listUser().then(function (users) {
                _lodash2.default.forEach(users, function (user) {
                  // console.log(user)
                  if (state.users.indexOf(user) === -1) {
                    state.users.push(user);
                  }
                });
                console.log(state);
                store.trigger(state);
              });

              return _context6.abrupt('return', 'aa');

            case 3:
            case 'end':
              return _context6.stop();
          }
        }
      }, _callee6, undefined);
    }));

    return function onListUser(_x7) {
      return ref.apply(this, arguments);
    };
  }()

});

store.getState = function () {
  return _lodash2.default.clone(state);
};

exports.default = store;

},{"../../lib/client":20,"../actions/cloudui":4,"lodash":"lodash","reflux":"reflux"}],18:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reflux = require('reflux');

var _reflux2 = _interopRequireDefault(_reflux);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _select = require('../actions/select');

var _select2 = _interopRequireDefault(_select);

var _ui = require('./ui');

var _ui2 = _interopRequireDefault(_ui);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var state = {
  box: null,
  block: null,
  board: null
};

_ui2.default.listen(function (newState) {
  _lodash2.default.assign(state, newState);
});

var store = _reflux2.default.createStore({
  listenables: _select2.default,
  onSetActiveBlock: function onSetActiveBlock(block) {
    if (state.mode === 'publish') return null;
    if (state.block === block) return null;
    _select2.default.setActiveBox(null);
    if (state.block) state.block.deactivate();
    state.block = block;
    if (block) block.activate();
    store.trigger(state);
  },
  onSetActiveBox: function onSetActiveBox(box) {
    if (state.mode === 'publish') return null;
    if (state.box === box) return null;
    if (state.box) state.box.deactivate();
    state.box = box;
    if (box) box.activate();
    store.trigger(state);
  },
  onSetActiveBoard: function onSetActiveBoard(board) {
    if (state.mode === 'publish') return null;
    if (_lodash2.default.get(state, 'board.name') === board.name) return null;
    if (state.box) state.box.deactivate();
    state.box = null;
    state.block = null;
    state.board = board;
    store.trigger(state);
  },
  onSetApp: function onSetApp(app) {
    state.app = app;
    store.trigger(state);
  }
});

store.getState = function () {
  return _lodash2.default.clone(state);
};

exports.default = store;

},{"../actions/select":5,"./ui":19,"lodash":"lodash","reflux":"reflux"}],19:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reflux = require('reflux');

var _reflux2 = _interopRequireDefault(_reflux);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _ui = require('../actions/ui');

var _ui2 = _interopRequireDefault(_ui);

var _select = require('../actions/select');

var _select2 = _interopRequireDefault(_select);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var state = {
  showBlockConfig: false,
  showBoardConfig: false,
  mode: 'edit',
  theme: 'default'
};

var store = _reflux2.default.createStore({
  listenables: _ui2.default,
  onOpenBlockConfig: function onOpenBlockConfig() {
    state.showBlockConfig = true;
    store.trigger(state);
  },
  onCloseBlockConfig: function onCloseBlockConfig() {
    state.showBlockConfig = false;
    store.trigger(state);
  },

  onOpenBoardConfig: function onOpenBoardConfig(name, action) {
    state.showBoardConfig = true;
    if (name) {
      state.boardName = name;
    }

    state.boardAction = action;
    store.trigger(state);
  },
  onCloseBoardConfig: function onCloseBoardConfig() {
    state.showBoardConfig = false;
    store.trigger(state);
  },
  onSetMode: function onSetMode(mode) {
    if (state.mode === mode) return null;
    state.mode = mode;
    _select2.default.setActiveBox(null);
    _select2.default.setActiveBlock(null);
    store.trigger(state);
  },
  onSetTheme: function onSetTheme(theme) {
    if (state.theme === theme) return null;
    state.theme = theme;
    store.trigger(state);
  }
});

store.getState = function () {
  return _lodash2.default.clone(state);
};

exports.default = store;

},{"../actions/select":5,"../actions/ui":6,"lodash":"lodash","reflux":"reflux"}],20:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var $ = require('jquery');

module.exports = function () {
    function BoardManagerClient(opts) {
        _classCallCheck(this, BoardManagerClient);

        opts = opts || {};
        this.host = opts.host || '';
        this.path = opts.path || 'api';
    }

    _createClass(BoardManagerClient, [{
        key: '_url',
        value: function _url(endpoint) {
            console.log(this.host + '/' + this.path + '/' + endpoint);
            return this.host + '/' + this.path + '/' + endpoint;
        }
    }, {
        key: '_jsonReq',
        value: function _jsonReq(method, data, endpoint) {
            var opts = {
                method: method,
                data: JSON.stringify(data),
                contentType: 'application/json; charset=utf-8',
                dataType: 'json',
                url: this._url(endpoint)
            };
            if (method === 'GET') opts.data = data;else {
                opts.data = JSON.stringify(data);
                opts.contentType = 'application/json; charset=utf-8';
                opts.dataType = 'json';
            }
            return $.ajax(opts);
        }
    }, {
        key: 'listUser',
        value: function listUser() {
            return this._jsonReq('GET', {}, 'v1/user');
        }
    }, {
        key: 'createUser',
        value: function createUser(user) {
            return this._jsonReq('POST', user, 'v1/user');
        }
    }, {
        key: 'removeUser',
        value: function removeUser(user) {
            return this._jsonReq('DELETE', user, 'v1/user/' + user.uid);
        }
    }, {
        key: 'updateUser',
        value: function updateUser(user) {
            return this._jsonReq('PUT', user, 'v1/user/' + user.uid);
        }
    }, {
        key: 'publish',
        value: function publish(board_id) {
            return this._jsonReq('POST', {}, '/board/publish/' + board_id);
        }
    }, {
        key: 'create',
        value: function create(board) {
            return this._jsonReq('PUT', { board: board }, 'board');
        }
    }, {
        key: 'remove',
        value: function remove(board) {
            return this._jsonReq('DELETE', { board: board }, 'board');
        }
    }, {
        key: 'update',
        value: function update(query, board) {
            return this._jsonReq('PATCH', { query: query, board: board }, 'board');
        }
    }, {
        key: 'find',
        value: function find(board) {
            return this._jsonReq('GET', { board: board }, 'board');
        }
    }, {
        key: 'list',
        value: function list() {
            return this._jsonReq('GET', {}, 'boards');
        }
    }]);

    return BoardManagerClient;
}();

},{"jquery":"jquery"}],21:[function(require,module,exports){
module.exports = {"text":"_node_modules_orientboard_component_example_css_component__text"}
},{}],22:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _autobindDecorator = require('autobind-decorator');

var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);

var _component = require('../css/component.css');

var _component2 = _interopRequireDefault(_component);

var _reactBootstrap = require('react-bootstrap');

var _newComponentModal = require('./new-component-modal');

var _newComponentModal2 = _interopRequireDefault(_newComponentModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Example = (0, _autobindDecorator2.default)(_class = function (_React$Component) {
  _inherits(Example, _React$Component);

  function Example(props) {
    _classCallCheck(this, Example);

    // props:
    // - data: object, your data
    // - edit: boolean, whether your component should be editable
    // - theme: string, the global theme

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Example).call(this, props));

    _this.state = {
      showConfig: false,
      content: _this.props.data.content
    };
    return _this;
  }

  _createClass(Example, [{
    key: 'toJson',
    value: function toJson() {
      // return the data you want to save as an object
      return {
        content: this.state.content
      };
    }
  }, {
    key: 'openConfig',
    value: function openConfig() {
      this.setState({ showConfig: true });
    }
  }, {
    key: 'closeConfig',
    value: function closeConfig() {
      this.setState({ showConfig: false });
    }
  }, {
    key: '_applyConfig',
    value: function _applyConfig() {
      // apply changes here
      this.closeConfig();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        this.props,
        _react2.default.createElement(
          _reactBootstrap.Modal,
          { show: this.state.showConfig, onHide: this.closeConfig },
          _react2.default.createElement(
            _reactBootstrap.Modal.Header,
            null,
            _react2.default.createElement(
              _reactBootstrap.Modal.Title,
              null,
              'Config'
            )
          ),
          _react2.default.createElement(
            _reactBootstrap.Modal.Body,
            null,
            'Config goes here'
          ),
          _react2.default.createElement(
            _reactBootstrap.Modal.Footer,
            null,
            _react2.default.createElement(
              _reactBootstrap.Button,
              { onClick: this.closeConfig },
              'Cancel'
            ),
            _react2.default.createElement(
              _reactBootstrap.Button,
              { onClick: this._applyConfig },
              'Confirm'
            )
          )
        ),
        _react2.default.createElement(
          'h1',
          { className: _component2.default.text },
          this.state.content
        )
      );
    }
  }]);

  return Example;
}(_react2.default.Component)) || _class;

Example.propTypes = {
  data: _react2.default.PropTypes.object,
  theme: _react2.default.PropTypes.string
};

Example.NewComponentConfig = _newComponentModal2.default;

exports.default = Example;
},{"../css/component.css":21,"./new-component-modal":23,"autobind-decorator":"autobind-decorator","react":"react","react-bootstrap":"react-bootstrap"}],23:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _autobindDecorator = require('autobind-decorator');

var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NewComponentModal = (0, _autobindDecorator2.default)(_class = function (_React$Component) {
  _inherits(NewComponentModal, _React$Component);

  function NewComponentModal(props) {
    _classCallCheck(this, NewComponentModal);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(NewComponentModal).call(this, props));

    _this.state = {
      show: false
    };
    return _this;
  }

  _createClass(NewComponentModal, [{
    key: 'open',
    value: function open() {
      this.setState({ show: true });
    }
  }, {
    key: 'close',
    value: function close() {
      this.setState({ show: false });
    }
  }, {
    key: '_create',
    value: function _create() {
      var info = {
        x: 0,
        y: 0,
        w: parseInt(this.refs.w.getValue(), 10),
        h: parseInt(this.refs.h.getValue(), 10),
        rotate: 0,
        // the short name of your component here
        type: 'example',
        data: {
          content: this.refs.content.getValue()
        }
      };
      this.props.actions.newComponent(info);
      this.close();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactBootstrap.Modal,
        { show: this.state.show, onHide: this.close },
        _react2.default.createElement(
          _reactBootstrap.Modal.Header,
          null,
          _react2.default.createElement(
            _reactBootstrap.Modal.Title,
            null,
            'New Component'
          )
        ),
        _react2.default.createElement(
          _reactBootstrap.Modal.Body,
          null,
          _react2.default.createElement(
            'form',
            null,
            _react2.default.createElement(_reactBootstrap.Input, { type: 'text', label: 'w', ref: 'w' }),
            _react2.default.createElement(_reactBootstrap.Input, { type: 'text', label: 'h', ref: 'h' }),
            _react2.default.createElement(_reactBootstrap.Input, { type: 'text', label: 'content', ref: 'content' })
          )
        ),
        _react2.default.createElement(
          _reactBootstrap.Modal.Footer,
          null,
          _react2.default.createElement(
            _reactBootstrap.Button,
            { onClick: this.close },
            'Cancel'
          ),
          _react2.default.createElement(
            _reactBootstrap.Button,
            { onClick: this._create },
            'Confirm'
          )
        )
      );
    }
  }]);

  return NewComponentModal;
}(_react2.default.Component)) || _class;

NewComponentModal.propTypes = {
  actions: _react2.default.PropTypes.object
};

NewComponentModal.defaultProps = {};

exports.default = NewComponentModal;
},{"autobind-decorator":"autobind-decorator","react":"react","react-bootstrap":"react-bootstrap"}],24:[function(require,module,exports){
exports = module.exports = Victor;

/**
 * # Victor - A JavaScript 2D vector class with methods for common vector operations
 */

/**
 * Constructor. Will also work without the `new` keyword
 *
 * ### Examples:
 *     var vec1 = new Victor(100, 50);
 *     var vec2 = Victor(42, 1337);
 *
 * @param {Number} x Value of the x axis
 * @param {Number} y Value of the y axis
 * @return {Victor}
 * @api public
 */
function Victor (x, y) {
	if (!(this instanceof Victor)) {
		return new Victor(x, y);
	}

	/**
	 * The X axis
	 *
	 * ### Examples:
	 *     var vec = new Victor.fromArray(42, 21);
	 *
	 *     vec.x;
	 *     // => 42
	 *
	 * @api public
	 */
	this.x = x || 0;

	/**
	 * The Y axis
	 *
	 * ### Examples:
	 *     var vec = new Victor.fromArray(42, 21);
	 *
	 *     vec.y;
	 *     // => 21
	 *
	 * @api public
	 */
	this.y = y || 0;
};

/**
 * # Static
 */

/**
 * Creates a new instance from an array
 *
 * ### Examples:
 *     var vec = Victor.fromArray([42, 21]);
 *
 *     vec.toString();
 *     // => x:42, y:21
 *
 * @name Victor.fromArray
 * @param {Array} array Array with the x and y values at index 0 and 1 respectively
 * @return {Victor} The new instance
 * @api public
 */
Victor.fromArray = function (arr) {
	return new Victor(arr[0] || 0, arr[1] || 0);
};

/**
 * Creates a new instance from an object
 *
 * ### Examples:
 *     var vec = Victor.fromObject({ x: 42, y: 21 });
 *
 *     vec.toString();
 *     // => x:42, y:21
 *
 * @name Victor.fromObject
 * @param {Object} obj Object with the values for x and y
 * @return {Victor} The new instance
 * @api public
 */
Victor.fromObject = function (obj) {
	return new Victor(obj.x || 0, obj.y || 0);
};

/**
 * # Manipulation
 *
 * These functions are chainable.
 */

/**
 * Adds another vector's X axis to this one
 *
 * ### Examples:
 *     var vec1 = new Victor(10, 10);
 *     var vec2 = new Victor(20, 30);
 *
 *     vec1.addX(vec2);
 *     vec1.toString();
 *     // => x:30, y:10
 *
 * @param {Victor} vector The other vector you want to add to this one
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.addX = function (vec) {
	this.x += vec.x;
	return this;
};

/**
 * Adds another vector's Y axis to this one
 *
 * ### Examples:
 *     var vec1 = new Victor(10, 10);
 *     var vec2 = new Victor(20, 30);
 *
 *     vec1.addY(vec2);
 *     vec1.toString();
 *     // => x:10, y:40
 *
 * @param {Victor} vector The other vector you want to add to this one
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.addY = function (vec) {
	this.y += vec.y;
	return this;
};

/**
 * Adds another vector to this one
 *
 * ### Examples:
 *     var vec1 = new Victor(10, 10);
 *     var vec2 = new Victor(20, 30);
 *
 *     vec1.add(vec2);
 *     vec1.toString();
 *     // => x:30, y:40
 *
 * @param {Victor} vector The other vector you want to add to this one
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.add = function (vec) {
	this.x += vec.x;
	this.y += vec.y;
	return this;
};

/**
 * Adds the given scalar to both vector axis
 *
 * ### Examples:
 *     var vec = new Victor(1, 2);
 *
 *     vec.addScalar(2);
 *     vec.toString();
 *     // => x: 3, y: 4
 *
 * @param {Number} scalar The scalar to add
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.addScalar = function (scalar) {
	this.x += scalar;
	this.y += scalar;
	return this;
};

/**
 * Adds the given scalar to the X axis
 *
 * ### Examples:
 *     var vec = new Victor(1, 2);
 *
 *     vec.addScalarX(2);
 *     vec.toString();
 *     // => x: 3, y: 2
 *
 * @param {Number} scalar The scalar to add
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.addScalarX = function (scalar) {
	this.x += scalar;
	return this;
};

/**
 * Adds the given scalar to the Y axis
 *
 * ### Examples:
 *     var vec = new Victor(1, 2);
 *
 *     vec.addScalarY(2);
 *     vec.toString();
 *     // => x: 1, y: 4
 *
 * @param {Number} scalar The scalar to add
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.addScalarY = function (scalar) {
	this.y += scalar;
	return this;
};

/**
 * Subtracts the X axis of another vector from this one
 *
 * ### Examples:
 *     var vec1 = new Victor(100, 50);
 *     var vec2 = new Victor(20, 30);
 *
 *     vec1.subtractX(vec2);
 *     vec1.toString();
 *     // => x:80, y:50
 *
 * @param {Victor} vector The other vector you want subtract from this one
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.subtractX = function (vec) {
	this.x -= vec.x;
	return this;
};

/**
 * Subtracts the Y axis of another vector from this one
 *
 * ### Examples:
 *     var vec1 = new Victor(100, 50);
 *     var vec2 = new Victor(20, 30);
 *
 *     vec1.subtractY(vec2);
 *     vec1.toString();
 *     // => x:100, y:20
 *
 * @param {Victor} vector The other vector you want subtract from this one
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.subtractY = function (vec) {
	this.y -= vec.y;
	return this;
};

/**
 * Subtracts another vector from this one
 *
 * ### Examples:
 *     var vec1 = new Victor(100, 50);
 *     var vec2 = new Victor(20, 30);
 *
 *     vec1.subtract(vec2);
 *     vec1.toString();
 *     // => x:80, y:20
 *
 * @param {Victor} vector The other vector you want subtract from this one
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.subtract = function (vec) {
	this.x -= vec.x;
	this.y -= vec.y;
	return this;
};

/**
 * Subtracts the given scalar from both axis
 *
 * ### Examples:
 *     var vec = new Victor(100, 200);
 *
 *     vec.subtractScalar(20);
 *     vec.toString();
 *     // => x: 80, y: 180
 *
 * @param {Number} scalar The scalar to subtract
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.subtractScalar = function (scalar) {
	this.x -= scalar;
	this.y -= scalar;
	return this;
};

/**
 * Subtracts the given scalar from the X axis
 *
 * ### Examples:
 *     var vec = new Victor(100, 200);
 *
 *     vec.subtractScalarX(20);
 *     vec.toString();
 *     // => x: 80, y: 200
 *
 * @param {Number} scalar The scalar to subtract
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.subtractScalarX = function (scalar) {
	this.x -= scalar;
	return this;
};

/**
 * Subtracts the given scalar from the Y axis
 *
 * ### Examples:
 *     var vec = new Victor(100, 200);
 *
 *     vec.subtractScalarY(20);
 *     vec.toString();
 *     // => x: 100, y: 180
 *
 * @param {Number} scalar The scalar to subtract
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.subtractScalarY = function (scalar) {
	this.y -= scalar;
	return this;
};

/**
 * Divides the X axis by the x component of given vector
 *
 * ### Examples:
 *     var vec = new Victor(100, 50);
 *     var vec2 = new Victor(2, 0);
 *
 *     vec.divideX(vec2);
 *     vec.toString();
 *     // => x:50, y:50
 *
 * @param {Victor} vector The other vector you want divide by
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.divideX = function (vector) {
	this.x /= vector.x;
	return this;
};

/**
 * Divides the Y axis by the y component of given vector
 *
 * ### Examples:
 *     var vec = new Victor(100, 50);
 *     var vec2 = new Victor(0, 2);
 *
 *     vec.divideY(vec2);
 *     vec.toString();
 *     // => x:100, y:25
 *
 * @param {Victor} vector The other vector you want divide by
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.divideY = function (vector) {
	this.y /= vector.y;
	return this;
};

/**
 * Divides both vector axis by a axis values of given vector
 *
 * ### Examples:
 *     var vec = new Victor(100, 50);
 *     var vec2 = new Victor(2, 2);
 *
 *     vec.divide(vec2);
 *     vec.toString();
 *     // => x:50, y:25
 *
 * @param {Victor} vector The vector to divide by
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.divide = function (vector) {
	this.x /= vector.x;
	this.y /= vector.y;
	return this;
};

/**
 * Divides both vector axis by the given scalar value
 *
 * ### Examples:
 *     var vec = new Victor(100, 50);
 *
 *     vec.divideScalar(2);
 *     vec.toString();
 *     // => x:50, y:25
 *
 * @param {Number} The scalar to divide by
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.divideScalar = function (scalar) {
	if (scalar !== 0) {
		this.x /= scalar;
		this.y /= scalar;
	} else {
		this.x = 0;
		this.y = 0;
	}

	return this;
};

/**
 * Divides the X axis by the given scalar value
 *
 * ### Examples:
 *     var vec = new Victor(100, 50);
 *
 *     vec.divideScalarX(2);
 *     vec.toString();
 *     // => x:50, y:50
 *
 * @param {Number} The scalar to divide by
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.divideScalarX = function (scalar) {
	if (scalar !== 0) {
		this.x /= scalar;
	} else {
		this.x = 0;
	}
	return this;
};

/**
 * Divides the Y axis by the given scalar value
 *
 * ### Examples:
 *     var vec = new Victor(100, 50);
 *
 *     vec.divideScalarY(2);
 *     vec.toString();
 *     // => x:100, y:25
 *
 * @param {Number} The scalar to divide by
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.divideScalarY = function (scalar) {
	if (scalar !== 0) {
		this.y /= scalar;
	} else {
		this.y = 0;
	}
	return this;
};

/**
 * Inverts the X axis
 *
 * ### Examples:
 *     var vec = new Victor(100, 50);
 *
 *     vec.invertX();
 *     vec.toString();
 *     // => x:-100, y:50
 *
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.invertX = function () {
	this.x *= -1;
	return this;
};

/**
 * Inverts the Y axis
 *
 * ### Examples:
 *     var vec = new Victor(100, 50);
 *
 *     vec.invertY();
 *     vec.toString();
 *     // => x:100, y:-50
 *
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.invertY = function () {
	this.y *= -1;
	return this;
};

/**
 * Inverts both axis
 *
 * ### Examples:
 *     var vec = new Victor(100, 50);
 *
 *     vec.invert();
 *     vec.toString();
 *     // => x:-100, y:-50
 *
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.invert = function () {
	this.invertX();
	this.invertY();
	return this;
};

/**
 * Multiplies the X axis by X component of given vector
 *
 * ### Examples:
 *     var vec = new Victor(100, 50);
 *     var vec2 = new Victor(2, 0);
 *
 *     vec.multiplyX(vec2);
 *     vec.toString();
 *     // => x:200, y:50
 *
 * @param {Victor} vector The vector to multiply the axis with
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.multiplyX = function (vector) {
	this.x *= vector.x;
	return this;
};

/**
 * Multiplies the Y axis by Y component of given vector
 *
 * ### Examples:
 *     var vec = new Victor(100, 50);
 *     var vec2 = new Victor(0, 2);
 *
 *     vec.multiplyX(vec2);
 *     vec.toString();
 *     // => x:100, y:100
 *
 * @param {Victor} vector The vector to multiply the axis with
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.multiplyY = function (vector) {
	this.y *= vector.y;
	return this;
};

/**
 * Multiplies both vector axis by values from a given vector
 *
 * ### Examples:
 *     var vec = new Victor(100, 50);
 *     var vec2 = new Victor(2, 2);
 *
 *     vec.multiply(vec2);
 *     vec.toString();
 *     // => x:200, y:100
 *
 * @param {Victor} vector The vector to multiply by
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.multiply = function (vector) {
	this.x *= vector.x;
	this.y *= vector.y;
	return this;
};

/**
 * Multiplies both vector axis by the given scalar value
 *
 * ### Examples:
 *     var vec = new Victor(100, 50);
 *
 *     vec.multiplyScalar(2);
 *     vec.toString();
 *     // => x:200, y:100
 *
 * @param {Number} The scalar to multiply by
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.multiplyScalar = function (scalar) {
	this.x *= scalar;
	this.y *= scalar;
	return this;
};

/**
 * Multiplies the X axis by the given scalar
 *
 * ### Examples:
 *     var vec = new Victor(100, 50);
 *
 *     vec.multiplyScalarX(2);
 *     vec.toString();
 *     // => x:200, y:50
 *
 * @param {Number} The scalar to multiply the axis with
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.multiplyScalarX = function (scalar) {
	this.x *= scalar;
	return this;
};

/**
 * Multiplies the Y axis by the given scalar
 *
 * ### Examples:
 *     var vec = new Victor(100, 50);
 *
 *     vec.multiplyScalarY(2);
 *     vec.toString();
 *     // => x:100, y:100
 *
 * @param {Number} The scalar to multiply the axis with
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.multiplyScalarY = function (scalar) {
	this.y *= scalar;
	return this;
};

/**
 * Normalize
 *
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.normalize = function () {
	var length = this.length();

	if (length === 0) {
		this.x = 1;
		this.y = 0;
	} else {
		this.divide(Victor(length, length));
	}
	return this;
};

Victor.prototype.norm = Victor.prototype.normalize;

/**
 * If the absolute vector axis is greater than `max`, multiplies the axis by `factor`
 *
 * ### Examples:
 *     var vec = new Victor(100, 50);
 *
 *     vec.limit(80, 0.9);
 *     vec.toString();
 *     // => x:90, y:50
 *
 * @param {Number} max The maximum value for both x and y axis
 * @param {Number} factor Factor by which the axis are to be multiplied with
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.limit = function (max, factor) {
	if (Math.abs(this.x) > max){ this.x *= factor; }
	if (Math.abs(this.y) > max){ this.y *= factor; }
	return this;
};

/**
 * Randomizes both vector axis with a value between 2 vectors
 *
 * ### Examples:
 *     var vec = new Victor(100, 50);
 *
 *     vec.randomize(new Victor(50, 60), new Victor(70, 80`));
 *     vec.toString();
 *     // => x:67, y:73
 *
 * @param {Victor} topLeft first vector
 * @param {Victor} bottomRight second vector
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.randomize = function (topLeft, bottomRight) {
	this.randomizeX(topLeft, bottomRight);
	this.randomizeY(topLeft, bottomRight);

	return this;
};

/**
 * Randomizes the y axis with a value between 2 vectors
 *
 * ### Examples:
 *     var vec = new Victor(100, 50);
 *
 *     vec.randomizeX(new Victor(50, 60), new Victor(70, 80`));
 *     vec.toString();
 *     // => x:55, y:50
 *
 * @param {Victor} topLeft first vector
 * @param {Victor} bottomRight second vector
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.randomizeX = function (topLeft, bottomRight) {
	var min = Math.min(topLeft.x, bottomRight.x);
	var max = Math.max(topLeft.x, bottomRight.x);
	this.x = random(min, max);
	return this;
};

/**
 * Randomizes the y axis with a value between 2 vectors
 *
 * ### Examples:
 *     var vec = new Victor(100, 50);
 *
 *     vec.randomizeY(new Victor(50, 60), new Victor(70, 80`));
 *     vec.toString();
 *     // => x:100, y:66
 *
 * @param {Victor} topLeft first vector
 * @param {Victor} bottomRight second vector
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.randomizeY = function (topLeft, bottomRight) {
	var min = Math.min(topLeft.y, bottomRight.y);
	var max = Math.max(topLeft.y, bottomRight.y);
	this.y = random(min, max);
	return this;
};

/**
 * Randomly randomizes either axis between 2 vectors
 *
 * ### Examples:
 *     var vec = new Victor(100, 50);
 *
 *     vec.randomizeAny(new Victor(50, 60), new Victor(70, 80));
 *     vec.toString();
 *     // => x:100, y:77
 *
 * @param {Victor} topLeft first vector
 * @param {Victor} bottomRight second vector
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.randomizeAny = function (topLeft, bottomRight) {
	if (!! Math.round(Math.random())) {
		this.randomizeX(topLeft, bottomRight);
	} else {
		this.randomizeY(topLeft, bottomRight);
	}
	return this;
};

/**
 * Rounds both axis to an integer value
 *
 * ### Examples:
 *     var vec = new Victor(100.2, 50.9);
 *
 *     vec.unfloat();
 *     vec.toString();
 *     // => x:100, y:51
 *
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.unfloat = function () {
	this.x = Math.round(this.x);
	this.y = Math.round(this.y);
	return this;
};

/**
 * Rounds both axis to a certain precision
 *
 * ### Examples:
 *     var vec = new Victor(100.2, 50.9);
 *
 *     vec.unfloat();
 *     vec.toString();
 *     // => x:100, y:51
 *
 * @param {Number} Precision (default: 8)
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.toFixed = function (precision) {
	if (typeof precision === 'undefined') { precision = 8; }
	this.x = this.x.toFixed(precision);
	this.y = this.y.toFixed(precision);
	return this;
};

/**
 * Performs a linear blend / interpolation of the X axis towards another vector
 *
 * ### Examples:
 *     var vec1 = new Victor(100, 100);
 *     var vec2 = new Victor(200, 200);
 *
 *     vec1.mixX(vec2, 0.5);
 *     vec.toString();
 *     // => x:150, y:100
 *
 * @param {Victor} vector The other vector
 * @param {Number} amount The blend amount (optional, default: 0.5)
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.mixX = function (vec, amount) {
	if (typeof amount === 'undefined') {
		amount = 0.5;
	}

	this.x = (1 - amount) * this.x + amount * vec.x;
	return this;
};

/**
 * Performs a linear blend / interpolation of the Y axis towards another vector
 *
 * ### Examples:
 *     var vec1 = new Victor(100, 100);
 *     var vec2 = new Victor(200, 200);
 *
 *     vec1.mixY(vec2, 0.5);
 *     vec.toString();
 *     // => x:100, y:150
 *
 * @param {Victor} vector The other vector
 * @param {Number} amount The blend amount (optional, default: 0.5)
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.mixY = function (vec, amount) {
	if (typeof amount === 'undefined') {
		amount = 0.5;
	}

	this.y = (1 - amount) * this.y + amount * vec.y;
	return this;
};

/**
 * Performs a linear blend / interpolation towards another vector
 *
 * ### Examples:
 *     var vec1 = new Victor(100, 100);
 *     var vec2 = new Victor(200, 200);
 *
 *     vec1.mix(vec2, 0.5);
 *     vec.toString();
 *     // => x:150, y:150
 *
 * @param {Victor} vector The other vector
 * @param {Number} amount The blend amount (optional, default: 0.5)
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.mix = function (vec, amount) {
	this.mixX(vec, amount);
	this.mixY(vec, amount);
	return this;
};

/**
 * # Products
 */

/**
 * Creates a clone of this vector
 *
 * ### Examples:
 *     var vec1 = new Victor(10, 10);
 *     var vec2 = vec1.clone();
 *
 *     vec2.toString();
 *     // => x:10, y:10
 *
 * @return {Victor} A clone of the vector
 * @api public
 */
Victor.prototype.clone = function () {
	return new Victor(this.x, this.y);
};

/**
 * Copies another vector's X component in to its own
 *
 * ### Examples:
 *     var vec1 = new Victor(10, 10);
 *     var vec2 = new Victor(20, 20);
 *     var vec2 = vec1.copyX(vec1);
 *
 *     vec2.toString();
 *     // => x:20, y:10
 *
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.copyX = function (vec) {
	this.x = vec.x;
	return this;
};

/**
 * Copies another vector's Y component in to its own
 *
 * ### Examples:
 *     var vec1 = new Victor(10, 10);
 *     var vec2 = new Victor(20, 20);
 *     var vec2 = vec1.copyY(vec1);
 *
 *     vec2.toString();
 *     // => x:10, y:20
 *
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.copyY = function (vec) {
	this.y = vec.y;
	return this;
};

/**
 * Copies another vector's X and Y components in to its own
 *
 * ### Examples:
 *     var vec1 = new Victor(10, 10);
 *     var vec2 = new Victor(20, 20);
 *     var vec2 = vec1.copy(vec1);
 *
 *     vec2.toString();
 *     // => x:20, y:20
 *
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.copy = function (vec) {
	this.copyX(vec);
	this.copyY(vec);
	return this;
};

/**
 * Sets the vector to zero (0,0)
 *
 * ### Examples:
 *     var vec1 = new Victor(10, 10);
 *		 var1.zero();
 *     vec1.toString();
 *     // => x:0, y:0
 *
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.zero = function () {
	this.x = this.y = 0;
	return this;
};

/**
 * Calculates the dot product of this vector and another
 *
 * ### Examples:
 *     var vec1 = new Victor(100, 50);
 *     var vec2 = new Victor(200, 60);
 *
 *     vec1.dot(vec2);
 *     // => 23000
 *
 * @param {Victor} vector The second vector
 * @return {Number} Dot product
 * @api public
 */
Victor.prototype.dot = function (vec2) {
	return this.x * vec2.x + this.y * vec2.y;
};

Victor.prototype.cross = function (vec2) {
	return (this.x * vec2.y ) - (this.y * vec2.x );
};

/**
 * Projects a vector onto another vector, setting itself to the result.
 *
 * ### Examples:
 *     var vec = new Victor(100, 0);
 *     var vec2 = new Victor(100, 100);
 *
 *     vec.projectOnto(vec2);
 *     vec.toString();
 *     // => x:50, y:50
 *
 * @param {Victor} vector The other vector you want to project this vector onto
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.projectOnto = function (vec2) {
    var coeff = ( (this.x * vec2.x)+(this.y * vec2.y) ) / ((vec2.x*vec2.x)+(vec2.y*vec2.y));
    this.x = coeff * vec2.x;
    this.y = coeff * vec2.y;
    return this;
};


Victor.prototype.horizontalAngle = function () {
	return Math.atan2(this.y, this.x);
};

Victor.prototype.horizontalAngleDeg = function () {
	return radian2degrees(this.horizontalAngle());
};

Victor.prototype.verticalAngle = function () {
	return Math.atan2(this.x, this.y);
};

Victor.prototype.verticalAngleDeg = function () {
	return radian2degrees(this.verticalAngle());
};

Victor.prototype.angle = Victor.prototype.horizontalAngle;
Victor.prototype.angleDeg = Victor.prototype.horizontalAngleDeg;
Victor.prototype.direction = Victor.prototype.horizontalAngle;

Victor.prototype.rotate = function (angle) {
	var nx = (this.x * Math.cos(angle)) - (this.y * Math.sin(angle));
	var ny = (this.x * Math.sin(angle)) + (this.y * Math.cos(angle));

	this.x = nx;
	this.y = ny;

	return this;
};

Victor.prototype.rotateDeg = function (angle) {
	angle = degrees2radian(angle);
	return this.rotate(angle);
};

Victor.prototype.rotateTo = function(rotation) {
	return this.rotate(rotation-this.angle());
};

Victor.prototype.rotateToDeg = function(rotation) {
	rotation = degrees2radian(rotation);
	return this.rotateTo(rotation);
};

Victor.prototype.rotateBy = function (rotation) {
	var angle = this.angle() + rotation;

	return this.rotate(angle);
};

Victor.prototype.rotateByDeg = function (rotation) {
	rotation = degrees2radian(rotation);
	return this.rotateBy(rotation);
};

/**
 * Calculates the distance of the X axis between this vector and another
 *
 * ### Examples:
 *     var vec1 = new Victor(100, 50);
 *     var vec2 = new Victor(200, 60);
 *
 *     vec1.distanceX(vec2);
 *     // => -100
 *
 * @param {Victor} vector The second vector
 * @return {Number} Distance
 * @api public
 */
Victor.prototype.distanceX = function (vec) {
	return this.x - vec.x;
};

/**
 * Same as `distanceX()` but always returns an absolute number
 *
 * ### Examples:
 *     var vec1 = new Victor(100, 50);
 *     var vec2 = new Victor(200, 60);
 *
 *     vec1.absDistanceX(vec2);
 *     // => 100
 *
 * @param {Victor} vector The second vector
 * @return {Number} Absolute distance
 * @api public
 */
Victor.prototype.absDistanceX = function (vec) {
	return Math.abs(this.distanceX(vec));
};

/**
 * Calculates the distance of the Y axis between this vector and another
 *
 * ### Examples:
 *     var vec1 = new Victor(100, 50);
 *     var vec2 = new Victor(200, 60);
 *
 *     vec1.distanceY(vec2);
 *     // => -10
 *
 * @param {Victor} vector The second vector
 * @return {Number} Distance
 * @api public
 */
Victor.prototype.distanceY = function (vec) {
	return this.y - vec.y;
};

/**
 * Same as `distanceY()` but always returns an absolute number
 *
 * ### Examples:
 *     var vec1 = new Victor(100, 50);
 *     var vec2 = new Victor(200, 60);
 *
 *     vec1.distanceY(vec2);
 *     // => 10
 *
 * @param {Victor} vector The second vector
 * @return {Number} Absolute distance
 * @api public
 */
Victor.prototype.absDistanceY = function (vec) {
	return Math.abs(this.distanceY(vec));
};

/**
 * Calculates the euclidean distance between this vector and another
 *
 * ### Examples:
 *     var vec1 = new Victor(100, 50);
 *     var vec2 = new Victor(200, 60);
 *
 *     vec1.distance(vec2);
 *     // => 100.4987562112089
 *
 * @param {Victor} vector The second vector
 * @return {Number} Distance
 * @api public
 */
Victor.prototype.distance = function (vec) {
	return Math.sqrt(this.distanceSq(vec));
};

/**
 * Calculates the squared euclidean distance between this vector and another
 *
 * ### Examples:
 *     var vec1 = new Victor(100, 50);
 *     var vec2 = new Victor(200, 60);
 *
 *     vec1.distanceSq(vec2);
 *     // => 10100
 *
 * @param {Victor} vector The second vector
 * @return {Number} Distance
 * @api public
 */
Victor.prototype.distanceSq = function (vec) {
	var dx = this.distanceX(vec),
		dy = this.distanceY(vec);

	return dx * dx + dy * dy;
};

/**
 * Calculates the length or magnitude of the vector
 *
 * ### Examples:
 *     var vec = new Victor(100, 50);
 *
 *     vec.length();
 *     // => 111.80339887498948
 *
 * @return {Number} Length / Magnitude
 * @api public
 */
Victor.prototype.length = function () {
	return Math.sqrt(this.lengthSq());
};

/**
 * Squared length / magnitude
 *
 * ### Examples:
 *     var vec = new Victor(100, 50);
 *
 *     vec.lengthSq();
 *     // => 12500
 *
 * @return {Number} Length / Magnitude
 * @api public
 */
Victor.prototype.lengthSq = function () {
	return this.x * this.x + this.y * this.y;
};

Victor.prototype.magnitude = Victor.prototype.length;

/**
 * Returns a true if vector is (0, 0)
 *
 * ### Examples:
 *     var vec = new Victor(100, 50);
 *     vec.zero();
 *
 *     // => true
 *
 * @return {Boolean}
 * @api public
 */
Victor.prototype.isZero = function() {
	return this.x === 0 && this.y === 0;
};

/**
 * Returns a true if this vector is the same as another
 *
 * ### Examples:
 *     var vec1 = new Victor(100, 50);
 *     var vec2 = new Victor(100, 50);
 *     vec1.isEqualTo(vec2);
 *
 *     // => true
 *
 * @return {Boolean}
 * @api public
 */
Victor.prototype.isEqualTo = function(vec2) {
	return this.x === vec2.x && this.y === vec2.y;
};

/**
 * # Utility Methods
 */

/**
 * Returns an string representation of the vector
 *
 * ### Examples:
 *     var vec = new Victor(10, 20);
 *
 *     vec.toString();
 *     // => x:10, y:20
 *
 * @return {String}
 * @api public
 */
Victor.prototype.toString = function () {
	return 'x:' + this.x + ', y:' + this.y;
};

/**
 * Returns an array representation of the vector
 *
 * ### Examples:
 *     var vec = new Victor(10, 20);
 *
 *     vec.toArray();
 *     // => [10, 20]
 *
 * @return {Array}
 * @api public
 */
Victor.prototype.toArray = function () {
	return [ this.x, this.y ];
};

/**
 * Returns an object representation of the vector
 *
 * ### Examples:
 *     var vec = new Victor(10, 20);
 *
 *     vec.toObject();
 *     // => { x: 10, y: 20 }
 *
 * @return {Object}
 * @api public
 */
Victor.prototype.toObject = function () {
	return { x: this.x, y: this.y };
};


var degrees = 180 / Math.PI;

function random (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function radian2degrees (rad) {
	return rad * degrees;
}

function degrees2radian (deg) {
	return deg / degrees;
}

},{}]},{},[7])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvYWN0aW9ucy9ibG9jay5qcyIsImFwcC9hY3Rpb25zL2JvYXJkLmpzIiwiYXBwL2FjdGlvbnMvYm94LmpzIiwiYXBwL2FjdGlvbnMvY2xvdWR1aS5qcyIsImFwcC9hY3Rpb25zL3NlbGVjdC5qcyIsImFwcC9hY3Rpb25zL3VpLmpzIiwiYXBwL2Nsb3VkLmpzIiwiYXBwL2NvbXBvbmVudHMvQ2xvdWRBcHAuanMiLCJhcHAvY29tcG9uZW50cy9DbG91ZFRSLmpzIiwiYXBwL2NvbXBvbmVudHMvTm90aWZpY2F0aW9uLmpzIiwiYXBwL2Nzcy9hcHAuY3NzIiwiYXBwL2xpYi9jb21wb25lbnRzLmpzIiwiYXBwL2xpYi91dGlsLmpzIiwiYXBwL3N0b3Jlcy9ibG9jay5qcyIsImFwcC9zdG9yZXMvYm9hcmQuanMiLCJhcHAvc3RvcmVzL2JveC5qcyIsImFwcC9zdG9yZXMvY2xvdWR1aS5qcyIsImFwcC9zdG9yZXMvc2VsZWN0LmpzIiwiYXBwL3N0b3Jlcy91aS5qcyIsImxpYi9jbGllbnQuanMiLCJub2RlX21vZHVsZXMvb3JpZW50Ym9hcmQtY29tcG9uZW50LWV4YW1wbGUvY3NzL2NvbXBvbmVudC5jc3MiLCJub2RlX21vZHVsZXMvb3JpZW50Ym9hcmQtY29tcG9uZW50LWV4YW1wbGUvbGliL2NvbXBvbmVudC5qcyIsIm5vZGVfbW9kdWxlcy9vcmllbnRib2FyZC1jb21wb25lbnQtZXhhbXBsZS9saWIvbmV3LWNvbXBvbmVudC1tb2RhbC5qcyIsIm5vZGVfbW9kdWxlcy92aWN0b3IvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUNBQTs7Ozs7O0FBRUEsSUFBTSxlQUFlLGlCQUFPLGFBQVAsQ0FBcUIsQ0FDeEMsZ0JBRHdDLEVBRXhDLFdBRndDLEVBR3hDLFdBSHdDLEVBSXhDLGdCQUp3QyxFQUt4QyxjQUx3QyxFQU14QyxNQU53QyxDQU1qQyxVQUFD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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IFJlZmx1eCBmcm9tICdyZWZsdXgnXG5cbmNvbnN0IGJsb2NrQWN0aW9ucyA9IFJlZmx1eC5jcmVhdGVBY3Rpb25zKFtcbiAgJ3NldEFjdGl2ZUJsb2NrJyxcbiAgJ3JlbW92ZUJveCcsXG4gICdjcmVhdGVCb3gnLFxuICAnc2V0QmxvY2tDb25maWcnLFxuICAnbmV3Q29tcG9uZW50J1xuXS5yZWR1Y2UoKHB2LCBjdikgPT4ge1xuICBwdltjdl0gPSB7IGFzeW5jUmVzdWx0OiB0cnVlIH1cbiAgcmV0dXJuIHB2XG59LCB7fSkpXG5cbmV4cG9ydCBkZWZhdWx0IGJsb2NrQWN0aW9uc1xuIiwiaW1wb3J0IFJlZmx1eCBmcm9tICdyZWZsdXgnXG5cbmNvbnN0IGFjdGlvbnMgPSBSZWZsdXguY3JlYXRlQWN0aW9ucyhbXG4gICdzYXZlQm9hcmQnLFxuICAnY2xvbmVCb2FyZCcsXG4gICdjcmVhdGVCb2FyZCcsXG4gICdsaXN0Qm9hcmRzJyxcbiAgJ2ZpbmRCb2FyZCcsXG4gICdyZW5hbWVCb2FyZCcsXG4gICdyZW1vdmVCb2FyZCcsXG4gICd1cGRhdGVCb2FyZCcsXG4gICdhZGRCbG9jaycsXG4gICdtb3ZlQmxvY2snLFxuICAncmVtb3ZlQmxvY2snLFxuICAnZ2V0RGlzcGxheUxpbmsnLFxuICAnb3BlbkRpc3BsYXlMaW5rJyxcbiAgJ3B1Ymxpc2hCb2FyZCdcbl0ucmVkdWNlKChwdiwgY3YpID0+IHtcbiAgcHZbY3ZdID0geyBhc3luY1Jlc3VsdDogdHJ1ZSB9XG4gIHJldHVybiBwdlxufSwge30pKVxuXG5leHBvcnQgZGVmYXVsdCBhY3Rpb25zXG4iLCJpbXBvcnQgUmVmbHV4IGZyb20gJ3JlZmx1eCdcblxuY29uc3QgYWN0aW9ucyA9IFJlZmx1eC5jcmVhdGVBY3Rpb25zKFtcbiAgJ3N0YXJ0RHJhZycsXG4gICdzdG9wRHJhZycsXG4gICdzdGFydFJvdGF0ZScsXG4gICdzdGFydFJlc2l6ZScsXG4gICdzdG9wQWxsJyxcbiAgJ2FkZFpJbmRleCcsXG4gICdyZW1vdmVCb3gnLFxuICAnaW5pdCcsXG4gICdvcGVuQ29uZmlnJ1xuXS5yZWR1Y2UoKHB2LCBjdikgPT4ge1xuICBwdltjdl0gPSB7IGFzeW5jUmVzdWx0OiB0cnVlIH1cbiAgcmV0dXJuIHB2XG59LCB7fSkpXG5cbmV4cG9ydCBkZWZhdWx0IGFjdGlvbnNcbiIsImltcG9ydCBSZWZsdXggZnJvbSAncmVmbHV4J1xuXG5jb25zdCBhY3Rpb25zID0gUmVmbHV4LmNyZWF0ZUFjdGlvbnMoW1xuICAnYWRkVXNlcicsXG4gICdyZW1vdmVVc2VyQ29uZnJpbScsXG4gICdyZW1vdmVVc2VyJyxcbiAgJ3VwZGF0ZVVzZXInLFxuICAnbGlzdFVzZXInLFxuICAnY2hhbmdlUGFzc3dvcmQnXG5dLnJlZHVjZSgocHYsIGN2KSA9PiB7XG4gIHB2W2N2XSA9IHsgYXN5bmNSZXN1bHQ6IHRydWUgfVxuICByZXR1cm4gcHZcbn0sIHt9KSlcblxuZXhwb3J0IGRlZmF1bHQgYWN0aW9uc1xuIiwiaW1wb3J0IFJlZmx1eCBmcm9tICdyZWZsdXgnXG5cbmNvbnN0IGFjdGlvbnMgPSBSZWZsdXguY3JlYXRlQWN0aW9ucyhbXG4gICdzZXRBY3RpdmVCbG9jaycsXG4gICdzZXRBY3RpdmVCb3gnLFxuICAnc2V0QWN0aXZlQm9hcmQnLFxuICAnc2V0QXBwJ1xuXS5yZWR1Y2UoKHB2LCBjdikgPT4ge1xuICBwdltjdl0gPSB7IGFzeW5jUmVzdWx0OiB0cnVlIH1cbiAgcmV0dXJuIHB2XG59LCB7fSkpXG5cbmV4cG9ydCBkZWZhdWx0IGFjdGlvbnNcbiIsImltcG9ydCBSZWZsdXggZnJvbSAncmVmbHV4J1xuXG5jb25zdCBhY3Rpb25zID0gUmVmbHV4LmNyZWF0ZUFjdGlvbnMoW1xuICAnb3BlbkJsb2NrQ29uZmlnJyxcbiAgJ2Nsb3NlQmxvY2tDb25maWcnLFxuICAnb3BlbkJvYXJkQ29uZmlnJyxcbiAgJ2Nsb3NlQm9hcmRDb25maWcnLFxuICAnc2V0TW9kZScsXG4gICdzZXRUaGVtZSdcbl0ucmVkdWNlKChwdiwgY3YpID0+IHtcbiAgcHZbY3ZdID0geyBhc3luY1Jlc3VsdDogdHJ1ZSB9XG4gIHJldHVybiBwdlxufSwge30pKVxuXG5leHBvcnQgZGVmYXVsdCBhY3Rpb25zXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJ1xuXG5pbXBvcnQgQXBwIGZyb20gJy4vY29tcG9uZW50cy9DbG91ZEFwcCdcblxuaW1wb3J0IHsgaW5pdFN0b3JlcyB9IGZyb20gJy4vbGliL3V0aWwnXG5pbml0U3RvcmVzKClcblxuUmVhY3RET00ucmVuZGVyKDxBcHAvPiwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vdW50LWFwcCcpKVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0IGF1dG9iaW5kIGZyb20gJ2F1dG9iaW5kLWRlY29yYXRvcidcbmltcG9ydCB7IE1vZGFsLCBCdXR0b24sIElucHV0LCBSb3csIENvbCwgVGFicywgVGFiLCBHbHlwaGljb24sIEFsZXJ0IH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xuXG5pbXBvcnQgYmxvY2tBY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvYmxvY2snXG5pbXBvcnQgYm94QWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL2JveCdcbmltcG9ydCB1aVN0b3JlIGZyb20gJy4uL3N0b3Jlcy91aSdcbmltcG9ydCBzZWxlY3RBY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvc2VsZWN0J1xuaW1wb3J0IHNlbGVjdFN0b3JlIGZyb20gJy4uL3N0b3Jlcy9zZWxlY3QnXG5cblxuaW1wb3J0IGNsb3VkVUlBY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvY2xvdWR1aSdcbmltcG9ydCBjbG91ZFVJU3RvcmUgZnJvbSAnLi4vc3RvcmVzL2Nsb3VkdWknXG5cblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9jc3MvYXBwLmNzcydcblxuaW1wb3J0IGNtIGZyb20gJy4uL2xpYi9jb21wb25lbnRzJ1xuXG5pbXBvcnQgeyBOb3RpZmljYXRpb24gfSBmcm9tICcuL05vdGlmaWNhdGlvbidcblxuaW1wb3J0IHsgVXNlclRSLCBCb2FyZFRSIH0gZnJvbSAnLi9DbG91ZFRSJ1xuXG5jb25zdCBVc2VyVHlwZSA9IHsgYWRtaW46ICfnrqHnkIblkZgnLCB3b3JrZXI6ICflvIDlj5HogIUnLCBndWVzdDogJ+S9v+eUqOiAhScgfVxuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5cblxuZnVuY3Rpb24gX2pzb25SZXEobWV0aG9kLCBkYXRhLCBlbmRwb2ludCkge1xuICBjb25zdCBvcHRzID0ge1xuICAgIG1ldGhvZCxcbiAgICBkYXRhOiBKU09OLnN0cmluZ2lmeShkYXRhKSxcbiAgICBjb250ZW50VHlwZTogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLTgnLFxuICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgdXJsOiBlbmRwb2ludFxuICB9XG4gIGlmIChtZXRob2QgPT09ICdHRVQnKVxuICAgIG9wdHMuZGF0YSA9IGRhdGFcbiAgZWxzZSB7XG4gICAgb3B0cy5kYXRhID0gSlNPTi5zdHJpbmdpZnkoZGF0YSlcbiAgICBvcHRzLmNvbnRlbnRUeXBlID0gJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLTgnXG4gICAgb3B0cy5kYXRhVHlwZSA9ICdqc29uJ1xuICB9XG4gIHJldHVybiAkLmFqYXgob3B0cylcbn1cblxuQGF1dG9iaW5kXG5jbGFzcyBBbGVydERpc21pc3NhYmxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBhbGVydFZpc2libGU6IHRydWUsXG4gICAgICB0aXRsZTogJycsXG4gICAgICBtc2c6ICcnLFxuICAgICAgdHlwZTogJ3N1Y2Nlc3MnXG4gICAgfVxuICB9XG5cblxuICBzaG93YWxlcnQoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGFsZXJ0VmlzaWJsZTogdHJ1ZSwgdGl0bGU6ICfmoIfpopgnLCBtc2c6ICfmtojmga8nIH0pXG4gIH1cblxuICBoYW5kbGVBbGVydERpc21pc3MoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGFsZXJ0VmlzaWJsZTogZmFsc2UgfSlcbiAgfVxuXG4gIGhhbmRsZUFsZXJ0U2hvdygpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgYWxlcnRWaXNpYmxlOiB0cnVlIH0pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUuYWxlcnRWaXNpYmxlKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8QWxlcnQgYnNTdHlsZT17dGhpcy5zdGF0ZS50eXBlfSBvbkRpc21pc3M9e3RoaXMuaGFuZGxlQWxlcnREaXNtaXNzfT5cbiAgICAgICAgICA8aDQ+e3RoaXMuc3RhdGUudGl0bGV9PC9oND5cbiAgICAgICAgICA8cD57dGhpcy5zdGF0ZS5tc2d9PC9wPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9BbGVydD5cbiAgICAgIClcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy5zaG93YWxlcnR9Pua1i+ivlTwvQnV0dG9uPlxuICAgIClcbiAgfVxuXG59XG5cblxuQGF1dG9iaW5kXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNob3dDb25maWc6IGZhbHNlXG5cbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmxvYWRQdXNoU2VydmVyKClcblxuICAgIGNsb3VkVUlTdG9yZS5saXN0ZW4oKG5ld1N0YXRlKSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKG5ld1N0YXRlKVxuICAgIH0pXG5cbiAgICBjbG91ZFVJQWN0aW9ucy5saXN0VXNlcigpXG4gIH1cblxuXG4gIGFkZFVzZXJDb25maWcoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dDb25maWc6ICF0aGlzLnN0YXRlLnNob3dDb25maWcsXG4gICAgICAgICAgICAgICAgICAgICAgaWR4OiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgIGNvbmZyaW06IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZ1RpdGxlOiAn5re75Yqg55So5oi3JyB9KVxuICB9XG4gIHNob3dOb3RpZml5KCkge1xuICAgIHRoaXMucmVmcy5ub3RpZml5LnNob3coJ+agh+mimCcsICflhoXlrrknKVxuICB9XG4gIGNsb3NlQ29uZnJpbSgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgY29uZnJpbTogZmFsc2UsIGlkeDogbnVsbCB9KVxuICB9XG5cbiAgcmVtb3ZlVXNlcigpIHtcbiAgICBsZXQgdXNlciA9IHt9XG5cbiAgICBpZiAodGhpcy5zdGF0ZS5pZHgpIHtcbiAgICAgIHVzZXIgPSB0aGlzLnN0YXRlLnVzZXJzW3RoaXMuc3RhdGUuaWR4IC0gMV1cbiAgICAgIGNsb3VkVUlBY3Rpb25zLnJlbW92ZVVzZXIodXNlcilcbiAgICB9XG5cblxuICAgIHRoaXMuc2V0U3RhdGUoeyBjb25mcmltOiBmYWxzZSB9KVxuICB9XG5cbiAgc2F2ZVVzZXIoKSB7XG4gICAgY29uc3QgcHdkID0gdGhpcy5yZWZzLnBhc3N3b3JkLmdldFZhbHVlKClcbiAgICBjb25zdCBlbWFpbCA9IHRoaXMucmVmcy5lbWFpbC5nZXRWYWx1ZSgpXG4gICAgY29uc3QgdHlwZSA9IHRoaXMucmVmcy50eXBlLmdldFZhbHVlKClcblxuICAgIGlmKHB3ZCA9PT0gJycgfHwgZW1haWwgPT09ICcnIHx8IHR5cGUgPT09ICcnKXtcbiAgICAgIGFsZXJ0KCfor7fmo4Dmn6XovpPlhaXpobnnm64nKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZihwd2QhPXRoaXMucmVmcy5wYXNzd29yZDEuZ2V0VmFsdWUoKSl7XG4gICAgICBhbGVydCgn5a+G56CB5LiN5LiA6Ie0IScpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuXG4gICAgaWYodGhpcy5zdGF0ZS5pZHgpe1xuICAgICAgbGV0IHVzZXIgPSB0aGlzLnN0YXRlLnVzZXJzW3RoaXMuc3RhdGUuaWR4LTFdO1xuICAgICAgY29uc29sZS5sb2coJ3VwZGF0ZSB1c2VyICcsIHVzZXIpXG5cbiAgICAgIGNsb3VkVUlBY3Rpb25zLnVwZGF0ZVVzZXIoJ2NoYW5nZVBhc3N3b3JkJyx7J3VpZCc6dXNlci51aWQsJ3Bhc3N3b3JkJzpwd2R9KTtcblxuICAgIH1lbHNle1xuXG5cbiAgICBjbG91ZFVJQWN0aW9ucy5hZGRVc2VyKHsnZW1haWwnOmVtYWlsLCdwYXNzd29yZCc6cHdkLCAndHlwZScgOiB0eXBlfSlcbiAgICB0aGlzLnNldFN0YXRlKHtzaG93Q29uZmlnOiBmYWxzZSxpZHg6bnVsbCxjb25mcmltOmZhbHNlLGNvbmZpZ1RpdGxlOifmt7vliqDnlKjmiLcnIH0pXG4gICAgfVxuICB9XG5cblxuXG5cbiAgb25Db2RlQ2hhbmdlKGNvZGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtzZXJ2ZXJzOnRoaXMucmVmcy5wdXNoU2VydmVyLmdldFZhbHVlKCl9KVxuICB9XG5cbiAgbG9hZFB1c2hTZXJ2ZXIoKXtcbiAgICAkLmdldCgnL2FwaS92MS9zZXJ2ZXJzJywgKHJlc3VsdCkgPT4ge1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBzZXJ2ZXJzOiBKU09OLnN0cmluZ2lmeShyZXN1bHQsIG51bGwsIDQpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgY29uc29sZS5sb2coJ+i/nOeoi+iwg+eUqHNlcnZlcicsIHJlc3VsdClcbiAgICAgICAgfSk7XG5cbiAgfVxuXG4gIHNob3dQdXNoc2VydmVyQ29uZmlnKCl7XG4gICAgdGhpcy5zZXRTdGF0ZSh7J3Nob3dQdXNoc2VydmVyJzp0cnVlfSk7XG5cbiAgfVxuXG4gIGhpZGVQdXNoc2VydmVyQ29uZmlnKCl7XG4gICAgdGhpcy5zZXRTdGF0ZSh7J3Nob3dQdXNoc2VydmVyJzpmYWxzZX0pO1xuXG4gIH1cblxuICBzYXZlUHVzaFNlcnZlcigpe1xuXG4gICAgY29uc29sZS5sb2codGhpcy5yZWZzLnB1c2hTZXJ2ZXJVUkwuZ2V0VmFsdWUoKSlcbiAgICB0cnl7XG4gICAgICB2YXIgcHJvdG9jb2w9WydtcXR0Jywnd3MnLCdzb2NrZXRpbyddO1xuICAgICAgbGV0IHNlcnZlcj10aGlzLnJlZnMucHVzaFNlcnZlclVSTC5nZXRWYWx1ZSgpXG5cbiAgICAgIGlmKHByb3RvY29sLmluZGV4T2Yoc2VydmVyLnNwbGl0KCc6Ly8nKVswXSk8MCl7XG4gICAgICAgICAgYWxlcnQoJ+acjeWKoeWIl+ihqOino+aekOmUmeivryzor7fmo4Dmn6UnK3NlcnZlcik7XG4gICAgICAgICAgfWVsc2V7XG5cbiAgICAgICAgICAgX2pzb25SZXEoJ1BPU1QnLCAgeydzZXJ2ZXJzJzpbc2VydmVyXX0gLCAnL2FwaS92MS9zZXJ2ZXJzJylcbiAgICAgICAgICAgdGhpcy5sb2FkUHVzaFNlcnZlcigpO1xuICAgICAgICAgIH1cblxuICAgIH1jYXRjaChlKXtcbiAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgICBhbGVydCgn5pyN5Yqh5YiX6KGo6Kej5p6Q6ZSZ6K+vLOivt+ajgOafpScpO1xuXG4gICAgfVxuXG5cbiAgICB0aGlzLnNldFN0YXRlKHsnc2hvd1B1c2hzZXJ2ZXInOmZhbHNlfSk7XG5cblxuICB9XG5cbiAgZGVsZXRlUHVzaFNlcnZlcigpe1xuXG4gICAgIGNvbnNvbGUubG9nKHRoaXMucmVmcy5wdXNoU2VydmVyVVJMLmdldFZhbHVlKCkpXG4gICAgdHJ5e1xuICAgICAgdmFyIHByb3RvY29sPVsnbXF0dCcsJ3dzJywnc29ja2V0aW8nXTtcbiAgICAgIGxldCBzZXJ2ZXI9dGhpcy5yZWZzLnB1c2hTZXJ2ZXJVUkwuZ2V0VmFsdWUoKVxuXG4gICAgICBpZihwcm90b2NvbC5pbmRleE9mKHNlcnZlci5zcGxpdCgnOi8vJylbMF0pPDApe1xuICAgICAgICAgIGFsZXJ0KCfmnI3liqHliJfooajop6PmnpDplJnor68s6K+35qOA5p+lJytzZXJ2ZXIpO1xuICAgICAgICAgIH1lbHNle1xuXG4gICAgICAgICAgIF9qc29uUmVxKCdERUxFVEUnLCAgeydzZXJ2ZXJzJzpbc2VydmVyXX0gLCAnL2FwaS92MS9zZXJ2ZXJzJylcbiAgICAgICAgICAgdGhpcy5sb2FkUHVzaFNlcnZlcigpO1xuICAgICAgICAgIH1cblxuICAgIH1jYXRjaChlKXtcbiAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgICBhbGVydCgn5pyN5Yqh5YiX6KGo6Kej5p6Q6ZSZ6K+vLOivt+ajgOafpScpO1xuXG4gICAgfVxuXG5cbiAgICB0aGlzLnNldFN0YXRlKHsnc2hvd1B1c2hzZXJ2ZXInOmZhbHNlfSk7XG5cbiAgfVxuXG4gIHJlbmRlcigpIHtcblxuICAgICBsZXQgdXNlcj17fVxuICAgICBsZXQgZGVsZXRDb25maXJtPWZhbHNlO1xuXG4gICAgIGlmKHRoaXMuc3RhdGUuaWR4KXtcbiAgICAgIHVzZXI9dGhpcy5zdGF0ZS51c2Vyc1t0aGlzLnN0YXRlLmlkeC0xXVxuICAgICAgZGVsZXRDb25maXJtPXRydWVcbiAgICAgfVxuXG5cbiAgICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHAtdC02MFwiPlxuXG4gICAgIDxOb3RpZmljYXRpb24gcmVmPVwibm90aWZpeVwiIC8+XG5cbiAgICA8TW9kYWwgc2hvdz17dGhpcy5zdGF0ZS5zaG93UHVzaHNlcnZlcn0+XG4gICAgICAgIDxNb2RhbC5IZWFkZXIgPua3u+WKoC/liKDpmaQgUHVzaOaVsOaNrua6kDwvTW9kYWwuSGVhZGVyPlxuICAgICAgICA8TW9kYWwuQm9keSA+XG5cbiAgICAgICAgICA8SW5wdXQgcmVmPSdwdXNoU2VydmVyVVJMJyB0eXBlPSd0ZXh0JyBsYWJlbD0nUHVzaCBTZXJ2ZXIgVVJMJy8+XG5cbiAgICAgICAgPC9Nb2RhbC5Cb2R5PlxuICAgICAgICA8TW9kYWwuRm9vdGVyID5cbiAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGlkZVB1c2hzZXJ2ZXJDb25maWd9PuWPlua2iDwvQnV0dG9uPlxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy5zYXZlUHVzaFNlcnZlcn0+56Gu6K6k5re75YqgPC9CdXR0b24+XG4gICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJidG4tZGFuZ2VyXCIgb25DbGljaz17dGhpcy5kZWxldGVQdXNoU2VydmVyfT7noa7orqTliKDpmaQ8L0J1dHRvbj5cbiAgICAgICAgPC9Nb2RhbC5Gb290ZXI+XG4gICAgICA8L01vZGFsPlxuXG4gICAgPE1vZGFsIHNob3c9e3RoaXMuc3RhdGUuY29uZnJpbX0gb25IaWRlPXt0aGlzLmNsb3NlQ29uZnJpbX0+XG4gICAgICAgIDxNb2RhbC5IZWFkZXI+XG4gICAgICAgICAgICA8TW9kYWwuVGl0bGU+55So5oi3566h55CGPC9Nb2RhbC5UaXRsZT5cbiAgICAgICAgPC9Nb2RhbC5IZWFkZXI+XG4gICAgICAgIDxNb2RhbC5Cb2R5PlxuICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgPHAvPlxuICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5jb25mcmltTXNnfSB7dXNlci5lbWFpbH1cbiAgICAgICAgICAgIDwvUm93PlxuXG4gICAgICAgIDwvTW9kYWwuQm9keT5cbiAgICAgICAgPE1vZGFsLkZvb3Rlcj5cbiAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy5jbG9zZUNvbmZyaW19PuWPlua2iDwvQnV0dG9uPlxuICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0aGlzLnJlbW92ZVVzZXJ9PuehruiupDwvQnV0dG9uPlxuICAgICAgICA8L01vZGFsLkZvb3Rlcj5cbiAgICA8L01vZGFsPlxuXG4gICAgPE1vZGFsIHNob3c9e3RoaXMuc3RhdGUuc2hvd0NvbmZpZ30gb25IaWRlPXt0aGlzLmNsb3NlQ29uZmlnfT5cbiAgICAgICAgPE1vZGFsLkhlYWRlcj5cbiAgICAgICAgICAgIDxNb2RhbC5UaXRsZT57dGhpcy5zdGF0ZS5jb25maWdUaXRsZX08L01vZGFsLlRpdGxlPlxuICAgICAgICA8L01vZGFsLkhlYWRlcj5cbiAgICAgICAgPE1vZGFsLkJvZHk+XG4gICAgICAgICAgICAgPGZvcm0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHhzPXs4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT0nZW1haWwnIGxhYmVsPSfnlKjmiLfpgq7nrrEnIHJlZj1cImVtYWlsXCIgZGVmYXVsdFZhbHVlPXt1c2VyLmVtYWlsfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCB4cz17NH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IHR5cGU9J3Bhc3N3b3JkJyBsYWJlbD0n55So5oi35a+G56CBJyByZWY9XCJwYXNzd29yZFwiIGRlZmF1bHRWYWx1ZT17dGhpcy5zdGF0ZS5wYXNzd29yZH0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgeHM9ezR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPSdwYXNzd29yZCcgbGFiZWw9J+mHjeWkjeWvhueggScgcmVmPVwicGFzc3dvcmQxXCIgZGVmYXVsdFZhbHVlPXt0aGlzLnN0YXRlLnBhc3N3b3JkfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgeHM9ezh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPSdzZWxlY3QnIGxhYmVsPSfnlKjmiLfnsbvlnosnIHJlZj1cInR5cGVcIiBkZWZhdWx0VmFsdWU9e3VzZXIudHlwZX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nd29ya2VyJz5Cb2FyZOW8gOWPkeS6uuWRmDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSdndWVzdCc+Qm9hcmTkvb/nlKjkurrlkZg8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nYWRtaW4nPkJvYXJk566h55CG5Lq65ZGYPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHhzPXsxfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+PGkgY2xhc3NOYW1lPXsgXCJmYSBmYS1cIit0aGlzLnN0YXRlLmljb24rIFwiIGZhLTJ4IHB1bGwtcmlnaHRcIn0+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cblxuICAgICAgICA8L01vZGFsLkJvZHk+XG4gICAgICAgIDxNb2RhbC5Gb290ZXI+XG4gICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3RoaXMuYWRkVXNlckNvbmZpZ30+5Y+W5raIPC9CdXR0b24+XG4gICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3RoaXMuc2F2ZVVzZXJ9PuehruiupDwvQnV0dG9uPlxuICAgICAgICA8L01vZGFsLkZvb3Rlcj5cbiAgICA8L01vZGFsPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHAtdC0xMFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0xMlwiPlxuICAgICAgICAgICAgPG9sIGNsYXNzTmFtZT1cImJyZWFkY3J1bWJcIj5cbiAgICAgICAgICAgICAgICA8bGk+IDxhIGhyZWY9XCIjXCI+T3JpZW50Qm9hcmQ8L2E+IDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImFjdGl2ZVwiPiDkupHnrqHnkIYgPC9saT5cbiAgICAgICAgICAgIDwvb2w+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBwdDI1XCI+XG5cbiAgey8qPEFsZXJ0RGlzbWlzc2FibGUvPiovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgdGV4dC1jZW50ZXIgXCI+XG4gICAgICAgICAgICAgICAgPFRhYnMgZGVmYXVsdEFjdGl2ZUtleT17MX0+XG4gICAgICAgICAgICAgICAgICAgIDxUYWIgZXZlbnRLZXk9ezF9IHRpdGxlPVwi55So5oi3566h55CGXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHhzPXsxfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3RoaXMuYWRkVXNlckNvbmZpZ30gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1zbSBcIj7mt7vliqDnlKjmiLc8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8QnV0dG9uIG9uQ2xpY2s9e3RoaXMuc2hvd05vdGlmaXl9IGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4tc20gXCI+c2hvdyBub3RpZml5PC9CdXR0b24+ICovfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgeHM9ezEyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlLXJlc3BvbnNpdmUtdmVydGljYWwgc2hhZG93LXotMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgaWQ9XCJ0YWJsZVwiIGNsYXNzTmFtZT1cInRhYmxlIHRhYmxlLWhvdmVyIHRhYmxlLW1jLWxpZ2h0LWJsdWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD48Y2VudGVyPklEPC9jZW50ZXI+PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPjxjZW50ZXI+55So5oi35ZCNPC9jZW50ZXI+PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPjxjZW50ZXI+57G75Z6LPC9jZW50ZXI+PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPjxjZW50ZXI+5pON5L2cPC9jZW50ZXI+PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keSBjbGFzc05hbWU9XCJ1c2VyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8ua2V5cyh0aGlzLnN0YXRlLnVzZXJzKS5tYXAoKHVzZXIsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnVzZXJzW2ldLmVtYWlsLCBpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxVc2VyVFIga2V5PXtpKzF9IGlkeD17aSsxfSB1aWQ9e3RoaXMuc3RhdGUudXNlcnNbaV0udWlkfSBlbWFpbD17dGhpcy5zdGF0ZS51c2Vyc1tpXS5lbWFpbH0gcGFzc3dvcmQ9XCIxMjM0NVwiIHR5cGU9e3RoaXMuc3RhdGUudXNlcnNbaV0udHlwZX0gZnJvemVuPXt0aGlzLnN0YXRlLnVzZXJzW2ldLmZyb3plbn0vPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInBhZ2luYXRpb24gcGFnaW5hdGlvbi1sZyBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkaXNhYmxlZFwiPjxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMClcIj7CqzwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImFjdGl2ZVwiPjxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMClcIj4xPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKVwiPjI8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCI+MzwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMClcIj7CuzwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgICAgICAgIDwvVGFiPlxuICAgICAgICAgICAgICAgICAgICB7LypcbiAgICAgICAgICAgICAgICAgICAgPFRhYiBldmVudEtleT17Mn0gdGl0bGU9XCJCb2FyZOeuoeeQhlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHhzPXsxMn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZS1yZXNwb25zaXZlLXZlcnRpY2FsIHNoYWRvdy16LTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGlkPVwidGFibGVcIiBjbGFzc05hbWU9XCJ0YWJsZSB0YWJsZS1ob3ZlciB0YWJsZS1tYy1saWdodC1ibHVlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+PGNlbnRlcj5JRDwvY2VudGVyPjwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD48Y2VudGVyPkJvYXJk5o+P6L+wPC9jZW50ZXI+PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPjxjZW50ZXI+5omA5pyJ6ICFPC9jZW50ZXI+PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPjxjZW50ZXI+5pON5L2cPC9jZW50ZXI+PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keSBjbGFzc05hbWU9XCJ1c2VyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8ua2V5cyh0aGlzLnN0YXRlLnVzZXJzKS5tYXAoKHVzZXIsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnVzZXJzW2ldLmVtYWlsLCBpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb2FyZFRSIGtleT17aSsxfSBpZHg9e2krMX0gdWlkPXt0aGlzLnN0YXRlLnVzZXJzW2ldLnVpZH0gZW1haWw9e3RoaXMuc3RhdGUudXNlcnNbaV0uZW1haWx9IHBhc3N3b3JkPVwiMTIzNDVcIiB0eXBlPXt0aGlzLnN0YXRlLnVzZXJzW2ldLnR5cGV9IGZyb3plbj17dGhpcy5zdGF0ZS51c2Vyc1tpXS5mcm96ZW59Lz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJwYWdpbmF0aW9uIHBhZ2luYXRpb24tbGcgXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZGlzYWJsZWRcIj48YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCI+wqs8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJhY3RpdmVcIj48YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCI+MTwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMClcIj4yPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKVwiPjM8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCI+wrs8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgICAgICAgICA8L1RhYj5cbiAgICAgICAgICAgICAgICAgICovfVxuICAgICAgICAgICAgICAgICAgIHsvKiA8VGFiIGV2ZW50S2V5PXszfSB0aXRsZT1cIue7hOS7tueuoeeQhlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCB4cz17MX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0aGlzLmFkZENvbXBvbmV0fSBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgYnRuLXNtIFwiPua3u+WKoOe7hOS7tjwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgICAgICAgIDwvVGFiPlxuICAgICAgICAgICAgICAgICAgKi99XG4gICAgICAgICAgICAgICAgICAgIDxUYWIgZXZlbnRLZXk9ezR9IHRpdGxlPVwiUHVzaCBTZXJ2ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgeHM9ezF9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy5zaG93UHVzaHNlcnZlckNvbmZpZ30gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1zbSBcIj7mt7vliqAv5Yig6ZmkPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHhzPXsxMH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7IDxJbnB1dCB0eXBlPSd0ZXh0YXJlYScgIHJlZj1cInB1c2hTZXJ2ZXJcIiAgcm93cz1cIjEwXCIgdmFsdWU9e3RoaXMuc3RhdGUuc2VydmVyc30gb25DaGFuZ2U9e3RoaXMub25Db2RlQ2hhbmdlfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgICAgICAgPC9UYWI+XG4gICAgICAgICAgICAgICAgPC9UYWJzPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC9kaXY+XG5cbiAgICApXG4gIH1cblxufVxuXG5cblxuQXBwLmRlZmF1bHRQcm9wcyA9IHtcblxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHBcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcbmltcG9ydCBhdXRvYmluZCBmcm9tICdhdXRvYmluZC1kZWNvcmF0b3InXG5pbXBvcnQgeyBNb2RhbCwgQnV0dG9uLCBJbnB1dCwgUm93LCBDb2wsIFRhYnMsIFRhYiwgR2x5cGhpY29uLCBBbGVydCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcblxuaW1wb3J0IGJsb2NrQWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL2Jsb2NrJ1xuaW1wb3J0IGJveEFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9ib3gnXG5pbXBvcnQgdWlTdG9yZSBmcm9tICcuLi9zdG9yZXMvdWknXG5pbXBvcnQgc2VsZWN0QWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL3NlbGVjdCdcbmltcG9ydCBzZWxlY3RTdG9yZSBmcm9tICcuLi9zdG9yZXMvc2VsZWN0J1xuXG5cbmltcG9ydCBjbG91ZFVJQWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL2Nsb3VkdWknXG5pbXBvcnQgY2xvdWRVSVN0b3JlIGZyb20gJy4uL3N0b3Jlcy9jbG91ZHVpJ1xuXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vY3NzL2FwcC5jc3MnXG5cbmltcG9ydCBjbSBmcm9tICcuLi9saWIvY29tcG9uZW50cydcblxuY29uc3QgVXNlclR5cGUgPSB7IGFkbWluOiAn566h55CG5ZGYJywgd29ya2VyOiAn5byA5Y+R6ICFJywgZ3Vlc3Q6ICfkvb/nlKjogIUnIH1cblxuQGF1dG9iaW5kXG5jbGFzcyBVc2VyVFIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgIHN1cGVyKHByb3BzKVxuXG4gICAgICBsZXQgdHlwZSA9ICdndWVzdCdcblxuICAgICAgaWYgKFVzZXJUeXBlW3Byb3BzLnR5cGVdKSB7XG4gICAgICAgIHR5cGUgPSBwcm9wcy50eXBlXG4gICAgICB9XG5cbiAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgIGVtYWlsOiBwcm9wcy5lbWFpbCxcbiAgICAgICAgcGFzc3dvcmQ6IHByb3BzLnBhc3N3b3JkLFxuICAgICAgICBpZHg6IHByb3BzLmlkeCxcbiAgICAgICAgZnJvemVuOiBwcm9wcy5mcm96ZW4gfHwgZmFsc2UsXG4gICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgIHVpZDogcHJvcHMudWlkLFxuICAgICAgfVxuXG4gIH1cblxuICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZSlcblxuICB9XG5cbiAgZ2V0VHlwZUxhYmVsKCl7XG4gICAgcmV0dXJuIFVzZXJUeXBlW3RoaXMuc3RhdGUudHlwZV07XG4gIH1cblxuICBmcm96ZW5TZXR1cCgpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmZyb3plbilcbiAgICAgaWYodGhpcy5zdGF0ZS50eXBlIT0nYWRtaW4nKXtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeydmcm96ZW4nOiF0aGlzLnN0YXRlLmZyb3plbn0pO1xuICAgICAgY2xvdWRVSUFjdGlvbnMudXBkYXRlVXNlcignZnJvemVuJyx7J3VpZCc6dGhpcy5zdGF0ZS51aWQsJ2Zyb3plbic6IXRoaXMuc3RhdGUuZnJvemVufSk7XG4gICAgIH1lbHNle1xuICAgICAgYWxlcnQoJ+euoeeQhuWRmOi0puaIt+aXoOazleWGu+e7kyzor7fogZTns7vmlbDmja7nrqHnkIblkZgnKVxuICAgICB9XG4gIH1cblxuXG4gIGRlbGV0ZVVzZXIoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUudHlwZSA9PT0gJ2FkbWluJylcbiAgICAgIHJldHVybiBhbGVydCgn5LiN6IO95Yig6ZmkIEJvYXJkIOeuoeeQhuWRmCcpXG4gICAgZWxzZVxuICAgICAgY2xvdWRVSUFjdGlvbnMucmVtb3ZlVXNlckNvbmZyaW0odGhpcy5zdGF0ZS5pZHgpXG4gIH1cblxuICBjaGFuZ2VQYXNzd29yZCgpIHtcbiAgICBjb25zb2xlLmxvZygnY2hhbmdlUGFzc3dvcmQnLCB0aGlzLnN0YXRlLmlkeClcbiAgICBjbG91ZFVJQWN0aW9ucy5jaGFuZ2VQYXNzd29yZCh0aGlzLnN0YXRlLmlkeClcbiAgfVxuXG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGJ0bkxhYmxlID0gdGhpcy5zdGF0ZS5mcm96ZW4gPyAn6Kej5Ya755So5oi3JyA6ICflhrvnu5PnlKjmiLcnXG5cblxuICAgIHJldHVybiAoXG5cbiAgICAgIDx0cj5cbiAgICAgICAgICA8dGQgZGF0YS10aXRsZT1cIklEXCI+e3RoaXMuc3RhdGUuaWR4fTwvdGQ+XG4gICAgICAgICAgPHRkIGRhdGEtdGl0bGU9XCJUeXBlXCI+e3RoaXMuc3RhdGUuZW1haWx9PC90ZD5cbiAgICAgICAgICA8dGQgZGF0YS10aXRsZT1cIlR5cGVcIj57dGhpcy5nZXRUeXBlTGFiZWwoKX08L3RkPlxuICAgICAgICAgIDx0ZCBkYXRhLXRpdGxlPVwiQWN0aW9uXCI+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJjaGFuZ2VQV0QgYnRuIGJ0bi1zbSBidG4tc3VjY2Vzc1wiIG9uQ2xpY2s9e3RoaXMuY2hhbmdlUGFzc3dvcmR9PuS/ruaUueWvhueggTwvYT5cbiAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwiZm9pemVuIGJ0biBidG4tc20gYnRuLXdhcm5pbmdcIiBvbkNsaWNrPXt0aGlzLmZyb3plblNldHVwfSA+e2J0bkxhYmxlfTwvQnV0dG9uPlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZGVsZXRlIGJ0biBidG4tc20gYnRuLWRhbmdlclwiIG9uQ2xpY2s9e3RoaXMuZGVsZXRlVXNlcn0+5Yig6Zmk55So5oi3PC9hPlxuICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICA8L3RkPlxuICAgICAgPC90cj4pXG4gIH1cblxufVxuXG5cblxuXG5AYXV0b2JpbmRcbmNsYXNzIEJvYXJkVFIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuXG4gICAgbGV0IHR5cGUgPSdndWVzdCdcblxuICAgIGlmKFVzZXJUeXBlW3Byb3BzLnR5cGVdKXtcbiAgICAgIHR5cGU9cHJvcHMudHlwZVxuICAgIH1cblxuICAgIHRoaXMuc3RhdGU9e1xuICAgICAgZW1haWw6cHJvcHMuZW1haWwsXG4gICAgICBwYXNzd29yZDpwcm9wcy5wYXNzd29yZCxcbiAgICAgIGlkeDpwcm9wcy5pZHgsXG4gICAgICBmcm96ZW46cHJvcHMuZnJvemVufHxmYWxzZSxcbiAgICAgIHR5cGU6dHlwZSxcbiAgICAgIHVpZDpwcm9wcy51aWQsXG4gICAgfVxuXG4gIH1cblxuICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZSlcblxuICB9XG5cbiAgZ2V0VHlwZUxhYmVsKCl7XG4gICAgcmV0dXJuIFVzZXJUeXBlW3RoaXMuc3RhdGUudHlwZV07XG4gIH1cblxuICBmcm96ZW5TZXR1cCgpe1xuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuZnJvemVuKTtcbiAgICAgaWYodGhpcy5zdGF0ZS50eXBlIT0nYWRtaW4nKXtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeydmcm96ZW4nOiF0aGlzLnN0YXRlLmZyb3plbn0pO1xuICAgICAgY2xvdWRVSUFjdGlvbnMudXBkYXRlVXNlcignZnJvemVuJyx7J3VpZCc6dGhpcy5zdGF0ZS51aWQsJ2Zyb3plbic6IXRoaXMuc3RhdGUuZnJvemVufSk7XG4gICAgIH1lbHNle1xuICAgICAgYWxlcnQoJ+euoeeQhuWRmOi0puaIt+aXoOazleWGu+e7kyzor7fogZTns7vmlbDmja7nrqHnkIblkZgnKVxuICAgICB9XG4gIH1cblxuXG4gIGRlbGV0ZUJvYXJkKCl7XG5cbiAgICAgIGlmKHRoaXMuc3RhdGUudHlwZT09J2FkbWluJyl7XG4gICAgICAgcmV0dXJuIGFsZXJ0KCfkuI3og73liKDpmaQgQm9hcmQg566h55CG5ZGYJyk7XG4gICAgICB9ZWxzZXtcbiAgICAgICAvL2Nsb3VkVUlBY3Rpb25zLnJlbW92ZVVzZXJDb25mcmltKHRoaXMuc3RhdGUuaWR4KVxuICAgICAgIGNvbnNvbGUubG9nKCdjbGljayBkZWxldGUgYm9hcmQnKVxuICAgICAgfVxuXG4gIH1cblxuICByZW5kZXIoKSB7XG5cblxuICAgIHZhciBidG5MYWJsZSA9dGhpcy5zdGF0ZS5mcm96ZW4/J+WBnOeUqCc6J+WQr+eUqCc7XG5cblxuICAgIHJldHVybiAoXG5cbiAgICAgIDx0cj5cbiAgICAgICAgICA8dGQgZGF0YS10aXRsZT0nSUQnPnt0aGlzLnN0YXRlLmlkeH08L3RkPlxuICAgICAgICAgIDx0ZCBkYXRhLXRpdGxlPSdUeXBlJz57dGhpcy5zdGF0ZS5lbWFpbH08L3RkPlxuICAgICAgICAgIDx0ZCBkYXRhLXRpdGxlPSdUeXBlJz57dGhpcy5nZXRUeXBlTGFiZWwoKX08L3RkPlxuICAgICAgICAgIDx0ZCBkYXRhLXRpdGxlPSdBY3Rpb24nPlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSdkZWxldGUgYnRuIGJ0bi1zbSBidG4tcHJpbWFyeScgb25DbGljaz17dGhpcy5kZWxldGVCb2FyZH0+6aKE6KeIPC9hPiAmbmJzcDtcbiAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPSdmb2l6ZW4gYnRuIGJ0bi1zbSBidG4td2FybmluZycgIG9uQ2xpY2s9e3RoaXMuZnJvemVuU2V0dXB9ID57YnRuTGFibGV9PC9CdXR0b24+ICZuYnNwO1xuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSdkZWxldGUgYnRuIGJ0bi1zbSBidG4tZGFuZ2VyJyBvbkNsaWNrPXt0aGlzLmRlbGV0ZUJvYXJkfT7liKDpmaQ8L2E+XG4gICAgICAgICAgICA8YnIvPlxuICAgICAgICAgIDwvdGQ+XG4gICAgICA8L3RyPilcblxuICB9XG5cbn1cblxuZXhwb3J0cy5Vc2VyVFI9IFVzZXJUUjtcbmV4cG9ydHMuQm9hcmRUUj0gQm9hcmRUUjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcbmltcG9ydCBhdXRvYmluZCBmcm9tICdhdXRvYmluZC1kZWNvcmF0b3InXG5pbXBvcnQgeyBNb2RhbCwgQnV0dG9uLCBJbnB1dCwgUm93LCBDb2wsIFRhYnMsIFRhYiwgR2x5cGhpY29uLCBBbGVydCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcblxuXG4vLyBUT0RPOiBsMSBiZXR0ZXIgZGlzcGxheSBwYWdlXG5AYXV0b2JpbmRcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vdGlmaWNhdGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNob3c6IHRoaXMucHJvcHMuc2hvdyB8fCBmYWxzZSxcbiAgICAgIHRpdGxlOiB0aGlzLnByb3BzLnRpdGxlIHx8ICcnLFxuICAgICAgbXNnOiB0aGlzLnByb3BzLm1zZyB8fCAnJ1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuXG4gIH1cblxuICBzaG93KHRpdGxlLCBtc2cpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgc2hvdzogdHJ1ZSwgdGl0bGUsIG1zZyB9KVxuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNob3c6IGZhbHNlIH0pXG4gIH1cblxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPE1vZGFsIHNob3c9e3RoaXMuc3RhdGUuc2hvd30gb25IaWRlPXt0aGlzLmNsb3NlfT5cbiAgICAgICAgPE1vZGFsLkhlYWRlcj5cbiAgICAgICAgICAgIDxNb2RhbC5UaXRsZT57dGhpcy5zdGF0ZS50aXRsZX08L01vZGFsLlRpdGxlPlxuICAgICAgICA8L01vZGFsLkhlYWRlcj5cblxuXG4gICAgICAgICA8TW9kYWwuQm9keT5cbiAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgICAgJm5ic3A7IHtcIiAgIGluZm86ICBcIn0ge3RoaXMuc3RhdGUubXNnfVxuICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgIDwvTW9kYWwuQm9keT5cblxuICAgICAgICA8TW9kYWwuRm9vdGVyPlxuICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0aGlzLmNsb3NlfT7lhbPpl608L0J1dHRvbj5cbiAgICAgICAgPC9Nb2RhbC5Gb290ZXI+XG4gICAgPC9Nb2RhbD5cbiAgICApXG4gIH1cbn1cblxuTm90aWZpY2F0aW9uLnByb3BUeXBlcyA9IHtcbiAgc2hvdzogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gIG1zZzogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgdGl0bGU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmdcbn1cblxuTm90aWZpY2F0aW9uLmRlZmF1bHRQcm9wcyA9IHtcblxufVxuXG5cbmV4cG9ydHMuTm90aWZpY2F0aW9uID0gTm90aWZpY2F0aW9uXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcImxlZnRfbmF2XCI6XCJfYXBwX2Nzc19hcHBfX2xlZnRfbmF2XCIsXCJ3b3Jrc3BhY2VcIjpcIl9hcHBfY3NzX2FwcF9fd29ya3NwYWNlXCIsXCJuYXZiYXJcIjpcIl9hcHBfY3NzX2FwcF9fbmF2YmFyXCIsXCJib3hfdG9vbGJhcl9kZWFjdGl2ZVwiOlwiX2FwcF9jc3NfYXBwX19ib3hfdG9vbGJhcl9kZWFjdGl2ZVwiLFwiYm94X3Rvb2xiYXJfYWN0aXZlXCI6XCJfYXBwX2Nzc19hcHBfX2JveF90b29sYmFyX2FjdGl2ZVwiLFwibG9nb1wiOlwiX2FwcF9jc3NfYXBwX19sb2dvXCJ9IiwiZXhwb3J0IGRlZmF1bHQge1xuICAnZXhhbXBsZSc6IHJlcXVpcmUoJ29yaWVudGJvYXJkLWNvbXBvbmVudC1leGFtcGxlJykuZGVmYXVsdFxufSIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSdcblxuaW1wb3J0IGJsb2NrU3RvcmUgZnJvbSAnLi4vc3RvcmVzL2Jsb2NrJ1xuaW1wb3J0IGJvYXJkU3RvcmUgZnJvbSAnLi4vc3RvcmVzL2JvYXJkJ1xuaW1wb3J0IGJveFN0b3JlIGZyb20gJy4uL3N0b3Jlcy9ib3gnXG5pbXBvcnQgc2VsZWN0U3RvcmUgZnJvbSAnLi4vc3RvcmVzL3NlbGVjdCdcbmltcG9ydCB1aVN0b3JlIGZyb20gJy4uL3N0b3Jlcy91aSdcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFRlc3RMYXlvdXQodGl0bGUsIGNiKSB7XG4gIGNvbnN0IG5hbWUgPSAvKC4qKS1kZXYkLy5leGVjKHRpdGxlKVsxXVxuICBpZiAobmFtZSlcbiAgICByZXR1cm4gJC5hamF4KHtcbiAgICAgIHVybDogYC9nZXQtdGVzdC1sYXlvdXQvJHtuYW1lfWAsXG4gICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgc3VjY2VzczogY2JcbiAgICB9KVxuICByZXR1cm4gbnVsbFxufVxuXG5leHBvcnQgZnVuY3Rpb24gc3dhcEVsZW1lbnRzKGxpc3QsIHgsIHkpIHtcbiAgbGlzdFt4XSA9IFtsaXN0W3ldLCBsaXN0W3ldID0gbGlzdFt4XV1bMF1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRTdG9yZXMoKSB7XG4gICAgLy8gSEFDSzogaW1wb3J0IGFsbCBzdG9yZXMgYW5kIGJ5cGFzcyBlc2xpbnQgbm8tdW51c2VkIHJ1bGVzXG4gICgoKSA9PiB7fSkoXG4gICAgICBibG9ja1N0b3JlLCBib2FyZFN0b3JlLCBib3hTdG9yZSwgc2VsZWN0U3RvcmUsIHVpU3RvcmVcbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY29weVRvQ2xpcGJvYXJkKHRleHQpIHtcbiAgd2luZG93LnByb21wdCgnQ29weSB0byBjbGlwYm9hcmQ6IEN0cmwrQywgRW50ZXInLCB0ZXh0KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gb3BlbldpbmRvdyh0ZXh0KSB7XG4gIHdpbmRvdy5vcGVuKHRleHQpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGFydER5bmFtaWMoY29tcG9uZW50KSB7XG4gIGlmICghY29tcG9uZW50LnN0YXRlLmRhdGFzb3VyY2UpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGNvbnN0IGNiID0gY29tcG9uZW50LmhhbmRsZUR5bmFtaWNEYXRhID8gKGRhdGEpID0+IHtcbiAgICBpZiAoIWNvbXBvbmVudC5zdGF0ZS5kYXRhc291cmNlLnN0YXJ0RHluYW1pYykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGNvbnNvbGUubG9nKCdkYXRhJywgZGF0YSlcbiAgICBjb21wb25lbnQuaGFuZGxlRHluYW1pY0RhdGEoZGF0YSlcblxuICAgIGlmIChjb21wb25lbnQucmVmcy5kcyAmJiBjb21wb25lbnQucmVmcy5kcy5zdGF0ZS5zaG93KSB7XG4gICAgICBjb21wb25lbnQucmVmcy5kcy5oYW5kbGVMb2coZGF0YSlcbiAgICB9XG4gIH0gOiAoZGF0YSkgPT4geyBjb25zb2xlLmxvZyhkYXRhKSB9XG5cbiAgY29uc3Qgc2VydmVyVVJMID0gY29tcG9uZW50LnN0YXRlLmRhdGFzb3VyY2Uuc2VydmVyXG5cblxuICBpZiAoY29tcG9uZW50LnN0YXRlLmRhdGFzb3VyY2UuZGF0YVR5cGUgPT09ICdwdWxsJykge1xuICAgIGlmIChjb21wb25lbnQuc3RhdGUuZGF0YXNvdXJjZS5zdGFydER5bmFtaWMpIHtcbiAgICAgIGlmICghY29tcG9uZW50LnN0YXRlLmRhdGFzb3VyY2UucmVwZWF0KSB7XG4gICAgICAgIGNvbXBvbmVudC5wcm9wcy50aW1lclBvb2wuc3RhcnQoY29tcG9uZW50LnN0YXRlLmRhdGFzb3VyY2UudXJsLCBjb21wb25lbnQuc3RhdGUuZGF0YXNvdXJjZS5pbnRlcnZhbCwgY2IsIHRydWUpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgaWQgPSBjb21wb25lbnQucHJvcHMudGltZXJQb29sLnN0YXJ0KGNvbXBvbmVudC5zdGF0ZS5kYXRhc291cmNlLnVybCwgY29tcG9uZW50LnN0YXRlLmRhdGFzb3VyY2UuaW50ZXJ2YWwsIGNiKVxuICAgICAgICBjb21wb25lbnQuc2V0U3RhdGUoeyB0aW1lcklkOiBpZCB9KVxuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmIChjb21wb25lbnQuc3RhdGUuZGF0YXNvdXJjZS5kYXRhVHlwZSA9PT0gJ3B1c2gnKSB7XG4gICAgbGV0IGNvbm4gPSBudWxsXG4gICAgbGV0IHBvb2wgPSBudWxsXG5cbiAgICBpZiAoc2VydmVyVVJMLmluZGV4T2YoJ21xdHQnKSA+IC0xKSB7XG4gICAgICBjb25uID0gY29tcG9uZW50LnByb3BzLm1xdHRQb29sLmdldCgnd3M6Ly8nICsgc2VydmVyVVJMLnNwbGl0KCdtcXR0Oi8vJylbMV0pXG4gICAgICBwb29sID0gY29tcG9uZW50LnByb3BzLm1xdHRQb29sXG4gICAgfSBlbHNlIGlmIChzZXJ2ZXJVUkwuaW5kZXhPZignc29ja2V0aW8nKSA+IC0xKSB7XG4gICAgICBjb25uID0gY29tcG9uZW50LnByb3BzLnNvY2tldGlvUG9vbC5nZXQoJ2h0dHA6Ly8nICsgc2VydmVyVVJMLnNwbGl0KCdzb2NrZXRpbzovLycpWzFdKVxuICAgICAgcG9vbCA9IGNvbXBvbmVudC5wcm9wcy5zb2NrZXRpb1Bvb2xcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coJ+acquaUr+aMgeWNj+iuricsIHNlcnZlclVSTClcbiAgICAgIHJldHVyblxuICAgIH1cblxuXG4gICAgaWYgKGNvbXBvbmVudC5zdGF0ZS5kYXRhc291cmNlLnN0YXJ0RHluYW1pYykge1xuICAgICAgcG9vbC5zdWIoY29ubiwgY29tcG9uZW50LnN0YXRlLmRhdGFzb3VyY2UuY2hhbm5lbCwgY2IpXG4gICAgfSBlbHNlIHtcbiAgICAgIHBvb2wudW5zdWIoY29ubiwgY29tcG9uZW50LnN0YXRlLmRhdGFzb3VyY2UuY2hhbm5lbCwgY2IpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdG9wRHluYW1pYyhjb21wb25lbnQpIHtcbiAgY29uc3QgY2IgPSBjb21wb25lbnQuaGFuZGxlRHluYW1pY0RhdGEgPyBjb21wb25lbnQuaGFuZGxlRHluYW1pY0RhdGEgOiAoZGF0YSkgPT4geyBjb25zb2xlLmxvZyhkYXRhKSB9XG5cbiAgaWYgKGNvbXBvbmVudC5zdGF0ZS5kYXRhVHlwZSA9PT0gJ3B1bGwnKSB7XG4gICAgY29tcG9uZW50LnByb3BzLnRpbWVyUG9vbC5zdG9wKGNvbXBvbmVudC5zdGF0ZS50aW1lcklkKVxuICAgIGNvbXBvbmVudC5zZXRTdGF0ZSh7IHRpbWVySWQ6IG51bGwgfSlcbiAgfSBlbHNlIGlmIChjb21wb25lbnQuc3RhdGUuZGF0YVR5cGUgPT09ICdwdXNoJykge1xuICAgIGNvbXBvbmVudC5wcm9wcy5tcXR0UG9vbC51bnN1Yihjb25uLCBjb21wb25lbnQuc3RhdGUuY2hhbm5lbCwgY2IpXG4gIH1cbn1cbiIsImltcG9ydCBSZWZsdXggZnJvbSAncmVmbHV4J1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuXG5pbXBvcnQgYWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL2Jsb2NrJ1xuXG5pbXBvcnQgc2VsZWN0U3RvcmUgZnJvbSAnLi4vc3RvcmVzL3NlbGVjdCdcblxubGV0IHN0YXRlID0ge1xuXG59XG5cbnNlbGVjdFN0b3JlLmxpc3RlbigobmV3U3RhdGUpID0+IHtcbiAgc3RhdGUgPSBfLmFzc2lnbihzdGF0ZSwgbmV3U3RhdGUpXG59KVxuXG5mdW5jdGlvbiBlbnN1cmVDb21wb25lbnRJbmZvKGluZm8pIHtcbiAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgeDogMCxcbiAgICB5OiAwLFxuICAgIHJvdGF0ZTogMCxcbiAgICBoOiAxMDAsXG4gICAgdzogMTAwLFxuICAgIGRhdGE6IHt9XG4gIH1cbiAgcmV0dXJuIF8uYXNzaWduKGRlZmF1bHRzLCBpbmZvKVxufVxuXG5jb25zdCBzdG9yZSA9IFJlZmx1eC5jcmVhdGVTdG9yZSh7XG4gIGxpc3RlbmFibGVzOiBhY3Rpb25zLFxuICBvblJlbW92ZUJveDogKCkgPT4ge1xuICAgIHN0YXRlLmJsb2NrLnJlbW92ZUJveChzdGF0ZS5ib3gpXG4gIH0sXG4gIG9uTmV3Q29tcG9uZW50OiAoYm94KSA9PiB7XG4gICAgY29uc29sZS5sb2coc3RhdGUuYmxvY2suY3JlYXRlQm94KVxuICAgIGJveCA9IGVuc3VyZUNvbXBvbmVudEluZm8oYm94KVxuICAgIHN0YXRlLmJsb2NrLmNyZWF0ZUJveChib3gpXG4gIH0sXG4gIG9uU2V0QmxvY2tDb25maWc6IChjb25maWcpID0+IHtcbiAgICBzdGF0ZS5ibG9jay5zZXRDb25maWcoY29uZmlnKVxuICB9XG5cbn0pXG5cbnN0b3JlLmdldFN0YXRlID0gKCkgPT4ge1xuICByZXR1cm4gXy5jbG9uZShzdGF0ZSlcbn1cblxuc3RvcmUuZmluZEJvYXJkID0gKGJvYXJkKSA9PiB7XG4gIHJldHVybiBfLmZpbmQoc3RhdGUuYm9hcmRzLCBib2FyZClcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3RvcmVcbiIsImltcG9ydCBSZWZsdXggZnJvbSAncmVmbHV4J1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuXG5pbXBvcnQgYWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL2JvYXJkJ1xuXG5pbXBvcnQgc2VsZWN0QWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL3NlbGVjdCdcbmltcG9ydCBzZWxlY3RTdG9yZSBmcm9tICcuLi9zdG9yZXMvc2VsZWN0J1xuaW1wb3J0IEJvYXJkTWFuYWdlciBmcm9tICcuLi8uLi9saWIvY2xpZW50J1xuXG5pbXBvcnQgeyBzd2FwRWxlbWVudHMsIGNvcHlUb0NsaXBib2FyZCwgb3BlbldpbmRvdyB9IGZyb20gJy4uL2xpYi91dGlsJ1xuXG5jb25zdCBibSA9IG5ldyBCb2FyZE1hbmFnZXIoKVxubGV0IHN0YXRlID0ge1xuICBib2FyZHM6IFtdXG59XG5cbnNlbGVjdFN0b3JlLmxpc3RlbigobmV3U3RhdGUpID0+IHtcbiAgc3RhdGUgPSBfLmFzc2lnbihzdGF0ZSwgbmV3U3RhdGUpXG59KVxuXG5jb25zdCBzdG9yZSA9IFJlZmx1eC5jcmVhdGVTdG9yZSh7XG4gIGxpc3RlbmFibGVzOiBhY3Rpb25zLFxuICBvblNhdmVCb2FyZDogKCkgPT4ge1xuICAgIGNvbnN0IG5iID0gc3RhdGUuYXBwLnJlZnMuYm9hcmQudG9Kc29uKClcbiAgICBjb25zb2xlLmxvZyhuYilcbiAgICBhY3Rpb25zLnVwZGF0ZUJvYXJkKHsgbmFtZTogbmIubmFtZSB9LCBuYilcbiAgICBhbGVydCgn5L+d5a2Y5oiQ5YqfJylcbiAgfSxcbiAgb25DbG9uZUJvYXJkOiBhc3luYyhuZXdOYW1lKSA9PiB7XG4gICAgY29uc3QgbmIgPSBzdGF0ZS5hcHAucmVmcy5ib2FyZC50b0pzb24oKVxuICAgIG5iLm5hbWUgPSBuZXdOYW1lXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGJtLmNyZWF0ZShuYilcbiAgICAgIHN0YXRlLmJvYXJkcy5wdXNoKHJlcylcbiAgICAgIHN0b3JlLnRyaWdnZXIoc3RhdGUpXG5cbiAgICAgIHJldHVybiBhY3Rpb25zLmNyZWF0ZUJvYXJkLmNvbXBsZXRlZChuYilcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gYWN0aW9ucy5jcmVhdGVCb2FyZC5mYWlsZWQoZSlcbiAgICB9XG4gIH0sXG4gIG9uQ3JlYXRlQm9hcmQ6IGFzeW5jIChib2FyZCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBibS5jcmVhdGUoYm9hcmQpXG4gICAgICBzdGF0ZS5ib2FyZHMucHVzaChyZXMpXG4gICAgICBzdG9yZS50cmlnZ2VyKHN0YXRlKVxuICAgICAgcmV0dXJuIGFjdGlvbnMuY3JlYXRlQm9hcmQuY29tcGxldGVkKGJvYXJkKVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiBhY3Rpb25zLmNyZWF0ZUJvYXJkLmZhaWxlZChlKVxuICAgIH1cbiAgfSxcblxuICBvblJlbmFtZUJvYXJkOiBhc3luYyAoYm9hcmROYW1lLCBib2FyZERlc2MpID0+IHtcbiAgICBjb25zdCBuYiA9IHN0YXRlLmFwcC5yZWZzLmJvYXJkLnRvSnNvbigpXG4gICAgY29uc3Qgb2xkTmFtZSA9IG5iLm5hbWVcbiAgICBuYi5uYW1lID0gYm9hcmROYW1lXG4gICAgbmIuZGVzYyA9IGJvYXJkRGVzY1xuXG4gICAgLy8gY29uc29sZS5sb2coXCJyZW5hbWVcIixib2FyZERlc2MpXG5cbiAgICBhY3Rpb25zLnVwZGF0ZUJvYXJkKHsgbmFtZTogb2xkTmFtZSB9LCBuYilcbiAgICBzdGF0ZS5ib2FyZHNbXy5maW5kSW5kZXgoc3RhdGUuYm9hcmRzLCB7IG5hbWU6IGJvYXJkTmFtZSwgZGVzYzogYm9hcmREZXNjIH0pXSA9IG5iXG4gICAgc3RvcmUudHJpZ2dlcihzdGF0ZSlcbiAgICByZXR1cm4gYWN0aW9ucy51cGRhdGVCb2FyZC5jb21wbGV0ZWQoKVxuXG4gICAgLy8gcmV0dXJuIFwidHJ1ZVwiXG4gIH0sXG5cbiAgb25DcmVhdGVCb2FyZEZhaWxlZDogKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdjcmVhdGUgZmFpbGVkJylcbiAgfSxcbiAgb25DcmVhdGVCb2FyZENvbXBsZXRlZDogKGJvYXJkKSA9PiB7XG4gICAgc2VsZWN0QWN0aW9ucy5zZXRBY3RpdmVCb2FyZChib2FyZClcbiAgfSxcbiAgb25MaXN0Qm9hcmRzOiBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgYm0ubGlzdCgpXG4gICAgc3RhdGUuYm9hcmRzID0gcmVzXG4gICAgc3RvcmUudHJpZ2dlcihzdGF0ZSlcbiAgICByZXR1cm4gYWN0aW9ucy5saXN0Qm9hcmRzLmNvbXBsZXRlZCgpXG4gIH0sXG4gIG9uRmluZEJvYXJkOiAoYm9hcmQpID0+IHtcbiAgICByZXR1cm4gYWN0aW9ucy5maW5kQm9hcmQuY29tcGxldGVkKF8uZmlsdGVyKHN0YXRlLmJvYXJkcywgYm9hcmQpKVxuICB9LFxuICBvblJlbW92ZUJvYXJkOiBhc3luYyAoYm9hcmQpID0+IHtcbiAgICBpZiAoIV8uZmlsdGVyKHN0YXRlLmJvYXJkcywgYm9hcmQpKVxuICAgICAgcmV0dXJuIGFjdGlvbnMucmVtb3ZlQm9hcmQuZmFpbGVkKCdCb2FyZCBub3QgZm91bmQnKVxuICAgIGF3YWl0IGJtLnJlbW92ZShib2FyZClcbiAgICBzdGF0ZS5ib2FyZHMgPSBzdGF0ZS5ib2FyZHMuZmlsdGVyKChiKSA9PiB7XG4gICAgICByZXR1cm4gYi5uYW1lICE9PSBib2FyZC5uYW1lXG4gICAgfSlcbiAgICBzZWxlY3RBY3Rpb25zLnNldEFjdGl2ZUJvYXJkKHN0YXRlLmJvYXJkc1swXSlcbiAgICBzdG9yZS50cmlnZ2VyKHN0YXRlKVxuICB9LFxuICBvblVwZGF0ZUJvYXJkOiBhc3luYyAocXVlcnksIGJvYXJkKSA9PiB7XG4gICAgaWYgKCFfLmZpbHRlcihzdGF0ZS5ib2FyZHMsIGJvYXJkKSlcbiAgICAgIHJldHVybiBhY3Rpb25zLnJlbW92ZUJvYXJkLmZhaWxlZCgnQm9hcmQgbm90IGZvdW5kJylcbiAgICBhd2FpdCBibS51cGRhdGUocXVlcnksIGJvYXJkKVxuICAgIHN0YXRlLmJvYXJkc1tfLmZpbmRJbmRleChzdGF0ZS5ib2FyZHMsIHF1ZXJ5KV0gPSBib2FyZFxuICAgIHN0b3JlLnRyaWdnZXIoc3RhdGUpXG4gICAgcmV0dXJuIGFjdGlvbnMudXBkYXRlQm9hcmQuY29tcGxldGVkKClcbiAgfSxcbiAgb25BZGRCbG9jazogKCkgPT4ge1xuICAgIHN0YXRlLmJvYXJkLmJsb2Nrcy5wdXNoKHtcbiAgICAgIGJveGVzOiBbXSxcbiAgICAgIC8vIHVzZSB0aW1lc3RhbXAgYXMgaWQgdG8gZGlzdGluZ3Vpc2ggYmxvY2tzIGluIHRoZSBzYW1lIGJvYXJkXG4gICAgICBpZDogRGF0ZS5ub3coKS50b1N0cmluZygpLFxuICAgICAgdzogXy5nZXQoc3RhdGUsICdib2FyZC5ibG9ja3NbMF0udycpIHx8IDgwMCxcbiAgICAgIGg6IF8uZ2V0KHN0YXRlLCAnYm9hcmQuYmxvY2tzWzBdLmgnKSB8fCA2MDAsXG4gICAgICBpbWc6IG51bGxcbiAgICB9KVxuICAgIHN0b3JlLnRyaWdnZXIoc3RhdGUpXG4gIH0sXG4gIG9uUmVtb3ZlQmxvY2s6ICgpID0+IHtcbiAgICBzdGF0ZS5ib2FyZC5ibG9ja3Muc3BsaWNlKFxuICAgICAgXy5maW5kSW5kZXgoc3RhdGUuYm9hcmQuYmxvY2tzLCB7IGlkOiBzdGF0ZS5ibG9jay5pZCB9KSwgMVxuICAgIClcbiAgICBzdG9yZS50cmlnZ2VyKHN0YXRlKVxuICB9LFxuICBvbk1vdmVCbG9jazogKHN0ZXApID0+IHtcbiAgICBjb25zdCBpZHggPSBfLmZpbmRJbmRleChzdGF0ZS5ib2FyZC5ibG9ja3MsIHsgaWQ6IHN0YXRlLmJsb2NrLmlkIH0pXG4gICAgaWYgKHN0YXRlLmJvYXJkLmJsb2Nrc1tpZHggKyBzdGVwXSkge1xuICAgICAgc3dhcEVsZW1lbnRzKHN0YXRlLmJvYXJkLmJsb2NrcywgaWR4LCBpZHggKyBzdGVwKVxuICAgICAgc3RvcmUudHJpZ2dlcihzdGF0ZSlcbiAgICB9XG4gIH0sXG4gIG9uUHVibGlzaEJvYXJkOiBhc3luYygpID0+IHtcbiAgICAvLyBjb25zdCBsaW5rID0gd2luZG93LmxvY2F0aW9uLm9yaWdpbiArIGAvYXBpL2Rpc3BsYXkvJHtzdGF0ZS5ib2FyZC5faWR9YFxuICAgIC8vIGNvcHlUb0NsaXBib2FyZChsaW5rKVxuXG4gICAgY29uc3QgYm9hcmQgPSBfLmZpbmRJbmRleChzdGF0ZS5ib2FyZHMsIHsgX2lkOiBzdGF0ZS5ib2FyZC5faWQgfSlcblxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGJtLnB1Ymxpc2goc3RhdGUuYm9hcmQuX2lkKVxuXG4gICAgaWYgKHJlcy5zdGF0dXMgPT09ICdvaycpIHtcbiAgICAgIGFsZXJ0KCflj5HluIPmiJDlip8nKVxuICAgICAgY29uc3QgbGluayA9IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4gKyBgL3B1Ymxpc2gvJHtzdGF0ZS5ib2FyZC5faWR9Lmh0bWxgXG4gICAgICBvcGVuV2luZG93KGxpbmspXG4gICAgfSBlbHNlIHtcbiAgICAgIGFsZXJ0KCflj5HluIPlpLHotKUnKVxuICAgIH1cbiAgICByZXR1cm5cbiAgfSxcblxuICBvbkdldERpc3BsYXlMaW5rOiAoKSA9PiB7XG4gICAgY29uc3QgbGluayA9IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4gKyBgL2FwaS9kaXNwbGF5LyR7c3RhdGUuYm9hcmQuX2lkfWBcbiAgICBjb3B5VG9DbGlwYm9hcmQobGluaylcbiAgfSxcbiAgb25PcGVuRGlzcGxheUxpbms6ICgpID0+IHtcbiAgICBjb25zdCBsaW5rID0gd2luZG93LmxvY2F0aW9uLm9yaWdpbiArIGAvYXBpL2Rpc3BsYXkvJHtzdGF0ZS5ib2FyZC5faWR9YFxuICAgIG9wZW5XaW5kb3cobGluaylcbiAgfVxufSlcblxuc3RvcmUuZ2V0U3RhdGUgPSAoKSA9PiB7XG4gIHJldHVybiBfLmNsb25lKHN0YXRlKVxufVxuXG5zdG9yZS5maW5kQm9hcmQgPSAoYm9hcmQpID0+IHtcbiAgcmV0dXJuIF8uZmluZChzdGF0ZS5ib2FyZHMsIGJvYXJkKVxufVxuXG5leHBvcnQgZGVmYXVsdCBzdG9yZVxuIiwiaW1wb3J0IFJlZmx1eCBmcm9tICdyZWZsdXgnXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXG5pbXBvcnQgVmVjdG9yIGZyb20gJ3ZpY3RvcidcblxuaW1wb3J0IGFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9ib3gnXG5cbmltcG9ydCBzZWxlY3RTdG9yZSBmcm9tICcuLi9zdG9yZXMvc2VsZWN0J1xuXG5jb25zdCBBQ1RJT05TID0ge1xuICBOT05FOiAwLFxuICBST1RBVEU6IDEsXG4gIERSQUc6IDIsXG4gIFJFU0laRTogM1xufVxuXG5jb25zdCBST1RBVEVfU1RFUCA9IDE1LFxuICBHUklEX1NJWkUgPSAxMFxuXG5sZXQgc3RhdGUgPSB7XG4gIGJveDogbnVsbCxcbiAgZHJhZ1N0YXJ0OiB7XG4gICAgeDogMCxcbiAgICB5OiAwXG4gIH0sXG4gIGNlbnRlcjoge1xuICAgIHg6IDAsXG4gICAgeTogMFxuICB9LFxuICByb3RhdGVTdGFydDoge1xuICAgIHg6IDAsXG4gICAgeTogMFxuICB9LFxuICByZXNpemVTdGFydDoge1xuICAgIHg6IDAsXG4gICAgeTogMFxuICB9LFxuICBySW5pdDogMCxcbiAgYWN0aW9uOiBBQ1RJT05TLk5PTkUsXG4gIG1vZGU6ICdlZGl0JyxcbiAgYm9hcmRzOiBbXVxufVxuXG5cbnNlbGVjdFN0b3JlLmxpc3RlbigobmV3U3RhdGUpID0+IHtcbiAgc3RhdGUgPSBfLmFzc2lnbihzdGF0ZSwgbmV3U3RhdGUpXG59KVxuXG4vLyBnZXQgdGhlIGFuZ2xlIGJldHdlZW4gdmVjdG9yKHJvdGF0ZVN0YXJ0LnggLSBjZW50ZXIueCxcbi8vIHJvdGF0ZVN0YXJ0LnkgLSBjZW50ZXIueSlcbi8vIGFuZCB2ZWN0b3IoeCAtIGNlbnRlci54LCB5IC0gY2VudGVyLnkpIGluIGRlZ3JlZVxuZnVuY3Rpb24gZ2V0Um90YXRlQW5nbGUoeCwgeSkge1xuICBjb25zdCB7IHJvdGF0ZVN0YXJ0LCBjZW50ZXIgfSA9IHN0YXRlXG4gIGNvbnN0IHZTdGFydCA9IG5ldyBWZWN0b3Iocm90YXRlU3RhcnQueCAtIGNlbnRlci54LCByb3RhdGVTdGFydC55IC0gY2VudGVyLnkpXG4gIGNvbnN0IHZFbmQgPSBuZXcgVmVjdG9yKHggLSBjZW50ZXIueCwgeSAtIGNlbnRlci55KVxuICByZXR1cm4gdkVuZC5hbmdsZURlZygpIC0gdlN0YXJ0LmFuZ2xlRGVnKClcbn1cblxuLy8gZW5zdXJlcyBib3ggYmVpbmcgZHJhZ2dlZCBzdGF5cyBpbiBibG9ja1xuZnVuY3Rpb24gY29uc3RyYWluRHJhZyh4LCB5KSB7XG4gIHggPSB4ICsgc3RhdGUuYm94LncgPD0gc3RhdGUuYmxvY2sudyA/IHggOiBzdGF0ZS5ibG9jay53IC0gc3RhdGUuYm94LndcbiAgeCA9IHggPCAwID8gMCA6IHhcbiAgeSA9IHkgKyBzdGF0ZS5ib3guaCA8PSBzdGF0ZS5ibG9jay5oID8geSA6IHN0YXRlLmJsb2NrLmggLSBzdGF0ZS5ib3guaFxuICB5ID0geSA8IDAgPyAwIDogeVxuICByZXR1cm4geyB4LCB5IH1cbn1cblxuY29uc3Qgc3RvcmUgPSBSZWZsdXguY3JlYXRlU3RvcmUoe1xuICBsaXN0ZW5hYmxlczogYWN0aW9ucyxcbiAgb25Jbml0OiAoYXBwKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ2luaXQgc3RhcnRlZCcpXG4gICAgaWYgKHN0YXRlLnJlYWR5KSByZXR1cm4gbnVsbFxuXG4gICAgc3RhdGUuYXBwID0gYXBwXG5cbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQub25tb3VzZW1vdmUgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgc3dpdGNoIChzdGF0ZS5hY3Rpb24pIHtcbiAgICAgIGNhc2UgQUNUSU9OUy5EUkFHOlxuICAgICAgICBsZXQgeyB4LCB5IH0gPSBjb25zdHJhaW5EcmFnKFxuICAgICAgICAgIGUuY2xpZW50WCAtIHN0YXRlLmRyYWdTdGFydC54XG4gICAgICAgICwgZS5jbGllbnRZIC0gc3RhdGUuZHJhZ1N0YXJ0LnlcbiAgICAgICAgKVxuXG4gICAgICAgIGlmIChlLmFsdEtleSkge1xuICAgICAgICAgIHggLT0geCAlIEdSSURfU0laRVxuICAgICAgICAgIHkgLT0geSAlIEdSSURfU0laRVxuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUuYm94Lm1vdmVUbyh4LCB5KVxuICAgICAgICBicmVha1xuXG4gICAgICBjYXNlIEFDVElPTlMuUk9UQVRFOlxuICAgICAgICBsZXQgYW5nbGUgPSBzdGF0ZS5ySW5pdCArIGdldFJvdGF0ZUFuZ2xlKGUuY2xpZW50WCwgZS5jbGllbnRZKVxuICAgICAgICBpZiAoZS5hbHRLZXkpXG4gICAgICAgICAgYW5nbGUgLT0gYW5nbGUgJSBST1RBVEVfU1RFUFxuICAgICAgICBzdGF0ZS5ib3gucm90YXRlKGFuZ2xlKVxuICAgICAgICBicmVha1xuXG4gICAgICBjYXNlIEFDVElPTlMuUkVTSVpFOlxuICAgICAgICBsZXQgaCA9IHN0YXRlLnJlc2l6ZVN0YXJ0LmggKyBlLmNsaWVudFkgLSBzdGF0ZS5yZXNpemVTdGFydC55LFxuICAgICAgICAgIHcgPSBzdGF0ZS5yZXNpemVTdGFydC53ICsgZS5jbGllbnRYIC0gc3RhdGUucmVzaXplU3RhcnQueFxuXG4gICAgICAgIGlmIChlLmFsdEtleSkge1xuICAgICAgICAgIGggLT0gaCAlIEdSSURfU0laRVxuICAgICAgICAgIHcgLT0gdyAlIEdSSURfU0laRVxuICAgICAgICB9XG4gICAgICAgIHN0YXRlLmJveC5yZXNpemUoaCwgdylcbiAgICAgICAgYnJlYWtcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQub25tb3VzZXVwID0gZnVuY3Rpb24gKCkge1xuICAgICAgc3RhdGUuYWN0aW9uID0gQUNUSU9OUy5OT05FXG4gICAgfVxuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5vbmRibGNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHN0YXRlLmJveClcbiAgICAgICAgc3RhdGUuYm94Lm9wZW5Db25maWcoKVxuICAgIH1cblxuICAgIHN0YXRlLnJlYWR5ID0gdHJ1ZVxuICB9LFxuICAvLyBUT0RPOiBsMiBwcmV2ZW50IHRvbyBtYW55IHJlbmRlcnNcbiAgb25TdGFydFJvdGF0ZTogKGNlbnRlciwgeCwgeSwgdGhldGEpID0+IHtcbiAgICBzdGF0ZS5hY3Rpb24gPSBBQ1RJT05TLlJPVEFURVxuICAgIHN0YXRlLmNlbnRlciA9IGNlbnRlclxuICAgIHN0YXRlLnJvdGF0ZVN0YXJ0ID0geyB4LCB5IH1cbiAgICBzdGF0ZS5ySW5pdCA9IHRoZXRhXG4gIH0sXG4gIG9uU3RhcnREcmFnOiAoeCwgeSkgPT4ge1xuICAgIHN0YXRlLmFjdGlvbiA9IEFDVElPTlMuRFJBR1xuICAgIHN0YXRlLmRyYWdTdGFydCA9IHsgeCwgeSB9XG4gIH0sXG4gIG9uU3RhcnRSZXNpemU6IChoLCB3LCB4LCB5KSA9PiB7XG4gICAgc3RhdGUuYWN0aW9uID0gQUNUSU9OUy5SRVNJWkVcbiAgICBzdGF0ZS5yZXNpemVTdGFydCA9IHsgeCwgeSwgaCwgdyB9XG4gIH0sXG4gIG9uU3RvcERyYWc6ICgpID0+IHtcbiAgICBzdGF0ZS5hY3Rpb24gPSBBQ1RJT05TLk5PTkVcbiAgfSxcbiAgb25TdG9wQWxsOiAoKSA9PiB7XG4gICAgc3RhdGUuYWN0aW9uID0gQUNUSU9OUy5OT05FXG4gIH0sXG4gIG9uQWRkWkluZGV4OiAoYW1vdW50KSA9PiB7XG4gICAgaWYgKHN0YXRlLmJveClcbiAgICAgIHN0YXRlLmJveC5hZGRaSW5kZXgoYW1vdW50KVxuICB9LFxuICBvbk9wZW5Db25maWcoKSB7XG4gICAgY29uc29sZS5sb2coJ29wZW5uaW5nIGNvbmZpZycsIHN0YXRlLmJveClcbiAgICBpZiAoc3RhdGUuYm94KVxuICAgICAgc3RhdGUuYm94Lm9wZW5Db25maWcoKVxuICB9XG5cbn0pXG5cbnN0b3JlLmdldFN0YXRlID0gKCkgPT4ge1xuICByZXR1cm4gXy5jbG9uZShzdGF0ZSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3RvcmVcbiIsImltcG9ydCBSZWZsdXggZnJvbSAncmVmbHV4J1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuXG5cbmltcG9ydCBhY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvY2xvdWR1aSdcbmltcG9ydCBCb2FyZE1hbmFnZXIgZnJvbSAnLi4vLi4vbGliL2NsaWVudCdcblxuXG5jb25zdCBibSA9IG5ldyBCb2FyZE1hbmFnZXIoKVxuXG5jb25zdCBzdGF0ZSA9IHtcbiAgdXNlcnM6IFtdXG59XG5cblxuY29uc3Qgc3RvcmUgPSBSZWZsdXguY3JlYXRlU3RvcmUoe1xuICBsaXN0ZW5hYmxlczogYWN0aW9ucyxcblxuXG4gIG9uQWRkVXNlcjogYXN5bmModXNlcikgPT4ge1xuICAgIGNvbnNvbGUubG9nKCctLT5hZGRVc2VyJywgdXNlcilcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYm0uY3JlYXRlVXNlcih1c2VyKS50aGVuKChuZXdVc2VyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKG5ld1VzZXIucmVzdWx0WzBdLnVpZClcblxuICAgICAgICB1c2VyLnVpZCA9IG5ld1VzZXIucmVzdWx0WzBdLnVpZFxuICAgICAgICBzdGF0ZS51c2Vycy5wdXNoKHVzZXIpXG4gICAgICAgIHN0YXRlLmlkeCA9IG51bGxcbiAgICAgICAgc3RvcmUudHJpZ2dlcihzdGF0ZSlcbiAgICAgIH0pXG5cblxuICAgICAgcmV0dXJuICdvaydcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmxvZyhlKVxuICAgICAgcmV0dXJuICdlcnJvcidcbiAgICB9XG4gIH0sXG5cbiAgb25SZW1vdmVVc2VyOiBhc3luYyAodXNlcikgPT4ge1xuICAgIGNvbnNvbGUubG9nKCctLT5yZW1vdmVVc2VyJywgdXNlcilcblxuICAgIGJtLnJlbW92ZVVzZXIodXNlcikudGhlbigoKSA9PiB7XG4gICAgICBsZXQgaWR4ID0gMFxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGF0ZS51c2Vycy5sZW5ndGg7IGkgKyspIHtcbiAgICAgICAgaWYgKHN0YXRlLnVzZXJzW2ldLmVtYWlsID09PSB1c2VyLmVtYWlsKSB7XG4gICAgICAgICAgaWR4ID0gaVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgc3RhdGUudXNlcnMuc3BsaWNlKGlkeCwgMSlcbiAgICAgIHN0YXRlLmlkeCA9IG51bGxcbiAgICAgIHN0YXRlLmNvbmZyaW0gPSBmYWxzZVxuICAgICAgc3RvcmUudHJpZ2dlcihzdGF0ZSlcbiAgICB9KVxuXG4gICAgcmV0dXJuICcnXG4gIH0sXG5cbiAgb25SZW1vdmVVc2VyQ29uZnJpbTogYXN5bmMgKGlkeCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCctLT5yZW1vdmVVc2VyQ29uZnJpbScsIGlkeClcbiAgICBzdGF0ZS5zaG93Q29uZmlnID0gZmFsc2VcbiAgICBzdGF0ZS5jb25mcmltID0gdHJ1ZVxuICAgIHN0YXRlLmNvbmZyaW1Nc2cgPSAn5Yig6Zmk55So5oi3J1xuICAgIHN0YXRlLmlkeCA9IGlkeFxuICAgIHN0b3JlLnRyaWdnZXIoc3RhdGUpXG5cbiAgICByZXR1cm4gJydcbiAgfSxcblxuICBvblVwZGF0ZVVzZXI6IGFzeW5jIChvcCwgdXNlcikgPT4ge1xuICAgIGNvbnNvbGUubG9nKCctLT51cGRhdGVVc2VyJywgdXNlcilcblxuICAgICAvLyBpZihvcD09XCJjaGFuZ2VQYXNzd29yZFwiKXtcbiAgICAgLy8gIGNvbnNvbGUubG9nKHVzZXIpO1xuICAgICAvLyB9ZWxzZSBpZihvcD09XCJmb3J6ZW5cIil7XG4gICAgIC8vICBjb25zb2xlLmxvZyh1c2VyKVxuICAgICAvLyB9XG5cbiAgICBibS51cGRhdGVVc2VyKHVzZXIpLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgY29uc29sZS5sb2cocmVzdWx0KVxuICAgICAgc3RhdGUuc2hvd0NvbmZpZyA9IGZhbHNlXG4gICAgICBzdGF0ZS5pZHggPSBudWxsXG4gICAgICBzdG9yZS50cmlnZ2VyKHN0YXRlKVxuICAgIH0pXG5cbiAgICByZXR1cm4gJydcbiAgfSxcblxuICBvbkNoYW5nZVBhc3N3b3JkOiBhc3luYyhpZHgpID0+IHtcbiAgICBzdGF0ZS5zaG93Q29uZmlnID0gdHJ1ZVxuICAgIHN0YXRlLmlkeCA9IGlkeFxuICAgIHN0YXRlLmNvbmZpZ1RpdGxlID0gJ+S/ruaUueeUqOaIt+WvhueggSdcbiAgICBzdG9yZS50cmlnZ2VyKHN0YXRlKVxuICB9LFxuXG4gIG9uTGlzdFVzZXI6IGFzeW5jICh1c2VyKSA9PiB7XG4gICAgY29uc29sZS5sb2coJy0tPmxpc3RVc2VyJywgdXNlcilcbiAgICAvLyBjb25zdCBuYiA9IHN0YXRlLmFwcC5yZWZzLmJvYXJkLnRvSnNvbigpXG4gICAgLy8gY29uc3Qgb2xkTmFtZT1uYi5uYW1lXG4gICAgLy8gbmIubmFtZT1ib2FyZE5hbWVcblxuXG4gICAgLy8gYWN0aW9ucy51cGRhdGVCb2FyZCh7IG5hbWU6IG9sZE5hbWUgfSwgbmIpXG4gICAgLy8gc3RhdGUuYm9hcmRzW18uZmluZEluZGV4KHN0YXRlLmJvYXJkcywgeyBuYW1lOiBib2FyZE5hbWUgfSldID0gbmJcbiAgICAvLyBzdG9yZS50cmlnZ2VyKHN0YXRlKVxuICAgIC8vIHJldHVybiBhY3Rpb25zLnVwZGF0ZUJvYXJkLmNvbXBsZXRlZCgpXG4gICAgYm0ubGlzdFVzZXIoKS50aGVuKCh1c2VycykgPT4ge1xuICAgICAgXy5mb3JFYWNoKHVzZXJzLCAodXNlcikgPT4ge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh1c2VyKVxuICAgICAgICBpZiAoc3RhdGUudXNlcnMuaW5kZXhPZih1c2VyKSA9PT0gLTEpIHtcbiAgICAgICAgICBzdGF0ZS51c2Vycy5wdXNoKHVzZXIpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICBjb25zb2xlLmxvZyhzdGF0ZSlcbiAgICAgIHN0b3JlLnRyaWdnZXIoc3RhdGUpXG4gICAgfSlcblxuICAgIHJldHVybiAnYWEnXG4gIH1cblxufSlcblxuc3RvcmUuZ2V0U3RhdGUgPSAoKSA9PiB7XG4gIHJldHVybiBfLmNsb25lKHN0YXRlKVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IHN0b3JlXG4iLCJpbXBvcnQgUmVmbHV4IGZyb20gJ3JlZmx1eCdcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcblxuaW1wb3J0IGFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9zZWxlY3QnXG5cbmltcG9ydCB1aVN0b3JlIGZyb20gJy4vdWknXG5cbmNvbnN0IHN0YXRlID0ge1xuICBib3g6IG51bGwsXG4gIGJsb2NrOiBudWxsLFxuICBib2FyZDogbnVsbFxufVxuXG51aVN0b3JlLmxpc3RlbigobmV3U3RhdGUpID0+IHtcbiAgXy5hc3NpZ24oc3RhdGUsIG5ld1N0YXRlKVxufSlcblxuY29uc3Qgc3RvcmUgPSBSZWZsdXguY3JlYXRlU3RvcmUoe1xuICBsaXN0ZW5hYmxlczogYWN0aW9ucyxcbiAgb25TZXRBY3RpdmVCbG9jazogKGJsb2NrKSA9PiB7XG4gICAgaWYgKHN0YXRlLm1vZGUgPT09ICdwdWJsaXNoJykgcmV0dXJuIG51bGxcbiAgICBpZiAoc3RhdGUuYmxvY2sgPT09IGJsb2NrKSByZXR1cm4gbnVsbFxuICAgIGFjdGlvbnMuc2V0QWN0aXZlQm94KG51bGwpXG4gICAgaWYgKHN0YXRlLmJsb2NrKSBzdGF0ZS5ibG9jay5kZWFjdGl2YXRlKClcbiAgICBzdGF0ZS5ibG9jayA9IGJsb2NrXG4gICAgaWYgKGJsb2NrKSBibG9jay5hY3RpdmF0ZSgpXG4gICAgc3RvcmUudHJpZ2dlcihzdGF0ZSlcbiAgfSxcbiAgb25TZXRBY3RpdmVCb3g6IChib3gpID0+IHtcbiAgICBpZiAoc3RhdGUubW9kZSA9PT0gJ3B1Ymxpc2gnKSByZXR1cm4gbnVsbFxuICAgIGlmIChzdGF0ZS5ib3ggPT09IGJveCkgcmV0dXJuIG51bGxcbiAgICBpZiAoc3RhdGUuYm94KVxuICAgICAgc3RhdGUuYm94LmRlYWN0aXZhdGUoKVxuICAgIHN0YXRlLmJveCA9IGJveFxuICAgIGlmIChib3gpIGJveC5hY3RpdmF0ZSgpXG4gICAgc3RvcmUudHJpZ2dlcihzdGF0ZSlcbiAgfSxcbiAgb25TZXRBY3RpdmVCb2FyZDogKGJvYXJkKSA9PiB7XG4gICAgaWYgKHN0YXRlLm1vZGUgPT09ICdwdWJsaXNoJykgcmV0dXJuIG51bGxcbiAgICBpZiAoXy5nZXQoc3RhdGUsICdib2FyZC5uYW1lJykgPT09IGJvYXJkLm5hbWUpIHJldHVybiBudWxsXG4gICAgaWYgKHN0YXRlLmJveCkgc3RhdGUuYm94LmRlYWN0aXZhdGUoKVxuICAgIHN0YXRlLmJveCA9IG51bGxcbiAgICBzdGF0ZS5ibG9jayA9IG51bGxcbiAgICBzdGF0ZS5ib2FyZCA9IGJvYXJkXG4gICAgc3RvcmUudHJpZ2dlcihzdGF0ZSlcbiAgfSxcbiAgb25TZXRBcHA6IChhcHApID0+IHtcbiAgICBzdGF0ZS5hcHAgPSBhcHBcbiAgICBzdG9yZS50cmlnZ2VyKHN0YXRlKVxuICB9XG59KVxuXG5zdG9yZS5nZXRTdGF0ZSA9ICgpID0+IHtcbiAgcmV0dXJuIF8uY2xvbmUoc3RhdGUpXG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0b3JlXG4iLCJpbXBvcnQgUmVmbHV4IGZyb20gJ3JlZmx1eCdcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcblxuaW1wb3J0IHVpQWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL3VpJ1xuaW1wb3J0IHNlbGVjdEFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9zZWxlY3QnXG5cbmNvbnN0IHN0YXRlID0ge1xuICBzaG93QmxvY2tDb25maWc6IGZhbHNlLFxuICBzaG93Qm9hcmRDb25maWc6IGZhbHNlLFxuICBtb2RlOiAnZWRpdCcsXG4gIHRoZW1lOiAnZGVmYXVsdCdcbn1cblxuY29uc3Qgc3RvcmUgPSBSZWZsdXguY3JlYXRlU3RvcmUoe1xuICBsaXN0ZW5hYmxlczogdWlBY3Rpb25zLFxuICBvbk9wZW5CbG9ja0NvbmZpZygpIHtcbiAgICBzdGF0ZS5zaG93QmxvY2tDb25maWcgPSB0cnVlXG4gICAgc3RvcmUudHJpZ2dlcihzdGF0ZSlcbiAgfSxcbiAgb25DbG9zZUJsb2NrQ29uZmlnKCkge1xuICAgIHN0YXRlLnNob3dCbG9ja0NvbmZpZyA9IGZhbHNlXG4gICAgc3RvcmUudHJpZ2dlcihzdGF0ZSlcbiAgfSxcbiAgb25PcGVuQm9hcmRDb25maWc6IChuYW1lLCBhY3Rpb24pID0+IHtcbiAgICBzdGF0ZS5zaG93Qm9hcmRDb25maWcgPSB0cnVlXG4gICAgaWYgKG5hbWUpIHtcbiAgICAgIHN0YXRlLmJvYXJkTmFtZSA9IG5hbWVcbiAgICB9XG5cbiAgICBzdGF0ZS5ib2FyZEFjdGlvbiA9IGFjdGlvblxuICAgIHN0b3JlLnRyaWdnZXIoc3RhdGUpXG4gIH0sXG4gIG9uQ2xvc2VCb2FyZENvbmZpZzogKCkgPT4ge1xuICAgIHN0YXRlLnNob3dCb2FyZENvbmZpZyA9IGZhbHNlXG4gICAgc3RvcmUudHJpZ2dlcihzdGF0ZSlcbiAgfSxcbiAgb25TZXRNb2RlOiAobW9kZSkgPT4ge1xuICAgIGlmIChzdGF0ZS5tb2RlID09PSBtb2RlKSByZXR1cm4gbnVsbFxuICAgIHN0YXRlLm1vZGUgPSBtb2RlXG4gICAgc2VsZWN0QWN0aW9ucy5zZXRBY3RpdmVCb3gobnVsbClcbiAgICBzZWxlY3RBY3Rpb25zLnNldEFjdGl2ZUJsb2NrKG51bGwpXG4gICAgc3RvcmUudHJpZ2dlcihzdGF0ZSlcbiAgfSxcbiAgb25TZXRUaGVtZTogKHRoZW1lKSA9PiB7XG4gICAgaWYgKHN0YXRlLnRoZW1lID09PSB0aGVtZSkgcmV0dXJuIG51bGxcbiAgICBzdGF0ZS50aGVtZSA9IHRoZW1lXG4gICAgc3RvcmUudHJpZ2dlcihzdGF0ZSlcbiAgfVxufSlcblxuc3RvcmUuZ2V0U3RhdGUgPSAoKSA9PiB7XG4gIHJldHVybiBfLmNsb25lKHN0YXRlKVxufVxuXG5leHBvcnQgZGVmYXVsdCBzdG9yZVxuIiwiY29uc3QgJCA9IHJlcXVpcmUoJ2pxdWVyeScpXG5cbm1vZHVsZS5leHBvcnRzID0gY2xhc3MgQm9hcmRNYW5hZ2VyQ2xpZW50IHtcbiAgY29uc3RydWN0b3Iob3B0cykge1xuICAgICAgb3B0cyA9IG9wdHMgfHwge31cbiAgICAgIHRoaXMuaG9zdCA9IG9wdHMuaG9zdCB8fCAnJ1xuICAgICAgdGhpcy5wYXRoID0gb3B0cy5wYXRoIHx8ICdhcGknXG4gIH1cblxuICBfdXJsKGVuZHBvaW50KSB7XG4gICAgICBjb25zb2xlLmxvZyhgJHt0aGlzLmhvc3R9LyR7dGhpcy5wYXRofS8ke2VuZHBvaW50fWApXG4gICAgICByZXR1cm4gYCR7dGhpcy5ob3N0fS8ke3RoaXMucGF0aH0vJHtlbmRwb2ludH1gXG4gIH1cblxuICBfanNvblJlcShtZXRob2QsIGRhdGEsIGVuZHBvaW50KSB7XG4gICAgICBjb25zdCBvcHRzID0ge1xuICAgICAgICAgIG1ldGhvZCxcbiAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeShkYXRhKSxcbiAgICAgICAgICBjb250ZW50VHlwZTogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLTgnLFxuICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICAgICAgdXJsOiB0aGlzLl91cmwoZW5kcG9pbnQpXG4gICAgICB9XG4gICAgICBpZiAobWV0aG9kID09PSAnR0VUJylcbiAgICAgICAgICBvcHRzLmRhdGEgPSBkYXRhXG4gICAgICBlbHNlIHtcbiAgICAgICAgICBvcHRzLmRhdGEgPSBKU09OLnN0cmluZ2lmeShkYXRhKVxuICAgICAgICAgIG9wdHMuY29udGVudFR5cGUgPSAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOCdcbiAgICAgICAgICBvcHRzLmRhdGFUeXBlID0gJ2pzb24nXG4gICAgICB9XG4gICAgICByZXR1cm4gJC5hamF4KG9wdHMpXG4gIH1cblxuICBsaXN0VXNlcigpIHtcbiAgICAgIHJldHVybiB0aGlzLl9qc29uUmVxKCdHRVQnLCB7fSwgJ3YxL3VzZXInKVxuICB9XG5cbiAgY3JlYXRlVXNlcih1c2VyKSB7XG4gICAgICByZXR1cm4gdGhpcy5fanNvblJlcSgnUE9TVCcsIHVzZXIsICd2MS91c2VyJylcbiAgfVxuXG4gIHJlbW92ZVVzZXIodXNlcikge1xuICAgICAgcmV0dXJuIHRoaXMuX2pzb25SZXEoJ0RFTEVURScsIHVzZXIsICd2MS91c2VyLycgKyB1c2VyLnVpZClcbiAgfVxuXG4gIHVwZGF0ZVVzZXIodXNlcikge1xuICAgICAgcmV0dXJuIHRoaXMuX2pzb25SZXEoJ1BVVCcsIHVzZXIsICd2MS91c2VyLycgKyB1c2VyLnVpZClcbiAgfVxuXG4gIHB1Ymxpc2goYm9hcmRfaWQpIHtcbiAgICAgIHJldHVybiB0aGlzLl9qc29uUmVxKCdQT1NUJywgeyB9LCAnL2JvYXJkL3B1Ymxpc2gvJyArIGJvYXJkX2lkKVxuICB9XG5cbiAgY3JlYXRlKGJvYXJkKSB7XG4gICAgICByZXR1cm4gdGhpcy5fanNvblJlcSgnUFVUJywgeyBib2FyZCB9LCAnYm9hcmQnKVxuICB9XG5cbiAgcmVtb3ZlKGJvYXJkKSB7XG4gICAgICByZXR1cm4gdGhpcy5fanNvblJlcSgnREVMRVRFJywgeyBib2FyZCB9LCAnYm9hcmQnKVxuICB9XG5cbiAgdXBkYXRlKHF1ZXJ5LCBib2FyZCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2pzb25SZXEoJ1BBVENIJywgeyBxdWVyeSwgYm9hcmQgfSwgJ2JvYXJkJylcbiAgfVxuXG4gIGZpbmQoYm9hcmQpIHtcbiAgICAgIHJldHVybiB0aGlzLl9qc29uUmVxKCdHRVQnLCB7IGJvYXJkIH0sICdib2FyZCcpXG4gIH1cblxuICBsaXN0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2pzb25SZXEoJ0dFVCcsIHt9LCAnYm9hcmRzJylcbiAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSB7XCJ0ZXh0XCI6XCJfbm9kZV9tb2R1bGVzX29yaWVudGJvYXJkX2NvbXBvbmVudF9leGFtcGxlX2Nzc19jb21wb25lbnRfX3RleHRcIn0iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfY2xhc3M7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9hdXRvYmluZERlY29yYXRvciA9IHJlcXVpcmUoJ2F1dG9iaW5kLWRlY29yYXRvcicpO1xuXG52YXIgX2F1dG9iaW5kRGVjb3JhdG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2F1dG9iaW5kRGVjb3JhdG9yKTtcblxudmFyIF9jb21wb25lbnQgPSByZXF1aXJlKCcuLi9jc3MvY29tcG9uZW50LmNzcycpO1xuXG52YXIgX2NvbXBvbmVudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb21wb25lbnQpO1xuXG52YXIgX3JlYWN0Qm9vdHN0cmFwID0gcmVxdWlyZSgncmVhY3QtYm9vdHN0cmFwJyk7XG5cbnZhciBfbmV3Q29tcG9uZW50TW9kYWwgPSByZXF1aXJlKCcuL25ldy1jb21wb25lbnQtbW9kYWwnKTtcblxudmFyIF9uZXdDb21wb25lbnRNb2RhbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9uZXdDb21wb25lbnRNb2RhbCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIEV4YW1wbGUgPSAoMCwgX2F1dG9iaW5kRGVjb3JhdG9yMi5kZWZhdWx0KShfY2xhc3MgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoRXhhbXBsZSwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gRXhhbXBsZShwcm9wcykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBFeGFtcGxlKTtcblxuICAgIC8vIHByb3BzOlxuICAgIC8vIC0gZGF0YTogb2JqZWN0LCB5b3VyIGRhdGFcbiAgICAvLyAtIGVkaXQ6IGJvb2xlYW4sIHdoZXRoZXIgeW91ciBjb21wb25lbnQgc2hvdWxkIGJlIGVkaXRhYmxlXG4gICAgLy8gLSB0aGVtZTogc3RyaW5nLCB0aGUgZ2xvYmFsIHRoZW1lXG5cbiAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoRXhhbXBsZSkuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBzaG93Q29uZmlnOiBmYWxzZSxcbiAgICAgIGNvbnRlbnQ6IF90aGlzLnByb3BzLmRhdGEuY29udGVudFxuICAgIH07XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKEV4YW1wbGUsIFt7XG4gICAga2V5OiAndG9Kc29uJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdG9Kc29uKCkge1xuICAgICAgLy8gcmV0dXJuIHRoZSBkYXRhIHlvdSB3YW50IHRvIHNhdmUgYXMgYW4gb2JqZWN0XG4gICAgICByZXR1cm4ge1xuICAgICAgICBjb250ZW50OiB0aGlzLnN0YXRlLmNvbnRlbnRcbiAgICAgIH07XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnb3BlbkNvbmZpZycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9wZW5Db25maWcoKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd0NvbmZpZzogdHJ1ZSB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjbG9zZUNvbmZpZycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNsb3NlQ29uZmlnKCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dDb25maWc6IGZhbHNlIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ19hcHBseUNvbmZpZycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9hcHBseUNvbmZpZygpIHtcbiAgICAgIC8vIGFwcGx5IGNoYW5nZXMgaGVyZVxuICAgICAgdGhpcy5jbG9zZUNvbmZpZygpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIHRoaXMucHJvcHMsXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgIF9yZWFjdEJvb3RzdHJhcC5Nb2RhbCxcbiAgICAgICAgICB7IHNob3c6IHRoaXMuc3RhdGUuc2hvd0NvbmZpZywgb25IaWRlOiB0aGlzLmNsb3NlQ29uZmlnIH0sXG4gICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICBfcmVhY3RCb290c3RyYXAuTW9kYWwuSGVhZGVyLFxuICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICBfcmVhY3RCb290c3RyYXAuTW9kYWwuVGl0bGUsXG4gICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICdDb25maWcnXG4gICAgICAgICAgICApXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgIF9yZWFjdEJvb3RzdHJhcC5Nb2RhbC5Cb2R5LFxuICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICdDb25maWcgZ29lcyBoZXJlJ1xuICAgICAgICAgICksXG4gICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICBfcmVhY3RCb290c3RyYXAuTW9kYWwuRm9vdGVyLFxuICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICBfcmVhY3RCb290c3RyYXAuQnV0dG9uLFxuICAgICAgICAgICAgICB7IG9uQ2xpY2s6IHRoaXMuY2xvc2VDb25maWcgfSxcbiAgICAgICAgICAgICAgJ0NhbmNlbCdcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgX3JlYWN0Qm9vdHN0cmFwLkJ1dHRvbixcbiAgICAgICAgICAgICAgeyBvbkNsaWNrOiB0aGlzLl9hcHBseUNvbmZpZyB9LFxuICAgICAgICAgICAgICAnQ29uZmlybSdcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgICksXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICdoMScsXG4gICAgICAgICAgeyBjbGFzc05hbWU6IF9jb21wb25lbnQyLmRlZmF1bHQudGV4dCB9LFxuICAgICAgICAgIHRoaXMuc3RhdGUuY29udGVudFxuICAgICAgICApXG4gICAgICApO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBFeGFtcGxlO1xufShfcmVhY3QyLmRlZmF1bHQuQ29tcG9uZW50KSkgfHwgX2NsYXNzO1xuXG5FeGFtcGxlLnByb3BUeXBlcyA9IHtcbiAgZGF0YTogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5vYmplY3QsXG4gIHRoZW1lOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuRXhhbXBsZS5OZXdDb21wb25lbnRDb25maWcgPSBfbmV3Q29tcG9uZW50TW9kYWwyLmRlZmF1bHQ7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IEV4YW1wbGU7IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX2NsYXNzO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfYXV0b2JpbmREZWNvcmF0b3IgPSByZXF1aXJlKCdhdXRvYmluZC1kZWNvcmF0b3InKTtcblxudmFyIF9hdXRvYmluZERlY29yYXRvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hdXRvYmluZERlY29yYXRvcik7XG5cbnZhciBfcmVhY3RCb290c3RyYXAgPSByZXF1aXJlKCdyZWFjdC1ib290c3RyYXAnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgTmV3Q29tcG9uZW50TW9kYWwgPSAoMCwgX2F1dG9iaW5kRGVjb3JhdG9yMi5kZWZhdWx0KShfY2xhc3MgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoTmV3Q29tcG9uZW50TW9kYWwsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIE5ld0NvbXBvbmVudE1vZGFsKHByb3BzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE5ld0NvbXBvbmVudE1vZGFsKTtcblxuICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIE9iamVjdC5nZXRQcm90b3R5cGVPZihOZXdDb21wb25lbnRNb2RhbCkuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBzaG93OiBmYWxzZVxuICAgIH07XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKE5ld0NvbXBvbmVudE1vZGFsLCBbe1xuICAgIGtleTogJ29wZW4nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvcGVuKCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3c6IHRydWUgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY2xvc2UnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjbG9zZSgpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93OiBmYWxzZSB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdfY3JlYXRlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2NyZWF0ZSgpIHtcbiAgICAgIHZhciBpbmZvID0ge1xuICAgICAgICB4OiAwLFxuICAgICAgICB5OiAwLFxuICAgICAgICB3OiBwYXJzZUludCh0aGlzLnJlZnMudy5nZXRWYWx1ZSgpLCAxMCksXG4gICAgICAgIGg6IHBhcnNlSW50KHRoaXMucmVmcy5oLmdldFZhbHVlKCksIDEwKSxcbiAgICAgICAgcm90YXRlOiAwLFxuICAgICAgICAvLyB0aGUgc2hvcnQgbmFtZSBvZiB5b3VyIGNvbXBvbmVudCBoZXJlXG4gICAgICAgIHR5cGU6ICdleGFtcGxlJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIGNvbnRlbnQ6IHRoaXMucmVmcy5jb250ZW50LmdldFZhbHVlKClcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIHRoaXMucHJvcHMuYWN0aW9ucy5uZXdDb21wb25lbnQoaW5mbyk7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBfcmVhY3RCb290c3RyYXAuTW9kYWwsXG4gICAgICAgIHsgc2hvdzogdGhpcy5zdGF0ZS5zaG93LCBvbkhpZGU6IHRoaXMuY2xvc2UgfSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgX3JlYWN0Qm9vdHN0cmFwLk1vZGFsLkhlYWRlcixcbiAgICAgICAgICBudWxsLFxuICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgX3JlYWN0Qm9vdHN0cmFwLk1vZGFsLlRpdGxlLFxuICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICdOZXcgQ29tcG9uZW50J1xuICAgICAgICAgIClcbiAgICAgICAgKSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgX3JlYWN0Qm9vdHN0cmFwLk1vZGFsLkJvZHksXG4gICAgICAgICAgbnVsbCxcbiAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdmb3JtJyxcbiAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChfcmVhY3RCb290c3RyYXAuSW5wdXQsIHsgdHlwZTogJ3RleHQnLCBsYWJlbDogJ3cnLCByZWY6ICd3JyB9KSxcbiAgICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9yZWFjdEJvb3RzdHJhcC5JbnB1dCwgeyB0eXBlOiAndGV4dCcsIGxhYmVsOiAnaCcsIHJlZjogJ2gnIH0pLFxuICAgICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX3JlYWN0Qm9vdHN0cmFwLklucHV0LCB7IHR5cGU6ICd0ZXh0JywgbGFiZWw6ICdjb250ZW50JywgcmVmOiAnY29udGVudCcgfSlcbiAgICAgICAgICApXG4gICAgICAgICksXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgIF9yZWFjdEJvb3RzdHJhcC5Nb2RhbC5Gb290ZXIsXG4gICAgICAgICAgbnVsbCxcbiAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgIF9yZWFjdEJvb3RzdHJhcC5CdXR0b24sXG4gICAgICAgICAgICB7IG9uQ2xpY2s6IHRoaXMuY2xvc2UgfSxcbiAgICAgICAgICAgICdDYW5jZWwnXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgIF9yZWFjdEJvb3RzdHJhcC5CdXR0b24sXG4gICAgICAgICAgICB7IG9uQ2xpY2s6IHRoaXMuX2NyZWF0ZSB9LFxuICAgICAgICAgICAgJ0NvbmZpcm0nXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBOZXdDb21wb25lbnRNb2RhbDtcbn0oX3JlYWN0Mi5kZWZhdWx0LkNvbXBvbmVudCkpIHx8IF9jbGFzcztcblxuTmV3Q29tcG9uZW50TW9kYWwucHJvcFR5cGVzID0ge1xuICBhY3Rpb25zOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLm9iamVjdFxufTtcblxuTmV3Q29tcG9uZW50TW9kYWwuZGVmYXVsdFByb3BzID0ge307XG5cbmV4cG9ydHMuZGVmYXVsdCA9IE5ld0NvbXBvbmVudE1vZGFsOyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IFZpY3RvcjtcblxuLyoqXG4gKiAjIFZpY3RvciAtIEEgSmF2YVNjcmlwdCAyRCB2ZWN0b3IgY2xhc3Mgd2l0aCBtZXRob2RzIGZvciBjb21tb24gdmVjdG9yIG9wZXJhdGlvbnNcbiAqL1xuXG4vKipcbiAqIENvbnN0cnVjdG9yLiBXaWxsIGFsc28gd29yayB3aXRob3V0IHRoZSBgbmV3YCBrZXl3b3JkXG4gKlxuICogIyMjIEV4YW1wbGVzOlxuICogICAgIHZhciB2ZWMxID0gbmV3IFZpY3RvcigxMDAsIDUwKTtcbiAqICAgICB2YXIgdmVjMiA9IFZpY3Rvcig0MiwgMTMzNyk7XG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IHggVmFsdWUgb2YgdGhlIHggYXhpc1xuICogQHBhcmFtIHtOdW1iZXJ9IHkgVmFsdWUgb2YgdGhlIHkgYXhpc1xuICogQHJldHVybiB7VmljdG9yfVxuICogQGFwaSBwdWJsaWNcbiAqL1xuZnVuY3Rpb24gVmljdG9yICh4LCB5KSB7XG5cdGlmICghKHRoaXMgaW5zdGFuY2VvZiBWaWN0b3IpKSB7XG5cdFx0cmV0dXJuIG5ldyBWaWN0b3IoeCwgeSk7XG5cdH1cblxuXHQvKipcblx0ICogVGhlIFggYXhpc1xuXHQgKlxuXHQgKiAjIyMgRXhhbXBsZXM6XG5cdCAqICAgICB2YXIgdmVjID0gbmV3IFZpY3Rvci5mcm9tQXJyYXkoNDIsIDIxKTtcblx0ICpcblx0ICogICAgIHZlYy54O1xuXHQgKiAgICAgLy8gPT4gNDJcblx0ICpcblx0ICogQGFwaSBwdWJsaWNcblx0ICovXG5cdHRoaXMueCA9IHggfHwgMDtcblxuXHQvKipcblx0ICogVGhlIFkgYXhpc1xuXHQgKlxuXHQgKiAjIyMgRXhhbXBsZXM6XG5cdCAqICAgICB2YXIgdmVjID0gbmV3IFZpY3Rvci5mcm9tQXJyYXkoNDIsIDIxKTtcblx0ICpcblx0ICogICAgIHZlYy55O1xuXHQgKiAgICAgLy8gPT4gMjFcblx0ICpcblx0ICogQGFwaSBwdWJsaWNcblx0ICovXG5cdHRoaXMueSA9IHkgfHwgMDtcbn07XG5cbi8qKlxuICogIyBTdGF0aWNcbiAqL1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgaW5zdGFuY2UgZnJvbSBhbiBhcnJheVxuICpcbiAqICMjIyBFeGFtcGxlczpcbiAqICAgICB2YXIgdmVjID0gVmljdG9yLmZyb21BcnJheShbNDIsIDIxXSk7XG4gKlxuICogICAgIHZlYy50b1N0cmluZygpO1xuICogICAgIC8vID0+IHg6NDIsIHk6MjFcbiAqXG4gKiBAbmFtZSBWaWN0b3IuZnJvbUFycmF5XG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBBcnJheSB3aXRoIHRoZSB4IGFuZCB5IHZhbHVlcyBhdCBpbmRleCAwIGFuZCAxIHJlc3BlY3RpdmVseVxuICogQHJldHVybiB7VmljdG9yfSBUaGUgbmV3IGluc3RhbmNlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5WaWN0b3IuZnJvbUFycmF5ID0gZnVuY3Rpb24gKGFycikge1xuXHRyZXR1cm4gbmV3IFZpY3RvcihhcnJbMF0gfHwgMCwgYXJyWzFdIHx8IDApO1xufTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IGluc3RhbmNlIGZyb20gYW4gb2JqZWN0XG4gKlxuICogIyMjIEV4YW1wbGVzOlxuICogICAgIHZhciB2ZWMgPSBWaWN0b3IuZnJvbU9iamVjdCh7IHg6IDQyLCB5OiAyMSB9KTtcbiAqXG4gKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gKiAgICAgLy8gPT4geDo0MiwgeToyMVxuICpcbiAqIEBuYW1lIFZpY3Rvci5mcm9tT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqIE9iamVjdCB3aXRoIHRoZSB2YWx1ZXMgZm9yIHggYW5kIHlcbiAqIEByZXR1cm4ge1ZpY3Rvcn0gVGhlIG5ldyBpbnN0YW5jZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuVmljdG9yLmZyb21PYmplY3QgPSBmdW5jdGlvbiAob2JqKSB7XG5cdHJldHVybiBuZXcgVmljdG9yKG9iai54IHx8IDAsIG9iai55IHx8IDApO1xufTtcblxuLyoqXG4gKiAjIE1hbmlwdWxhdGlvblxuICpcbiAqIFRoZXNlIGZ1bmN0aW9ucyBhcmUgY2hhaW5hYmxlLlxuICovXG5cbi8qKlxuICogQWRkcyBhbm90aGVyIHZlY3RvcidzIFggYXhpcyB0byB0aGlzIG9uZVxuICpcbiAqICMjIyBFeGFtcGxlczpcbiAqICAgICB2YXIgdmVjMSA9IG5ldyBWaWN0b3IoMTAsIDEwKTtcbiAqICAgICB2YXIgdmVjMiA9IG5ldyBWaWN0b3IoMjAsIDMwKTtcbiAqXG4gKiAgICAgdmVjMS5hZGRYKHZlYzIpO1xuICogICAgIHZlYzEudG9TdHJpbmcoKTtcbiAqICAgICAvLyA9PiB4OjMwLCB5OjEwXG4gKlxuICogQHBhcmFtIHtWaWN0b3J9IHZlY3RvciBUaGUgb3RoZXIgdmVjdG9yIHlvdSB3YW50IHRvIGFkZCB0byB0aGlzIG9uZVxuICogQHJldHVybiB7VmljdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICogQGFwaSBwdWJsaWNcbiAqL1xuVmljdG9yLnByb3RvdHlwZS5hZGRYID0gZnVuY3Rpb24gKHZlYykge1xuXHR0aGlzLnggKz0gdmVjLng7XG5cdHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBBZGRzIGFub3RoZXIgdmVjdG9yJ3MgWSBheGlzIHRvIHRoaXMgb25lXG4gKlxuICogIyMjIEV4YW1wbGVzOlxuICogICAgIHZhciB2ZWMxID0gbmV3IFZpY3RvcigxMCwgMTApO1xuICogICAgIHZhciB2ZWMyID0gbmV3IFZpY3RvcigyMCwgMzApO1xuICpcbiAqICAgICB2ZWMxLmFkZFkodmVjMik7XG4gKiAgICAgdmVjMS50b1N0cmluZygpO1xuICogICAgIC8vID0+IHg6MTAsIHk6NDBcbiAqXG4gKiBAcGFyYW0ge1ZpY3Rvcn0gdmVjdG9yIFRoZSBvdGhlciB2ZWN0b3IgeW91IHdhbnQgdG8gYWRkIHRvIHRoaXMgb25lXG4gKiBAcmV0dXJuIHtWaWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gKiBAYXBpIHB1YmxpY1xuICovXG5WaWN0b3IucHJvdG90eXBlLmFkZFkgPSBmdW5jdGlvbiAodmVjKSB7XG5cdHRoaXMueSArPSB2ZWMueTtcblx0cmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIEFkZHMgYW5vdGhlciB2ZWN0b3IgdG8gdGhpcyBvbmVcbiAqXG4gKiAjIyMgRXhhbXBsZXM6XG4gKiAgICAgdmFyIHZlYzEgPSBuZXcgVmljdG9yKDEwLCAxMCk7XG4gKiAgICAgdmFyIHZlYzIgPSBuZXcgVmljdG9yKDIwLCAzMCk7XG4gKlxuICogICAgIHZlYzEuYWRkKHZlYzIpO1xuICogICAgIHZlYzEudG9TdHJpbmcoKTtcbiAqICAgICAvLyA9PiB4OjMwLCB5OjQwXG4gKlxuICogQHBhcmFtIHtWaWN0b3J9IHZlY3RvciBUaGUgb3RoZXIgdmVjdG9yIHlvdSB3YW50IHRvIGFkZCB0byB0aGlzIG9uZVxuICogQHJldHVybiB7VmljdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICogQGFwaSBwdWJsaWNcbiAqL1xuVmljdG9yLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAodmVjKSB7XG5cdHRoaXMueCArPSB2ZWMueDtcblx0dGhpcy55ICs9IHZlYy55O1xuXHRyZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogQWRkcyB0aGUgZ2l2ZW4gc2NhbGFyIHRvIGJvdGggdmVjdG9yIGF4aXNcbiAqXG4gKiAjIyMgRXhhbXBsZXM6XG4gKiAgICAgdmFyIHZlYyA9IG5ldyBWaWN0b3IoMSwgMik7XG4gKlxuICogICAgIHZlYy5hZGRTY2FsYXIoMik7XG4gKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gKiAgICAgLy8gPT4geDogMywgeTogNFxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBzY2FsYXIgVGhlIHNjYWxhciB0byBhZGRcbiAqIEByZXR1cm4ge1ZpY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAqIEBhcGkgcHVibGljXG4gKi9cblZpY3Rvci5wcm90b3R5cGUuYWRkU2NhbGFyID0gZnVuY3Rpb24gKHNjYWxhcikge1xuXHR0aGlzLnggKz0gc2NhbGFyO1xuXHR0aGlzLnkgKz0gc2NhbGFyO1xuXHRyZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogQWRkcyB0aGUgZ2l2ZW4gc2NhbGFyIHRvIHRoZSBYIGF4aXNcbiAqXG4gKiAjIyMgRXhhbXBsZXM6XG4gKiAgICAgdmFyIHZlYyA9IG5ldyBWaWN0b3IoMSwgMik7XG4gKlxuICogICAgIHZlYy5hZGRTY2FsYXJYKDIpO1xuICogICAgIHZlYy50b1N0cmluZygpO1xuICogICAgIC8vID0+IHg6IDMsIHk6IDJcbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gc2NhbGFyIFRoZSBzY2FsYXIgdG8gYWRkXG4gKiBAcmV0dXJuIHtWaWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gKiBAYXBpIHB1YmxpY1xuICovXG5WaWN0b3IucHJvdG90eXBlLmFkZFNjYWxhclggPSBmdW5jdGlvbiAoc2NhbGFyKSB7XG5cdHRoaXMueCArPSBzY2FsYXI7XG5cdHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBBZGRzIHRoZSBnaXZlbiBzY2FsYXIgdG8gdGhlIFkgYXhpc1xuICpcbiAqICMjIyBFeGFtcGxlczpcbiAqICAgICB2YXIgdmVjID0gbmV3IFZpY3RvcigxLCAyKTtcbiAqXG4gKiAgICAgdmVjLmFkZFNjYWxhclkoMik7XG4gKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gKiAgICAgLy8gPT4geDogMSwgeTogNFxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBzY2FsYXIgVGhlIHNjYWxhciB0byBhZGRcbiAqIEByZXR1cm4ge1ZpY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAqIEBhcGkgcHVibGljXG4gKi9cblZpY3Rvci5wcm90b3R5cGUuYWRkU2NhbGFyWSA9IGZ1bmN0aW9uIChzY2FsYXIpIHtcblx0dGhpcy55ICs9IHNjYWxhcjtcblx0cmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFN1YnRyYWN0cyB0aGUgWCBheGlzIG9mIGFub3RoZXIgdmVjdG9yIGZyb20gdGhpcyBvbmVcbiAqXG4gKiAjIyMgRXhhbXBsZXM6XG4gKiAgICAgdmFyIHZlYzEgPSBuZXcgVmljdG9yKDEwMCwgNTApO1xuICogICAgIHZhciB2ZWMyID0gbmV3IFZpY3RvcigyMCwgMzApO1xuICpcbiAqICAgICB2ZWMxLnN1YnRyYWN0WCh2ZWMyKTtcbiAqICAgICB2ZWMxLnRvU3RyaW5nKCk7XG4gKiAgICAgLy8gPT4geDo4MCwgeTo1MFxuICpcbiAqIEBwYXJhbSB7VmljdG9yfSB2ZWN0b3IgVGhlIG90aGVyIHZlY3RvciB5b3Ugd2FudCBzdWJ0cmFjdCBmcm9tIHRoaXMgb25lXG4gKiBAcmV0dXJuIHtWaWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gKiBAYXBpIHB1YmxpY1xuICovXG5WaWN0b3IucHJvdG90eXBlLnN1YnRyYWN0WCA9IGZ1bmN0aW9uICh2ZWMpIHtcblx0dGhpcy54IC09IHZlYy54O1xuXHRyZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogU3VidHJhY3RzIHRoZSBZIGF4aXMgb2YgYW5vdGhlciB2ZWN0b3IgZnJvbSB0aGlzIG9uZVxuICpcbiAqICMjIyBFeGFtcGxlczpcbiAqICAgICB2YXIgdmVjMSA9IG5ldyBWaWN0b3IoMTAwLCA1MCk7XG4gKiAgICAgdmFyIHZlYzIgPSBuZXcgVmljdG9yKDIwLCAzMCk7XG4gKlxuICogICAgIHZlYzEuc3VidHJhY3RZKHZlYzIpO1xuICogICAgIHZlYzEudG9TdHJpbmcoKTtcbiAqICAgICAvLyA9PiB4OjEwMCwgeToyMFxuICpcbiAqIEBwYXJhbSB7VmljdG9yfSB2ZWN0b3IgVGhlIG90aGVyIHZlY3RvciB5b3Ugd2FudCBzdWJ0cmFjdCBmcm9tIHRoaXMgb25lXG4gKiBAcmV0dXJuIHtWaWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gKiBAYXBpIHB1YmxpY1xuICovXG5WaWN0b3IucHJvdG90eXBlLnN1YnRyYWN0WSA9IGZ1bmN0aW9uICh2ZWMpIHtcblx0dGhpcy55IC09IHZlYy55O1xuXHRyZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogU3VidHJhY3RzIGFub3RoZXIgdmVjdG9yIGZyb20gdGhpcyBvbmVcbiAqXG4gKiAjIyMgRXhhbXBsZXM6XG4gKiAgICAgdmFyIHZlYzEgPSBuZXcgVmljdG9yKDEwMCwgNTApO1xuICogICAgIHZhciB2ZWMyID0gbmV3IFZpY3RvcigyMCwgMzApO1xuICpcbiAqICAgICB2ZWMxLnN1YnRyYWN0KHZlYzIpO1xuICogICAgIHZlYzEudG9TdHJpbmcoKTtcbiAqICAgICAvLyA9PiB4OjgwLCB5OjIwXG4gKlxuICogQHBhcmFtIHtWaWN0b3J9IHZlY3RvciBUaGUgb3RoZXIgdmVjdG9yIHlvdSB3YW50IHN1YnRyYWN0IGZyb20gdGhpcyBvbmVcbiAqIEByZXR1cm4ge1ZpY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAqIEBhcGkgcHVibGljXG4gKi9cblZpY3Rvci5wcm90b3R5cGUuc3VidHJhY3QgPSBmdW5jdGlvbiAodmVjKSB7XG5cdHRoaXMueCAtPSB2ZWMueDtcblx0dGhpcy55IC09IHZlYy55O1xuXHRyZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogU3VidHJhY3RzIHRoZSBnaXZlbiBzY2FsYXIgZnJvbSBib3RoIGF4aXNcbiAqXG4gKiAjIyMgRXhhbXBsZXM6XG4gKiAgICAgdmFyIHZlYyA9IG5ldyBWaWN0b3IoMTAwLCAyMDApO1xuICpcbiAqICAgICB2ZWMuc3VidHJhY3RTY2FsYXIoMjApO1xuICogICAgIHZlYy50b1N0cmluZygpO1xuICogICAgIC8vID0+IHg6IDgwLCB5OiAxODBcbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gc2NhbGFyIFRoZSBzY2FsYXIgdG8gc3VidHJhY3RcbiAqIEByZXR1cm4ge1ZpY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAqIEBhcGkgcHVibGljXG4gKi9cblZpY3Rvci5wcm90b3R5cGUuc3VidHJhY3RTY2FsYXIgPSBmdW5jdGlvbiAoc2NhbGFyKSB7XG5cdHRoaXMueCAtPSBzY2FsYXI7XG5cdHRoaXMueSAtPSBzY2FsYXI7XG5cdHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBTdWJ0cmFjdHMgdGhlIGdpdmVuIHNjYWxhciBmcm9tIHRoZSBYIGF4aXNcbiAqXG4gKiAjIyMgRXhhbXBsZXM6XG4gKiAgICAgdmFyIHZlYyA9IG5ldyBWaWN0b3IoMTAwLCAyMDApO1xuICpcbiAqICAgICB2ZWMuc3VidHJhY3RTY2FsYXJYKDIwKTtcbiAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAqICAgICAvLyA9PiB4OiA4MCwgeTogMjAwXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IHNjYWxhciBUaGUgc2NhbGFyIHRvIHN1YnRyYWN0XG4gKiBAcmV0dXJuIHtWaWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gKiBAYXBpIHB1YmxpY1xuICovXG5WaWN0b3IucHJvdG90eXBlLnN1YnRyYWN0U2NhbGFyWCA9IGZ1bmN0aW9uIChzY2FsYXIpIHtcblx0dGhpcy54IC09IHNjYWxhcjtcblx0cmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFN1YnRyYWN0cyB0aGUgZ2l2ZW4gc2NhbGFyIGZyb20gdGhlIFkgYXhpc1xuICpcbiAqICMjIyBFeGFtcGxlczpcbiAqICAgICB2YXIgdmVjID0gbmV3IFZpY3RvcigxMDAsIDIwMCk7XG4gKlxuICogICAgIHZlYy5zdWJ0cmFjdFNjYWxhclkoMjApO1xuICogICAgIHZlYy50b1N0cmluZygpO1xuICogICAgIC8vID0+IHg6IDEwMCwgeTogMTgwXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IHNjYWxhciBUaGUgc2NhbGFyIHRvIHN1YnRyYWN0XG4gKiBAcmV0dXJuIHtWaWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gKiBAYXBpIHB1YmxpY1xuICovXG5WaWN0b3IucHJvdG90eXBlLnN1YnRyYWN0U2NhbGFyWSA9IGZ1bmN0aW9uIChzY2FsYXIpIHtcblx0dGhpcy55IC09IHNjYWxhcjtcblx0cmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIERpdmlkZXMgdGhlIFggYXhpcyBieSB0aGUgeCBjb21wb25lbnQgb2YgZ2l2ZW4gdmVjdG9yXG4gKlxuICogIyMjIEV4YW1wbGVzOlxuICogICAgIHZhciB2ZWMgPSBuZXcgVmljdG9yKDEwMCwgNTApO1xuICogICAgIHZhciB2ZWMyID0gbmV3IFZpY3RvcigyLCAwKTtcbiAqXG4gKiAgICAgdmVjLmRpdmlkZVgodmVjMik7XG4gKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gKiAgICAgLy8gPT4geDo1MCwgeTo1MFxuICpcbiAqIEBwYXJhbSB7VmljdG9yfSB2ZWN0b3IgVGhlIG90aGVyIHZlY3RvciB5b3Ugd2FudCBkaXZpZGUgYnlcbiAqIEByZXR1cm4ge1ZpY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAqIEBhcGkgcHVibGljXG4gKi9cblZpY3Rvci5wcm90b3R5cGUuZGl2aWRlWCA9IGZ1bmN0aW9uICh2ZWN0b3IpIHtcblx0dGhpcy54IC89IHZlY3Rvci54O1xuXHRyZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogRGl2aWRlcyB0aGUgWSBheGlzIGJ5IHRoZSB5IGNvbXBvbmVudCBvZiBnaXZlbiB2ZWN0b3JcbiAqXG4gKiAjIyMgRXhhbXBsZXM6XG4gKiAgICAgdmFyIHZlYyA9IG5ldyBWaWN0b3IoMTAwLCA1MCk7XG4gKiAgICAgdmFyIHZlYzIgPSBuZXcgVmljdG9yKDAsIDIpO1xuICpcbiAqICAgICB2ZWMuZGl2aWRlWSh2ZWMyKTtcbiAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAqICAgICAvLyA9PiB4OjEwMCwgeToyNVxuICpcbiAqIEBwYXJhbSB7VmljdG9yfSB2ZWN0b3IgVGhlIG90aGVyIHZlY3RvciB5b3Ugd2FudCBkaXZpZGUgYnlcbiAqIEByZXR1cm4ge1ZpY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAqIEBhcGkgcHVibGljXG4gKi9cblZpY3Rvci5wcm90b3R5cGUuZGl2aWRlWSA9IGZ1bmN0aW9uICh2ZWN0b3IpIHtcblx0dGhpcy55IC89IHZlY3Rvci55O1xuXHRyZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogRGl2aWRlcyBib3RoIHZlY3RvciBheGlzIGJ5IGEgYXhpcyB2YWx1ZXMgb2YgZ2l2ZW4gdmVjdG9yXG4gKlxuICogIyMjIEV4YW1wbGVzOlxuICogICAgIHZhciB2ZWMgPSBuZXcgVmljdG9yKDEwMCwgNTApO1xuICogICAgIHZhciB2ZWMyID0gbmV3IFZpY3RvcigyLCAyKTtcbiAqXG4gKiAgICAgdmVjLmRpdmlkZSh2ZWMyKTtcbiAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAqICAgICAvLyA9PiB4OjUwLCB5OjI1XG4gKlxuICogQHBhcmFtIHtWaWN0b3J9IHZlY3RvciBUaGUgdmVjdG9yIHRvIGRpdmlkZSBieVxuICogQHJldHVybiB7VmljdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICogQGFwaSBwdWJsaWNcbiAqL1xuVmljdG9yLnByb3RvdHlwZS5kaXZpZGUgPSBmdW5jdGlvbiAodmVjdG9yKSB7XG5cdHRoaXMueCAvPSB2ZWN0b3IueDtcblx0dGhpcy55IC89IHZlY3Rvci55O1xuXHRyZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogRGl2aWRlcyBib3RoIHZlY3RvciBheGlzIGJ5IHRoZSBnaXZlbiBzY2FsYXIgdmFsdWVcbiAqXG4gKiAjIyMgRXhhbXBsZXM6XG4gKiAgICAgdmFyIHZlYyA9IG5ldyBWaWN0b3IoMTAwLCA1MCk7XG4gKlxuICogICAgIHZlYy5kaXZpZGVTY2FsYXIoMik7XG4gKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gKiAgICAgLy8gPT4geDo1MCwgeToyNVxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBUaGUgc2NhbGFyIHRvIGRpdmlkZSBieVxuICogQHJldHVybiB7VmljdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICogQGFwaSBwdWJsaWNcbiAqL1xuVmljdG9yLnByb3RvdHlwZS5kaXZpZGVTY2FsYXIgPSBmdW5jdGlvbiAoc2NhbGFyKSB7XG5cdGlmIChzY2FsYXIgIT09IDApIHtcblx0XHR0aGlzLnggLz0gc2NhbGFyO1xuXHRcdHRoaXMueSAvPSBzY2FsYXI7XG5cdH0gZWxzZSB7XG5cdFx0dGhpcy54ID0gMDtcblx0XHR0aGlzLnkgPSAwO1xuXHR9XG5cblx0cmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIERpdmlkZXMgdGhlIFggYXhpcyBieSB0aGUgZ2l2ZW4gc2NhbGFyIHZhbHVlXG4gKlxuICogIyMjIEV4YW1wbGVzOlxuICogICAgIHZhciB2ZWMgPSBuZXcgVmljdG9yKDEwMCwgNTApO1xuICpcbiAqICAgICB2ZWMuZGl2aWRlU2NhbGFyWCgyKTtcbiAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAqICAgICAvLyA9PiB4OjUwLCB5OjUwXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IFRoZSBzY2FsYXIgdG8gZGl2aWRlIGJ5XG4gKiBAcmV0dXJuIHtWaWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gKiBAYXBpIHB1YmxpY1xuICovXG5WaWN0b3IucHJvdG90eXBlLmRpdmlkZVNjYWxhclggPSBmdW5jdGlvbiAoc2NhbGFyKSB7XG5cdGlmIChzY2FsYXIgIT09IDApIHtcblx0XHR0aGlzLnggLz0gc2NhbGFyO1xuXHR9IGVsc2Uge1xuXHRcdHRoaXMueCA9IDA7XG5cdH1cblx0cmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIERpdmlkZXMgdGhlIFkgYXhpcyBieSB0aGUgZ2l2ZW4gc2NhbGFyIHZhbHVlXG4gKlxuICogIyMjIEV4YW1wbGVzOlxuICogICAgIHZhciB2ZWMgPSBuZXcgVmljdG9yKDEwMCwgNTApO1xuICpcbiAqICAgICB2ZWMuZGl2aWRlU2NhbGFyWSgyKTtcbiAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAqICAgICAvLyA9PiB4OjEwMCwgeToyNVxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBUaGUgc2NhbGFyIHRvIGRpdmlkZSBieVxuICogQHJldHVybiB7VmljdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICogQGFwaSBwdWJsaWNcbiAqL1xuVmljdG9yLnByb3RvdHlwZS5kaXZpZGVTY2FsYXJZID0gZnVuY3Rpb24gKHNjYWxhcikge1xuXHRpZiAoc2NhbGFyICE9PSAwKSB7XG5cdFx0dGhpcy55IC89IHNjYWxhcjtcblx0fSBlbHNlIHtcblx0XHR0aGlzLnkgPSAwO1xuXHR9XG5cdHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBJbnZlcnRzIHRoZSBYIGF4aXNcbiAqXG4gKiAjIyMgRXhhbXBsZXM6XG4gKiAgICAgdmFyIHZlYyA9IG5ldyBWaWN0b3IoMTAwLCA1MCk7XG4gKlxuICogICAgIHZlYy5pbnZlcnRYKCk7XG4gKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gKiAgICAgLy8gPT4geDotMTAwLCB5OjUwXG4gKlxuICogQHJldHVybiB7VmljdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICogQGFwaSBwdWJsaWNcbiAqL1xuVmljdG9yLnByb3RvdHlwZS5pbnZlcnRYID0gZnVuY3Rpb24gKCkge1xuXHR0aGlzLnggKj0gLTE7XG5cdHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBJbnZlcnRzIHRoZSBZIGF4aXNcbiAqXG4gKiAjIyMgRXhhbXBsZXM6XG4gKiAgICAgdmFyIHZlYyA9IG5ldyBWaWN0b3IoMTAwLCA1MCk7XG4gKlxuICogICAgIHZlYy5pbnZlcnRZKCk7XG4gKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gKiAgICAgLy8gPT4geDoxMDAsIHk6LTUwXG4gKlxuICogQHJldHVybiB7VmljdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICogQGFwaSBwdWJsaWNcbiAqL1xuVmljdG9yLnByb3RvdHlwZS5pbnZlcnRZID0gZnVuY3Rpb24gKCkge1xuXHR0aGlzLnkgKj0gLTE7XG5cdHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBJbnZlcnRzIGJvdGggYXhpc1xuICpcbiAqICMjIyBFeGFtcGxlczpcbiAqICAgICB2YXIgdmVjID0gbmV3IFZpY3RvcigxMDAsIDUwKTtcbiAqXG4gKiAgICAgdmVjLmludmVydCgpO1xuICogICAgIHZlYy50b1N0cmluZygpO1xuICogICAgIC8vID0+IHg6LTEwMCwgeTotNTBcbiAqXG4gKiBAcmV0dXJuIHtWaWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gKiBAYXBpIHB1YmxpY1xuICovXG5WaWN0b3IucHJvdG90eXBlLmludmVydCA9IGZ1bmN0aW9uICgpIHtcblx0dGhpcy5pbnZlcnRYKCk7XG5cdHRoaXMuaW52ZXJ0WSgpO1xuXHRyZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogTXVsdGlwbGllcyB0aGUgWCBheGlzIGJ5IFggY29tcG9uZW50IG9mIGdpdmVuIHZlY3RvclxuICpcbiAqICMjIyBFeGFtcGxlczpcbiAqICAgICB2YXIgdmVjID0gbmV3IFZpY3RvcigxMDAsIDUwKTtcbiAqICAgICB2YXIgdmVjMiA9IG5ldyBWaWN0b3IoMiwgMCk7XG4gKlxuICogICAgIHZlYy5tdWx0aXBseVgodmVjMik7XG4gKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gKiAgICAgLy8gPT4geDoyMDAsIHk6NTBcbiAqXG4gKiBAcGFyYW0ge1ZpY3Rvcn0gdmVjdG9yIFRoZSB2ZWN0b3IgdG8gbXVsdGlwbHkgdGhlIGF4aXMgd2l0aFxuICogQHJldHVybiB7VmljdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICogQGFwaSBwdWJsaWNcbiAqL1xuVmljdG9yLnByb3RvdHlwZS5tdWx0aXBseVggPSBmdW5jdGlvbiAodmVjdG9yKSB7XG5cdHRoaXMueCAqPSB2ZWN0b3IueDtcblx0cmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIE11bHRpcGxpZXMgdGhlIFkgYXhpcyBieSBZIGNvbXBvbmVudCBvZiBnaXZlbiB2ZWN0b3JcbiAqXG4gKiAjIyMgRXhhbXBsZXM6XG4gKiAgICAgdmFyIHZlYyA9IG5ldyBWaWN0b3IoMTAwLCA1MCk7XG4gKiAgICAgdmFyIHZlYzIgPSBuZXcgVmljdG9yKDAsIDIpO1xuICpcbiAqICAgICB2ZWMubXVsdGlwbHlYKHZlYzIpO1xuICogICAgIHZlYy50b1N0cmluZygpO1xuICogICAgIC8vID0+IHg6MTAwLCB5OjEwMFxuICpcbiAqIEBwYXJhbSB7VmljdG9yfSB2ZWN0b3IgVGhlIHZlY3RvciB0byBtdWx0aXBseSB0aGUgYXhpcyB3aXRoXG4gKiBAcmV0dXJuIHtWaWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gKiBAYXBpIHB1YmxpY1xuICovXG5WaWN0b3IucHJvdG90eXBlLm11bHRpcGx5WSA9IGZ1bmN0aW9uICh2ZWN0b3IpIHtcblx0dGhpcy55ICo9IHZlY3Rvci55O1xuXHRyZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogTXVsdGlwbGllcyBib3RoIHZlY3RvciBheGlzIGJ5IHZhbHVlcyBmcm9tIGEgZ2l2ZW4gdmVjdG9yXG4gKlxuICogIyMjIEV4YW1wbGVzOlxuICogICAgIHZhciB2ZWMgPSBuZXcgVmljdG9yKDEwMCwgNTApO1xuICogICAgIHZhciB2ZWMyID0gbmV3IFZpY3RvcigyLCAyKTtcbiAqXG4gKiAgICAgdmVjLm11bHRpcGx5KHZlYzIpO1xuICogICAgIHZlYy50b1N0cmluZygpO1xuICogICAgIC8vID0+IHg6MjAwLCB5OjEwMFxuICpcbiAqIEBwYXJhbSB7VmljdG9yfSB2ZWN0b3IgVGhlIHZlY3RvciB0byBtdWx0aXBseSBieVxuICogQHJldHVybiB7VmljdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICogQGFwaSBwdWJsaWNcbiAqL1xuVmljdG9yLnByb3RvdHlwZS5tdWx0aXBseSA9IGZ1bmN0aW9uICh2ZWN0b3IpIHtcblx0dGhpcy54ICo9IHZlY3Rvci54O1xuXHR0aGlzLnkgKj0gdmVjdG9yLnk7XG5cdHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBNdWx0aXBsaWVzIGJvdGggdmVjdG9yIGF4aXMgYnkgdGhlIGdpdmVuIHNjYWxhciB2YWx1ZVxuICpcbiAqICMjIyBFeGFtcGxlczpcbiAqICAgICB2YXIgdmVjID0gbmV3IFZpY3RvcigxMDAsIDUwKTtcbiAqXG4gKiAgICAgdmVjLm11bHRpcGx5U2NhbGFyKDIpO1xuICogICAgIHZlYy50b1N0cmluZygpO1xuICogICAgIC8vID0+IHg6MjAwLCB5OjEwMFxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBUaGUgc2NhbGFyIHRvIG11bHRpcGx5IGJ5XG4gKiBAcmV0dXJuIHtWaWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gKiBAYXBpIHB1YmxpY1xuICovXG5WaWN0b3IucHJvdG90eXBlLm11bHRpcGx5U2NhbGFyID0gZnVuY3Rpb24gKHNjYWxhcikge1xuXHR0aGlzLnggKj0gc2NhbGFyO1xuXHR0aGlzLnkgKj0gc2NhbGFyO1xuXHRyZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogTXVsdGlwbGllcyB0aGUgWCBheGlzIGJ5IHRoZSBnaXZlbiBzY2FsYXJcbiAqXG4gKiAjIyMgRXhhbXBsZXM6XG4gKiAgICAgdmFyIHZlYyA9IG5ldyBWaWN0b3IoMTAwLCA1MCk7XG4gKlxuICogICAgIHZlYy5tdWx0aXBseVNjYWxhclgoMik7XG4gKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gKiAgICAgLy8gPT4geDoyMDAsIHk6NTBcbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gVGhlIHNjYWxhciB0byBtdWx0aXBseSB0aGUgYXhpcyB3aXRoXG4gKiBAcmV0dXJuIHtWaWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gKiBAYXBpIHB1YmxpY1xuICovXG5WaWN0b3IucHJvdG90eXBlLm11bHRpcGx5U2NhbGFyWCA9IGZ1bmN0aW9uIChzY2FsYXIpIHtcblx0dGhpcy54ICo9IHNjYWxhcjtcblx0cmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIE11bHRpcGxpZXMgdGhlIFkgYXhpcyBieSB0aGUgZ2l2ZW4gc2NhbGFyXG4gKlxuICogIyMjIEV4YW1wbGVzOlxuICogICAgIHZhciB2ZWMgPSBuZXcgVmljdG9yKDEwMCwgNTApO1xuICpcbiAqICAgICB2ZWMubXVsdGlwbHlTY2FsYXJZKDIpO1xuICogICAgIHZlYy50b1N0cmluZygpO1xuICogICAgIC8vID0+IHg6MTAwLCB5OjEwMFxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBUaGUgc2NhbGFyIHRvIG11bHRpcGx5IHRoZSBheGlzIHdpdGhcbiAqIEByZXR1cm4ge1ZpY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAqIEBhcGkgcHVibGljXG4gKi9cblZpY3Rvci5wcm90b3R5cGUubXVsdGlwbHlTY2FsYXJZID0gZnVuY3Rpb24gKHNjYWxhcikge1xuXHR0aGlzLnkgKj0gc2NhbGFyO1xuXHRyZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogTm9ybWFsaXplXG4gKlxuICogQHJldHVybiB7VmljdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICogQGFwaSBwdWJsaWNcbiAqL1xuVmljdG9yLnByb3RvdHlwZS5ub3JtYWxpemUgPSBmdW5jdGlvbiAoKSB7XG5cdHZhciBsZW5ndGggPSB0aGlzLmxlbmd0aCgpO1xuXG5cdGlmIChsZW5ndGggPT09IDApIHtcblx0XHR0aGlzLnggPSAxO1xuXHRcdHRoaXMueSA9IDA7XG5cdH0gZWxzZSB7XG5cdFx0dGhpcy5kaXZpZGUoVmljdG9yKGxlbmd0aCwgbGVuZ3RoKSk7XG5cdH1cblx0cmV0dXJuIHRoaXM7XG59O1xuXG5WaWN0b3IucHJvdG90eXBlLm5vcm0gPSBWaWN0b3IucHJvdG90eXBlLm5vcm1hbGl6ZTtcblxuLyoqXG4gKiBJZiB0aGUgYWJzb2x1dGUgdmVjdG9yIGF4aXMgaXMgZ3JlYXRlciB0aGFuIGBtYXhgLCBtdWx0aXBsaWVzIHRoZSBheGlzIGJ5IGBmYWN0b3JgXG4gKlxuICogIyMjIEV4YW1wbGVzOlxuICogICAgIHZhciB2ZWMgPSBuZXcgVmljdG9yKDEwMCwgNTApO1xuICpcbiAqICAgICB2ZWMubGltaXQoODAsIDAuOSk7XG4gKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gKiAgICAgLy8gPT4geDo5MCwgeTo1MFxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBtYXggVGhlIG1heGltdW0gdmFsdWUgZm9yIGJvdGggeCBhbmQgeSBheGlzXG4gKiBAcGFyYW0ge051bWJlcn0gZmFjdG9yIEZhY3RvciBieSB3aGljaCB0aGUgYXhpcyBhcmUgdG8gYmUgbXVsdGlwbGllZCB3aXRoXG4gKiBAcmV0dXJuIHtWaWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gKiBAYXBpIHB1YmxpY1xuICovXG5WaWN0b3IucHJvdG90eXBlLmxpbWl0ID0gZnVuY3Rpb24gKG1heCwgZmFjdG9yKSB7XG5cdGlmIChNYXRoLmFicyh0aGlzLngpID4gbWF4KXsgdGhpcy54ICo9IGZhY3RvcjsgfVxuXHRpZiAoTWF0aC5hYnModGhpcy55KSA+IG1heCl7IHRoaXMueSAqPSBmYWN0b3I7IH1cblx0cmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFJhbmRvbWl6ZXMgYm90aCB2ZWN0b3IgYXhpcyB3aXRoIGEgdmFsdWUgYmV0d2VlbiAyIHZlY3RvcnNcbiAqXG4gKiAjIyMgRXhhbXBsZXM6XG4gKiAgICAgdmFyIHZlYyA9IG5ldyBWaWN0b3IoMTAwLCA1MCk7XG4gKlxuICogICAgIHZlYy5yYW5kb21pemUobmV3IFZpY3Rvcig1MCwgNjApLCBuZXcgVmljdG9yKDcwLCA4MGApKTtcbiAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAqICAgICAvLyA9PiB4OjY3LCB5OjczXG4gKlxuICogQHBhcmFtIHtWaWN0b3J9IHRvcExlZnQgZmlyc3QgdmVjdG9yXG4gKiBAcGFyYW0ge1ZpY3Rvcn0gYm90dG9tUmlnaHQgc2Vjb25kIHZlY3RvclxuICogQHJldHVybiB7VmljdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICogQGFwaSBwdWJsaWNcbiAqL1xuVmljdG9yLnByb3RvdHlwZS5yYW5kb21pemUgPSBmdW5jdGlvbiAodG9wTGVmdCwgYm90dG9tUmlnaHQpIHtcblx0dGhpcy5yYW5kb21pemVYKHRvcExlZnQsIGJvdHRvbVJpZ2h0KTtcblx0dGhpcy5yYW5kb21pemVZKHRvcExlZnQsIGJvdHRvbVJpZ2h0KTtcblxuXHRyZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogUmFuZG9taXplcyB0aGUgeSBheGlzIHdpdGggYSB2YWx1ZSBiZXR3ZWVuIDIgdmVjdG9yc1xuICpcbiAqICMjIyBFeGFtcGxlczpcbiAqICAgICB2YXIgdmVjID0gbmV3IFZpY3RvcigxMDAsIDUwKTtcbiAqXG4gKiAgICAgdmVjLnJhbmRvbWl6ZVgobmV3IFZpY3Rvcig1MCwgNjApLCBuZXcgVmljdG9yKDcwLCA4MGApKTtcbiAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAqICAgICAvLyA9PiB4OjU1LCB5OjUwXG4gKlxuICogQHBhcmFtIHtWaWN0b3J9IHRvcExlZnQgZmlyc3QgdmVjdG9yXG4gKiBAcGFyYW0ge1ZpY3Rvcn0gYm90dG9tUmlnaHQgc2Vjb25kIHZlY3RvclxuICogQHJldHVybiB7VmljdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICogQGFwaSBwdWJsaWNcbiAqL1xuVmljdG9yLnByb3RvdHlwZS5yYW5kb21pemVYID0gZnVuY3Rpb24gKHRvcExlZnQsIGJvdHRvbVJpZ2h0KSB7XG5cdHZhciBtaW4gPSBNYXRoLm1pbih0b3BMZWZ0LngsIGJvdHRvbVJpZ2h0LngpO1xuXHR2YXIgbWF4ID0gTWF0aC5tYXgodG9wTGVmdC54LCBib3R0b21SaWdodC54KTtcblx0dGhpcy54ID0gcmFuZG9tKG1pbiwgbWF4KTtcblx0cmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFJhbmRvbWl6ZXMgdGhlIHkgYXhpcyB3aXRoIGEgdmFsdWUgYmV0d2VlbiAyIHZlY3RvcnNcbiAqXG4gKiAjIyMgRXhhbXBsZXM6XG4gKiAgICAgdmFyIHZlYyA9IG5ldyBWaWN0b3IoMTAwLCA1MCk7XG4gKlxuICogICAgIHZlYy5yYW5kb21pemVZKG5ldyBWaWN0b3IoNTAsIDYwKSwgbmV3IFZpY3Rvcig3MCwgODBgKSk7XG4gKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gKiAgICAgLy8gPT4geDoxMDAsIHk6NjZcbiAqXG4gKiBAcGFyYW0ge1ZpY3Rvcn0gdG9wTGVmdCBmaXJzdCB2ZWN0b3JcbiAqIEBwYXJhbSB7VmljdG9yfSBib3R0b21SaWdodCBzZWNvbmQgdmVjdG9yXG4gKiBAcmV0dXJuIHtWaWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gKiBAYXBpIHB1YmxpY1xuICovXG5WaWN0b3IucHJvdG90eXBlLnJhbmRvbWl6ZVkgPSBmdW5jdGlvbiAodG9wTGVmdCwgYm90dG9tUmlnaHQpIHtcblx0dmFyIG1pbiA9IE1hdGgubWluKHRvcExlZnQueSwgYm90dG9tUmlnaHQueSk7XG5cdHZhciBtYXggPSBNYXRoLm1heCh0b3BMZWZ0LnksIGJvdHRvbVJpZ2h0LnkpO1xuXHR0aGlzLnkgPSByYW5kb20obWluLCBtYXgpO1xuXHRyZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogUmFuZG9tbHkgcmFuZG9taXplcyBlaXRoZXIgYXhpcyBiZXR3ZWVuIDIgdmVjdG9yc1xuICpcbiAqICMjIyBFeGFtcGxlczpcbiAqICAgICB2YXIgdmVjID0gbmV3IFZpY3RvcigxMDAsIDUwKTtcbiAqXG4gKiAgICAgdmVjLnJhbmRvbWl6ZUFueShuZXcgVmljdG9yKDUwLCA2MCksIG5ldyBWaWN0b3IoNzAsIDgwKSk7XG4gKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gKiAgICAgLy8gPT4geDoxMDAsIHk6NzdcbiAqXG4gKiBAcGFyYW0ge1ZpY3Rvcn0gdG9wTGVmdCBmaXJzdCB2ZWN0b3JcbiAqIEBwYXJhbSB7VmljdG9yfSBib3R0b21SaWdodCBzZWNvbmQgdmVjdG9yXG4gKiBAcmV0dXJuIHtWaWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gKiBAYXBpIHB1YmxpY1xuICovXG5WaWN0b3IucHJvdG90eXBlLnJhbmRvbWl6ZUFueSA9IGZ1bmN0aW9uICh0b3BMZWZ0LCBib3R0b21SaWdodCkge1xuXHRpZiAoISEgTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKSkge1xuXHRcdHRoaXMucmFuZG9taXplWCh0b3BMZWZ0LCBib3R0b21SaWdodCk7XG5cdH0gZWxzZSB7XG5cdFx0dGhpcy5yYW5kb21pemVZKHRvcExlZnQsIGJvdHRvbVJpZ2h0KTtcblx0fVxuXHRyZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogUm91bmRzIGJvdGggYXhpcyB0byBhbiBpbnRlZ2VyIHZhbHVlXG4gKlxuICogIyMjIEV4YW1wbGVzOlxuICogICAgIHZhciB2ZWMgPSBuZXcgVmljdG9yKDEwMC4yLCA1MC45KTtcbiAqXG4gKiAgICAgdmVjLnVuZmxvYXQoKTtcbiAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAqICAgICAvLyA9PiB4OjEwMCwgeTo1MVxuICpcbiAqIEByZXR1cm4ge1ZpY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAqIEBhcGkgcHVibGljXG4gKi9cblZpY3Rvci5wcm90b3R5cGUudW5mbG9hdCA9IGZ1bmN0aW9uICgpIHtcblx0dGhpcy54ID0gTWF0aC5yb3VuZCh0aGlzLngpO1xuXHR0aGlzLnkgPSBNYXRoLnJvdW5kKHRoaXMueSk7XG5cdHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBSb3VuZHMgYm90aCBheGlzIHRvIGEgY2VydGFpbiBwcmVjaXNpb25cbiAqXG4gKiAjIyMgRXhhbXBsZXM6XG4gKiAgICAgdmFyIHZlYyA9IG5ldyBWaWN0b3IoMTAwLjIsIDUwLjkpO1xuICpcbiAqICAgICB2ZWMudW5mbG9hdCgpO1xuICogICAgIHZlYy50b1N0cmluZygpO1xuICogICAgIC8vID0+IHg6MTAwLCB5OjUxXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IFByZWNpc2lvbiAoZGVmYXVsdDogOClcbiAqIEByZXR1cm4ge1ZpY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAqIEBhcGkgcHVibGljXG4gKi9cblZpY3Rvci5wcm90b3R5cGUudG9GaXhlZCA9IGZ1bmN0aW9uIChwcmVjaXNpb24pIHtcblx0aWYgKHR5cGVvZiBwcmVjaXNpb24gPT09ICd1bmRlZmluZWQnKSB7IHByZWNpc2lvbiA9IDg7IH1cblx0dGhpcy54ID0gdGhpcy54LnRvRml4ZWQocHJlY2lzaW9uKTtcblx0dGhpcy55ID0gdGhpcy55LnRvRml4ZWQocHJlY2lzaW9uKTtcblx0cmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFBlcmZvcm1zIGEgbGluZWFyIGJsZW5kIC8gaW50ZXJwb2xhdGlvbiBvZiB0aGUgWCBheGlzIHRvd2FyZHMgYW5vdGhlciB2ZWN0b3JcbiAqXG4gKiAjIyMgRXhhbXBsZXM6XG4gKiAgICAgdmFyIHZlYzEgPSBuZXcgVmljdG9yKDEwMCwgMTAwKTtcbiAqICAgICB2YXIgdmVjMiA9IG5ldyBWaWN0b3IoMjAwLCAyMDApO1xuICpcbiAqICAgICB2ZWMxLm1peFgodmVjMiwgMC41KTtcbiAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAqICAgICAvLyA9PiB4OjE1MCwgeToxMDBcbiAqXG4gKiBAcGFyYW0ge1ZpY3Rvcn0gdmVjdG9yIFRoZSBvdGhlciB2ZWN0b3JcbiAqIEBwYXJhbSB7TnVtYmVyfSBhbW91bnQgVGhlIGJsZW5kIGFtb3VudCAob3B0aW9uYWwsIGRlZmF1bHQ6IDAuNSlcbiAqIEByZXR1cm4ge1ZpY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAqIEBhcGkgcHVibGljXG4gKi9cblZpY3Rvci5wcm90b3R5cGUubWl4WCA9IGZ1bmN0aW9uICh2ZWMsIGFtb3VudCkge1xuXHRpZiAodHlwZW9mIGFtb3VudCA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRhbW91bnQgPSAwLjU7XG5cdH1cblxuXHR0aGlzLnggPSAoMSAtIGFtb3VudCkgKiB0aGlzLnggKyBhbW91bnQgKiB2ZWMueDtcblx0cmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFBlcmZvcm1zIGEgbGluZWFyIGJsZW5kIC8gaW50ZXJwb2xhdGlvbiBvZiB0aGUgWSBheGlzIHRvd2FyZHMgYW5vdGhlciB2ZWN0b3JcbiAqXG4gKiAjIyMgRXhhbXBsZXM6XG4gKiAgICAgdmFyIHZlYzEgPSBuZXcgVmljdG9yKDEwMCwgMTAwKTtcbiAqICAgICB2YXIgdmVjMiA9IG5ldyBWaWN0b3IoMjAwLCAyMDApO1xuICpcbiAqICAgICB2ZWMxLm1peFkodmVjMiwgMC41KTtcbiAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAqICAgICAvLyA9PiB4OjEwMCwgeToxNTBcbiAqXG4gKiBAcGFyYW0ge1ZpY3Rvcn0gdmVjdG9yIFRoZSBvdGhlciB2ZWN0b3JcbiAqIEBwYXJhbSB7TnVtYmVyfSBhbW91bnQgVGhlIGJsZW5kIGFtb3VudCAob3B0aW9uYWwsIGRlZmF1bHQ6IDAuNSlcbiAqIEByZXR1cm4ge1ZpY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAqIEBhcGkgcHVibGljXG4gKi9cblZpY3Rvci5wcm90b3R5cGUubWl4WSA9IGZ1bmN0aW9uICh2ZWMsIGFtb3VudCkge1xuXHRpZiAodHlwZW9mIGFtb3VudCA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRhbW91bnQgPSAwLjU7XG5cdH1cblxuXHR0aGlzLnkgPSAoMSAtIGFtb3VudCkgKiB0aGlzLnkgKyBhbW91bnQgKiB2ZWMueTtcblx0cmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFBlcmZvcm1zIGEgbGluZWFyIGJsZW5kIC8gaW50ZXJwb2xhdGlvbiB0b3dhcmRzIGFub3RoZXIgdmVjdG9yXG4gKlxuICogIyMjIEV4YW1wbGVzOlxuICogICAgIHZhciB2ZWMxID0gbmV3IFZpY3RvcigxMDAsIDEwMCk7XG4gKiAgICAgdmFyIHZlYzIgPSBuZXcgVmljdG9yKDIwMCwgMjAwKTtcbiAqXG4gKiAgICAgdmVjMS5taXgodmVjMiwgMC41KTtcbiAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAqICAgICAvLyA9PiB4OjE1MCwgeToxNTBcbiAqXG4gKiBAcGFyYW0ge1ZpY3Rvcn0gdmVjdG9yIFRoZSBvdGhlciB2ZWN0b3JcbiAqIEBwYXJhbSB7TnVtYmVyfSBhbW91bnQgVGhlIGJsZW5kIGFtb3VudCAob3B0aW9uYWwsIGRlZmF1bHQ6IDAuNSlcbiAqIEByZXR1cm4ge1ZpY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAqIEBhcGkgcHVibGljXG4gKi9cblZpY3Rvci5wcm90b3R5cGUubWl4ID0gZnVuY3Rpb24gKHZlYywgYW1vdW50KSB7XG5cdHRoaXMubWl4WCh2ZWMsIGFtb3VudCk7XG5cdHRoaXMubWl4WSh2ZWMsIGFtb3VudCk7XG5cdHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiAjIFByb2R1Y3RzXG4gKi9cblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgdGhpcyB2ZWN0b3JcbiAqXG4gKiAjIyMgRXhhbXBsZXM6XG4gKiAgICAgdmFyIHZlYzEgPSBuZXcgVmljdG9yKDEwLCAxMCk7XG4gKiAgICAgdmFyIHZlYzIgPSB2ZWMxLmNsb25lKCk7XG4gKlxuICogICAgIHZlYzIudG9TdHJpbmcoKTtcbiAqICAgICAvLyA9PiB4OjEwLCB5OjEwXG4gKlxuICogQHJldHVybiB7VmljdG9yfSBBIGNsb25lIG9mIHRoZSB2ZWN0b3JcbiAqIEBhcGkgcHVibGljXG4gKi9cblZpY3Rvci5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbiAoKSB7XG5cdHJldHVybiBuZXcgVmljdG9yKHRoaXMueCwgdGhpcy55KTtcbn07XG5cbi8qKlxuICogQ29waWVzIGFub3RoZXIgdmVjdG9yJ3MgWCBjb21wb25lbnQgaW4gdG8gaXRzIG93blxuICpcbiAqICMjIyBFeGFtcGxlczpcbiAqICAgICB2YXIgdmVjMSA9IG5ldyBWaWN0b3IoMTAsIDEwKTtcbiAqICAgICB2YXIgdmVjMiA9IG5ldyBWaWN0b3IoMjAsIDIwKTtcbiAqICAgICB2YXIgdmVjMiA9IHZlYzEuY29weVgodmVjMSk7XG4gKlxuICogICAgIHZlYzIudG9TdHJpbmcoKTtcbiAqICAgICAvLyA9PiB4OjIwLCB5OjEwXG4gKlxuICogQHJldHVybiB7VmljdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICogQGFwaSBwdWJsaWNcbiAqL1xuVmljdG9yLnByb3RvdHlwZS5jb3B5WCA9IGZ1bmN0aW9uICh2ZWMpIHtcblx0dGhpcy54ID0gdmVjLng7XG5cdHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBDb3BpZXMgYW5vdGhlciB2ZWN0b3IncyBZIGNvbXBvbmVudCBpbiB0byBpdHMgb3duXG4gKlxuICogIyMjIEV4YW1wbGVzOlxuICogICAgIHZhciB2ZWMxID0gbmV3IFZpY3RvcigxMCwgMTApO1xuICogICAgIHZhciB2ZWMyID0gbmV3IFZpY3RvcigyMCwgMjApO1xuICogICAgIHZhciB2ZWMyID0gdmVjMS5jb3B5WSh2ZWMxKTtcbiAqXG4gKiAgICAgdmVjMi50b1N0cmluZygpO1xuICogICAgIC8vID0+IHg6MTAsIHk6MjBcbiAqXG4gKiBAcmV0dXJuIHtWaWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gKiBAYXBpIHB1YmxpY1xuICovXG5WaWN0b3IucHJvdG90eXBlLmNvcHlZID0gZnVuY3Rpb24gKHZlYykge1xuXHR0aGlzLnkgPSB2ZWMueTtcblx0cmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIENvcGllcyBhbm90aGVyIHZlY3RvcidzIFggYW5kIFkgY29tcG9uZW50cyBpbiB0byBpdHMgb3duXG4gKlxuICogIyMjIEV4YW1wbGVzOlxuICogICAgIHZhciB2ZWMxID0gbmV3IFZpY3RvcigxMCwgMTApO1xuICogICAgIHZhciB2ZWMyID0gbmV3IFZpY3RvcigyMCwgMjApO1xuICogICAgIHZhciB2ZWMyID0gdmVjMS5jb3B5KHZlYzEpO1xuICpcbiAqICAgICB2ZWMyLnRvU3RyaW5nKCk7XG4gKiAgICAgLy8gPT4geDoyMCwgeToyMFxuICpcbiAqIEByZXR1cm4ge1ZpY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAqIEBhcGkgcHVibGljXG4gKi9cblZpY3Rvci5wcm90b3R5cGUuY29weSA9IGZ1bmN0aW9uICh2ZWMpIHtcblx0dGhpcy5jb3B5WCh2ZWMpO1xuXHR0aGlzLmNvcHlZKHZlYyk7XG5cdHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBTZXRzIHRoZSB2ZWN0b3IgdG8gemVybyAoMCwwKVxuICpcbiAqICMjIyBFeGFtcGxlczpcbiAqICAgICB2YXIgdmVjMSA9IG5ldyBWaWN0b3IoMTAsIDEwKTtcbiAqXHRcdCB2YXIxLnplcm8oKTtcbiAqICAgICB2ZWMxLnRvU3RyaW5nKCk7XG4gKiAgICAgLy8gPT4geDowLCB5OjBcbiAqXG4gKiBAcmV0dXJuIHtWaWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gKiBAYXBpIHB1YmxpY1xuICovXG5WaWN0b3IucHJvdG90eXBlLnplcm8gPSBmdW5jdGlvbiAoKSB7XG5cdHRoaXMueCA9IHRoaXMueSA9IDA7XG5cdHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBkb3QgcHJvZHVjdCBvZiB0aGlzIHZlY3RvciBhbmQgYW5vdGhlclxuICpcbiAqICMjIyBFeGFtcGxlczpcbiAqICAgICB2YXIgdmVjMSA9IG5ldyBWaWN0b3IoMTAwLCA1MCk7XG4gKiAgICAgdmFyIHZlYzIgPSBuZXcgVmljdG9yKDIwMCwgNjApO1xuICpcbiAqICAgICB2ZWMxLmRvdCh2ZWMyKTtcbiAqICAgICAvLyA9PiAyMzAwMFxuICpcbiAqIEBwYXJhbSB7VmljdG9yfSB2ZWN0b3IgVGhlIHNlY29uZCB2ZWN0b3JcbiAqIEByZXR1cm4ge051bWJlcn0gRG90IHByb2R1Y3RcbiAqIEBhcGkgcHVibGljXG4gKi9cblZpY3Rvci5wcm90b3R5cGUuZG90ID0gZnVuY3Rpb24gKHZlYzIpIHtcblx0cmV0dXJuIHRoaXMueCAqIHZlYzIueCArIHRoaXMueSAqIHZlYzIueTtcbn07XG5cblZpY3Rvci5wcm90b3R5cGUuY3Jvc3MgPSBmdW5jdGlvbiAodmVjMikge1xuXHRyZXR1cm4gKHRoaXMueCAqIHZlYzIueSApIC0gKHRoaXMueSAqIHZlYzIueCApO1xufTtcblxuLyoqXG4gKiBQcm9qZWN0cyBhIHZlY3RvciBvbnRvIGFub3RoZXIgdmVjdG9yLCBzZXR0aW5nIGl0c2VsZiB0byB0aGUgcmVzdWx0LlxuICpcbiAqICMjIyBFeGFtcGxlczpcbiAqICAgICB2YXIgdmVjID0gbmV3IFZpY3RvcigxMDAsIDApO1xuICogICAgIHZhciB2ZWMyID0gbmV3IFZpY3RvcigxMDAsIDEwMCk7XG4gKlxuICogICAgIHZlYy5wcm9qZWN0T250byh2ZWMyKTtcbiAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAqICAgICAvLyA9PiB4OjUwLCB5OjUwXG4gKlxuICogQHBhcmFtIHtWaWN0b3J9IHZlY3RvciBUaGUgb3RoZXIgdmVjdG9yIHlvdSB3YW50IHRvIHByb2plY3QgdGhpcyB2ZWN0b3Igb250b1xuICogQHJldHVybiB7VmljdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICogQGFwaSBwdWJsaWNcbiAqL1xuVmljdG9yLnByb3RvdHlwZS5wcm9qZWN0T250byA9IGZ1bmN0aW9uICh2ZWMyKSB7XG4gICAgdmFyIGNvZWZmID0gKCAodGhpcy54ICogdmVjMi54KSsodGhpcy55ICogdmVjMi55KSApIC8gKCh2ZWMyLngqdmVjMi54KSsodmVjMi55KnZlYzIueSkpO1xuICAgIHRoaXMueCA9IGNvZWZmICogdmVjMi54O1xuICAgIHRoaXMueSA9IGNvZWZmICogdmVjMi55O1xuICAgIHJldHVybiB0aGlzO1xufTtcblxuXG5WaWN0b3IucHJvdG90eXBlLmhvcml6b250YWxBbmdsZSA9IGZ1bmN0aW9uICgpIHtcblx0cmV0dXJuIE1hdGguYXRhbjIodGhpcy55LCB0aGlzLngpO1xufTtcblxuVmljdG9yLnByb3RvdHlwZS5ob3Jpem9udGFsQW5nbGVEZWcgPSBmdW5jdGlvbiAoKSB7XG5cdHJldHVybiByYWRpYW4yZGVncmVlcyh0aGlzLmhvcml6b250YWxBbmdsZSgpKTtcbn07XG5cblZpY3Rvci5wcm90b3R5cGUudmVydGljYWxBbmdsZSA9IGZ1bmN0aW9uICgpIHtcblx0cmV0dXJuIE1hdGguYXRhbjIodGhpcy54LCB0aGlzLnkpO1xufTtcblxuVmljdG9yLnByb3RvdHlwZS52ZXJ0aWNhbEFuZ2xlRGVnID0gZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4gcmFkaWFuMmRlZ3JlZXModGhpcy52ZXJ0aWNhbEFuZ2xlKCkpO1xufTtcblxuVmljdG9yLnByb3RvdHlwZS5hbmdsZSA9IFZpY3Rvci5wcm90b3R5cGUuaG9yaXpvbnRhbEFuZ2xlO1xuVmljdG9yLnByb3RvdHlwZS5hbmdsZURlZyA9IFZpY3Rvci5wcm90b3R5cGUuaG9yaXpvbnRhbEFuZ2xlRGVnO1xuVmljdG9yLnByb3RvdHlwZS5kaXJlY3Rpb24gPSBWaWN0b3IucHJvdG90eXBlLmhvcml6b250YWxBbmdsZTtcblxuVmljdG9yLnByb3RvdHlwZS5yb3RhdGUgPSBmdW5jdGlvbiAoYW5nbGUpIHtcblx0dmFyIG54ID0gKHRoaXMueCAqIE1hdGguY29zKGFuZ2xlKSkgLSAodGhpcy55ICogTWF0aC5zaW4oYW5nbGUpKTtcblx0dmFyIG55ID0gKHRoaXMueCAqIE1hdGguc2luKGFuZ2xlKSkgKyAodGhpcy55ICogTWF0aC5jb3MoYW5nbGUpKTtcblxuXHR0aGlzLnggPSBueDtcblx0dGhpcy55ID0gbnk7XG5cblx0cmV0dXJuIHRoaXM7XG59O1xuXG5WaWN0b3IucHJvdG90eXBlLnJvdGF0ZURlZyA9IGZ1bmN0aW9uIChhbmdsZSkge1xuXHRhbmdsZSA9IGRlZ3JlZXMycmFkaWFuKGFuZ2xlKTtcblx0cmV0dXJuIHRoaXMucm90YXRlKGFuZ2xlKTtcbn07XG5cblZpY3Rvci5wcm90b3R5cGUucm90YXRlVG8gPSBmdW5jdGlvbihyb3RhdGlvbikge1xuXHRyZXR1cm4gdGhpcy5yb3RhdGUocm90YXRpb24tdGhpcy5hbmdsZSgpKTtcbn07XG5cblZpY3Rvci5wcm90b3R5cGUucm90YXRlVG9EZWcgPSBmdW5jdGlvbihyb3RhdGlvbikge1xuXHRyb3RhdGlvbiA9IGRlZ3JlZXMycmFkaWFuKHJvdGF0aW9uKTtcblx0cmV0dXJuIHRoaXMucm90YXRlVG8ocm90YXRpb24pO1xufTtcblxuVmljdG9yLnByb3RvdHlwZS5yb3RhdGVCeSA9IGZ1bmN0aW9uIChyb3RhdGlvbikge1xuXHR2YXIgYW5nbGUgPSB0aGlzLmFuZ2xlKCkgKyByb3RhdGlvbjtcblxuXHRyZXR1cm4gdGhpcy5yb3RhdGUoYW5nbGUpO1xufTtcblxuVmljdG9yLnByb3RvdHlwZS5yb3RhdGVCeURlZyA9IGZ1bmN0aW9uIChyb3RhdGlvbikge1xuXHRyb3RhdGlvbiA9IGRlZ3JlZXMycmFkaWFuKHJvdGF0aW9uKTtcblx0cmV0dXJuIHRoaXMucm90YXRlQnkocm90YXRpb24pO1xufTtcblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBkaXN0YW5jZSBvZiB0aGUgWCBheGlzIGJldHdlZW4gdGhpcyB2ZWN0b3IgYW5kIGFub3RoZXJcbiAqXG4gKiAjIyMgRXhhbXBsZXM6XG4gKiAgICAgdmFyIHZlYzEgPSBuZXcgVmljdG9yKDEwMCwgNTApO1xuICogICAgIHZhciB2ZWMyID0gbmV3IFZpY3RvcigyMDAsIDYwKTtcbiAqXG4gKiAgICAgdmVjMS5kaXN0YW5jZVgodmVjMik7XG4gKiAgICAgLy8gPT4gLTEwMFxuICpcbiAqIEBwYXJhbSB7VmljdG9yfSB2ZWN0b3IgVGhlIHNlY29uZCB2ZWN0b3JcbiAqIEByZXR1cm4ge051bWJlcn0gRGlzdGFuY2VcbiAqIEBhcGkgcHVibGljXG4gKi9cblZpY3Rvci5wcm90b3R5cGUuZGlzdGFuY2VYID0gZnVuY3Rpb24gKHZlYykge1xuXHRyZXR1cm4gdGhpcy54IC0gdmVjLng7XG59O1xuXG4vKipcbiAqIFNhbWUgYXMgYGRpc3RhbmNlWCgpYCBidXQgYWx3YXlzIHJldHVybnMgYW4gYWJzb2x1dGUgbnVtYmVyXG4gKlxuICogIyMjIEV4YW1wbGVzOlxuICogICAgIHZhciB2ZWMxID0gbmV3IFZpY3RvcigxMDAsIDUwKTtcbiAqICAgICB2YXIgdmVjMiA9IG5ldyBWaWN0b3IoMjAwLCA2MCk7XG4gKlxuICogICAgIHZlYzEuYWJzRGlzdGFuY2VYKHZlYzIpO1xuICogICAgIC8vID0+IDEwMFxuICpcbiAqIEBwYXJhbSB7VmljdG9yfSB2ZWN0b3IgVGhlIHNlY29uZCB2ZWN0b3JcbiAqIEByZXR1cm4ge051bWJlcn0gQWJzb2x1dGUgZGlzdGFuY2VcbiAqIEBhcGkgcHVibGljXG4gKi9cblZpY3Rvci5wcm90b3R5cGUuYWJzRGlzdGFuY2VYID0gZnVuY3Rpb24gKHZlYykge1xuXHRyZXR1cm4gTWF0aC5hYnModGhpcy5kaXN0YW5jZVgodmVjKSk7XG59O1xuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGRpc3RhbmNlIG9mIHRoZSBZIGF4aXMgYmV0d2VlbiB0aGlzIHZlY3RvciBhbmQgYW5vdGhlclxuICpcbiAqICMjIyBFeGFtcGxlczpcbiAqICAgICB2YXIgdmVjMSA9IG5ldyBWaWN0b3IoMTAwLCA1MCk7XG4gKiAgICAgdmFyIHZlYzIgPSBuZXcgVmljdG9yKDIwMCwgNjApO1xuICpcbiAqICAgICB2ZWMxLmRpc3RhbmNlWSh2ZWMyKTtcbiAqICAgICAvLyA9PiAtMTBcbiAqXG4gKiBAcGFyYW0ge1ZpY3Rvcn0gdmVjdG9yIFRoZSBzZWNvbmQgdmVjdG9yXG4gKiBAcmV0dXJuIHtOdW1iZXJ9IERpc3RhbmNlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5WaWN0b3IucHJvdG90eXBlLmRpc3RhbmNlWSA9IGZ1bmN0aW9uICh2ZWMpIHtcblx0cmV0dXJuIHRoaXMueSAtIHZlYy55O1xufTtcblxuLyoqXG4gKiBTYW1lIGFzIGBkaXN0YW5jZVkoKWAgYnV0IGFsd2F5cyByZXR1cm5zIGFuIGFic29sdXRlIG51bWJlclxuICpcbiAqICMjIyBFeGFtcGxlczpcbiAqICAgICB2YXIgdmVjMSA9IG5ldyBWaWN0b3IoMTAwLCA1MCk7XG4gKiAgICAgdmFyIHZlYzIgPSBuZXcgVmljdG9yKDIwMCwgNjApO1xuICpcbiAqICAgICB2ZWMxLmRpc3RhbmNlWSh2ZWMyKTtcbiAqICAgICAvLyA9PiAxMFxuICpcbiAqIEBwYXJhbSB7VmljdG9yfSB2ZWN0b3IgVGhlIHNlY29uZCB2ZWN0b3JcbiAqIEByZXR1cm4ge051bWJlcn0gQWJzb2x1dGUgZGlzdGFuY2VcbiAqIEBhcGkgcHVibGljXG4gKi9cblZpY3Rvci5wcm90b3R5cGUuYWJzRGlzdGFuY2VZID0gZnVuY3Rpb24gKHZlYykge1xuXHRyZXR1cm4gTWF0aC5hYnModGhpcy5kaXN0YW5jZVkodmVjKSk7XG59O1xuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGV1Y2xpZGVhbiBkaXN0YW5jZSBiZXR3ZWVuIHRoaXMgdmVjdG9yIGFuZCBhbm90aGVyXG4gKlxuICogIyMjIEV4YW1wbGVzOlxuICogICAgIHZhciB2ZWMxID0gbmV3IFZpY3RvcigxMDAsIDUwKTtcbiAqICAgICB2YXIgdmVjMiA9IG5ldyBWaWN0b3IoMjAwLCA2MCk7XG4gKlxuICogICAgIHZlYzEuZGlzdGFuY2UodmVjMik7XG4gKiAgICAgLy8gPT4gMTAwLjQ5ODc1NjIxMTIwODlcbiAqXG4gKiBAcGFyYW0ge1ZpY3Rvcn0gdmVjdG9yIFRoZSBzZWNvbmQgdmVjdG9yXG4gKiBAcmV0dXJuIHtOdW1iZXJ9IERpc3RhbmNlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5WaWN0b3IucHJvdG90eXBlLmRpc3RhbmNlID0gZnVuY3Rpb24gKHZlYykge1xuXHRyZXR1cm4gTWF0aC5zcXJ0KHRoaXMuZGlzdGFuY2VTcSh2ZWMpKTtcbn07XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgc3F1YXJlZCBldWNsaWRlYW4gZGlzdGFuY2UgYmV0d2VlbiB0aGlzIHZlY3RvciBhbmQgYW5vdGhlclxuICpcbiAqICMjIyBFeGFtcGxlczpcbiAqICAgICB2YXIgdmVjMSA9IG5ldyBWaWN0b3IoMTAwLCA1MCk7XG4gKiAgICAgdmFyIHZlYzIgPSBuZXcgVmljdG9yKDIwMCwgNjApO1xuICpcbiAqICAgICB2ZWMxLmRpc3RhbmNlU3EodmVjMik7XG4gKiAgICAgLy8gPT4gMTAxMDBcbiAqXG4gKiBAcGFyYW0ge1ZpY3Rvcn0gdmVjdG9yIFRoZSBzZWNvbmQgdmVjdG9yXG4gKiBAcmV0dXJuIHtOdW1iZXJ9IERpc3RhbmNlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5WaWN0b3IucHJvdG90eXBlLmRpc3RhbmNlU3EgPSBmdW5jdGlvbiAodmVjKSB7XG5cdHZhciBkeCA9IHRoaXMuZGlzdGFuY2VYKHZlYyksXG5cdFx0ZHkgPSB0aGlzLmRpc3RhbmNlWSh2ZWMpO1xuXG5cdHJldHVybiBkeCAqIGR4ICsgZHkgKiBkeTtcbn07XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgbGVuZ3RoIG9yIG1hZ25pdHVkZSBvZiB0aGUgdmVjdG9yXG4gKlxuICogIyMjIEV4YW1wbGVzOlxuICogICAgIHZhciB2ZWMgPSBuZXcgVmljdG9yKDEwMCwgNTApO1xuICpcbiAqICAgICB2ZWMubGVuZ3RoKCk7XG4gKiAgICAgLy8gPT4gMTExLjgwMzM5ODg3NDk4OTQ4XG4gKlxuICogQHJldHVybiB7TnVtYmVyfSBMZW5ndGggLyBNYWduaXR1ZGVcbiAqIEBhcGkgcHVibGljXG4gKi9cblZpY3Rvci5wcm90b3R5cGUubGVuZ3RoID0gZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4gTWF0aC5zcXJ0KHRoaXMubGVuZ3RoU3EoKSk7XG59O1xuXG4vKipcbiAqIFNxdWFyZWQgbGVuZ3RoIC8gbWFnbml0dWRlXG4gKlxuICogIyMjIEV4YW1wbGVzOlxuICogICAgIHZhciB2ZWMgPSBuZXcgVmljdG9yKDEwMCwgNTApO1xuICpcbiAqICAgICB2ZWMubGVuZ3RoU3EoKTtcbiAqICAgICAvLyA9PiAxMjUwMFxuICpcbiAqIEByZXR1cm4ge051bWJlcn0gTGVuZ3RoIC8gTWFnbml0dWRlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5WaWN0b3IucHJvdG90eXBlLmxlbmd0aFNxID0gZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4gdGhpcy54ICogdGhpcy54ICsgdGhpcy55ICogdGhpcy55O1xufTtcblxuVmljdG9yLnByb3RvdHlwZS5tYWduaXR1ZGUgPSBWaWN0b3IucHJvdG90eXBlLmxlbmd0aDtcblxuLyoqXG4gKiBSZXR1cm5zIGEgdHJ1ZSBpZiB2ZWN0b3IgaXMgKDAsIDApXG4gKlxuICogIyMjIEV4YW1wbGVzOlxuICogICAgIHZhciB2ZWMgPSBuZXcgVmljdG9yKDEwMCwgNTApO1xuICogICAgIHZlYy56ZXJvKCk7XG4gKlxuICogICAgIC8vID0+IHRydWVcbiAqXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICogQGFwaSBwdWJsaWNcbiAqL1xuVmljdG9yLnByb3RvdHlwZS5pc1plcm8gPSBmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXMueCA9PT0gMCAmJiB0aGlzLnkgPT09IDA7XG59O1xuXG4vKipcbiAqIFJldHVybnMgYSB0cnVlIGlmIHRoaXMgdmVjdG9yIGlzIHRoZSBzYW1lIGFzIGFub3RoZXJcbiAqXG4gKiAjIyMgRXhhbXBsZXM6XG4gKiAgICAgdmFyIHZlYzEgPSBuZXcgVmljdG9yKDEwMCwgNTApO1xuICogICAgIHZhciB2ZWMyID0gbmV3IFZpY3RvcigxMDAsIDUwKTtcbiAqICAgICB2ZWMxLmlzRXF1YWxUbyh2ZWMyKTtcbiAqXG4gKiAgICAgLy8gPT4gdHJ1ZVxuICpcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKiBAYXBpIHB1YmxpY1xuICovXG5WaWN0b3IucHJvdG90eXBlLmlzRXF1YWxUbyA9IGZ1bmN0aW9uKHZlYzIpIHtcblx0cmV0dXJuIHRoaXMueCA9PT0gdmVjMi54ICYmIHRoaXMueSA9PT0gdmVjMi55O1xufTtcblxuLyoqXG4gKiAjIFV0aWxpdHkgTWV0aG9kc1xuICovXG5cbi8qKlxuICogUmV0dXJucyBhbiBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIHZlY3RvclxuICpcbiAqICMjIyBFeGFtcGxlczpcbiAqICAgICB2YXIgdmVjID0gbmV3IFZpY3RvcigxMCwgMjApO1xuICpcbiAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAqICAgICAvLyA9PiB4OjEwLCB5OjIwXG4gKlxuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwdWJsaWNcbiAqL1xuVmljdG9yLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcblx0cmV0dXJuICd4OicgKyB0aGlzLnggKyAnLCB5OicgKyB0aGlzLnk7XG59O1xuXG4vKipcbiAqIFJldHVybnMgYW4gYXJyYXkgcmVwcmVzZW50YXRpb24gb2YgdGhlIHZlY3RvclxuICpcbiAqICMjIyBFeGFtcGxlczpcbiAqICAgICB2YXIgdmVjID0gbmV3IFZpY3RvcigxMCwgMjApO1xuICpcbiAqICAgICB2ZWMudG9BcnJheSgpO1xuICogICAgIC8vID0+IFsxMCwgMjBdXG4gKlxuICogQHJldHVybiB7QXJyYXl9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5WaWN0b3IucHJvdG90eXBlLnRvQXJyYXkgPSBmdW5jdGlvbiAoKSB7XG5cdHJldHVybiBbIHRoaXMueCwgdGhpcy55IF07XG59O1xuXG4vKipcbiAqIFJldHVybnMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uIG9mIHRoZSB2ZWN0b3JcbiAqXG4gKiAjIyMgRXhhbXBsZXM6XG4gKiAgICAgdmFyIHZlYyA9IG5ldyBWaWN0b3IoMTAsIDIwKTtcbiAqXG4gKiAgICAgdmVjLnRvT2JqZWN0KCk7XG4gKiAgICAgLy8gPT4geyB4OiAxMCwgeTogMjAgfVxuICpcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqIEBhcGkgcHVibGljXG4gKi9cblZpY3Rvci5wcm90b3R5cGUudG9PYmplY3QgPSBmdW5jdGlvbiAoKSB7XG5cdHJldHVybiB7IHg6IHRoaXMueCwgeTogdGhpcy55IH07XG59O1xuXG5cbnZhciBkZWdyZWVzID0gMTgwIC8gTWF0aC5QSTtcblxuZnVuY3Rpb24gcmFuZG9tIChtaW4sIG1heCkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkgKyBtaW4pO1xufVxuXG5mdW5jdGlvbiByYWRpYW4yZGVncmVlcyAocmFkKSB7XG5cdHJldHVybiByYWQgKiBkZWdyZWVzO1xufVxuXG5mdW5jdGlvbiBkZWdyZWVzMnJhZGlhbiAoZGVnKSB7XG5cdHJldHVybiBkZWcgLyBkZWdyZWVzO1xufVxuIl19
