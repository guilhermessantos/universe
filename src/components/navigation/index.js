import React from 'react'
import {
  Nav,
  Item,
  Container
} from './styles'

const menu = [
  'typography',
  'palette',
  'color',
  'text',
  'text-size',
  'heading',
  'margin',
  'padding',
  'border',
  'rounded',
]

const Navigation = () => (
  <Nav>
    <Container>
      {menu.map(item => (
        <Item href={`#${item}`} key={item}>{item.replace('-', ' ')}</Item>
      ))}
    </Container>
  </Nav>
)

export default Navigation
