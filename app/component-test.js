import React from 'react'
import ReactDOM from 'react-dom'

import DevApp from './components/DevApp'

import * as utils from './lib/util'

utils.initStores()

utils.getTestLayout(document.title).then((layout) => {
  console.log(layout)
  ReactDOM.render(
    <DevApp testComponent={layout}/>
  , document.querySelector('#mount-app')
  )
})
