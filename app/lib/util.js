import $ from 'jquery'

import blockStore from '../stores/block'
import boardStore from '../stores/board'
import boxStore from '../stores/box'
import selectStore from '../stores/select'
import uiStore from '../stores/ui'

export function getTestLayout(title, cb) {
  const name = /(.*)-dev$/.exec(title)[1]
  if (name)
    return $.ajax({
      url: `/get-test-layout/${name}`,
      method: 'GET',
      success: cb,
    })
  return null
}

export function swapElements(list, x, y) {
  list[x] = [list[y], list[y] = list[x]][0]
}

export function initStores() {
  // HACK: import all stores and bypass eslint no-unused rules
  (() => {})(
    blockStore, boardStore, boxStore, selectStore, uiStore
  )
}

export function copyToClipboard(text) {
  window.prompt('Copy to clipboard: Ctrl+C, Enter', text)
}
