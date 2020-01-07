const path = require('path');
const baseConfg = require('./webpack.base.conf');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (inEnv) => {
  return merge(baseConfg(inEnv), {
    mode: 'development',
    entry: './public/main.js',
    devtool: 'source-map',
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, '../public/index.ejs')
      })
    ]
  });
};
