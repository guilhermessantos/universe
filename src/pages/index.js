import React, { useState } from 'react'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import themeStyledComponents from '../assets/javascripts/styled-componets'
import TypographyItem from '../components/typography-item'
import TextItem from '../components/text-item'
import TextSizeItem from '../components/text-size-item'
import Navigation from '../components/navigation'
import Section from '../components/section'
import HeadingItem from '../components/heading-item'
import MarginItem from '../components/margin-item'
import PaddingItem from '../components/padding-item'
import BorderItem from '../components/border-item'
import RoundedItem from '../components/rounded-item'
import DisplayItem from '../components/display-item'
import PaletteItem from '../components/palette-item'
import ColorItem from '../components/color-item'
import FlexItem from '../components/flex-item'
import BreakpointItem from '../components/breakpoint-item'

import GlobalStyle, { Chosen, Button } from './global'

const App = () => {
  const [menu, setMenu] = useState(false)

  return (
    <>
      <Head>
        <link rel='stylesheet' href='https://highlightjs.org/static/demo/styles/vs.css'/>
      </Head>

      <ThemeProvider theme={themeStyledComponents}>
        <Navigation />        

        <div id='content'>
          <Section title='Typography' id='typography'>
            <TypographyItem props={themeStyledComponents.typography} />
          </Section>

          <Section title='Palette' id='palette'>
            <PaletteItem props={themeStyledComponents.palette} code={menu} />
          </Section>

          <Section title='Color' id='color'>
            <ColorItem props={themeStyledComponents.color} code={menu} />
          </Section>

          {menu && (
            <Section title='Text' id='text'>
              <TextItem props={themeStyledComponents.text} code={menu} />
            </Section>
          )}

          <Section title='Breakpoint' id='breakpoint'>
            <BreakpointItem props={themeStyledComponents.breakpoint} />
          </Section>

          <Section title='Text Size' id='text-size' flex>
            <TextSizeItem props={themeStyledComponents} code={menu} />
          </Section>

          <Section title='Heading' id='heading' flex>
            <HeadingItem props={themeStyledComponents} code={menu} />
          </Section>

          <Section title='Margin' id='margin' flex>
            <MarginItem props={themeStyledComponents.margin} code={menu} />
          </Section>

          <Section title='Padding' id='padding' flex>
            <PaddingItem props={themeStyledComponents.padding} code={menu} />
          </Section>

          <Section title='Border' id='border' flex>
            <BorderItem props={themeStyledComponents.border} code={menu} />
          </Section>

          <Section title='Rounded' id='rounded' flex>
            <RoundedItem props={themeStyledComponents.rounded} code={menu} />
          </Section>

          {menu && (
            <Section title='Display' id='display' flex>
              <DisplayItem props={themeStyledComponents.display}  />
            </Section>
          )}

          {menu && (
            <Section title='Flex' id='flex' flex>
              <FlexItem props={themeStyledComponents.flex}  />
            </Section>
          )}

          <Chosen className='chosen'>
            <Button onClick={() => setMenu(false)} active={!menu}>
              styled components
            </Button>

            <Button onClick={() => setMenu(true)} active={menu}>
              css
            </Button>
          </Chosen>

          <GlobalStyle />
        </div>
      </ThemeProvider>
    </>
  )
}

export default App
