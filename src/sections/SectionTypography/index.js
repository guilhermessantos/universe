import React, { useState } from 'react'
import { Container, Content } from '../../components/Container'
import { ContainerHeader } from '../../components/ContainerHeader'
import { BoxTypography } from '../../components/BoxTypography'

const data = {
  primary: 'Arial',
  secondary: 'Montserrat',
  tert: 'Comic Sans MS',
}

const SectionTypography = () => {
  const [active, setActive] = useState(Object.values(data)[0])

  return (
    <Container>
      <ContainerHeader
        title="Typography"
        data={data}
        handleMenu={setActive}
        active={active}
      />

      <Content sidebar>
        <BoxTypography data={data} active={active} />
      </Content>
    </Container>
  )
}

export default SectionTypography
