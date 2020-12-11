import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 10px;
  }

  body {
    color: #656565;
    font-size: 1.6rem;
  }

  body,
  button {
    font-family: 'Roboto', sans-serif;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #4B494D;
  }

  p {
    line-height: 1.4;
  }
`

export default GlobalStyle
