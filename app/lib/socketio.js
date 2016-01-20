import io from 'socket.io-client'

const conns = Object.create(null)
const count = Object.create(null)

class SocketioConn {
  constructor(url) {
    if (!conns[url]) {
      conns[url] = io.connect(url)
      count[url] = 0
    }
    this.io = conns[url]
    count[url]++
    this.eventsCount = {}
  }

  on(event, listener) {
    this.eventsCount[event] = this.eventsCount[event] || 0
    // TODO: manage diffrent listeners for one event here
    // Prevent too many listeners on the socket.io instance
    this.io.on(event, listener)
    this.eventsCount[event]++
  }

  emit(event, data) {
    this.io.emit(event, data)
  }
}

const socketioPool = Object.create(null)

socketioPool.get = function getSocketioConn(url) {
  return new SocketioConn(url)
}

export default socketioPool
