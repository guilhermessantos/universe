import styled from 'styled-components'

export const Container = styled.div`
  align-items: center;
  border: 1px solid ${props => props.active ? '#D8D8D8' : '#FFF'};
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  margin: 0 -10px;
  transition: border-color .3s;
  height: 42px;
`

export const Value = styled.div`
  font-weight: bold;
`
