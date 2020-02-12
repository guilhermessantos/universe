import styled, { css } from 'styled-components'

const Button = styled.a`
  background: #0f081e;
  border: 1px solid currentColor;
  border-radius: 20px;
  color: #ed3947;
  cursor: pointer;
  display: inline-block;
  font-size: 14px;
  padding: 8px 30px;
  text-transform: uppercase;
  text-decoration: none;
  position: relative;
  transition: color 0.3s, border-color 0.3s;
  overflow: hidden;

  &::after {
    align-items: center;
    justify-content: center;
    display: flex;
    background: #0f081e;
    bottom: calc(100% + 1px);
    content: attr(data-text);
    position: absolute;
    transition: transform 0.3s;
    left: 0;
    height: 100%;
    width: 100%;
  }

  ${props =>
    props['data-text'] &&
    css`
      &:hover {
        color: #b43583;

        &::after {
          transform: translateY(calc(100% + 1px));
        }
      }
    `}
`

export { Button }
