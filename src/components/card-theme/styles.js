import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  width: 140px;
`

export const Colors = styled.div`
  overflow: hidden;
  border-radius: 6px;
`

export const Title = styled.small`
  color: #bdbdbd;
  text-align: center;
  display: block;
  margin-bottom: 5px;
`

const colorModifiers = {
  isLight: () => css`
    color: #4b494d;
    border: 1px solid #bdbdbd;

    &:first-child {
      border-radius: 6px 6px 0 0;
    }

    &:not(:first-child) {
      border-top: 1px solid transparent;
    }
  `
}

export const Color = styled.div`
  ${({ background, isLight }) => css`
    height: 60px;
    background: ${background};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: #fff;

    ${isLight && colorModifiers.isLight()}
  `}
`

export const Name = styled.div`
  font-size: 1.2rem;
`

export const Hex = styled.div`
  text-transform: uppercase;
`
