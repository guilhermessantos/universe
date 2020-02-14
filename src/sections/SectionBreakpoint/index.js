import React from 'react'
import t from 'prop-types'
import { Container, Content, Example } from '../../components/Container'
import { ContainerHeader } from '../../components/ContainerHeader'
import { ContainerSidebar } from '../../components/ContainerSidebar'
import Responsive from '../../images/responsive.svg'

const SectionBreakpoint = ({ breakpoints }) => (
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

SectionBreakpoint.propTypes = {
  breakpoints: t.object,
}

export default SectionBreakpoint
