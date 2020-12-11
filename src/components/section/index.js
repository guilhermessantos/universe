import styled, { css } from 'styled-components'

const sectionModifers = {
  first: () => css`
    margin: 0 0 150px;
  `
}

const Section = styled.section`
  ${({ first }) => css`
    margin: 150px 0;

    ${first && sectionModifers.first()}
  `}
`

export default Section
