import React, { useState } from 'react'
import ReactPageScroller from 'react-page-scroller'
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
import SectionPalette from '../sections/SectionPalette'
import SectionBorder from '../sections/SectionBorder'

const menu = [
  'Home',
  'Typography',
  'Text Size',
  'Heading',
  'Breakpoint',
  'Palette',
  'Color',
  'Border',
  'Margin',
  'Padding',
  'Rounded',
]

const App = () => {
  const [pagination, setPagination] = useState(0)

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

  return (
    <>
      <Navigation
        handlePagination={handlePagination}
        pagination={pagination}
        listMenu={menu}
        home={!!pagination}
      />

      <ReactPageScroller
        blockScrollDown
        blockScrollUp
        transitionTimingFunction="ease"
        customPageNumber={pagination}
      >
        <SectionHeader />
        <SectionTypography />
        <SectionTextSize />
        <SectionHeading />
        <SectionBreakpoint />
        <SectionPalette />
        <SectionColor />
        <SectionBorder />
        <SectionMargin />
        <SectionPadding />
        <SectionRounded />
      </ReactPageScroller>
      <GlobalStyle />
    </>
  )
}

export default App
