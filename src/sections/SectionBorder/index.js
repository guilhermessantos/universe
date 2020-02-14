import React, { useState } from 'react'
import t from 'prop-types'
import { Container, Content, Example } from '../../components/Container'
import { ContainerHeader } from '../../components/ContainerHeader'
import { ContainerSidebar } from '../../components/ContainerSidebar'
import { BoxBorder } from '../../components/BoxBorder'

const SectionBorder = ({ border }) => {
  const [activePosition, setActivePosition] = useState(
    Object.values(border.position)[0]
  )
  const [activeSize, setActiveSize] = useState(Object.values(border.size)[0])

  return (
    <Container>
      <ContainerHeader
        title="Border"
        data={border.position}
        active={activePosition}
        handleMenu={setActivePosition}
      />

      <Content sidebar>
        <ContainerSidebar
          data={border.size}
          active={activeSize}
          handleMenu={setActiveSize}
        />

        <Example center>
          <BoxBorder
            style={{
              borderWidth: activeSize,
              borderStyle: `${activePosition === 'default' ? 'solid' : 'none'}`,
              borderColor: '#42153c',
            }}
            position={activePosition}
          />
        </Example>
      </Content>
    </Container>
  )
}

SectionBorder.propTypes = {
  border: t.object,
}

export default SectionBorder
