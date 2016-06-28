import io from 'socket.io-client'
import _ from 'lodash'

const socketIOPool = Object.create(null)


const conns = Object.create(null)
const connsCount = Object.create(null)
const topicCount = Object.create(null)
const subCount = Object.create(null)
const callback = Object.create(null)

socketIOPool.get = function createConn(url) {
  console.log(conns[url], url, conns)
  if (!conns[url]) {
    conns[url] = io.connect(url, { transports: ['websocket', 'xhr-polling'] })
    connsCount[url] = 0
  } else {
    connsCount[url]++
  }
  return {
    conn: conns[url],
    url
  }
}

function _callback(topic) {
  return function (msg) {
    console.log(topic, msg)
    if (callback[topic]) {
      _.forEach(callback[topic], (cb) => {
        try {
          cb(msg)
          // console.log('result', msg);
        } catch (e) {
          console.log(e, msg)
          // console.log({payload:""+payload});
        }
      })
    } else {
      console.log('出现在这里的消息是因为Topic:', topic, '计数器丢失, 请检查')
    }
  }
}

socketIOPool.sub = function sub(info, topic, cb) {
  console.log('sub', info, topic, callback[topic])
  if (!callback[topic]) {
    callback[topic] = []
    callback[topic].push(cb)
  } else if (callback[topic].indexOf(cb) === -1) {
    callback[topic].push(cb)
  } else {
    console.log('cb already used')
  }
  if (!topicCount[info.url + '/' + topic]) {
    info.conn.on(topic, _callback(topic))
  } else {
    topicCount[info.url + '/' + topic] ++
    console.log('already sub ' + topic)
  }
}


socketIOPool.unsub = function unsub(info, topic, cb) {
  console.log('未实现关闭方法')
}

export default socketIOPool
