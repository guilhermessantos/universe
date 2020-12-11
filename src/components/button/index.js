import React from 'react'

import * as S from './styles'

const Button = ({ children, ...props }) => <S.Wrapper {...props}>{children}</S.Wrapper>

export default Button
