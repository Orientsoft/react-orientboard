import mqtt from 'mqtt'

import _ from 'lodash'

const mqttPool = Object.create(null)


const conns = Object.create(null)
const connsCount = Object.create(null)
const subCount = Object.create(null)
const callback = Object.create(null)

mqttPool.get = function createConn(url) {
  console.log(conns[url], url, conns)
  if (!conns[url]) {
    conns[url] = mqtt.connect(url)
    connsCount[url] = 0
    conns[url].on('message', function (topic, payload, packet) {
      console.log(connsCount[url], 'msg coming', topic, '' + payload, callback[topic])
      if (callback[topic]) {
        _.forEach(callback[topic], (cb) => {
          try {
            const result = JSON.parse('' + payload)
            cb(result)
            console.log('result', result)
          } catch (e) {
            const result = '' + payload
            cb({
              payload: result
            })
            // console.log({payload:""+payload});
          }
        })
      } else {
        console.log('出现在这里的消息是因为Topic:', topic, '计数器丢失, 请检查')
      }
    })
  }
  return {
    conn: conns[url],
    url
  }
}

mqttPool.sub = function sub(info, topic, cb) {
  console.log('sub', info, topic, callback[topic])
  if (!callback[topic]) {
    callback[topic] = []
    callback[topic].push(cb)
  } else if (callback[topic].indexOf(cb) === -1) {
    callback[topic].push(cb)
  } else {
    console.log('cb already used')
  }

  info.conn.subscribe(topic)
  connsCount[info.url]++
}


mqttPool.unsub = function unsub(info, topic, cb) {
  if (!callback[topic]) return

  if (callback[topic]) {
    const idx = callback[topic].indexOf(cb)
    if (idx === -1) return
    callback[topic].splice(idx, 1)
  }

  if (callback[topic].length === 0) {
    console.log('计数器为0,停止订阅')
    delete callback[topic]
    info.conn.unsubscribe(topic)
    connsCount[info.url]--

    if (connsCount[info.url] === 0) {
      console.log('连接计数器为0,关闭连接')

      conns[info.url].end()
      delete conns[info.url]
    }
  }
}


export default mqttPool
