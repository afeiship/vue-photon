const webpack = require('webpack');
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

function resolve(dir) {
  return path.join(__dirname, '..', dir);
}

module.exports = (inEnv) => {
  return {
    mode: 'production',
    stats: 'errors-only',
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader'
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            'style-loader',
            'css-loader',
            'postcss-loader',
            'resolve-url-loader',
            'sass-loader'
          ]
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                limit: 10000,
                name: 'assets/images/[name].[ext]'
              }
            }
          ]
        },
        {
          test: /\.(woff|woff2?|eot|ttf|otf)(\?.*)?$/,
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: 'assets/fonts/[name].[hash:7].[ext]'
          }
        }
      ]
    },
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        // vue$: 'vue/dist/vue.esm.js',
        '@': resolve('.'),
        packages: resolve('packages')
      }
    },
    plugins: [
      // 解决vender后面的hash每次都改变
      // new webpack.HashedModuleIdsPlugin(),
      new VueLoaderPlugin()
    ]
  };
};
