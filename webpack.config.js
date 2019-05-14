const path = require('path')
const sass = require('node-sass')
const sassUtils = require('node-sass-utils')(sass)
const sassVars = require(__dirname + '/src/assets/javascripts/variables.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
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
    new MiniCssExtractPlugin({
      filename: 'style.css'
    }),
  ]
}
