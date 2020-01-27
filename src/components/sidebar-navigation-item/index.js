import React from 'react'
import { SubTitle } from '../sub-title'
import {
  Container,
  Value
} from './styles'

export const SidebarNavigationItem = ({ title, value, handleClick, active, hideValue, hideKey }) => (
  <Container onClick={handleClick} active={(!hideValue ? value : title) == active}>
    <>
      <SubTitle>{!hideKey ? title : value}</SubTitle>
      {(!hideValue && !hideKey) && <Value>{value}</Value>}
    </>    
  </Container>
)
