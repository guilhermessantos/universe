import styled from 'styled-components'

export const SubTitle = styled.strong`
  color: #303030;
  font: bold 17px/1 'Source Sans Pro', sans-serif;

  &::before {
    background: #994FF3;
    border-radius: 100%;
    content: '';
    display: inline-block;
    height: 10px;
    margin-right: 10px;
    width: 10px;
  }
`
