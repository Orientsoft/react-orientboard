const fs = require('fs-extra')

module.exports.getComponents = function getComponents() {
  return fs.readdirSync('node_modules').filter((dep) => {
    return dep.match(/^orientboard-component-/)
  })
}

module.exports.getComponentName = function getComponentName(fullname) {
  return /^orientboard-component-(.*)/.exec(fullname)[1]
}
