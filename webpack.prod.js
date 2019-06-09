const common = require('./webpack.common')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

common.sassLoader.use.unshift(
  { loader: MiniCssExtractPlugin.loader }
)

module.exports = {
  mode: 'production',
  entry: common.entry,

  plugins: common.plugins.concat([
    new MiniCssExtractPlugin({
      filename: 'style.css',
      chunkFilename: 'style.css'
    }),
  ]),

  module: {
    rules: [
      common.sassLoader,
      common.vueLoader
    ]
  },

  output: common.output
}
