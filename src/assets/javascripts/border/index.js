const prefix = require('../prefix')

const position = {
  'default': 'default',
  'bottom': 'b',
  'left': 'l',
  'right': 'r',
  'top': 't'
}

const size = {
  'small': '1px',
  'medium': '3px',
  'large': '5px'
}

const border = {
  'prefix-position': prefix.config.border.position,
  'prefix-size': prefix.config.border.size,
  size,
  position
}

const borderCSS = {
  'prefix-position': prefix.config.border.position,
  'prefix-size': prefix.config.border.size,
  position,
  size
}

module.exports = { 
  border,
  borderCSS,
  position,
  size
}
