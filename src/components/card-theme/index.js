import React from 'react'
import Color from 'color'

import { isColor } from 'utils'
import * as S from './styles'

const CardTheme = ({ colors, title }) => (
  <S.Wrapper>
    <S.Title>{title}</S.Title>
    <S.Colors>
      {Object.keys(colors).map(
        color =>
          isColor(colors[color]) && (
            <S.Color key={colors[color]} background={colors[color]} isLight={Color(colors[color]).isLight()}>
              <S.Hex>{colors[color]}</S.Hex>
              <S.Name>{color}</S.Name>
            </S.Color>
          )
      )}
    </S.Colors>
  </S.Wrapper>
)

export default CardTheme
