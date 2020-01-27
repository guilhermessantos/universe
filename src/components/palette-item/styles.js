import styled from 'styled-components'

export const Color = styled.div`
  background: ${props => props.bg};
  color: #fff;
  height: 80px;
  padding: 10px;
  text-transform: uppercase;
  width: 100px;

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


