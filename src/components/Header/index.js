import React, { useEffect, useRef } from 'react'
import { TimelineLite } from 'gsap'
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

const Header = () => {
  const elBranding = useRef(null)
  const elMenu = useRef(null)
  const elButton = useRef(null)

  useEffect(() => {
    const timeline = new TimelineLite()

    timeline
      .to(
        elBranding.current,
        0.6,
        {
          opacity: 1,
          y: 0,
        },
        '=+1'
      )
      .to(elMenu.current, 0.3, {
        opacity: 1,
      })
      .to(elButton.current, 0.3, {
        opacity: 1,
      })
  }, [])

  return (
    <S.Container>
      <S.Col>
        <S.Branding ref={elBranding}>
          <span />
          <span />
          <span />
        </S.Branding>
      </S.Col>

      <S.Col position="center">
        <S.Menu ref={elMenu}>
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
        <Button href="/" ref={elButton} data-text="GitHub">
          GitHub
        </Button>
      </S.Col>
    </S.Container>
  )
}

export { Header }
