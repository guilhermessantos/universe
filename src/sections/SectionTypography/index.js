import React, { useState } from 'react'
import { Container, Content } from '../../components/Container'
import { ContainerHeader } from '../../components/ContainerHeader'
import { BoxTypography } from '../../components/BoxTypography'

const tipographys = require('../../../config/typographys').default

const SectionTypography = () => {
  const [active, setActive] = useState(Object.values(tipographys)[0])

  return (
    <Container>
      <ContainerHeader
        title="Typography"
        data={tipographys}
        handleMenu={setActive}
        active={active}
      />

      <Content sidebar>
        <BoxTypography data={tipographys} active={active} />
      </Content>
    </Container>
  )
}

export default SectionTypography
