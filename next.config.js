const sass = require('node-sass')
const sassUtils = require('node-sass-utils')(sass)
const withSass = require('@zeit/next-sass')

module.exports = withSass({
  sassLoaderOptions: {
    includePaths: ['./src/assets'],
    functions: {
      'get($keys)': function(keys) {
        keys = keys.getValue().split('.')
        let result = require(__dirname + '/src/assets/javascripts/config/index.js')

        for (let i = 0; i < keys.length; i++) {
          result = result[keys[i]]
        }

        result = sassUtils.castToSass(result)
        return result
      }
    }
  }
})
