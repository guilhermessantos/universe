import React from 'react'
import t from 'prop-types'
import * as S from './styles'

const BoxTypography = ({ data, active }) => (
  <S.Container>
    {Object.keys(data).map(item => (
      <S.Item
        hidden={data[item] === active}
        key={item}
        style={{ fontFamily: data[item] }}
      >
        <S.Letter>Aa</S.Letter>

        <S.Content>
          <S.Title>Product Onwer</S.Title>
          <S.Text>
            Explica pro Product Onwer que um erro não identificado corrigiu o
            bug na interpolação dinâmica de strings.
          </S.Text>

          <S.Text>
            Dado o fluxo de dados atual, o último pull request desse SCRUM
            deletou todas as entradas do carregamento de JSON delimitado por
            linhas.
          </S.Text>

          <S.Text>
            Dado o fluxo de dados atual, o último pull request desse SCRUM
            deletou todas as entradas do carregamento de JSON delimitado por
            linhas.
          </S.Text>

          <S.Alpha>
            <S.AlphaItem>
              A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
            </S.AlphaItem>
            <S.AlphaItem>
              a b c d e f g h i j k l m n o p q r s t u v w x y z
            </S.AlphaItem>
            <S.AlphaItem>
              0 1 2 3 4 5 6 7 8 9 + - () [] {} % ! ~ @ $ & * = ^ _
            </S.AlphaItem>
          </S.Alpha>
        </S.Content>
      </S.Item>
    ))}
  </S.Container>
)

BoxTypography.propTypes = {
  data: t.object.isRequired,
  active: t.string.isRequired,
}

export { BoxTypography }
