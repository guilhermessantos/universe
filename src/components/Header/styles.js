import styled, { css } from 'styled-components'

export const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 30px 0 0;
`

export const Col = styled.div`
  width: ${props => (props.position === 'center' ? '100%' : '25%')};

  ${props =>
    props.position === 'center' &&
    css`
      text-align: center;
    `}

  ${props =>
    props.position === 'right' &&
    css`
      text-align: right;
    `}
`

export const Branding = styled.div`
  height: 55px;
  position: relative;
  width: 55px;

  span {
    background: #b43583;
    border-radius: 100%;
    display: inline-block;
    height: 35px;
    position: absolute;
    width: 35px;
  }

  span:nth-child(2),
  span:nth-child(3) {
    bottom: 0;
  }

  span:nth-child(1) {
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    z-index: 3;
  }

  span:nth-child(2) {
    background: #ed3947;
    left: 0;
    z-index: 1;
  }

  span:nth-child(3) {
    background: #73308a;
    right: 0;
    z-index: 2;
  }
`

export const Menu = styled.ul`
  list-style: none;
`

export const MenuItem = styled.li`
  display: inline-block;
  margin: 0 10px;

  a {
    color: #ffffff;
    text-decoration: none;
  }
`
