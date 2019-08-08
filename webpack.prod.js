const common = require('./webpack.common')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const RemovePlugin = require('remove-files-webpack-plugin')

function recursiveIssuer(m) {
  if (m.issuer) {
    return recursiveIssuer(m.issuer);
  } else if (m.name) {
    return m.name;
  } else {
    return false;
  }
}

common.sassLoader.use.unshift(
  { loader: MiniCssExtractPlugin.loader }
)

module.exports = {
  mode: 'production',

  entry: {
    main: './src/main.js',
    style: './src/assets/sass/style.scss',
    vue: './src/assets/sass/vue.scss'
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        scssStyles: {
          name: 'style',
          test: (m, c, entry = 'style') =>
            m.constructor.name === 'CssModule' && recursiveIssuer(m) === entry,
          chunks: 'all',
          enforce: true,
        },
        vueStyles: {
          name: 'vue',
          test: (m, c, entry = 'vue') =>
            m.constructor.name === 'CssModule' && recursiveIssuer(m) === entry,
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },

  plugins: common.plugins.concat([
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[name].css'
    }),
    new RemovePlugin({
      after: {
        exclude: ['dist/main.js'],
        test: [
          {
            folder: 'dist',
            method: (filePath) => {
                return new RegExp(/\.js$/, 'm').test(filePath);
            }
          },
          {
            folder: 'dist',
            method: (filePath) => {
                return new RegExp(/\/main.css$/, 'm').test(filePath);
            }
          }
        ]
    }
    })
  ]),

  module: {
    rules: [
      common.sassLoader,
      common.vueLoader,
      common.svgLoader
    ]
  }
}
