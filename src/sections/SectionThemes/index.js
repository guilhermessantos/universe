import React from 'react'
import { Container, Content } from '../../components/Container'
import { ContainerHeader } from '../../components/ContainerHeader'
import { Carousel } from '../../components/Carousel'

const themes = require('../../../config/themes.js').default

const SectionPalette = () => {
  return (
    <Container shadow>
      <ContainerHeader title="Themes" shadow />

      <Content>
        <Carousel data={themes} quant={4} />
      </Content>
    </Container>
  )
}

export default SectionPalette
