import React, { useState } from 'react'
import { Container, Content, Example } from '../../components/Container'
import { ContainerHeader } from '../../components/ContainerHeader'
import { ContainerSidebar } from '../../components/ContainerSidebar'
import { BoxPadding } from '../../components/BoxPadding'

const position = {
  default: 'default',
  bottom: 'b',
  left: 'l',
  top: 't',
  right: 'r',
}

const size = {
  'x-small': '4px',
  small: '8px',
  medium: '16px',
  large: '32px',
  'x-large': '64px',
}

const SectionPadding = () => {
  const [activePosition, setActivePosition] = useState(
    Object.values(position)[0]
  )
  const [activeSize, setActiveSize] = useState(Object.values(size)[0])

  return (
    <Container>
      <ContainerHeader
        title="Padding"
        data={position}
        active={activePosition}
        handleMenu={setActivePosition}
      />

      <Content sidebar>
        <ContainerSidebar
          data={size}
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
