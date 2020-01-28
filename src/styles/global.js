import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  * {
    box-sizing: border-box;
    margin: 0;
    outline: 0;
    padding: 0;
  }

  body {
    background: #0F081E;
    color: #FFFFFE;
    font: 16px/1.2 'Roboto', sans-serif;
    overflow: hidden;
  }
`
