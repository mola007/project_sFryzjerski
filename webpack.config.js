
const webpack = require('webpack');
let path = require('path');

module.exports = {

entry:"./app/assets/scripts/app.js",

output: {
path: path.resolve(__dirname, "./app/temp/scripts"),
filename: "app.js"
},
module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }),
],

  
}

