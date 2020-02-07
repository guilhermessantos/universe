import React, { useState } from 'react'
import { Container, Content, Example } from '../../components/Container'
import { ContainerHeader } from '../../components/ContainerHeader'
import { ContainerSidebar } from '../../components/ContainerSidebar'
import { BoxMargin } from '../../components/BoxMargin'

const position = {
  default: 'default',
  bottom: 'b',
  left: 'l',
  top: 't',
  right: 'r',
}

const size = {
  'xx-small': '8px',
  'x-small': '16px',
  small: '24px',
  medium: '32px',
  large: '40px',
  'x-large': '56px',
  'xx-large': '64px',
  'wtf-large': '128px',
}

const SectionMargin = () => {
  const [activePosition, setActivePosition] = useState(
    Object.values(position)[0]
  )
  const [activeSize, setActiveSize] = useState(Object.values(size)[0])

  return (
    <Container>
      <ContainerHeader
        title="Margin"
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
          <BoxMargin size={activeSize} position={activePosition} />
        </Example>
      </Content>
    </Container>
  )
}

export default SectionMargin
