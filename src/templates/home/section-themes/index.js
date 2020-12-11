import React from 'react'

import { configurationIsValid } from 'utils'
import Container from 'components/container'
import ContentHeader from 'components/content-header'
import CardTheme from 'components/card-theme'
import Section from 'components/section'
import * as S from './styles'

const SectionThemes = ({ data }) => (
  <Section id='themes'>
    <Container>
      <ContentHeader
        title='Themes'
        text='Change the color of the text or the background of the content, see the example of the colors below'
      />

      <S.List>
        {data.map(
          item =>
            configurationIsValid(item.colors) && <CardTheme key={item.name} colors={item.colors} title={item.name} />
        )}
      </S.List>
    </Container>
  </Section>
)

export default SectionThemes
