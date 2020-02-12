import styled, { css } from 'styled-components'

export const Container = styled.div`
  font-size: 14px;
  border: 1px solid #42153c;
  border-radius: 10px;
  padding: 30px 30px 0;
  position: relative;
  overflow: hidden;
  width: 270px;

  &::before {
    background: #ed3947;
    border-radius: 10px;
    bottom: 0;
    content: '';
    left: 0;
    min-width: 100px;
    position: absolute;
    top: 30px;
  }
`

export const Key = styled.div`
  min-width: 100px;
  padding: 15px 0;
  position: relative;

  &::before {
    content: '';
    background: #000;
    left: -30px;
    top: 50%;
    position: absolute;
    width: 100%;
    opacity: 0.1;
    z-index: 3;
    transform: translateY(-50%);
    transition: height 0.3s;
  }
`
export const Value = styled.div`
  border-bottom: 1px solid #42153c;
  flex: 1;
  padding: 15px 0;
  text-align: right;
  transition: color 0.4s, padding-right 0.4s;
`

export const Item = styled.div`
  position: relative;
  display: flex;
  z-index: 1;

  ${props =>
    props.value &&
    css`
      cursor: pointer;

      &:hover ${Value} {
        padding-right: 10px;
      }
    `}

  &::before {
    content: '';
    position: absolute;
    right: -30px;
    top: 50%;
    height: ${props => (props.active ? '100%' : 0)};
    width: 1px;
    background: #ed3947;
    transition: height 0.4s;
    transform: translateY(-50%);
  }

  &:last-child ${Value} {
    border: 0;
  }

  ${Value} {
    color: ${props => (props.active ? '#FFFFFFF' : '#BBB8BF')};
  }

  ${Key}::before {
    height: ${props => (props.active ? '100%' : 0)};
  }
`
