import React, { useState } from 'react'
import t from 'prop-types'
import { Container, Content, Example } from '../../components/Container'
import { ContainerHeader } from '../../components/ContainerHeader'
import { ContainerSidebar } from '../../components/ContainerSidebar'
import { BoxPadding } from '../../components/BoxPadding'

const SectionPadding = ({ padding }) => {
  const [activePosition, setActivePosition] = useState(
    Object.values(padding.position)[0]
  )
  const [activeSize, setActiveSize] = useState(Object.values(padding.size)[0])

  return (
    <Container>
      <ContainerHeader
        title="Padding"
        data={padding.position}
        active={activePosition}
        handleMenu={setActivePosition}
      />

      <Content sidebar>
        <ContainerSidebar
          data={padding.size}
          active={activeSize}
          handleMenu={setActiveSize}
        />

        <Example center>
          <BoxPadding size={activeSize} position={activePosition} />
        </Example>
      </Content>
    </Container>
  )
}

SectionPadding.propTypes = {
  padding: t.object,
}

export default SectionPadding
