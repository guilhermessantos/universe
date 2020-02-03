import styled from 'styled-components'

export const Container = styled.div`
  margin: 70px 0 60px auto;
  max-width: 900px;
  min-height: 125px;
  position: relative;
`

export const Menu = styled.div`
  display: inline-block;
  background: #0f081e;
  margin-top: 20px;
  padding-right: 30px;
  position: relative;
  z-index: 1;
`

export const MenuItem = styled.span`
  color: ${props => (props.active ? '#ed3947' : '#743789')};
  cursor: pointer;
  font-size: 14px;
  margin-left: 30px;
  position: relative;
  transition: color 0.3s;

  &:hover {
    color: ${props => (props.active ? '#ed3947' : 'transparent')};

    &::after,
    &::before {
      opacity: 1;
      visibility: visible;
    }

    &::before {
      color: ${props => (props.active ? '#ed3947' : '#743789')};
      transform: translateY(calc(100% + 10px));
    }

    &::after {
      transform: translateX(0);
    }
  }

  &::after,
  &::before {
    opacity: 0;
    position: absolute;
    visibility: hidden;
    transition: transform 0.3s, opacity 0.3s, visibility 0.3s, color 0.3s,
      background 0.3s;
  }

  &::after {
    content: '';
    background: ${props => (props.active ? '#ed3947' : '#743789')};
    bottom: -5px;
    height: 1px;
    left: 0;
    transform: translateX(-100%);
    width: 100%;
    z-index: 1;
  }

  &::before {
    content: attr(data-text);
    bottom: calc(100% + 10px);
  }

  &:first-child {
    margin-left: 0;
  }
`

export const Line = styled.div`
  background: #42153c;
  bottom: 6px;
  position: absolute;
  height: 1px;
  left: 0;
  width: 100%;
`
