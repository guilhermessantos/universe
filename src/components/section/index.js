import React from 'react'
import {
  SectionItem,
  SectionTitle,
  SectionContent
} from './styles'

const Section = ({ title, children, flex, id }) => (
  <SectionItem id={id}>
    <SectionTitle>
      <span>{title}</span>
    </SectionTitle>

    <SectionContent flex={flex}>
      {children}
    </SectionContent>
  </SectionItem>
)

export default Section
