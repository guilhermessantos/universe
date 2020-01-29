import styled from 'styled-components'

const Button = styled.a`
  border: 1px solid currentColor;
  border-radius: 20px;
  color: #ed3947;
  display: inline-block;
  font-size: 14px;
  padding: 8px 30px;
  text-transform: uppercase;
  text-decoration: none;
  transition: color 0.3s, border-color 0.3s;

  &:hover {
    color: #b43583;
  }
`

export { Button }
