import React from 'react'
import { Container, Content } from '../../components/Container'
import { ContainerHeader } from '../../components/ContainerHeader'
import { Carousel } from '../../components/Carousel'

const list = {
  gray: '#fafafa',
  'gray-200': '#E5E5E5',
  'gray-500': '#555555',
  black: '#000000',
  white: '#ffffff',
  link: '#f8f8f8',
}

const SectionColor = () => {
  return (
    <Container>
      <ContainerHeader title="Color" />

      <Content>
        <Carousel data={list} quant={4} color />
      </Content>
    </Container>
  )
}

export default SectionColor
