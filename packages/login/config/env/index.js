const dotenv = require('dotenv')
const fs = require('fs')
const paths = require('../paths')
const envConfig = dotenv.parse(fs.readFileSync(`${paths.dotenv}/${process.env.NODE_ENV}.local`))

for (const k in envConfig) {
  process.env[k] = envConfig[k]
}

const envJson = {
  'NODE_ENV': process.env.NODE_ENV,
  'PUBLIC_URL': process.env.PUBLIC_URL
}

module.exports = envConfig
module.exports.envJson = envJson
module.exports.stringifiedEnv = {
  'process.env': Object.keys(envJson).reduce((acc, key) => {
    acc[key] = JSON.stringify(envJson[key])
    return acc
  }, {})
}
