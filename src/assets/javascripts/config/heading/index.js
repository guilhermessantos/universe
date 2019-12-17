const typography = require('../typography')
const prefix = require('../prefix')

const css = {
  'font-family': typography.primary,
  'line-height': '1.2'
}

const size = {
  'h1': '29px',
  'h2': '20px',
  'h3': '18px',
  'h4': '16px',
  'h5': '14px',
  'h6': '10px'
}

const heading = {
  size,
  css
}

const headingCSS = {
  'prefix': prefix.config.heading.prefix,
  'prefix-size': prefix.config.heading.size,
  size,
  css
}

module.exports = {
  heading,
  headingCSS
}
