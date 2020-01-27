import styled from 'styled-components'
import tinycolor from 'tinycolor2'

export const Color = styled.div`
  background: ${props => props.bg};
  color: ${props => tinycolor(props.bg).isLight() ? '#000' : '#fff'};
  box-shadow: ${props => tinycolor(props.bg).isLight() && '0 0 0 1px #D8D8D8 inset'};
  height: 80px;
  padding: 10px;
  text-transform: uppercase;
  width: 100px;
  background: ${props => props.bg};

  + div {
    align-items: center;
    display: flex;
    height: 25px;
    padding: 0 0 0 10px;
  }
`

export const ColorWrapper = styled.div`
  display: inline-block;
  font-size: 11px;
  margin: 10px;
`

export const Container = styled.div`
  margin: -10px;
`

export const Name = styled.span`
  display: block;
  margin-top: 5px;
`


