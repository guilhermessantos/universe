import styled, { css } from 'styled-components'

const grid = require('../../../config/grid.js').default
const breakpoints = require('../../../config/breakpoints.js').default

const onColumn = grid.container / grid.col

const responsive = size => {
  let styles = ''

  Object.keys(size).map(function(itemSize) {
    Object.keys(breakpoints).map(function(itemBreakpoint) {
      if (itemSize === itemBreakpoint) {
        styles += `
          @media (min-width: ${breakpoints[itemBreakpoint]}px) {
            width: ${((onColumn * size[itemSize]) / grid.container) * 100}%;
          }
        `
      }
    })
  })

  return css`
    ${styles}
  `
}

export const Col = styled.div`
  padding-left: ${grid.gutter / 2}px;
  padding-right: ${grid.gutter / 2}px;
  width: 100%;
  ${props => responsive(props)}
`

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -${grid.gutter / 2}px;
  margin-right: -${grid.gutter / 2}px;
`

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: ${grid.container}px;
`
