import React from 'react'
import ReactDOM from 'react-dom'

import Display from './components/Display'

ReactDOM.render(
  <Display board={gBoard} />,
  document.querySelector('#mount-app')
)
