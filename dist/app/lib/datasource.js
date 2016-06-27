import io from 'socket.io-client'
import mqtt from 'mqtt'

const datasource = Object.create(null)
const sources = Object.create(null)

function getSourceId(type, info) {
  switch (type) {
  case 'socket.io':
    return info.url
  default:
    return info.toString()
  }
}

function createSource(type, info) {
  switch (info.type) {
  case 'socket.io':
    return io(info.url)
  default:
    break
  }
}

datasource.get = function getSource(type, info) {
  if (!sources[type]) sources[type] = Object.create(null)
  const id = getSourceId(type, info)
  if (sources[type][id])
    return sources[type][id]
  sources[type][id] = createSource(type, info)
}

datasource.close = function closeSource(type, info) {
  console.log(type, info)
}

export default datasource
