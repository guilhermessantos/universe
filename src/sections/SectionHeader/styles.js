import styled from 'styled-components'
import { Container } from '../../components/Container'

export const Section = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
`

export const Info = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 700px;
  text-align: center;
`

export const Images = styled.div`
  position: relative;
  height: 300px;

  svg {
    bottom: 0;
    position: absolute;
  }

  svg:nth-child(1) {
    left: 30%;
    transform: translateY(-250px);
  }

  svg:nth-child(2) {
    left: 50%;
    transform: translate(-50%, -50px);
  }

  svg:nth-child(3) {
    left: 45%;
    transform: translate(-50%, 40px);
    z-index: 1;
  }
`
