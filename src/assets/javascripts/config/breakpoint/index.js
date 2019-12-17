const prefix = require('../prefix')

const breakpoint = {
  'sm': 577,
  'md': 769,
  'lg': 993,
  'xlg': 1201
}

const breakpointCSS = {
  'prefix': prefix.config.breakpoint,
  'size': breakpoint
}

module.exports = {
  breakpoint,
  breakpointCSS
}
