import React, { useState } from 'react'
import { Container, Content, Example } from '../../components/Container'
import { ContainerHeader } from '../../components/ContainerHeader'
import { ContainerSidebar } from '../../components/ContainerSidebar'

const headings = require('../../../config/headings.js').default
const tipographys = require('../../../config/typographies').default

const SectionHeading = () => {
  const [active, setActive] = useState(Object.values(tipographys)[0])
  const [activeSize, setActiveSize] = useState(Object.values(headings)[0])

  return (
    <Container>
      <ContainerHeader
        title="Heading"
        data={tipographys}
        active={active}
        handleMenu={setActive}
      />

      <Content sidebar>
        <ContainerSidebar
          data={headings}
          active={activeSize}
          handleMenu={setActiveSize}
        />

        <Example style={{ fontSize: activeSize, fontFamily: active }}>
          Lorem Ipsum é simplesmente uma simulação de texto da indústria
        </Example>
      </Content>
    </Container>
  )
}

export default SectionHeading
