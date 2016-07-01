import React from 'react'
import ReactDOM from 'react-dom'

import Display from './components/Display'

import { initStores } from './lib/util'
initStores()

ReactDOM.render(
  <Display board={gBoard} />,
  document.querySelector('#mount-app')
)
