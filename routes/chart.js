'use nodent-promise';
'use nodent-es7'
'use strict'


const express = require('express'),
      router = express.Router()

const logger = require('../lib/util').logger


function buildHightChartData(rows, cols, min, max) {
  let result = []

  for (var i = 0; i < rows; i++) {
    result.push({ 'data': [] })
    for (var j = 0; j < cols; j++) {
      result[i].data.push(parseFloat((Math.random() * (1 + max - min)).toFixed(2)))
    }
  }

  return result
}


function buildChartJSData(cols, min, max) {
  var chartdata = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First dataset',
        fillColor: 'rgba(220,220,220,0.2)',
        strokeColor: 'rgba(220,220,220,1)',
        pointColor: 'rgba(220,220,220,1)',
        pointStrokeColor: '#fff',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(220,220,220,1)',
            // data: [65, 59, 80, 81, 56, 55, 40]
        data: [],
      },
    ],
  }


  for (var i = 0; i < cols; i++) {
    chartdata.datasets[0].data.push(parseFloat((Math.random() * (1 + max - min)).toFixed(2)))
  }

  return chartdata
}


var GlobalData = {}


// find board
router.get('/highchart/:id', async (req, res) => {
  try {
    const rows = req.query['rows'] ? parseInt(req.query['rows']) : 2
    const cols = req.query['cols'] ? parseInt(req.query['cols']) : 12
    const min = req.query['min'] ? parseInt(req.query['min']) : 0
    const max = req.query['max'] ? parseInt(req.query['max']) : 100
    const random = req.query['random'] ? true : false
    const result = buildHightChartData(rows, cols, min, max)
    return res.json(result)
  } catch (e) {
    logger.error(e)
    return res.header(401).json({})
  }
})


// find board
router.get('/chartjs/:id', async (req, res) => {
  try {
    const cols = req.query['cols'] ? parseInt(req.query['cols']) : 2
    const min = req.query['min'] ? parseInt(req.query['min']) : 0
    const max = req.query['max'] ? parseInt(req.query['max']) : 100
    const random = req.query['random'] ? true : false
    const result = buildChartJSData(cols, min, max)
    return res.json(result)
  } catch (e) {
    logger.error(e)
    return res.header(401).json({})
  }
})


// find board
router.get('/widget01/:id', async (req, res) => {
  try {
    const title = req.query['title'] ? req.query['title'] : '标题一'
    const sub_title = req.query['sub_title'] ? req.query['sub_title'] : '标题二'
    const min = req.query['min'] ? parseInt(req.query['min']) : 0
    const max = req.query['max'] ? parseInt(req.query['max']) : 100

    const result = {
      'datasets': [
        {
          'label': title,
          'data': parseFloat((Math.random() * (1 + max - min)).toFixed(2)),
        },
        {
          'label': sub_title,
          'data': parseFloat((Math.random() * (1 + max - min)).toFixed(2)),
        },
      ],
    }
    return res.json(result)
  } catch (e) {
    logger.error(e)
    return res.header(401).json({})
  }
})


module.exports = router
