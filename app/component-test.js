import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App'

import * as utils from './lib/util'

import $ from 'jquery'

// console.log(utils.getTestLayout(document.title))

// async function render() {
//   try {
//     let layout = await utils.getTestLayout(document.title)
//     console.log(layout)
//     ReactDOM.render(<App layout={layout}/>, document.querySelector('#mount-app'))
//   } catch (e) {
//     console.log(e)
//   }
// }
//
// render()


// console.log(utils.getTestLayout(document.title))
utils.getTestLayout(document.title).then((layout) => {
  console.log(layout)
  ReactDOM.render(<App layout={layout}/>, document.querySelector('#mount-app'))
})
// var name = /(.*)-dev$/.exec(document.title)[1]
// $.get(`/get-test-layout/${name}`, (data) => {
//   console.log(data)
// })
