import $ from 'jquery'

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
