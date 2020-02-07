import styled from 'styled-components'

export const Container = styled.div`
  height: 100%;
  position: relative;
  width: 100%;
`

export const Item = styled.div`
  display: flex;
  opacity: ${props => (props.hidden ? 1 : 0)};
  transition: opacity 0.3s, transform 0.3s;
  transform: ${props => `scale(${props.hidden ? 1 : 0.5}) translateY(-50%)`};
  position: absolute;
  top: 50%;
`

export const Content = styled.div`
  flex: 1;
`

export const Letter = styled.div`
  font-size: 100px;
  height: 150px;
  position: relative;
  margin-right: 60px;
  max-width: 150px;
  width: 150px;

  &::before {
    border: 1px solid #42153c;
    border-radius: 10px;
    content: '';
    height: 100%;
    position: absolute;
    left: 30px;
    width: 100%;
    z-index: -1;
  }
`

export const Title = styled.div`
  font-size: 26px;
  font-weight: bold;
  margin-bottom: 10px;
`

export const Text = styled.div`
  font-size: 15px;
  margin-bottom: 10px;
`

export const Alpha = styled.div`
  line-height: 1.6;
`

export const AlphaItem = styled.div``
