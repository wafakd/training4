'use strict'
const webpack=require('webpack')
const { VueLoaderPlugin } = require('vue-loader')
const HTMLWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  mode: 'production',
devServer:{
hot:true,

watchOptions:{
poll:true
}
},

  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
	   {
        test: /\.css$/,
        use:[
		'vue-style-loader',
		'css-loader'
		] 
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HTMLWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
new webpack.HotModuleReplacementPlugin()
  ]
}
