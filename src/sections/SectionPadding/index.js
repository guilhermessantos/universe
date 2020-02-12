import React, { useState } from 'react'
import { Container, Content, Example } from '../../components/Container'
import { ContainerHeader } from '../../components/ContainerHeader'
import { ContainerSidebar } from '../../components/ContainerSidebar'
import { BoxPadding } from '../../components/BoxPadding'

const paddingSize = require('../../../config/padding-size').default
const paddingPosition = require('../../../config/padding-position').default

const SectionPadding = () => {
  const [activePosition, setActivePosition] = useState(
    Object.values(paddingPosition)[0]
  )
  const [activeSize, setActiveSize] = useState(Object.values(paddingSize)[0])

  return (
    <Container>
      <ContainerHeader
        title="Padding"
        data={paddingPosition}
        active={activePosition}
        handleMenu={setActivePosition}
      />

      <Content sidebar>
        <ContainerSidebar
          data={paddingSize}
          active={activeSize}
          handleMenu={setActiveSize}
        />

        <Example center>
          <BoxPadding size={activeSize} position={activePosition} />
        </Example>
      </Content>
    </Container>
  )
}

export default SectionPadding
