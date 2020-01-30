import styled, { css } from 'styled-components'
import { Container as Wrap } from '../Container'

export const Container = styled(Wrap)`
  position: relative;
  z-index: 3;
`

export const Content = styled.div`
  align-items: flex-start;
  position: fixed;
  top: 150px;
  justify-content: center;
  height: calc(100vh - 150px);
  display: flex;
  flex-wrap: wrap;
  width: 55px;
`

export const Buttons = styled.div`
  border: 1px solid #42153c;
  border-radius: 20px;
  opacity: 0;
  transform: translateY(-15px);
  width: 30px;
`

export const Button = styled.button`
  background: transparent;
  color: #ed3947;
  cursor: pointer;
  border: 0;
  overflow: hidden;
  height: 50px;
  width: 100%;

  &:hover svg {
    opacity: 0;

    &:last-child {
      opacity: 1;
    }
  }

  > div {
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
    position: relative;
    pointer-events: none;
    transition: transform 0.3s;
  }

  svg {
    transition: transform 0.5s, opacity 0.2s;
    width: 12px;

    &:last-child {
      opacity: 0;
      position: absolute;
      z-index: 1;
    }
  }

  ${props =>
    props.action === 'prev' &&
    css`
      &:hover > div {
        transform: translateY(-100%);
      }

      svg:last-child {
        top: calc(50px + 6px);
        transform: translateY(100%);
      }
    `}

  ${props =>
    props.action === 'next' &&
    css`
      &:hover > div {
        transform: translateY(100%);
      }

      svg:last-child {
        bottom: calc(50px + 6px);
        transform: translateY(-100%);
      }
    `}
`

export const Line = styled.div`
  background: #42153c;
  bottom: 0;
  height: 0;
  content: '';
  position: absolute;
  width: 1px;
`

export const Menu = styled.div`
  position: absolute;
  left: calc(50% - 8px);
  top: 110px;
`

export const Text = styled.span`
  padding-left: 5px;
  opacity: 0;
  transition: opacity 0.3s, padding 0.3s;
`

export const Bullet = styled.span`
  background: #42153c;
  border: 4px solid #0f081e;
  border-radius: 100%;
  display: inline-block;
  height: 15px;
  opacity: 0;
  transform: scale(0);
  transition: background 0.3s, box-shadow 0.3s, transform 0.3s;
  width: 15px;
`

export const MenuItem = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  font-size: 12px;
  margin: 20px 0;

  &:hover ${Bullet} {
    background: #ed3947;
  }

  &.active ${Text}, &:hover ${Text} {
    opacity: 1;
    padding-left: 10px;
  }

  &.active ${Bullet} {
    background: #ed3947;
    box-shadow: 0 0 0 2px #42153c;
  }
`
