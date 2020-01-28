import React, { useEffect, useState, useRef } from 'react'
import clsx from 'clsx'
import t from 'prop-types'
import * as S from './styles'

const { createRef } = React

const Carousel = ({ data, quant }) => {
  const elementsRef = useRef(data.map(() => createRef()))
  const quantItems = quant
  const totalItems = elementsRef.current.length
  const totalPagination = totalItems / quant
  const [sizeItem, setSizeItem] = useState(quant)
  const [load, setLoad] = useState(true)
  const [pagination, setPagination] = useState(1)
  const [sizeContainer, setSizeContainer] = useState({ width: 0, height: 0 })
  const [sizeContainerInitial, setSizeContainerInitial] = useState({
    width: 0,
    height: 0,
  })

  useEffect(() => {
    setLoad(false)
  }, [])

  useEffect(() => {
    const item = elementsRef.current[0].current
    const size = {
      width: quantItems * item.offsetWidth,
      height: item.offsetHeight,
    }

    setSizeContainerInitial(size)
    setSizeContainer(size)
  }, [load])

  const removeAllClass = i => {
    elementsRef.current[i].current.classList.remove('active')
    elementsRef.current[i].current.classList.remove('next')
    elementsRef.current[i].current.classList.remove('prev')
  }

  const handlePaginationNext = () => {
    if (totalPagination > pagination) {
      for (let i = 0; i < totalItems; i++) {
        removeAllClass(i)

        if (i < sizeItem && i >= sizeItem - quantItems) {
          elementsRef.current[i].current.classList.add('prev')
        }

        if (i >= sizeItem && i < sizeItem + quantItems) {
          elementsRef.current[i].current.classList.add('active')
        }

        if (i >= sizeItem + quantItems && i < sizeItem + quantItems * 2) {
          elementsRef.current[i].current.classList.add('next')
        }
      }

      setSizeContainer({
        height: sizeContainer.height - sizeContainerInitial.height,
      })

      setPagination(pagination + 1)
      setSizeItem(sizeItem + quantItems)
    }
  }

  const handlePaginationPrev = () => {
    if (pagination > 1) {
      for (let i = 0; i < totalItems; i++) {
        removeAllClass(i)

        if (i >= sizeItem - quantItems * 3 && i < sizeItem - quantItems * 2) {
          elementsRef.current[i].current.classList.add('prev')
        }

        if (i >= sizeItem - quantItems * 2 && i < sizeItem - quantItems) {
          elementsRef.current[i].current.classList.add('active')
        }

        if (i >= sizeItem - quantItems && i < sizeItem) {
          elementsRef.current[i].current.classList.add('next')
        }
      }

      setSizeContainer({
        height: sizeContainer.height + sizeContainerInitial.height,
      })

      setPagination(pagination - 1)
      setSizeItem(sizeItem - quantItems)
    }
  }

  return (
    <>
      <S.Container
        style={{
          transform: `translateY(${sizeContainer.height -
            sizeContainerInitial.height}px)`,
          width: `${sizeContainer.width}px`,
        }}
      >
        {data.map((item, index) => (
          <S.Item
            key={item}
            ref={elementsRef.current[index]}
            className={clsx({
              active: index < quantItems,
              next: index >= quantItems && index < quantItems * 2,
            })}
          >
            {item}
          </S.Item>
        ))}
      </S.Container>

      <S.Buttons>
        <S.Button type="button" onClick={() => handlePaginationPrev()} />
        <S.Button type="button" onClick={() => handlePaginationNext()} />
      </S.Buttons>
    </>
  )
}

Carousel.propTypes = {
  data: t.shape([]).isRequired,
  quant: t.number.isRequired,
}

export { Carousel }
