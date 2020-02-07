import React, { useState } from 'react'
import { Container, Content, Example } from '../../components/Container'
import { ContainerHeader } from '../../components/ContainerHeader'
import { ContainerSidebar } from '../../components/ContainerSidebar'
import { BoxRounded } from '../../components/BoxRounded'

const size = {
  small: '5px',
  medium: '10px',
  large: '20px',
  circle: '100%',
}

const SectionRounded = () => {
  const [activeSize, setActiveSize] = useState(Object.values(size)[0])

  return (
    <Container>
      <ContainerHeader title="Rounded" />

      <Content sidebar>
        <ContainerSidebar
          data={size}
          active={activeSize}
          handleMenu={setActiveSize}
        />

        <Example center>
          <BoxRounded
            style={{
              borderRadius: activeSize,
            }}
          />
        </Example>
      </Content>
    </Container>
  )
}

export default SectionRounded
