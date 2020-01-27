const prefix = {
  'default': 'ui-',
  'modifier': 'is-'
}

const config = {
  'border': {
    'position': `${prefix.modifier}b`,
    'size': `${prefix.modifier}bw-`
  },
  'color': `${prefix.modifier}color-`,
  'heading': {
    'prefix': `${prefix.default}title`,
    'size': prefix.modifier
  },
  'breakpoint': prefix.modifier,
  'margin': `${prefix.default}m`,
  'padding': `${prefix.default}p`,
  'palette': `${prefix.default}bg-`,
  'rounded': `${prefix.default}rounded-`,
  'text': `${prefix.default}text-`,
  'display': prefix.default,
  'sizes': prefix.default,
  'flex': {
    'align': `${prefix.default}align-`,
    'justify': `${prefix.default}justify-`
  }
}

const separator = '-'

module.exports = {
  prefix,
  config,
  separator
}
