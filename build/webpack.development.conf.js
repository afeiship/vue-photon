const baseConfg = require('./webpack.base.conf');
const merge = require('webpack-merge');

module.exports = (inEnv) => {
  return merge(baseConfg(inEnv), {
    mode: 'development',
    entry: './public/index.js'
  });
};
