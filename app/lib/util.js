import $ from 'jquery'

export function getTestLayout(title, cb) {
  var name = /(.*)-dev$/.exec(title)[1]
  if (name) {
    // return $.get(`/get-test-layout/${name}`, cb)
    return $.ajax({
      url: `/get-test-layout/${name}`
    , method: 'GET'
    , success: cb
    })
  }
  return null
}
