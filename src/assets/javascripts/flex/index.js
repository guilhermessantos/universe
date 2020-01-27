const prefix = require('../prefix')

const justify = {
  'start': 'flex-start',
  'end': 'flex-end',
  'between': 'space-between',
  'around': 'space-around',
  'center': 'center'
}

const align = {
  'start': 'flex-start',
  'end': 'flex-end',
  'center': 'center'
}

const flex = {
  'prefix': {
    'align': prefix.config.flex.align,
    'justify': prefix.config.flex.justify
  },
  justify,
  align
}

module.exports = {
  flex,
  justify,
  align
}
