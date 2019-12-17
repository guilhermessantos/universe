const prefix = require('../prefix')

const size = {
  'small': '1px',
  'medium': '2px',
  'large': '5px',
  'circle': '100%'
}

const rounded = {
  size
}

const roundedCSS = {
  'prefix': prefix.config.rounded,
  size
}

module.exports = {
  size,
  rounded,
  roundedCSS
}
