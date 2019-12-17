import React from 'react'
import { ThemeProvider } from 'styled-components'
import themeStyledComponents from '../assets/javascripts/config/styled-componets'

const App = () => (
  <ThemeProvider theme={themeStyledComponents}>
    Universe
  </ThemeProvider>
)

export default App
