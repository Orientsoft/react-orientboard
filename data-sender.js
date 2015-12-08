'use strict'

var mqtt = require('mqtt')
  , _ = require('lodash')

var client = mqtt.connect('mqtt://ytl.borgnix.com:1883')

client.on('connect', () => {
  setInterval(function () {
    let data = _.range(0, 2).map(() => {
      return _.range(0, 3).map(() => {
        return _.random(1, 30)
      })
    })
    console.log('sending', data)
    client.publish('board-mqtt-test', JSON.stringify(data))
  }, 2000);
})
