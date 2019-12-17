const prefix = require('../prefix');

const position = {
  'default': 'default',
  'top': 't',
  'bottom': 'b',
  'left': 'l',
  'right': 'r',
  'vertical': 'v',
  'horizontal': 'h'
}

const size = {
  'small': '10px',
  'medium': '20px',
  'large': '30px'
}

const padding = {
  size
}

const paddingCSS = {
  'prefix': prefix.config.padding,
  position,
  size
}

module.exports = {
  position,
  size,
  padding,
  paddingCSS
}
