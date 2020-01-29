import React from 'react'
import { Button } from '../Button'
import * as S from './styles'

const menu = [
  {
    title: 'Home',
    url: '/',
  },
  {
    title: 'Documentação',
    url: '/documentação',
  },
]

const Header = () => (
  <S.Container>
    <S.Col>
      <S.Branding>
        <span />
        <span />
        <span />
      </S.Branding>
    </S.Col>

    <S.Col position="center">
      <S.Menu>
        {menu.map(item => (
          <S.MenuItem key={item.title}>
            <a href={item.url} title={item.title}>
              {item.title}
            </a>
          </S.MenuItem>
        ))}
      </S.Menu>
    </S.Col>

    <S.Col position="right">
      <Button href="/">GitHub</Button>
    </S.Col>
  </S.Container>
)

export { Header }
