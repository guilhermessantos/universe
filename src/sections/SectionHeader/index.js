import React from 'react'
import { Header } from '../../components/Header'
import { Title } from '../../components/Title'
import { Stars } from '../../components/Stars'
import * as S from './styles'

import PlanetSmall from '../../images/planet_small.svg'
import PlanetLarge from '../../images/planet_large.svg'
import Rocket from '../../images/rocket.svg'

const SectionHeader = () => (
  <S.Section>
    <Header />

    <S.Info>
      <Title>Universe</Title>

      <p>
        Universe veio para organizar e exibir o Design System de seu projeto,
        unindo o Front + Design
      </p>
    </S.Info>

    <S.Images>
      <PlanetSmall />
      <PlanetLarge />
      <Rocket />
    </S.Images>

    <Stars />
  </S.Section>
)

export default SectionHeader
