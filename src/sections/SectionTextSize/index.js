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
  default: '18px',
  'x-small': '12px',
  small: '14px',
  medium: '16px',
  large: '25px',
  'x-large': '30px',
}

const SectionTextSize = () => {
  const [active, setActive] = useState(Object.values(menu)[0])
  const [activeSize, setActiveSize] = useState(Object.values(size)[0])

  return (
    <Container>
      <ContainerHeader
        title="Text Size"
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
          <p>
            Lorem Ipsum é simplesmente uma simulação de texto da indústria
            tipográfica e de impressos, e vem sendo utilizado desde o século
            XVI, quando um impressor desconhecido pegou uma bandeja de tipos e
            os embaralhou para fazer um livro de modelos de tipos.
          </p>

          <p>
            Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto
            para a editoração eletrônica, permanecendo essencialmente
            inalterado.
          </p>
        </Example>
      </Content>
    </Container>
  )
}

export default SectionTextSize
