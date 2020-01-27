const typography = require('../typography')
const prefix = require('../prefix')

const css = {
  'font-family': typography.primary,
  'line-height': '1.2'
}

const size = {
  'h1': '28px',
  'h2': '21px',
  'h3': '18px',
  'h4': '16px',
  'h5': '15px',
  'h6': '14px'
}

const heading = {
  'prefix': prefix.config.heading.prefix,
  'prefix-size': prefix.config.heading.size,
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
