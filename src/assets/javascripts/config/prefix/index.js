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
  'margin': `${prefix.default}`,
  'padding': `${prefix.default}`,
  'palette': `${prefix.default}`,
  'rounded': `${prefix.default}`,
  'text': `${prefix.default}`,
  'display': prefix.default,
  'sizes': prefix.default,
  'flex': {
    'align': prefix.default,
    'justify': prefix.default
  }
}

const separator = '-'

module.exports = {
  prefix,
  config,
  separator
}
