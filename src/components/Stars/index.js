import React, { useState, useEffect } from 'react'
import { TweenMax } from 'gsap'
import * as S from './styles'

import Star from '../../images/star.svg'

const Stars = () => {
  const [stars, setStars] = useState([])
  const [starsLast, setStarsLast] = useState([])

  const size = {
    width: 1400,
    height: 400,
  }

  useEffect(() => {
    setStars(handleStars('star'))
    setStarsLast(handleStars('star-last'))
  }, [])

  useEffect(() => {
    const listStars = document.querySelectorAll('.star')
    const listStarsLast = document.querySelectorAll('.star-last')
    const animation = {
      opacity: 0,
      repeat: -1,
      yoyo: true,
    }

    if (listStars.length) {
      TweenMax.staggerFrom(listStars, 0.2, animation, 0.2)
      TweenMax.staggerFrom(
        listStarsLast,
        0.2,
        { ...animation, opacity: 1 },
        0.2
      )
    }
  }, [stars])

  const handleStars = clName => {
    const list = []

    for (let i = 0; i <= 90; i++) {
      const random = Math.random()
      const xPos = Math.random() * size.width - 100
      const yPos = Math.random() * size.height - size.height / 2

      list.push(
        <Star
          key={i}
          className={clName}
          style={{
            left: xPos,
            top: yPos,
            opacity: random,
            transform: `scale(${random})`,
          }}
        />
      )
    }

    return list
  }

  return (
    <S.Container>
      {stars.map(item => item)}
      {starsLast.map(item => item)}
    </S.Container>
  )
}

export { Stars }
