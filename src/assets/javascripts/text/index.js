const prefix = require('../prefix')

const size = {
  'default': '18px',
  'x-small': '12px',
  'small': '14px',
  'medium': '16px',
  'large': '25px',
  'x-large': '30px'
}

const weight = {
  'semibold': 500,
  'bold': 700
}

const align = [
  'right',
  'center',
  'left'
]

const transform = [
  'uppercase',
  'lowercase',
  'capitalize'
]

const text = {
  'prefix': prefix.config.text,
  size,
  weight,
  align,
  transform
}

const textCSS = {
  'prefix': prefix.config.text,
  weight,
  align,
  transform,
  size
}

module.exports = { 
  size,
  text,
  textCSS
}
