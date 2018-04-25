'use strict'
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const path = require('path')
const baseWebpackConfig = require('./webpack.base.conf')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const portfinder = require('portfinder')
// const list=require('../src/mock/datas/list')
const HOST = process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT)
// console.log(list);
const mockjs = require('mockjs')
const arr = ['热销', '优惠', '新品品尝', '超值套餐', '经典烧味', '烧饼多味', '烧味多拼', '拌饭汁', '经典单品', '秋衣', '秋裤', '篮球', '乒乓球'];
const arrList = [];
const objCon=[];
const Random = mockjs.Random;
for(let i=0;i<10;i++){
    arrList.push(
        mockjs.mock({
          "id": i,
          "name": 'lll',
          "color": '@color',
          "pic": Random.image('60x60', 'image'),
          "text": Random.ctitle(5, 10)
        })
    )
}
  for (let i = 0; i < arr.length; i++) {
    objCon.push(mockjs.mock({
        item: arr[i],
        "foodList|3-8": [{
            "pic": Random.image('60x60', 'image'),
            "text": Random.ctitle(5, 10),
            "num": 0,
            "count":0,
            "num": Random.natural(1, 99),
            "on":false,
            "price": Random.natural(1, 20),
          "con": Random.csentence(5, 10)
            
        }]

    }))
}
const devWebpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap, usePostCSS: true })
  },
  // cheap-module-eval-source-map is faster for development
  devtool: config.dev.devtool,

  // these devServer options should be customized in /config/index.js
  devServer: {
    clientLogLevel: 'warning',
    historyApiFallback: {
      rewrites: [
        { from: /.*/, to: path.posix.join(config.dev.assetsPublicPath, 'index.html') },
      ],
    },
    hot: true,
    contentBase: false, // since we use CopyWebpackPlugin.
    compress: true,
    host: HOST || config.dev.host,
    port: PORT || config.dev.port,
    open: config.dev.autoOpenBrowser,
    overlay: config.dev.errorOverlay
      ? { warnings: false, errors: true }
      : false,
    publicPath: config.dev.assetsPublicPath,
    proxy: config.dev.proxyTable,
    quiet: true, // necessary for FriendlyErrorsPlugin
    watchOptions: {
      poll: config.dev.poll,
    },
    setup(app){
      app.get('/api/list',(req,res)=>{
        res.json(arrList)
      })
      app.get('/api/routeLink',(req,res)=>{
        let routerLink = require('../src/mock/datas/routerLink.json')
        res.json(routerLink)
      })
      app.get('/api/proList',(req,res)=>{
        let proList = require('../src/mock/datas/pro.json')
        res.json(objCon)
      })
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': require('../config/dev.env')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    // copy custom static assets
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: config.dev.assetsSubDirectory,
        ignore: ['.*']
      }
    ])
  ]
})

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = process.env.PORT || config.dev.port
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      // publish the new Port, necessary for e2e tests
      process.env.PORT = port
      // add port to devServer config
      devWebpackConfig.devServer.port = port

      // Add FriendlyErrorsPlugin
      devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
          messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`],
        },
        onErrors: config.dev.notifyOnErrors
        ? utils.createNotifierCallback()
        : undefined
      }))

      resolve(devWebpackConfig)
    }
  })
})
