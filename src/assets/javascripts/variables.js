const typography = {
  primary: 'Arial, sans-serif',
  secondary: 'Arial, sans-serif',
}

const config = {
  'prefix': 'ui-',
  'prefix-modifier': 'is-'
}

module.exports = {
  config: config,

  color: {
    'prefix': `${config['prefix-modifier']}color-`,
    'list': {
      'gray': '#fafafa',
      'gray-200': '#E5E5E5',
      'black': '#000000',
      'white': '#ffffff',
      'link': '#f8f8f8'
    }
  },

  theme: {
    'prefix': `${config['prefix-modifier']}bg-`,
    'list': {
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
  },

  typography: typography,

  border: {
    'prefix-position': `${config['prefix-modifier']}b`,
    'prefix-size': `${config['prefix-modifier']}bw-`,
    'position': {
      'default': 'default',
      'top': 't',
      'right': 'r',
      'bottom': 'b',
      'left': 'l'
    },
    'size': {
      'small': '1px',
      'medium': '3px',
      'large': '5px'
    }
  },

  padding: {
    'prefix': `${config.prefix}p`,
    'separator': '-',
    'position': {
      'default': 'default',
      'top': 't',
      'bottom': 'b',
      'left': 'l',
      'right': 'r',
      'vertical': 'v',
      'horizontal': 'h'
    },
    'size': {
      'small': '10px',
      'medium': '20px',
      'large': '30px'
    }
  },

  display: {
    'prefix': `${config['prefix-modifier']}`,
    'list': [
      'none',
      'block',
      'inline',
      'inline-block',
      'flex',
      'inline-flex'
    ]
  },

  flex: {
    'prefix': `${config['prefix-modifier']}`,
    'separator': '-',
    'justify': {
      'start': 'flex-start',
      'end': 'flex-end',
      'between': 'space-between',
      'around': 'space-around',
      'center': 'center'
    },
    'align-items': {
      'start': 'flex-start',
      'end': 'flex-end',
      'center': 'center'
    }
  },

  headings: {
    'prefix': `${config.prefix}title`,
    'prefix-size': `${config['prefix-modifier']}`,
    'font-family': typography.primary,
    'line-height': '1.2',
    'size': {
      'h1': '24px',
      'h2': '20px',
      'h3': '18px',
      'h4': '16px',
      'h5': '14px',
      'h6': '12px'
    }
  },

  margin: {
    'prefix': `${config.prefix}m`,
    'separator': '-',
    'position': {
      'default': 'default',
      'top': 't',
      'bottom': 'b',
      'left': 'l',
      'right': 'r',
      'vertical': 'v',
      'horizontal': 'h'
    },
    'size': {
      'small': '10px',
      'medium': '20px',
      'large': '30px'
    }
  },

  breakpoint: {
    'prefix': `${config['prefix-modifier']}`,
    'size': {
      'sm': 577,
      'md': 769,
      'lg': 993,
      'xlg': 1201
    }
  },

  grid: {
    'col': 6,
    'gutter': 30,
    'container': 1140
  },

  text: {
    'prefix': `${config.prefix}text-`,
    'size': {
      'small': '12px',
      'medium': '16px',
      'large': '20px',
      'x-large': '30px'
    },

    'weight': {
      'semibold': 500,
      'bold': 700
    },

    'align': [
      'right',
      'center',
      'left'
    ],

    'transform': [
      'uppercase',
      'lowercase',
      'capitalize'
    ]
  },

  rounded: {
    'prefix': `${config['prefix-modifier']}rounded-`,
    'list': {
      'small': '1px',
      'medium': '2px',
      'large': '5px',
      'circle': '100%'
    }
  }
}
