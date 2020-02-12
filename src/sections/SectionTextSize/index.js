import React, { useState } from 'react'
import { Container, Content, Example } from '../../components/Container'
import { ContainerHeader } from '../../components/ContainerHeader'
import { ContainerSidebar } from '../../components/ContainerSidebar'
import config from '../../../config'

const { textSize, typographies } = config

const SectionTextSize = () => {
  const [active, setActive] = useState(Object.values(typographies)[0])
  const [activeSize, setActiveSize] = useState(Object.values(textSize)[0])

  return (
    <Container>
      <ContainerHeader
        title="Text Size"
        data={typographies}
        active={active}
        handleMenu={setActive}
      />

      <Content sidebar>
        <ContainerSidebar
          data={textSize}
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
