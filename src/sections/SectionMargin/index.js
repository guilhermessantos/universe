import React, { useState } from 'react'
import { Container, Content, Example } from '../../components/Container'
import { ContainerHeader } from '../../components/ContainerHeader'
import { ContainerSidebar } from '../../components/ContainerSidebar'
import { BoxMargin } from '../../components/BoxMargin'

const SectionMargin = ({ margin }) => {
  const [activePosition, setActivePosition] = useState(
    Object.values(margin.position)[0]
  )
  const [activeSize, setActiveSize] = useState(Object.values(margin.size)[0])

  return (
    <Container>
      <ContainerHeader
        title="Margin"
        data={margin.position}
        active={activePosition}
        handleMenu={setActivePosition}
      />

      <Content sidebar>
        <ContainerSidebar
          data={margin.size}
          active={activeSize}
          handleMenu={setActiveSize}
        />

        <Example center>
          <BoxMargin size={activeSize} position={activePosition} />
        </Example>
      </Content>
    </Container>
  )
}

export default SectionMargin
