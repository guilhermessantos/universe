import React, { useState } from 'react'
import { Container, Content, Example } from '../../components/Container'
import { ContainerHeader } from '../../components/ContainerHeader'
import { ContainerSidebar } from '../../components/ContainerSidebar'
import { BoxRounded } from '../../components/BoxRounded'

const SectionRounded = ({ rounded }) => {
  const [activeSize, setActiveSize] = useState(Object.values(rounded)[0])

  return (
    <Container>
      <ContainerHeader title="Rounded" />

      <Content sidebar>
        <ContainerSidebar
          data={rounded}
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
