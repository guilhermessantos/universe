import React from 'react'
import Home from 'templates/home'
import { cosmiconfigSync } from 'cosmiconfig'
import { config } from 'data/common'

const Page = ({ config }) => <Home config={config} />

export async function getStaticProps() {
  const explorer = cosmiconfigSync('universe')
  const explorerConfig = explorer.search()

  explorerConfig && explorerConfig.config.hero === undefined && (explorerConfig.config.hero = true)

  return {
    props: {
      config: explorerConfig ? explorerConfig.config : config
    }
  }
}

export default Page
