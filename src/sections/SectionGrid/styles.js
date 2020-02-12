import styled from 'styled-components'
import { Col as ColGrid } from '../../components/Grid'

export const FullSection = styled.div`
  position: relative;
`

export const Container = styled.div`
  background: #0d051d;
  position: absolute;
  left: 0;
  height: 100%;
  width: 100%;
  top: 0;
  transform: translateX(${props => (props.active ? '0' : '100%')});
  opacity: ${props => (props.active ? '1' : '0')};
  transition: transform 0.6s, opacity 0.6s;
  z-index: 10;
`

export const InnerBox = styled.div`
  font: 16px/1.2 'Roboto', sans-serif;

  > div {
    margin-left: auto;
    margin-right: auto;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`

export const Buttons = styled.div`
  margin: 60px auto;
  text-align: center;
  word-wrap: wrap;
  width: 100%;
`

export const Button = styled.div`
  color: #ed3947;
  align-items: center;
  background: ${props => (props.active ? '#42153c' : 'transparent')};
  cursor: pointer;
  display: inline-flex;
  height: 40px;
  font-size: 14px;
  padding: 0 30px;
  border: 1px solid #42153c;
  border-left: 0;
  transition: background 0.3s;

  &:first-child {
    border-left: 1px solid #42153c;
    border-radius: 20px 0 0 20px;
  }

  &:last-child {
    border-radius: 0 20px 20px 0;
  }
`

export const Col = styled(ColGrid)`
  margin-bottom: 15px;
  margin-top: 15px;

  div {
    background: #ed3947;
    height: 100px;
    line-height: 100px;
    opacity: 0.5;
    text-align: center;
  }
`

export const Close = styled.div`
  color: #ed3947;
  position: absolute;
  cursor: pointer;
  right: 60px;
  top: 60px;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.5;
  }
`
