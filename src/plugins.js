const fileProvider = require('./provider/init')()
// const featureOutput = require('./output/init')()

// const outputs = [featureOutput]
const outputs = []
const auths = []
const caches = []
const plugins = [fileProvider]
// const plugins = []
module.exports = [...outputs, ...auths, ...caches, ...plugins]
