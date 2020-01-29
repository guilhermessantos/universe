import React from 'react'
import t from 'prop-types'
import { FaArrowUp, FaArrowDown } from 'react-icons/fa'
import * as S from './styles'

const Navigation = ({ handlePagination, listMenu }) => (
  <S.Container>
    <S.Content>
      <S.Buttons>
        <S.Button action="prev" onClick={() => handlePagination('prev')}>
          <div>
            <FaArrowUp />
            <FaArrowUp />
          </div>
        </S.Button>

        <S.Button action="next" onClick={() => handlePagination('next')}>
          <div>
            <FaArrowDown />
            <FaArrowDown />
          </div>
        </S.Button>
      </S.Buttons>

      <S.Line />

      <S.Menu>
        {listMenu.map((item, index) => (
          <S.MenuItem
            key={item}
            onClick={() => handlePagination('menu', index)}
          >
            <S.Bullet />
            <S.Text>{item}</S.Text>
          </S.MenuItem>
        ))}
      </S.Menu>
    </S.Content>
  </S.Container>
)

Navigation.propTypes = {
  handlePagination: t.func.isRequired,
  listMenu: t.array.isRequired,
}

export { Navigation }
