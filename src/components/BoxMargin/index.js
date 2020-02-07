import React from 'react'
import t from 'prop-types'
import * as S from './styles'

const BoxMargin = ({ size, position }) => (
  <S.Container position={position}>
    <S.Item position="t" height={size} />
    <S.Item position="l" height={size} />
    <S.Item position="b" height={size} />
    <S.Item position="r" height={size} />
  </S.Container>
)

BoxMargin.propTypes = {
  size: t.string,
  position: t.string,
}

export { BoxMargin }
