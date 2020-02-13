import React from 'react'
import t from 'prop-types'
import { FaTimesCircle } from 'react-icons/fa'
import FrameGrid from './frame'
import { Container as Wrap, Content, Example } from '../../components/Container'
import { Button } from '../../components/Button'
import { ContainerHeader } from '../../components/ContainerHeader'
import { ContainerSidebar } from '../../components/ContainerSidebar'
import * as S from './styles'

const SectionGrid = ({ handleGrid, active, grid }) => (
  <S.FullSection>
    <Wrap>
      <ContainerHeader title="Grid" />

      <Content sidebar>
        <ContainerSidebar data={grid} />

        <Example>
          <p style={{ marginBottom: 20 }}>
            Clique no botão abaixo e confira o exemplo do grid e breakpoints
          </p>

          <Button type="button" onClick={() => handleGrid()}>
            ver exemplo
          </Button>
        </Example>
      </Content>

      <S.Container active={active}>
        <FrameGrid />
        <S.Close onClick={() => handleGrid()}>
          <FaTimesCircle size="30" />
        </S.Close>
      </S.Container>
    </Wrap>
  </S.FullSection>
)

SectionGrid.propTypes = {
  handleGrid: t.func,
  active: t.bool,
}

export default SectionGrid
