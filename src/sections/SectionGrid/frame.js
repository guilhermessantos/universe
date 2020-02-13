import React, { useState } from 'react'
import StyledFrame from 'react-styled-frame'
import * as S from './styles'
import { Container, Row } from '../../components/Grid'

const breakpoints = require('../../../config/breakpoints.js').default

const FrameGrid = () => {
  const [size, setSize] = useState(Object.values(breakpoints)[0])

  return (
    <>
      <S.Buttons>
        {Object.keys(breakpoints).map(item => (
          <S.Button
            type="button"
            key={breakpoints[item]}
            onClick={() => setSize(breakpoints[item])}
            active={breakpoints[item] === size}
          >
            {item} {breakpoints[item]}px
          </S.Button>
        ))}
      </S.Buttons>

      <StyledFrame
        theme={{}}
        style={{
          height: '100%',
          margin: '0 auto',
          width: size,
        }}
        className="frame"
      >
        <S.InnerBox>
          <Container>
            <Row>
              <S.Col sm="12" lg="1">
                <div />
              </S.Col>
              <S.Col sm="12" lg="1">
                <div />
              </S.Col>
              <S.Col sm="12" lg="1">
                <div />
              </S.Col>
              <S.Col sm="12" lg="1">
                <div />
              </S.Col>
              <S.Col sm="12" lg="1">
                <div />
              </S.Col>
              <S.Col sm="12" lg="1">
                <div />
              </S.Col>
              <S.Col sm="12" lg="1">
                <div />
              </S.Col>
              <S.Col sm="12" lg="1">
                <div />
              </S.Col>
              <S.Col sm="12" lg="1">
                <div />
              </S.Col>
              <S.Col sm="12" lg="1">
                <div />
              </S.Col>
              <S.Col sm="12" lg="1">
                <div />
              </S.Col>
              <S.Col sm="12" lg="1">
                <div />
              </S.Col>
            </Row>

            <Row>
              <S.Col sm="12" lg="6" xlg="3">
                <div />
              </S.Col>
              <S.Col sm="12" lg="6" xlg="9">
                <div />
              </S.Col>
            </Row>

            <Row>
              <S.Col sm="2" md="7" xlg="6">
                <div />
              </S.Col>
              <S.Col sm="10" md="5" xlg="6">
                <div />
              </S.Col>
            </Row>
          </Container>
        </S.InnerBox>
      </StyledFrame>
    </>
  )
}

export default FrameGrid
