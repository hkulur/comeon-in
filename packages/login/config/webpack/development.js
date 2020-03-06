const webpack = require('webpack')
var InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const paths = require('../paths')

const shouldUseSourceMap = process.env.GENERATE_SOURCEMAP !== 'false'
const publicPath = '/'
const { envJson, stringifiedEnv } = require(paths.dotenv)

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: paths.index,
  mode: 'development',
  module: {
    strictExportPresence: true,
    rules: [
      {
        parser: {
          amd: false,
        }
      },
      {
        test: /\.(js|jsx)?$/,
        enforce: 'pre',
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.(js|jsx)$/,
        include: paths.src,
        use: [
          {
            loader: 'babel-loader',
            options: {
              babelrc: true
            }
          }
        ]
      },
      {
        test: /\.(css)$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              url: false
            }
          }
        ]
      },
      {
        test: /\.(svg|woff|woff2|eot)$/,
        loader: 'url-loader',
        options: {
          limit: 50000,
          mimetype: 'application/font&name=./fonts/[name].[ext]'
        }
      }
    ]
  },
  node: {
    fs: 'empty'
  },
  output: {
    filename: 'javascripts/[name].js',
    path: paths.build,
    pathinfo: true,
    publicPath,
  },
  plugins: [
    new InterpolateHtmlPlugin(HtmlWebpackPlugin, envJson),
    new HtmlWebpackPlugin({
      inject: true,
      template: paths.indexHtml
    })
  ],
  resolve: {
    modules: [paths.src, 'node_modules', paths.nodemodules],
    extensions: ['.js', '.json', '.jsx', 'svg', 'ttf', 'woff', 'eot'],
  },
  watch: true,
}
