var path = require('path')
var utils = require('./utils')
var config = require('./config')
var vueLoaderConfig = require('./vue-loader.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPluginComConfig = {
    title:'课程咨询平台',
    keywords:'课程咨询平台',
    description:'课程咨询平台',
    chunksSortMode: 'dependency',
    inject: true,
    minify: process.env.NODE_ENV === 'production' ? {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
        // more options:
        // https://github.com/kangax/html-minifier#options-quick-reference
    } : false,
}

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

var webpackConfig = {
    entry: {
        // 首页
        index:'./src/entry/index/index.js',
		me:'./src/entry/index/me.js',
		meClassList:'./src/entry/index/meClassList.js',
		video:'./src/entry/index/video.js',
		classList:'./src/entry/index/classList.js',
		article:'./src/entry/index/article.js',
    },
    output: {
        path: config.build.assetsRoot,
        filename: '[name].js',
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': resolve('src')
        }
    },
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader',
            options: vueLoaderConfig
        },
        {
            test: /\.js$/,
            loader: 'babel-loader',
            include: [resolve('src')]
        }, {
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            loader: 'url-loader',
            options: {
                limit: 4092,
                name: utils.assetsPath('/img/[name].[hash:7].[ext]')
            }
        }, {
            test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
            loader: 'url-loader',
            options: {
                limit: 10000,
                name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
            }
        }]
    },
    plugins:[
        // 首页
        new HtmlWebpackPlugin(Object.assign({
            filename: path.resolve(__dirname,'./../dist/index.html'),
            template: './src/views/index/index.html',
            chunks: ['index','vendor','manifest']
        },HtmlWebpackPluginComConfig)),
		new HtmlWebpackPlugin(Object.assign({
			filename: path.resolve(__dirname,'./../dist/me.html'),
			template: './src/views/index/me.html',
			chunks: ['me','vendor','manifest']
		},HtmlWebpackPluginComConfig)),
		new HtmlWebpackPlugin(Object.assign({
			filename: path.resolve(__dirname,'./../dist/meClassList.html'),
			template: './src/views/index/meClassList.html',
			chunks: ['meClassList','vendor','manifest']
		},HtmlWebpackPluginComConfig)),
		new HtmlWebpackPlugin(Object.assign({
			filename: path.resolve(__dirname,'./../dist/video.html'),
			template: './src/views/index/video.html',
			chunks: ['video','vendor','manifest']
		},HtmlWebpackPluginComConfig)),

		new HtmlWebpackPlugin(Object.assign({
			filename: path.resolve(__dirname,'./../dist/classList.html'),
			template: './src/views/index/classList.html',
			chunks: ['classList','vendor','manifest']
		},HtmlWebpackPluginComConfig)),

		new HtmlWebpackPlugin(Object.assign({
			filename: path.resolve(__dirname,'./../dist/article.html'),
			template: './src/views/index/article.html',
			chunks: ['article','vendor','manifest']
		},HtmlWebpackPluginComConfig)),

    ]
}

if(config.build.autoPx2Rem){
    webpackConfig.module.rules.push({
        test: /\.(css|less|vue)$/,
        loader: 'webpack-px-to-rem',
        query: {
            basePx: 64,
            min: 1
        }
    })
}

module.exports = webpackConfig
