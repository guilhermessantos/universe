import React from 'react'
import t from 'prop-types'
import * as S from './styles'

const ContainerSidebar = ({ data, active, handleMenu }) => (
  <S.Container>
    {Object.keys(data).map(item => (
      <S.Item
        key={item}
        active={active === data[item]}
        onClick={() => handleMenu && handleMenu(data[item])}
      >
        <S.Key>{item}</S.Key>
        <S.Value>{data[item]}</S.Value>
      </S.Item>
    ))}
  </S.Container>
)

ContainerSidebar.propTypes = {
  data: t.object.isRequired,
  active: t.string,
  handleMenu: t.func,
}

export { ContainerSidebar }
