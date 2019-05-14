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
    'position': {
      'top': 't',
      'right': 'r'
    },
    'size': {
      'small': '10px',
      'medium': '30px'
    }
  },

  color: {
    'gray-100': '#fafafa',
    'gray-200': '#E5E5E5',
    'black': '#000000',
    'white': '#ffffff',
    'link': '#f8f8f8'
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
  }
}
