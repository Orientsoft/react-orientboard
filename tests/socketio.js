import socketioPool from '../app/lib/socketio'

let socket

describe('Pool', () => {
  it('should init pool', () => {
    console.log(socketioPool)
  })
  it('should get an connection', () => {
    // TODO: find/write a stable backend for testing
    socket = socketioPool.get('http://127.0.0.1:3003')
    console.log(socket)
  })
  it('should subscribe to an event', () => {
    socket.on('test-get', (data) => {
      console.log('test-event got', data)
    })
    socket.emit('test-put', 'haha')
  })
})
