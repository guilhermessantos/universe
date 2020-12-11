import React from 'react'
import Image from 'next/image'

import { version } from '../../../../package.json'
import Container from 'components/container'
import Button from 'components/button'
import * as S from './styles'

const SectionHero = ({ name, navigation }) => (
  <>
    <S.Section hasNavigation={!navigation.length}>
      <Container>
        <S.Content>
          <S.Title>Universe</S.Title>
          {name && <small>{name}</small>}
          <p>
            Display and organize the design system of your project, providing consultation for front end and design.
          </p>
          <Button as='a' href='https://github.com/guilhermessantos' title='Get started'>
            Get started
          </Button>
        </S.Content>
        <S.Version>
          Currently <strong>v{version}</strong>
        </S.Version>
      </Container>
      <S.Thumb position='left'>
        <Image src='/bg-left.png' alt='Astronaut in the universe' width={339} height={574} />
      </S.Thumb>
      <S.Thumb position='right'>
        <Image src='/bg-right.png' alt='Rocket in the universe' width={295} height={669} />
      </S.Thumb>
    </S.Section>
  </>
)

export default SectionHero
