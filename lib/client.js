const $ = require('jquery')

module.exports = class BoardManagerClient {
  constructor(opts) {
    opts = opts || {}
    this.host = opts.host || ''
    this.path = opts.path || 'api'
  }

  _url(endpoint) {
    console.log(`${this.host}/${this.path}/${endpoint}`)
    return `${this.host}/${this.path}/${endpoint}`
  }

  _jsonReq(method, data, endpoint) {
    const opts = {
      method,
      data: JSON.stringify(data),
      contentType: 'application/json; charset=utf-8',
      dataType: 'json',
      url: this._url(endpoint),
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

  listUser() {
    return this._jsonReq('GET', {}, 'v1/user')
  }

  createUser(user) {
    return this._jsonReq('POST', user, 'v1/user')
  }

  removeUser(user) {
    return this._jsonReq('DELETE', user, 'v1/user/' + user.uid)
  }

  updateUser(user) {
    return this._jsonReq('PUT', user, 'v1/user/' + user.uid)
  }

  publish(board_id) {
    return this._jsonReq('POST', { }, '/board/publish/' + board_id)
  }

  create(board) {
    return this._jsonReq('PUT', { board }, 'board')
  }

  remove(board) {
    return this._jsonReq('DELETE', { board }, 'board')
  }

  update(query, board) {
    return this._jsonReq('PATCH', { query, board }, 'board')
  }

  find(board) {
    return this._jsonReq('GET', { board }, 'board')
  }

  list() {
    return this._jsonReq('GET', {}, 'boards')
  }
}
