const common = require('./webpack.common')

common.sassLoader.use.unshift('style-loader')

module.exports = {
  mode: 'development',
  entry: common.entry,
  devtool: 'inline-source-map',

  devServer: {
    contentBase: common.dist,
    port: 8000,
    open: true,
    hot: true
  },

  module: {
    rules: [
      common.sassLoader,
      common.vueLoader,
      common.svgLoader
    ]
  },

  plugins: common.plugins
}
