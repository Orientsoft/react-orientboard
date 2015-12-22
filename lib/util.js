var fs = require('fs-extra')

module.exports.getComponents = function () {
  return fs.readdirSync('node_modules').filter((dep) => {
    return dep.match(/^orientboard-component-/)
  })
}
