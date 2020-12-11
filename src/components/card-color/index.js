import React from 'react'
import Color from 'color'

import * as S from './styles'

const CardColor = ({ name, hex }) => (
  <S.Wrapper isLight={Color(hex).isLight()}>
    <S.Color background={hex}>
      <S.Hex>{hex}</S.Hex>
      <S.Name>{name}</S.Name>
    </S.Color>
  </S.Wrapper>
)

export default CardColor
