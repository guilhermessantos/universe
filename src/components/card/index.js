import React from 'react'

import { isString } from 'utils'
import * as S from './styles'

const Card = ({ title, text, data, id }) => (
  <S.Wrapper id={id}>
    {!!title && <S.Title>{title}</S.Title>}
    {!!text && <S.Text>{text}</S.Text>}
    <S.Content>
      {Object.keys(data).map(
        item =>
          isString(data[item]) && (
            <S.Item key={item}>
              <span>{item}</span>
              <span>{data[item]}</span>
            </S.Item>
          )
      )}
    </S.Content>
  </S.Wrapper>
)

export default Card
