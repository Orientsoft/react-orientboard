

import _ from 'lodash'
import $ from 'jquery'


const timerPool = Object.create(null)


const timers = Object.create(null)
const callbacks = []


timerPool.start = function start(url, interval, cb, once) {
	                                                                                if (callbacks.indexOf(cb) > -1) {
  console.log('already start')
	} else {
	                                                                                  if (!once) {
		                                                                                  var id = setInterval(function () {
		  	                                                                                $.get(url, function (result) {
  if (cb) {
    cb(result)
  } else {
    console.log('debug:', result)
  }
})
		  }, interval)

  timers[id] = cb
 		                                          callbacks[cb] = id
  return id
} else {
	  	                                                                                 setTimeout(function () {
		  	                                                                                $.get(url, function (result) {
  if (cb) {
    cb(result)
  } else {
    console.log('debug:', result)
  }
})
		  }, interval)
	  }
	}
}

timerPool.stop = function stop(id) {
  clearInterval(id)
}


export default timerPool
