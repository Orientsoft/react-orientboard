import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/CloudApp'

import { initStores } from './lib/util'
initStores()

ReactDOM.render(<App />, document.querySelector('#mount-app'))
