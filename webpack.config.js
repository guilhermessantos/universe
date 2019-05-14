const path = require('path')
const sass = require('node-sass')
const sassUtils = require('node-sass-utils')(sass)
const sassVars = require(__dirname + '/src/assets/javascripts/variables.js')

const VueLoaderPlugin      = require('vue-loader/lib/plugin')
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
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader"
          },
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
            options: {
              functions: {
                'get($keys)': function(keys) {
                  keys = keys.getValue().split('.');
                  let result = sassVars;

                  for (let i = 0; i < keys.length; i++) {
                    result = result[keys[i]];
                  }

                  result = sassUtils.castToSass(result);
                  return result;
                }
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: 'style.css'
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    hot: true,
    open: true,
    port: 8000
  }
}
