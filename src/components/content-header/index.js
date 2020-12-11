import React from 'react'

import * as S from './styles'

const ContentHeader = ({ title, text }) => (
  <S.Wrapper>
    <S.Title>{title}</S.Title>
    <p>{text}</p>
  </S.Wrapper>
)

export default ContentHeader
