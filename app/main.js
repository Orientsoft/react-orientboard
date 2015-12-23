import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App'

let chartConfig = {
  chart: {
    type: 'bar'
  },
  title: {
    text: 'Fruit Consumption'
  },
  xAxis: {
    categories: ['Apples', 'Bananas', 'Oranges']
  },
  yAxis: {
    title: {
      text: 'Fruit eaten'
    }
  },
  series: [{
    name: 'Jane',
    data: [1, 0, 4]
  }, {
    name: 'John',
    data: [5, 7, 3]
  }]
}

let layout = [
  { type: 'highcharts'
  , data: {
      config: chartConfig
    }
  , h: 300
  , w: 500
  , x: 0
  , y: 0
  }
, { type: 'highcharts'
  , data: {
      config: chartConfig
    }
  , h: 300
  , w: 500
  , x: 100
  , y: 100
  }
// , { type: 'image'
//   , data: {
//       src: 'images/cat.jpeg'
//     }
//   , h: 250
//   , w: 250
//   , x: 600
//   , y: 80
//   , rotate: 15
//   }
// ,
// { type: 'text'
//   , data: {
//       text: 'hello'
//     }
//   , h: 200
//   , w: 200
//   }
// , { type: 'counter'
//   , data: {}
//   , h: 100
//   , w: 100
//   , x: 200
//   , y: 200}
]

console.log(document.title)

ReactDOM.render(<App layout={layout}/>, document.querySelector('#mount-app'))
