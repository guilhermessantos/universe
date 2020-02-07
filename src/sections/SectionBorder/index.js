import React, { useState } from 'react'
import { Container, Content, Example } from '../../components/Container'
import { ContainerHeader } from '../../components/ContainerHeader'
import { ContainerSidebar } from '../../components/ContainerSidebar'
import { BoxBorder } from '../../components/BoxBorder'

const position = {
  default: 'default',
  bottom: 'b',
  left: 'l',
  top: 't',
  right: 'r',
}

const size = {
  small: '1px',
  medium: '3px',
  large: '5px',
}

const SectionBorder = () => {
  const [activePosition, setActivePosition] = useState(
    Object.values(position)[0]
  )
  const [activeSize, setActiveSize] = useState(Object.values(size)[0])

  return (
    <Container>
      <ContainerHeader
        title="Border"
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
