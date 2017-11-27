var path = require('path')
var projectConfig = require('./project.config.js')

module.exports = {
    build: {
        projCode: projectConfig.code,
        projEName: projectConfig.eName,
        autoPx2Rem: projectConfig.autoPx2Rem,
        env: require('./prod.env'),
        // 构建的目录代码
        assetsRoot: path.resolve(__dirname, '../../dist/'),
        assetsSubDirectory: 'static',    // 子目录
        // cdn
        assetsPublicPath: 'http://img.ggwan.com/yd/Public/forecast/yqwWX/',  // cdn路径
        // 临时cdn路径
        // assetsPublicPath: 'http://img.ggwan.com/yd/Public/forecast/yqwWX1/',  // cdn路径
        productionSourceMap: false,
        productionGzip: false,
        productionGzipExtensions: ['js', 'css'],
        bundleAnalyzerReport: process.env.npm_config_report
    },
    dev: {
        env: require('./dev.env'),
        port: 80,
        autoOpenBrowser: false,
        assetsPublicPath:'./',
        assetsSubDirectory: 'static',
        productionSourceMap: true,
        proxyTable: {
			'/home': {
				target: 'http://www.yd.com',
				secure: false,
				//搞了半天。。target为具体域名，而非ip地址的形式时，这个属性必须为true
				//参见：https://github.com/chimurai/http-proxy-middleware
				changeOrigin: false
			}
		},
        cssSourceMap: false
    }
}
