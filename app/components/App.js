import React from 'react'
import ReactDOM from 'react-dom'
import _ from 'lodash'

import {Navbar, Nav, NavItem} from 'react-bootstrap'

import boardActions from '../actions/board'

// import Text from './Text'
import Box from './Box'
// import MqttChart from './MqttChart'
// import Image from './Image'

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

let mew = _.range(0, 100).map(() => {
  return '喵'
}).join('')

let layout = [
  { type: 'text'
  , data: {
      text: mew
    }
  , h: 100
  , w: 300
  , x: 320
  , y: 50
  }
, { type: 'highchart'
  , data: {
      config: chartConfig
    }
  , h: 300
  , w: 500
  , x: 200
  , y: 200
  }
, { type: 'image'
  , data: {
      src: 'images/cat.jpeg'
    }
  , h: 250
  , w: 250
  , x: 600
  , y: 80
  , rotate: 15
  }
]

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div>

        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">OrientSoft</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1} onClick={()=>{boardActions.changeMode('publish')}}>
              publish
            </NavItem>
            <NavItem eventKey={2} onClick={()=>{boardActions.changeMode('edit')}}>
              edit
            </NavItem>
            <NavItem eventKey={3}
              onClick={()=>{
                console.log(this)
              }}>
              getjson
            </NavItem>

          </Nav>
        </Navbar>

      {
        layout.map((info, i) => {
          return <Box key={i} {...info} />
        })
      }

      </div>
    )
  }

  componentDidMount() {
    boardActions.init()
  }
}

App.propTypes = {

}

App.defaultProps = {

}

export default App
