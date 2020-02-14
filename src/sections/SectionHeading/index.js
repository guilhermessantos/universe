import React, { useState } from 'react'
import t from 'prop-types'
import { Container, Content, Example } from '../../components/Container'
import { ContainerHeader } from '../../components/ContainerHeader'
import { ContainerSidebar } from '../../components/ContainerSidebar'

const SectionHeading = ({ headings, typographies }) => {
  const [active, setActive] = useState(Object.values(typographies)[0])
  const [activeSize, setActiveSize] = useState(Object.values(headings)[0])

  return (
    <Container>
      <ContainerHeader
        title="Heading"
        data={typographies}
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

SectionHeading.propTypes = {
  headings: t.object,
  typographies: t.object,
}

export default SectionHeading
