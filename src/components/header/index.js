import React, { useState } from 'react'
import animateScrollTo from 'animated-scroll-to'

import Container from 'components/container'
import * as S from './styles'

const Header = ({ data }) => {
  const [active, setActive] = useState(false)

  const handleClickTop = ({ event, id }) => {
    event.preventDefault()
    setActive(false)
    animateScrollTo(document.querySelector(`#${id}`), { verticalOffset: -30 })
  }

  return (
    <S.Wrapper hasNavigation={!data.length}>
      <Container>
        <S.Nav active={active}>
          <ul>
            {data.map(item => (
              <li key={item}>
                <a href={`#${item}`} onClick={event => handleClickTop({ event, id: item })} title={item}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </S.Nav>

        {!!data.length && (
          <S.Hamburger onClick={() => setActive(!active)} active={active}>
            <span />
          </S.Hamburger>
        )}

        <S.Icon href='https://github.com/guilhermessantos' title='github'>
          <svg width='26' height='24' xmlns='http://www.w3.org/2000/svg'>
            <path d='M12.706 0C5.686 0 0 5.51 0 12.305c0 5.437 3.64 10.048 8.688 11.674.635.116.868-.265.868-.592 0-.292-.01-1.066-.016-2.092-3.534.742-4.28-1.65-4.28-1.65-.578-1.42-1.413-1.8-1.413-1.8-1.151-.764.089-.748.089-.748 1.276.086 1.946 1.268 1.946 1.268 1.133 1.881 2.974 1.338 3.7 1.024.115-.797.442-1.338.805-1.646-2.822-.308-5.787-1.366-5.787-6.08 0-1.343.492-2.44 1.307-3.302-.143-.31-.572-1.562.111-3.256 0 0 1.064-.33 3.494 1.261a12.576 12.576 0 013.177-.415c1.08.006 2.16.142 3.176.415 2.415-1.591 3.479-1.261 3.479-1.261.683 1.694.254 2.945.127 3.256a4.683 4.683 0 011.302 3.302c0 4.727-2.97 5.767-5.797 6.07.445.369.858 1.123.858 2.276 0 1.647-.016 2.97-.016 3.37 0 .322.222.707.873.584 5.084-1.615 8.72-6.23 8.72-11.658C25.412 5.509 19.724 0 12.707 0z' />
          </svg>
        </S.Icon>
      </Container>
    </S.Wrapper>
  )
}

export default Header
