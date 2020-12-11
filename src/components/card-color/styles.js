import styled, { css } from 'styled-components'

const wrapperModifiers = {
  isLight: () => css`
    border: 1px solid #bdbdbd;
    color: #4b494d;
  `
}

export const Wrapper = styled.div`
  ${({ isLight }) => css`
    overflow: hidden;
    border-radius: 6px;
    width: 140px;
    border: 1px solid #fff;
    color: #fff;

    ${isLight && wrapperModifiers.isLight()}
  `}
`

export const Color = styled.div`
  ${({ background }) => css`
    height: 120px;
    background: ${background};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  `}
`

export const Name = styled.div`
  font-size: 1.2rem;
`

export const Hex = styled.div`
  text-transform: uppercase;
`
