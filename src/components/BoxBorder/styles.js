import styled, { css } from 'styled-components'

export const Container = styled.div`
  background: #6a3e86;
  height: 200px;
  width: 200px;
  transform: rotate(45deg);
  transition: transform 0.3s, border 0.3s;

  ${props =>
    props.position !== 'default' &&
    css`
      border-bottom-style: solid !important;
    `}

  ${props =>
    props.position === 'b' &&
    css`
      transform: rotate(0);
    `}

  ${props =>
    props.position === 'l' &&
    css`
      transform: rotate(90deg);
    `}

  ${props =>
    props.position === 'r' &&
    css`
      transform: rotate(270deg);
    `}

  ${props =>
    props.position === 't' &&
    css`
      transform: rotate(180deg);
    `}
`
