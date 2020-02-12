import React, { useState } from 'react'
import { Container, Content, Example } from '../../components/Container'
import { ContainerHeader } from '../../components/ContainerHeader'
import { ContainerSidebar } from '../../components/ContainerSidebar'
import { BoxBorder } from '../../components/BoxBorder'

const borderSize = require('../../../config/border-size.js').default
const borderPosition = require('../../../config/border-position.js').default

const SectionBorder = () => {
  const [activePosition, setActivePosition] = useState(
    Object.values(borderPosition)[0]
  )
  const [activeSize, setActiveSize] = useState(Object.values(borderSize)[0])

  return (
    <Container>
      <ContainerHeader
        title="Border"
        data={borderPosition}
        active={activePosition}
        handleMenu={setActivePosition}
      />

      <Content sidebar>
        <ContainerSidebar
          data={borderSize}
          active={activeSize}
          handleMenu={setActiveSize}
        />

        <Example center>
          <BoxBorder
            style={{
              borderWidth: activeSize,
              borderStyle: `${activePosition === 'default' ? 'solid' : 'none'}`,
              borderColor: '#42153c',
            }}
            position={activePosition}
          />
        </Example>
      </Content>
    </Container>
  )
}

export default SectionBorder
