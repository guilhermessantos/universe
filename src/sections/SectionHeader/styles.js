import styled from 'styled-components'
import { Title } from '../../components/Title'
import { Container } from '../../components/Container'

export const Info = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 700px;
  text-align: center;
`

export const Section = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;

  ${Title},
  ${Info} p {
    opacity: 0;
    transform: translateY(100px);
  }
`

export const Images = styled.div`
  position: relative;
  height: 300px;

  span {
    bottom: 0;
    position: absolute;
    opacity: 0;
  }

  span:nth-child(1) {
    left: 30%;
    transform: translateY(-100px);
  }

  span:nth-child(2) {
    left: 50%;
    transform: translate(-50%, 200px);
  }

  span:nth-child(3) {
    left: 45%;
    transform: translate(-50%, 200px);
    z-index: 1;
  }
`
