const errorOverlayMiddleware = require('react-dev-utils/errorOverlayMiddleware')
const paths = require('../paths')

const host = process.env.HOST || '127.0.0.1'
const publicPath = process.env.PUBLIC_URL || '/'

module.exports = function () {
  return {
    clientLogLevel: 'none',
    compress: true,
    contentBase: paths.public,
    host,
    hot: true,
    overlay: false,
    public: publicPath,
    publicPath,
    quiet: true,
    setup (app) {
      app.use(errorOverlayMiddleware())
    },
    watchContentBase: true,
    watchOptions: {
      ignored: /node_modules/
    },
    historyApiFallback: true
  } 
}
