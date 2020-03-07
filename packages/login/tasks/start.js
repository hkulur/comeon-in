process.env.NODE_ENV = 'development'

const paths = require('../config/paths')
const envConfig = require(paths.dotenv)

process.on('unhandledRejection', err => {
  throw err
})

const fs = require('fs')
const webpack = require('webpack')
const chalk = require('chalk')
const WebpackDevServer = require('webpack-dev-server')
const clearConsole = require('react-dev-utils/clearConsole')
const {
  createCompiler,
  prepareUrls
} = require('react-dev-utils/WebpackDevServerUtils')
const openBrowser = require('react-dev-utils/openBrowser')
const config = require(`${paths.webpackconfig}`)
const createWebDevServer = require(paths.devServer)
const appName = 'login'

const isInteractive = process.stdout.isTTY
const HOST_NAME = process.env.HOST
const PORT = process.env.PORT

const protocol = 'http'
const urls = prepareUrls(protocol, HOST_NAME, PORT)
const compiler = createCompiler({ webpack, config, appName, urls, useYarn: true })
const serverConfig = createWebDevServer()
const devServer = new WebpackDevServer(compiler, serverConfig)

devServer.listen(PORT, HOST_NAME, err => {
  if (err) {
    return console.log(err)
  }

  if (isInteractive) {
    clearConsole()
  }
  console.log(chalk.cyan('Starting the development server...\n'))
  openBrowser(process.env.PUBLIC_URL)
})
