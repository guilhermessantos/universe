import styled from 'styled-components'

export const SectionItem = styled.section`
  margin-top: 120px;
  padding-right: 60px;
`

export const SectionTitle = styled.h2`
  color: #994FF3;
  font-size: 34px;
  font-weight: bold;
  margin-bottom: 60px;  
  position: relative;

  &::before {
    background: #D8D8D8;
    content: '';
    left: 0;
    height: 1px;
    position: absolute;
    top: calc(50% + 5px);
    right: 0;
  }

  span {
    background: #fff;
    display: inline-block;
    padding-right: 30px;
    position: relative;
  }
`

export const SectionContent = styled.div`
  > div {
    display: ${props => props.flex && 'flex'};
    justify-content: space-between;    
  }

  > div > div {
    flex: 1;
  }
`
