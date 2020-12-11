import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  display: inline-block;
  margin-bottom: 20px;
`

export const Title = styled.h2`
  font-size: 3.4rem;
  margin-bottom: 10px;
`

export const Text = styled.div`
  margin-bottom: 10px;
`

export const Content = styled.div`
  border: 1px solid #bdbdbd;
  border-radius: 6px;
  padding: 0 20px;
`

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  height: 50px;
  align-items: center;

  &:not(:first-child) {
    border-top: 1px solid #bdbdbd;
  }
`
