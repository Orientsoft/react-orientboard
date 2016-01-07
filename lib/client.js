var $ = require('jquery')
module.exports = class BoardManagerClient {
  constructor(opts) {
    opts = opts || {}
    this.host = opts.host || ''
    this.path = opts.path || 'api'
  }

  _url(endpoint) {
    return `${this.host}/${this.path}/${endpoint}`
  }

  _jsonReq(method, data, endpoint) {
    var opts = {
      method: method
    , data: JSON.stringify(data)
    , contentType: 'application/json; charset=utf-8'
    , dataType: 'json'
    , url: this._url(endpoint)
    }
    if (method == 'GET') {
      opts.data = data
    }
    else {
      opts.data = JSON.stringify(data)
      opts.contentType = 'application/json; charset=utf-8'
      opts.dataType = 'json'
    }
    return $.ajax(opts)
  }

  create(board) {
    return this._jsonReq('PUT', {board: board}, 'board')
  }

  remove(board) {
    return this._jsonReq('DELETE', {board: board}, 'board')
  }

  update(query, board) {
    return this._jsonReq('PATCH', {query: query, board: board}, 'board')
  }

  find(board) {
    return this._jsonReq('GET', {board: board}, 'board')
  }

  list() {
    return this._jsonReq('GET', {}, 'boards')
  }
}
