const prefix = require('../prefix')

const size = {
  'small': '12px',
  'medium': '16px',
  'large': '20px',
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
  size
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
