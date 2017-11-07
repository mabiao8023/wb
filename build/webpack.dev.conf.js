var utils = require('./utils')
var webpack = require('webpack')
var config = require('./config')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
// add hot-reload related code to entry chunks
Object.keys(baseWebpackConfig.entry).forEach( function ( name ) {
  baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
})

module.exports = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap })
  },
  // cheap-module-eval-source-map is faster for development source-map
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    new OpenBrowserPlugin({ url: 'http://localhost' }),

    new webpack.DefinePlugin({
      'process.env': config.dev.env
    }),
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
      // 首页
      new HtmlWebpackPlugin({
          filename: './index.html',
          template: './src/views/index/index.html',
          inject: true,
          chunks:['index']
      }),
	  new HtmlWebpackPlugin({
		  filename: './me.html',
		  template: './src/views/index/me.html',
		  inject: true,
		  chunks:['me']
	  }),
	  new HtmlWebpackPlugin({
		  filename: './meClassList.html',
		  template: './src/views/index/meClassList.html',
		  inject: true,
		  chunks:['meClassList']
	  }),
	  new HtmlWebpackPlugin({
		  filename: './video.html',
		  template: './src/views/index/video.html',
		  inject: true,
		  chunks:['video']
	  }),

      new FriendlyErrorsPlugin()
  ]
})
