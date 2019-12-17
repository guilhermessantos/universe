const prefix = require('../prefix')

const color = {
  'gray': '#fafafa',
  'gray-200': '#E5E5E5',
  'gray-500': '#555555',
  'black': '#000000',
  'white': '#ffffff',
  'link': '#f8f8f8'
}

const colorCSS = {
  'prefix': prefix.config.color,
  'list': color
}

module.exports = { 
  color, 
  colorCSS 
}
