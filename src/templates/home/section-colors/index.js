import React from 'react'

import { isColor } from 'utils'
import Container from 'components/container'
import ContentHeader from 'components/content-header'
import CardColor from 'components/card-color'
import Section from 'components/section'
import * as S from './styles'

const SectionColors = ({ data }) => (
  <Section id='colors'>
    <Container>
      <ContentHeader
        title='Colors'
        text='Change the color of the text or the background of the content, see the example of the colors below'
      />

      <S.List>
        {Object.keys(data).map(item => isColor(data[item]) && <CardColor key={item} name={item} hex={data[item]} />)}
      </S.List>
    </Container>
  </Section>
)

export default SectionColors
