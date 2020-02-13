import React, { useState } from 'react'
import { Container, Content } from '../../components/Container'
import { ContainerHeader } from '../../components/ContainerHeader'
import { BoxTypography } from '../../components/BoxTypography'

const SectionTypography = ({ typographies }) => {
  const [active, setActive] = useState(Object.values(typographies)[0])

  return (
    <Container>
      <ContainerHeader
        title="Typography"
        data={typographies}
        handleMenu={setActive}
        active={active}
      />

      <Content sidebar>
        <BoxTypography data={typographies} active={active} />
      </Content>
    </Container>
  )
}

export default SectionTypography
