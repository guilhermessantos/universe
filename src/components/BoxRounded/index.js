import React from 'react'
import t from 'prop-types'
import * as S from './styles'

const BoxRounded = ({ style }) => <S.Container style={style} />

BoxRounded.propTypes = {
  style: t.string,
}

export { BoxRounded }
