import styled from 'styled-components'
import media from 'styled-media-query'

export const List = styled.div`
  ${media.greaterThan('medium')`
    > div {
      margin: 0 -10px;

      > div {
        max-width: calc(100% / 3);
        padding: 10px;
        vertical-align: top;
      }
  `}
`
