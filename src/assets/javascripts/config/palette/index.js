const prefix = require('../prefix')

const palette = {
  'default': {
    'base': '#4d538c',
    'medium': '#474c81',
    'dark': '#3b406c'
  },
  'love': {
    'base': '#d60057',
    'medium': '#c50050',
    'dark': '#a40043'
  },
  'self-knowledge': {
    'base': '#95358c',
    'medium': '#893181',
    'dark': '#73296c'
  },
  'career': {
    'base': '#63a70a',
    'medium': '#5b9a09',
    'dark': '#4c8008'
  }
}

const paletteCSS = {
  'prefix': prefix.config.palette,
  'list': palette
}

module.exports = { 
  palette,
  paletteCSS
}
