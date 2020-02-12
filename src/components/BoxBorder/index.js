import React from 'react'
import t from 'prop-types'
import * as S from './styles'

const BoxBorder = ({ style, position }) => (
  <S.Container position={position} style={style} />
)

BoxBorder.propTypes = {
  style: t.object,
  position: t.string,
}

export { BoxBorder }
