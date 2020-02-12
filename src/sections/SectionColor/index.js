import React from 'react'
import { Container, Content } from '../../components/Container'
import { ContainerHeader } from '../../components/ContainerHeader'
import { Carousel } from '../../components/Carousel'

const colors = require('../../../config/colors').default

const SectionColor = () => {
  return (
    <Container>
      <ContainerHeader title="Colors" />

      <Content>
        <Carousel data={colors} quant={4} color />
      </Content>
    </Container>
  )
}

export default SectionColor
