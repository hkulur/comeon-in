const fs = require('fs')
const path = require('path')
const appDir = fs.realpathSync(process.cwd())
const resolvePath = (assetPath) => path.resolve(appDir, assetPath)

module.exports = {
  appDir,
  devServer: resolvePath('config/server'),
  dist: resolvePath('dist'),
  dotenv: resolvePath('config/env'),
  index: resolvePath('src/index'),
  indexHtml: resolvePath('public/index.html'),
  nodemodules: resolvePath('node_modules'),
  public: resolvePath('public'),
  src: resolvePath('src'),
  webpackconfig: resolvePath('config/webpack'),
}