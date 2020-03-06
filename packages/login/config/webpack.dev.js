const errorOverlayMiddleware = require('react-dev-utils/errorOverlayMiddleware')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const path = require('path')
const fs = require('fs')

const TerserPlugin = require('terser-webpack-plugin')
const rootDirectory = fs.realpathSync(process.cwd())
const resolvePath = (relativePath) => {
  return path.resolve(rootDirectory, relativePath)
}

module.exports = {
  mode: 'production',
  entry: resolvePath('src/index.tsx'),
  output: {
    path: resolvePath('public'),
    pathinfo: true,
    publicPath: resolvePath('public'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  watch: false,
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        enforce: 'pre',
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [{ loader: 'ts-loader' }, { loader: 'eslint-loader' }]
      },
      // {
      //   enforce: 'pre',
      //   test: /\.js$/,
      //   loader: 'source-map-loader'
      // }
    ],
  },
  // devServer: {
  //   contentBase: resolvePath('public'),
  //   watchContentBase: true,
  //   watchOptions: {
  //     ignored: /node_modules/
  //   },
  //   hot: true,
  //   publicPath: resolvePath('public'),
  //   port: 3000,
  //   compress: true,
  //   open: true,
  //   quiet: true,
  //   setup (app) {
  //     app.use(errorOverlayMiddleware())
  //   }
  // },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ]
}
