import styled from 'styled-components'
import { SubTitle } from '../sub-title'

export const Section = styled.section`
  background: #fff;
  font-family: ${props => props.item};
  display: flex;

  + section {
    margin-top: 30px;
  }
`

export const BigLetter = styled.div`
  font-size: 120px;
  line-height: 1;
  min-width: 180px;
  margin-right: 30px;
`

export const Letters = styled.div`
  margin-right: 60px;
  min-width: 300px;
  line-height: 1.6;

  .uppercase {
    text-transform: uppercase;
  }
`

export const SubTitleTypography = styled(SubTitle)`
  display: block;
  margin-bottom: 10px;
`

export const Example = styled.div`
  line-height: 1.2;

  strong {
    display: block;
    margin-bottom: 10px;
  }
`
