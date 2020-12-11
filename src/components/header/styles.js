import styled, { css } from 'styled-components'
import media from 'styled-media-query'

const wrapperModifiers = {
  hasNavigation: () => css`
    border-bottom: 0;

    ${Icon} {
      left: 50%;
      transform: translate(-50%, -50%);
      right: initial;
    }
  `
}

export const Wrapper = styled.header`
  ${({ hasNavigation }) => css`
    border-bottom: 1px solid #bdbdbd;

    > div {
      align-items: center;
      display: flex;
      height: 80px;
      justify-content: center;
      position: relative;
      z-index: 1;
    }

    ${hasNavigation && wrapperModifiers.hasNavigation()}
  `}
`

const navModifiers = {
  active: () => css`
    visibility: visible;
    opacity: 1;
    transform: translateY(0);
  `
}

export const Nav = styled.nav`
  ${({ active }) => css`
    position: absolute;
    top: 100%;
    left: 0;
    background: #dcdcdc;
    width: 100%;
    z-index: 1;
    opacity: 0;
    visibility: hidden;
    transition: visibility 0.3s, opacity 0.3s, transform 0.3s;
    transform: translateY(5px);
    text-transform: capitalize;

    a {
      color: inherit;
      text-decoration: none;
      transition: color 0.3s;
      font-size: 1.4rem;
      padding: 15px 0;
      display: block;

      &:hover {
        color: #da3ecd;
      }
    }

    ul {
      list-style: none;
    }

    li {
      margin: 0 15px;
    }

    ${media.greaterThan('large')`
      display: inline-block;
      background: #fff;
      position: static;
      width: auto;
      visibility: visible;
      opacity: 1;
      transform: none;

      ul {
        display: flex;
      }
    `}

    ${active && navModifiers.active()}
  `}
`

export const Icon = styled.a`
  position: absolute;
  background: #fff;
  border: 5px solid #fff;
  border-radius: 100%;
  color: inherit;
  right: 15px;
  display: block;
  top: 50%;
  transform: translateY(-50%);
  transition: color 0.3s;

  &:hover {
    color: #da3ecd;
  }

  svg {
    display: block;
    margin: 0 auto;
    fill: currentColor;
  }
`

const hamburgerModifiers = {
  active: () => css`
    span {
      background: transparent;
    }

    span::before,
    span::after {
      top: 0;
    }

    span::before {
      transform: rotate(45deg);
    }

    span::after {
      transform: rotate(-45deg);
    }
  `
}

export const Hamburger = styled.button`
  ${({ active }) => css`
    background: transparent;
    height: 30px;
    width: 26px;
    left: 20px;
    position: absolute;
    top: 50%;
    border: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translateY(-50%);
    color: currentColor;
    outline: 0;

    span,
    span::before,
    span::after {
      border-radius: 10px;
      height: 4px;
      width: inherit;
      background: currentColor;
      display: block;
      position: absolute;
      left: 0;
      transition: transform 0.3s, top 0.3s, background 0.3s;
    }

    span::before,
    span::after {
      content: '';
    }

    span::before {
      top: -8px;
    }

    span::after {
      bottom: -8px;
    }

    ${active && hamburgerModifiers.active()}

    ${media.greaterThan('large')`
      display: none;
    `}
  `}
`
