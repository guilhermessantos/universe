import  styled, { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html,
  body,
  #__next {
    min-height: 100%;
  }

  #__next {
    color: #4A4A4A;
    display: flex;
    font-family: 'Source Sans Pro', sans-serif;
  }

  #content {
    flex: 1;
    padding-bottom: 120px;
  }

  pre .hljs {
    border: 1px solid #D8D8D8;
    padding: 30px;
    line-height: 1.4;
    margin-top: 60px;
  }
`

export const Chosen = styled.div`
  position: fixed;
  left: 30px;
  top: 30px;
`

export const Button = styled.button`
  color: #FFFF;
  cursor: pointer;
  content: ${props => props.nav};
  border-color: ${props => props.active ? '#fff' : 'transparent'};
  border-width: 1px;
  border-style: solid;
  background: transparent;
  padding: 10px;
  text-transform: uppercase;

  &:focus {
    outline: 0;
  }

  + button {
    margin-left: 10px;
  }
`

