import React from 'react'
import { Container, Content, Example } from '../../components/Container'
import { ContainerHeader } from '../../components/ContainerHeader'
import { ContainerSidebar } from '../../components/ContainerSidebar'

const breakpoint = {
  sm: 577,
  md: 769,
  lg: 993,
  xlg: 1201,
}

const SectionBreakpoint = () => (
  <Container>
    <ContainerHeader title="Breakpoint" />

    <Content sidebar>
      <ContainerSidebar data={breakpoint} />

      <Example>SectionBreakpoint</Example>
    </Content>
  </Container>
)

export default SectionBreakpoint
