import React, { useState } from 'react'
import { Container, Content, Example } from '../../components/Container'
import { ContainerHeader } from '../../components/ContainerHeader'
import { ContainerSidebar } from '../../components/ContainerSidebar'

const menu = {
  primary: 'Arial',
  secondary: 'Montserrat',
  tert: 'Comic Sans MS',
}

const size = {
  h1: '28px',
  h2: '21px',
  h3: '18px',
  h4: '16px',
  h5: '15px',
  h6: '14px',
}

const SectionHeading = () => {
  const [active, setActive] = useState(Object.values(menu)[0])
  const [activeSize, setActiveSize] = useState(Object.values(size)[0])

  return (
    <Container>
      <ContainerHeader
        title="Heading"
        data={menu}
        active={active}
        handleMenu={setActive}
      />

      <Content sidebar>
        <ContainerSidebar
          data={size}
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

export default SectionHeading
