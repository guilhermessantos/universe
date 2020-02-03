import React, { useState } from 'react'
import ReactPageScroller from 'react-page-scroller'
import GlobalStyle from '../styles/global'
import { Navigation } from '../components/Navigation'
import SectionHeading from '../sections/SectionHeading'

const menu = ['Home', 'Typography', 'Palette']

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
      />

      <ReactPageScroller
        blockScrollDown
        blockScrollUp
        transitionTimingFunction="ease"
        customPageNumber={pagination}
      >
        <SectionHeading />

        <div className="section">section</div>
        <div className="section">section</div>
      </ReactPageScroller>
      <GlobalStyle />
    </>
  )
}

export default App
