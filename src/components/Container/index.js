import styled, { css } from 'styled-components'

export const Content = styled.div`
  align-items: center;
  display: ${props => props.sidebar && 'flex'};
  height: 75vh;
  max-width: 900px;
  margin-left: auto;
  padding-top: ${props => !props.sidebar && '70px'};
`

export const Container = styled.section`
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;
  max-width: 1240px;
  height: inherit;
  overflow: ${props => props.shadow && 'hidden'};

  ${Content} {
    ${props =>
      props.shadow &&
      css`
        position: relative;

        &::before {
          background: #0f081e;
          box-shadow: 0 0 100px 100px #0f081e;
          content: '';
          height: 0;
          position: absolute;
          bottom: 0;
          width: 100%;
          z-index: 2;
        }
      `}
  }
`

export const Example = styled.div`
  flex: 1;
  display: ${props => props.center && 'flex'};
  margin-left: 60px;
  justify-content: ${props => props.center && 'center'};
`
