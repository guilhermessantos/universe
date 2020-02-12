import React, { useState } from 'react'
import { Container, Content, Example } from '../../components/Container'
import { ContainerHeader } from '../../components/ContainerHeader'
import { ContainerSidebar } from '../../components/ContainerSidebar'
import { BoxMargin } from '../../components/BoxMargin'

const marginSize = require('../../../config/margin-size').default
const marginPosition = require('../../../config/margin-position').default

const SectionMargin = () => {
  const [activePosition, setActivePosition] = useState(
    Object.values(marginPosition)[0]
  )
  const [activeSize, setActiveSize] = useState(Object.values(marginSize)[0])

  return (
    <Container>
      <ContainerHeader
        title="Margin"
        data={marginPosition}
        active={activePosition}
        handleMenu={setActivePosition}
      />

      <Content sidebar>
        <ContainerSidebar
          data={marginSize}
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
