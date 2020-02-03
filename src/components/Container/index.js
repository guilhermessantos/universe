import styled from 'styled-components'

export const Container = styled.section`
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;
  max-width: 1240px;
`
export const Content = styled.div`
  align-items: flex-start;
  display: ${props => props.sidebar && 'flex'};
  max-width: 900px;
  margin-left: auto;
`

export const Example = styled.div`
  flex: 1;
  margin-left: 30px;
`
