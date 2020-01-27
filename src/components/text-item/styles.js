import styled from 'styled-components'
import { SubTitle } from '../sub-title'

export const Item = styled.div`
  align-items: center;
  display: flex;
  width: 100%;

  + div {
    margin-top: 20px;
  }
`

export const ItemContent = styled.div`
  flex: 1;
`

export const SubTitleItem = styled(SubTitle)`
  min-width: 330px;
`
