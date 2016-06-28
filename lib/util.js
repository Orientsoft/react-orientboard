const fs = require('fs-extra')

module.exports.getComponents = function getComponents() {
    return fs.readdirSync('node_modules').filter((dep) => {
        return dep.match(/^orientboard-component-/)
    })
}

module.exports.getComponentName = function getComponentName(fullname) {
    return /^orientboard-component-(.*)/.exec(fullname)[1]
}

module.exports.logger = require('tracer').colorConsole({
    format: '{{timestamp}} [{{title}}] {{message}} (in {{file}}:{{line}})',
    dateformat: 'yyyy-mm-dd HH:MM:ss'
})
