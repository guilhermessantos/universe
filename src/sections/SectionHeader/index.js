import React, { useRef, useEffect } from 'react'
import { TimelineLite } from 'gsap'
import { Header } from '../../components/Header'
import { Title } from '../../components/Title'
import { Stars } from '../../components/Stars'
import * as S from './styles'

import PlanetSmall from '../../images/planet_small.svg'
import PlanetLarge from '../../images/planet_large.svg'
import Rocket from '../../images/rocket.svg'

const SectionHeader = () => {
  const title = useRef(null)
  const info = useRef(null)
  const elPlanetSmall = useRef(null)
  const elPlanetLarge = useRef(null)
  const elRocket = useRef(null)

  useEffect(() => {
    const timeline = new TimelineLite()
    const time = 1
    const showElement = {
      opacity: 1,
      y: 0,
    }

    timeline
      .to(title.current, time, showElement, '=+2')
      .to(info.current, time, showElement, '=-1')
      .to(
        elPlanetLarge.current,
        time,
        {
          y: -50,
          opacity: 1,
        },
        '=-1'
      )
      .to(
        elPlanetLarge.current,
        60,
        {
          rotate: 360,
          repeat: -1,
        },
        '=-1'
      )
      .to(
        elPlanetSmall.current,
        time,
        {
          y: -250,
          opacity: 1,
        },
        '=-60'
      )
      .to(elRocket.current, time, showElement, '=-1')
      .to(elRocket.current, time + 4, {
        y: 30,
        x: -10,
        repeat: -1,
        yoyo: true,
      })
  }, [])

  return (
    <S.Section>
      <Header />

      <S.Info>
        <Title ref={title}>Universe</Title>

        <p ref={info}>
          Universe veio para organizar e exibir o Design System de seu projeto,
          unindo o Front ++ Design
        </p>
      </S.Info>

      <S.Images>
        <span ref={elPlanetSmall}>
          <PlanetSmall />
        </span>
        <span ref={elPlanetLarge}>
          <PlanetLarge />
        </span>
        <span ref={elRocket}>
          <Rocket />
        </span>
      </S.Images>

      <Stars />
    </S.Section>
  )
}

export default SectionHeader
