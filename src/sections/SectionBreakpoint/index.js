import React from 'react'
import { Container, Content, Example } from '../../components/Container'
import { ContainerHeader } from '../../components/ContainerHeader'
import { ContainerSidebar } from '../../components/ContainerSidebar'
import Responsive from '../../images/responsive.svg'

const breakpoints = require('../../../config/breakpoints.js').default

const SectionBreakpoint = () => (
  <Container>
    <ContainerHeader title="Breakpoints" />

    <Content sidebar>
      <ContainerSidebar data={breakpoints} />

      <Example>
        <Responsive />
      </Example>
    </Content>
  </Container>
)

export default SectionBreakpoint
