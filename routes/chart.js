'use nodent-promise';
'use nodent-es7'
'use strict'


const express = require('express'),
      router = express.Router()

const logger = require('../lib/util').logger


function buildHightChartData(rows,cols,min,max){

  let result=[]

   for(var i=0;i<rows;i++){

     result.push({"data":[]});
    for(var j=0;j<cols;j++){
       result[i].data.push(parseFloat((Math.random()* ( 1 + max - min )).toFixed(2)))
    }

   }

   return result;

}

var GlobalData={}




// find board
router.get('/highchart/:id', async (req, res) => {
  
  try {
    
    const rows=req.query['rows']?parseInt(req.query['rows']):2
    const cols=req.query['cols']?parseInt(req.query['cols']):12
    const min=req.query['min']?parseInt(req.query['min']):0
    const max=req.query['max']?parseInt(req.query['max']):100
    const random=req.query['random']?true:false
    const result = buildHightChartData(rows,cols,min,max)
    return res.json(result)

    
  } catch (e) {
    logger.error(e)
    return res.header(401).json({})
  }
})


module.exports = router
