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
	  new HtmlWebpackPlugin({
		  filename: './classList.html',
		  template: './src/views/index/classList.html',
		  inject: true,
		  chunks:['classList']
	  }),
	  new HtmlWebpackPlugin({
		  filename: './article.html',
		  template: './src/views/index/article.html',
		  inject: true,
		  chunks:['article']
	  }),

	  // 测试页面
	  new HtmlWebpackPlugin({
		  filename: './test.html',
		  template: './src/views/test/test.html',
		  inject: true,
		  chunks:['test']
	  }),
	  // 登录接口
	  new HtmlWebpackPlugin({
		  filename: './login.html',
		  template: './src/views/index/login.html',
		  inject: true,
		  chunks:['login']
	  }),

	  new HtmlWebpackPlugin({
		  filename: './tuijian.html',
		  template: './src/views/tuijian/tuijian.html',
		  inject: true,
		  chunks:['tuijian']
	  }),

	  new HtmlWebpackPlugin({
		  filename: './tg1.html',
		  template: './src/views/tuiguang/tg1.html',
		  inject: true,
		  chunks:['tg1']
	  }),

	  new HtmlWebpackPlugin({
		  filename: './tg1.html',
		  template: './src/views/tuiguang/tg1.html',
		  inject: true,
		  chunks:['tg1']
	  }),
	  new HtmlWebpackPlugin({
		  filename: './tg2.html',
		  template: './src/views/tuiguang/tg2.html',
		  inject: true,
		  chunks:['tg2']
	  }),
	  new HtmlWebpackPlugin({
		  filename: './tg3.html',
		  template: './src/views/tuiguang/tg3.html',
		  inject: true,
		  chunks:['tg3']
	  }),
	  new HtmlWebpackPlugin({
		  filename: './tg4.html',
		  template: './src/views/tuiguang/tg4.html',
		  inject: true,
		  chunks:['tg4']
	  }),
	  new HtmlWebpackPlugin({
		  filename: './tg5.html',
		  template: './src/views/tuiguang/tg5.html',
		  inject: true,
		  chunks:['tg5']
	  }),
      new FriendlyErrorsPlugin()
  ]
})
