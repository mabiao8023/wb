require('./check-versions')()

process.env.NODE_ENV = 'development'

var ora = require('ora')
var rm = require('rimraf')
var path = require('path')
var chalk = require('chalk')
var webpack = require('webpack')
var config = require('./config')
var webpackConfig = require('./webpack.dev.build.conf')

var spinner = ora('building for dev...');

spinner.start();
// 清除目录中的内容
rm(path.join(config.devBuild.assetsRoot, config.devBuild.assetsSubDirectory), err => {
    if (err) throw err
    const compiler = webpack(webpackConfig, function(err, stats) {
        spinner.stop()
        if (err) throw err
        process.stdout.write(stats.toString({
            colors: true,
            modules: false,
            children: false,
            chunks: false,
            chunkModules: false
        }) + '\n\n')
    });

    const outputCompilerInfo = function(err, stats) {
        const info = stats.toString({ colors: true });
        console.log(info);
    }

    // 监听变化
    // compiler.watch({}, outputCompilerInfo);
})
