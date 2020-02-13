import React, { useState } from 'react'
import PropTypes from 'prop-types'
import ReactPageScroller from 'react-page-scroller'
import { cosmiconfigSync } from 'cosmiconfig'
import GlobalStyle from '../styles/global'
import { Navigation } from '../components/Navigation'
import SectionHeader from '../sections/SectionHeader'
import SectionBreakpoint from '../sections/SectionBreakpoint'
import SectionMargin from '../sections/SectionMargin'
import SectionPadding from '../sections/SectionPadding'
import SectionRounded from '../sections/SectionRounded'
import SectionTextSize from '../sections/SectionTextSize'
import SectionHeading from '../sections/SectionHeading'
import SectionColor from '../sections/SectionColor'
import SectionTypography from '../sections/SectionTypography'
import SectionThemes from '../sections/SectionThemes'
import SectionBorder from '../sections/SectionBorder'
import SectionGrid from '../sections/SectionGrid'

import defaultConfig from '../../config'

const menu = [
  'Home',
  'Typography',
  'Text Size',
  'Heading',
  'Breakpoint',
  'Grid',
  'Color',
  'Themes',
  'Border',
  'Margin',
  'Padding',
  'Rounded',
]

const App = ({ config }) => {
  const [pagination, setPagination] = useState(0)
  const [exampleGrid, setExampleGrid] = useState(false)

  const handlePagination = (action, index) => {
    if (action === 'prev' && !!pagination) {
      setPagination(pagination - 1)
    }

    if (action === 'next' && pagination < menu.length - 1) {
      setPagination(pagination + 1)
    }

    if (action === 'menu') {
      setPagination(index)
    }
  }

  const handleGrid = () => {
    setExampleGrid(!exampleGrid)
  }

  return (
    <>
      <Navigation
        handlePagination={handlePagination}
        pagination={pagination}
        listMenu={menu}
        home={!!pagination}
        hide={exampleGrid}
      />

      <ReactPageScroller
        blockScrollDown
        blockScrollUp
        transitionTimingFunction="ease"
        customPageNumber={pagination}
        renderAllPagesOnFirstRender
      >
        <SectionHeader />
        <SectionTypography typographies={config.typographies} />
        <SectionTextSize
          textSize={config.textSize}
          typographies={config.typographies}
        />
        <SectionHeading
          headings={config.headings}
          typographies={config.typographies}
        />
        <SectionBreakpoint breakpoints={config.breakpoints} />
        <SectionGrid
          handleGrid={handleGrid}
          active={exampleGrid}
          grid={config.grid}
        />
        <SectionColor colors={config.colors} />
        <SectionThemes themes={config.themes} />
        <SectionBorder border={config.border} />
        <SectionMargin margin={config.margin} />
        <SectionPadding padding={config.padding} />
        <SectionRounded rounded={config.rounded} />
      </ReactPageScroller>
      <GlobalStyle />
    </>
  )
}

App.propTypes = {
  config: PropTypes.object,
}

App.getInitialProps = () => {
  const explorer = cosmiconfigSync('universe')
  const config = explorer.search() ? explorer.search().config : defaultConfig
  return { config }
}

export default App
