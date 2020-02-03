import React from 'react'
import t from 'prop-types'
import { Title } from '../Title'
import * as S from './styles'

const ContainerHeader = ({ title, data, handleMenu, active }) => (
  <S.Container>
    <Title>{title}</Title>

    {data && (
      <S.Menu>
        {Object.keys(data).map(item => (
          <S.MenuItem
            onClick={() => handleMenu(data[item])}
            key={item}
            data-text={item}
            active={active === data[item]}
          >
            {item}
          </S.MenuItem>
        ))}
      </S.Menu>
    )}

    <S.Line />
  </S.Container>
)

ContainerHeader.propTypes = {
  data: t.object,
  handleMenu: t.func,
  title: t.string.isRequired,
  active: t.string,
}

export { ContainerHeader }
