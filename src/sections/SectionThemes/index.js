import React from 'react'
import t from 'prop-types'
import { Container, Content } from '../../components/Container'
import { ContainerHeader } from '../../components/ContainerHeader'
import { Carousel } from '../../components/Carousel'

const SectionPalette = ({ themes }) => {
  return (
    <Container shadow>
      <ContainerHeader title="Themes" shadow />

      <Content>
        <Carousel data={themes} quant={4} />
      </Content>
    </Container>
  )
}

SectionPalette.propTypes = {
  themes: t.object,
}

export default SectionPalette
