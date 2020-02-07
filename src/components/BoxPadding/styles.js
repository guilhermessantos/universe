import styled, { css } from 'styled-components'

export const Item = styled.div`
  background: #42153c;
  position: absolute;
  height: ${props => props.height && props.height};
  transition: height .4s, opacity .4s;
  width: 100%;

  ${props =>
    props.position === 'l' &&
    css`
      bottom: 0;
      right: 100%;
      transform-origin: bottom right;
      transform: rotate(90deg);
    `}

  ${props =>
    props.position === 'r' &&
    css`
      bottom: 0;
      left: 100%;
      transform-origin: bottom left;
      transform: rotate(-90deg);
    `}


  ${props =>
    props.position === 't' &&
    css`
      bottom: 0;
    `}

  ${props =>
    props.position === 'b' &&
    css`
      top: 0;
    `}
`

export const Container = styled.div`
  background: #6a3e86;
  height: 200px;
  transform: rotate(45deg);
  transition: transform 0.4s;
  position: relative;
  width: 200px;

  ${Item} {
    opacity: ${props => (props.position === 'default' ? '1' : '0')};

    &:last-child {
      opacity: ${props => props.position !== 'default' && 1};
    }
  }

  ${props =>
    props.position === 'b' &&
    css`
      transform: rotate(90deg);
    `}

  ${props =>
    props.position === 'l' &&
    css`
      transform: rotate(180deg);
    `}

  ${props =>
    props.position === 't' &&
    css`
      transform: rotate(270deg);
    `}

  ${props =>
    props.position === 'r' &&
    css`
      transform: rotate(0);
    `}
`
