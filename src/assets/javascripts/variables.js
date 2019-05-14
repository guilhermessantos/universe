const typography = {
  primary: 'Arial, sans-serif',
  secondary: 'Arial, sans-serif',
}

module.exports = {
  config: {
    'prefix': 'ui-',
    'prefix-modifier': 'is-'
  },

  typography: typography,

  border: {
    'prefix': 'b',
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
    'prefix': 'p',
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

  color: {
    'gray-100': '#fafafa',
    'gray-200': '#E5E5E5',
    'black': '#000000',
    'white': '#ffffff',
    'link': '#f8f8f8'
  },

  theme: {
    'default': {
      'base': '#4d538c',
      'medium': '#474c81',
      'dark': '#3b406c'
    },
    'red': {
      'base': '#d60057',
      'medium': '#c50050',
      'dark': '#a40043'
    }
  },

  display: [
    'none',
    'block',
    'inline',
    'inline-block'
  ],

  flex: {
    'display': [
      'flex',
      'inline-flex'
    ],
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
    'prefix': 'm',
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
  }
}
