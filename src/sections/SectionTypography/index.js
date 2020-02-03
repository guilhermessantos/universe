import React, { useState } from 'react'
import { Container, Content } from '../../components/Container'
import { ContainerHeader } from '../../components/ContainerHeader'
import { BoxTypography } from '../../components/BoxTypography'

const menu = {
  primary: 'Arial',
  secondary: 'Montserrat',
  tert: 'Comic Sans MS',
}

const SectionTypography = () => {
  const [active, setActive] = useState(Object.values(menu)[0])

  return (
    <Container>
      <ContainerHeader data={menu} handleMenu={setActive} active={active} />

      <Content>
        <BoxTypography styleFont={active} />
      </Content>
    </Container>
  )
}

export default SectionTypography
