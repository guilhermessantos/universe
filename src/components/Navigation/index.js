import React, { useEffect, useState, useRef } from 'react'
import t from 'prop-types'
import clsx from 'clsx'
import { TimelineLite } from 'gsap'
import { FaArrowUp, FaArrowDown } from 'react-icons/fa'
import * as S from './styles'

const Navigation = ({ handlePagination, listMenu, pagination }) => {
  const [activeMenu, setActiveMenu] = useState(false)
  const elButtons = useRef(null)
  const elLine = useRef(null)

  useEffect(() => {
    const timeline = new TimelineLite()
    const bullet = document.querySelectorAll('.menu__bullet')

    timeline
      .to(elLine.current, 1, {
        height: 'calc(100vh - 251px)',
      })
      .to(elButtons.current, 0.3, {
        opacity: 1,
        y: 0,
      })
      .staggerTo(
        bullet,
        0.2,
        {
          scaleX: 1.1,
          scaleY: 1.1,
          opacity: 1,
        },
        0.3,
        '=-1'
      )

    timeline.eventCallback('onComplete', () => setActiveMenu(true))
  }, [])

  return (
    <S.Container>
      <S.Content>
        <S.Buttons ref={elButtons}>
          <S.Button action="prev" onClick={() => handlePagination('prev')}>
            <div>
              <FaArrowUp />
              <FaArrowUp />
            </div>
          </S.Button>

          <S.Button action="next" onClick={() => handlePagination('next')}>
            <div>
              <FaArrowDown />
              <FaArrowDown />
            </div>
          </S.Button>
        </S.Buttons>

        <S.Line ref={elLine} />

        <S.Menu>
          {listMenu.map((item, index) => (
            <S.MenuItem
              key={item}
              className={clsx({
                active: index === pagination && activeMenu,
              })}
              onClick={() => handlePagination('menu', index)}
            >
              <S.Bullet className="menu__bullet" />
              <S.Text>{item}</S.Text>
            </S.MenuItem>
          ))}
        </S.Menu>
      </S.Content>
    </S.Container>
  )
}

Navigation.propTypes = {
  handlePagination: t.func.isRequired,
  listMenu: t.array.isRequired,
  pagination: t.number.isRequired,
}

export { Navigation }
