import React from 'react'
import { SubTitle } from '../../components/sub-title'

const BreakpointItem = ({ props }) => (
  <div style={{ display: 'flex' }}>
    {Object.keys(props).map(item => (
      <SubTitle>{item}: {props[item]}px</SubTitle>
    ))}
  </div>
)

export default BreakpointItem
