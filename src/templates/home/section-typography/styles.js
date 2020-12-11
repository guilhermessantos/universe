import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Tabs = styled.div`
  display: flex;
  align-items: center;
  margin: 30px auto 0;
  padding: 0 20px;
  justify-content: center;
  flex-wrap: wrap;
`

const tabModifiers = {
  active: () => css`
    background: #da3ecd;
    color: #fff;
    cursor: default;

    &:hover {
      color: #fff;
    }
  `
}

export const Tab = styled.div`
  ${({ active }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    flex-direction: column;
    line-height: 1;
    height: 40px;
    cursor: pointer;
    padding: 0 20px;
    margin: 10px 0;
    border-radius: 30px;
    transition: background 0.2s, color 0.2s;

    &:hover {
      color: #da3ecd;
    }

    span {
      display: block;
      width: 100%;

      &:last-child {
        font-size: 1.2rem;
      }
    }

    ${media.greaterThan('medium')`
      padding: 0 30px;
      margin: 0;
    `}

    ${!!active && tabModifiers.active()}
  `}
`

export const Sizes = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  margin-bottom: 20px;
  flex-wrap: wrap;

  ${media.greaterThan('medium')`
    margin-bottom: 0;
    text-align: left;
    display: block;
    right: calc(100% + 50px);
    top: 50%;
    transform: translateY(-50%);
    border-left: 1px solid #bdbdbd;
    padding: 20px 0 20px 20px;
    position: absolute;
    overflow: initial;
  `}
`

const sizeModifiers = {
  active: () => css`
    color: #da3ecd;
    cursor: default;

    &::before {
      background: currentColor;
      box-shadow: 0 0 0 5px #fff;
    }

    span {
      color: inherit;
    }
  `
}

export const Size = styled.div`
  ${({ active }) => css`
    margin: 15px;
    position: relative;
    cursor: pointer;
    transition: color 0.2s;

    span {
      font-size: 1.2rem;
      display: block;
    }

    ${media.greaterThan('medium')`
      margin: 15px 0;

      &::before {
        content: '';
        left: -23px;
        top: 50%;
        width: 5px;
        height: 5px;
        background: #bdbdbd;
        border-radius: 100%;
        position: absolute;
        transform: translateY(-50%);
        transition: background 0.2s, box-shadow 0.2s;
      }

      span {
        position: absolute;
        right: calc(100% + 40px);
        top: 3px;
        transition: color 0.2s;
      }
    `}

    ${active && sizeModifiers.active()}
  `}
`

export const Example = styled.div`
  position: relative;
  margin: 40px auto 0;
  max-width: 460px;

  ${media.greaterThan('medium')`
    height: 300px;
    width: 460px;
  `}
`

export const ExampleContent = styled.div`
  border: 1px solid #bdbdbd;
  border-radius: 6px;
  width: inherit;
  height: inherit;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    padding: 20px;
    overflow: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: inherit;
    height: inherit;
  }
`

export const ExampleTitle = styled.span`
  text-transform: uppercase;
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
  background: #fff;
  padding: 0 15px;
`
