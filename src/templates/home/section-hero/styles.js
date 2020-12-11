import styled, { css } from 'styled-components'
import media from 'styled-media-query'

const sectionModifiers = {
  hasNavigation: () => css`
    height: calc(100vh - 60px);
  `
}

export const Section = styled.section`
  ${({ hasNavigation }) => css`
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    position: relative;
    overflow-x: hidden;
    margin-top: -81px;
    padding-top: 81px;

    ${hasNavigation && sectionModifiers.hasNavigation()}
  `}
`

export const Title = styled.h1`
  font-size: 6rem;
  text-transform: uppercase;
  font-weight: 700;
  line-height: 1;
`

export const Content = styled.div`
  max-width: 500px;

  small {
    color: #da3ecd;
    align-items: center;
    font-size: 1.4rem;
    line-height: 1;
    display: flex;
    text-align: center;
    justify-content: center;
    margin-top: 5px;

    &::before,
    &::after {
      content: '';
      height: 1px;
      width: 50px;
      background: #bdbdbd;
      margin: 0 10px;
    }
  }

  p {
    margin: 10px 0 20px;
  }
`

const thumbModifiers = {
  left: () => css`
    ${media.greaterThan('medium')`
      left: -120px;
      top: 0;
    `}

    ${media.greaterThan('large')`
      left: 0;
    `}
  `,

  right: () => css`
    ${media.greaterThan('medium')`
      right: -80px;
      bottom: 80px;
    `}

    ${media.greaterThan('large')`
      right: 0;
    `}
  `
}

export const Thumb = styled.div`
  ${({ position }) => css`
    position: absolute;
    display: none;

    ${media.greaterThan('medium')`
      display: block;
    `}

    ${!!position && thumbModifiers[position]()}
  `}
`

export const Version = styled.div`
  text-align: center;
  font-size: 1.4rem;
  margin-top: 10px;
  color: #bdbdbd;
`
