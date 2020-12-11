import React from 'react'
import Masonry from 'react-masonry-component'

import { configurationIsValid } from 'utils'
import Container from 'components/container'
import Section from 'components/section'
import Card from 'components/card'
import * as S from './styles'

const SectionUtils = ({ grid, spacings, layers, responsive, utils }) => (
  <Section>
    <Container>
      <S.List>
        <Masonry>
          {configurationIsValid(spacings) && (
            <Card id='spacings' title='Spacings' text='Change spacing, such as margins and paddings' data={spacings} />
          )}
          {configurationIsValid(layers) && (
            <Card id='layers' title='Layers' text='Change the overlay of your content' data={layers} />
          )}
          {configurationIsValid(grid) && (
            <Card id='grid' title='Grid' text='Align page elements based on sequenced columns' data={grid} />
          )}
          {configurationIsValid(responsive) && (
            <Card id='responsive' title='Responsive' text='Used to adjust the template' data={responsive} />
          )}
          {!!utils &&
            Object.keys(utils).map(
              item =>
                configurationIsValid(utils[item].data) && (
                  <Card
                    key={item}
                    id={item}
                    title={utils[item].title || item}
                    text={utils[item].text}
                    data={utils[item].data}
                  />
                )
            )}
        </Masonry>
      </S.List>
    </Container>
  </Section>
)

export default SectionUtils
