const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const sass = require('node-sass')
const sassUtils = require('node-sass-utils')(sass)
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              functions: {
                'get($keys)': function(keys) {
                  keys = keys.getValue().split('.')
                  delete require.cache[require.resolve(__dirname + '/src/assets/javascripts/variables.js')]
                  let result = require(__dirname + '/src/assets/javascripts/variables.js')

                  for (let i = 0; i < keys.length; i++) {
                    result = result[keys[i]];
                  }

                  result = sassUtils.castToSass(result);
                  return result;
                }
              }
            }
          }
        ],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: 'style.css',
      chunkFilename: 'style.css',
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    hot: true,
    open: false,
    port: 8000
  }
}
