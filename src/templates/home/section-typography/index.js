import React, { useState } from 'react'

import { isString } from 'utils'
import Container from 'components/container'
import ContentHeader from 'components/content-header'
import Section from 'components/section'
import * as S from './styles'

const SectionTypography = ({ fontSize, hasFontSize, fontFamily, hasFontFamily, first }) => {
  const [size, setSize] = useState({ active: 0, value: !!hasFontSize ? Object.values(fontSize)[0] : '16px' })
  const [font, setFont] = useState({ active: 0, value: !!hasFontFamily && Object.values(fontFamily)[0] })

  return (
    <Section id='typography' first={first}>
      <Container>
        <ContentHeader
          title='Typography'
          text='Change the style of content related to typography and font size, see the example below'
        />

        <div>
          {!!hasFontFamily && (
            <S.Tabs>
              {Object.keys(fontFamily).map(
                (item, index) =>
                  isString(fontFamily[item]) && (
                    <S.Tab
                      active={index === font.active}
                      onClick={() => setFont({ active: index, value: fontFamily[item] })}
                      key={item}
                    >
                      <span>{fontFamily[item]}</span>
                      <span>{item}</span>
                    </S.Tab>
                  )
              )}
            </S.Tabs>
          )}

          <S.Example>
            {!!hasFontSize && (
              <S.Sizes>
                {Object.keys(fontSize).map(
                  (item, index) =>
                    isString(fontSize[item]) && (
                      <S.Size
                        active={index === size.active}
                        onClick={() => setSize({ active: index, value: fontSize[item] })}
                        key={item}
                      >
                        <span>{item}</span> {fontSize[item]}
                      </S.Size>
                    )
                )}
              </S.Sizes>
            )}
            <S.ExampleContent>
              <S.ExampleTitle>Exemple</S.ExampleTitle>
              <div style={{ fontSize: size.value, fontFamily: font.value }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry
              </div>
            </S.ExampleContent>
          </S.Example>
        </div>
      </Container>
    </Section>
  )
}
export default SectionTypography
