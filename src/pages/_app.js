import React from 'react'
import Head from 'next/head'

import GlobalStyle from '../styles/globalStyles'

const App = ({ Component, pageProps }) => (
  <>
    <Head>
      <link rel='preconnect' href='https://fonts.gstatic.com' />
      <link href='https://fonts.googleapis.com/css2?family=Roboto:wght@400;900&display=swap' rel='stylesheet' />
    </Head>
    <GlobalStyle />
    <Component {...pageProps} />
  </>
)

export default App
