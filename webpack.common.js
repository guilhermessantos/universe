const sass = require('node-sass')
const sassUtils = require('node-sass-utils')(sass)
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackExcludeAssetsPlugin = require('html-webpack-exclude-assets-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const { join } = require('path')

const paths = {
  src: join(__dirname, './src'),
  dist: join(__dirname, './dist'),
  projectConfig: '/src/assets/javascripts/variables.js'
}

const config = {
  entry: join(paths.src, 'main'),

  sassLoader: {
    test: /\.(css|scss)$/,
    use: [
      'css-loader',
      {
        loader: 'sass-loader',
        options: {
          functions: {
            'get($keys)': function(keys) {
              keys = keys.getValue().split('.')
              delete require.cache[require.resolve(__dirname + paths.projectConfig)]
              let result = require(__dirname + paths.projectConfig)

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
  },

  vueLoader: {
    test: /\.vue$/,
    loader: 'vue-loader'
  },

  output: {
    path: paths.dist,
    filename: 'bundle.js'
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Universe',
      template: join(paths.src, 'index.html'),
      excludeAssets: [/vue.js/, /style.js/, /main.css/]
    }),
    new HtmlWebpackExcludeAssetsPlugin(),
    new VueLoaderPlugin()
  ]
}

module.exports = config
