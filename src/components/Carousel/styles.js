import styled from 'styled-components'
import tinycolor from 'tinycolor2'

export const Container = styled.div`
  position: relative;
`

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -10px 0 0 -10px;
  transition: transform 0.4s;
`

export const Item = styled.div`
  font-size: 12px;
  margin: 0 10px;
  padding-bottom: 40px;
  position: relative;
  transition: opacity 0.4s, transform 0.4s;
  width: 170px;

  &::before {
    background: #d8d8d8;
    border-radius: 10px;
    color: #0e071c;
    padding: 10px;
    position: absolute;
    content: attr(data-text);
    bottom: calc(100% - 20px);
  }

  &:nth-child(2n) {
    transform: translateY(30px);
  }

  &:nth-child(4n + 3) {
    transform: translateY(-30px);
  }

  &.prev {
    opacity: 0;
    transform: translateY(-100px);
  }
`

export const Color = styled.div`
  align-items: center;
  color: ${props => (tinycolor(props.bg).isLight() ? '#000' : '#FFF')};
  display: flex;
  border-radius: 10px;
  margin-top: -15px;
  min-height: 50px;
  overflow: hidden;
  padding: 15px 10px 30px 10px;
  text-transform: uppercase;

  &:first-child {
    margin-top: 0;
    align-items: flex-end;
    height: 150px;
  }

  &:last-child {
    padding-top: 0;
    padding-bottom: ${props => (props.box ? '10px' : 0)};
  }
`

export const Buttons = styled.div`
  position: absolute;
  overflow: hidden;
  right: 0;
  top: 0;
  width: 30px;
  border-radius: 50px;
`

export const Button = styled.button`
  color: #0f081e;
  background: #42153c;
  border: 0;
  height: 50px;
  width: 100%;
  transition: background 0.3s, opacity 0.3s;
  opacity: ${props => (props.active ? 1 : 0.5)};
  cursor: ${props => (props.active ? 'pointer' : 'default')};

  &:last-child {
    border-top: 1px solid #0f081e;
  }

  &:hover {
    background: ${props => (props.active ? '#ed3947' : '#42153c')};
  }
`
