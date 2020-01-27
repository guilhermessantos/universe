const prefix = require('../prefix')

const list = [
  'none',
  'block',
  'inline',
  'inline-block',
  'flex',
  'inline-flex'
]

const display = {
  'prefix': prefix.config.display,
  list
}

module.exports = {
  display,
  list
}
