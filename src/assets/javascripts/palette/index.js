const prefix = require('../prefix')

const list = {
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
    'base': '#5e9f09',
    'medium': '#5b9a09',
    'dark': '#4c8008'
  },
  'money': {
    'base': '#007934',
    'medium': '#007030',
    'dark': '#005d28'
  },
  'future': {
    'base': '#ff5000',
    'medium': '#eb4a00',
    'dark': '#c43d00'
  },
  'health': {
    'base': '#00838f',
    'medium': '#007480',
    'dark': '#00626b'
  },
  'self-esteem': {
    'base': '#f7323f',
    'medium': '#e42e3a',
    'dark': '#be2630'
  },
  'house': {
    'base': '#f38b00',
    'medium': '#e08000',
    'dark': '#bb6b00'
  },
  'spirituality': {
    'base': '#77226c',
    'medium': '#6e1f64',
    'dark': '#5b1a53'
  },
  'food': {
    'base': '#009ad6',
    'medium': '#0094ce',
    'dark': '#007cab'
  },
  'family': {
    'base': '#b12470',
    'medium': '#a32167',
    'dark': '#881c56'
  },
  'fire': {
    'base': '#d60057',
    'medium': '#c50050',
    'dark': '#a40043'
  },
  'earth': {
    'base': '#63a70a',
    'medium': '#5b9a09',
    'dark': '#4c8008'
  },
  'air': {
    'base': '#f38b00',
    'medium': '#e08000',
    'dark': '#bb6b00'
  },
  'water': {
    'base': '#00a1df',
    'medium': '#0094ce',
    'dark': '#007cab'
  }
}

const paletteCSS = {
  'prefix': prefix.config.palette,
  list
}

const palette = {
  'prefix': prefix.config.palette,
  list
}

module.exports = { 
  palette,
  paletteCSS
}
