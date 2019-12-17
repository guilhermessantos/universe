const prefix = require('../prefix')

const position = {
  'width': 'w',
  'height': 'h'
}

const size = [
  50,
  100
]

const sizes = {
  'prefix': prefix.config.sizes,
  position,
  size
}

module.exports = {
  sizes,
  size,
  position
}
