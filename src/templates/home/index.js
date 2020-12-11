import React from 'react'

import { configurationIsValid } from 'utils'
import Header from 'components/header'
import Footer from 'components/footer'
import SectionHero from './section-hero'
import SectionTypography from './section-typography'
import SectionThemes from './section-themes'
import SectionColors from './section-colors'
import SectionUtils from './section-utils'

const Home = ({ config }) => {
  const { fontSize, fontFamily, themes, colors, grid, spacings, layers, responsive, utils, hero } = config

  const hasFontSize = configurationIsValid(fontSize)
  const hasFontFamily = configurationIsValid(fontFamily)
  const hasTypography = hasFontSize || hasFontFamily

  const hasThemes = !!themes && Array.isArray(themes) && themes[0]
  const hasColors = configurationIsValid(colors)
  const hasGrid = configurationIsValid(grid)
  const hasSpacings = configurationIsValid(spacings)
  const hasLayers = configurationIsValid(layers)
  const hasResponsive = configurationIsValid(responsive)

  const hasUtils = grid || spacings || layers || utils || responsive

  const menu = {
    typography: hasTypography,
    themes: hasThemes,
    colors: hasColors,
    grid: hasGrid,
    spacings: hasSpacings,
    layers: hasLayers,
    responsive: hasResponsive
  }

  const navigation = Object.keys(menu).filter(item => menu[item])

  return (
    <>
      <Header data={navigation} />
      {(hero || !navigation.length) && <SectionHero name={config.name} navigation={navigation} />}
      {hasTypography && (
        <SectionTypography
          fontSize={fontSize}
          hasFontSize={hasFontSize}
          fontFamily={fontFamily}
          hasFontFamily={hasFontFamily}
          first={hero}
        />
      )}
      {hasThemes && <SectionThemes data={themes} />}
      {hasColors && <SectionColors data={colors} />}
      {hasUtils && (
        <SectionUtils grid={grid} spacings={spacings} layers={layers} utils={utils} responsive={responsive} />
      )}
      <Footer />
    </>
  )
}

export default Home
