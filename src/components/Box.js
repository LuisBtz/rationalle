import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

// const topPosition = Math.floor(Math.random() * 25) + 1;
// const leftPosition = Math.floor(Math.random() * 50) + 1;

const myArray = ['#f2ffb4', '#E1BFFF', '#F2FFB4', '#FF989B']

const randomColor = () => myArray[Math.floor(Math.random() * myArray.length)]

const randomLeft = () => Math.floor(Math.random() * 52) + 1
const randomTop = () => Math.floor(Math.random() * 38) + 1

export default function Box({ constraintsRef }) {
  // Random color
  const [bgColor, setBgColor] = useState()
  useEffect(() => {
    setBgColor(randomColor())
  }, [])

  // random X
  const [leftPosition, setLeftPosition] = useState()
  useEffect(() => {
    setLeftPosition(randomLeft())
  }, [])

  // random Y

  const [topPosition, setTopPosition] = useState()
  useEffect(() => {
    setTopPosition(randomTop())
  }, [])

  return (
    <BoxWrapper
      drag
      dragConstraints={constraintsRef}
      dragElastic={0.1}
      dragTransition={{ bounceStiffness: 50, bounceDamping: 10 }}
      style={{
        position: 'absolute',
        backgroundColor: bgColor,
        left: `${leftPosition}%`,
        top: `${topPosition}%`,
      }}
    >
      <Texto>
        <p>
          A label born out of New York but a project that spans cities,
          countries and cultures. It’s a collaboration of design and style that
          brings women together, celebrates unique style, and focuses on ethical
          practices.
        </p>
        <span>Coming Soon</span>
      </Texto>
      <strong>2021</strong>
    </BoxWrapper>
  )
}

const BoxWrapper = motion.custom(styled.div`
  position: absolute;
  top: 110%;
  left: 110%;
  cursor: move;
  height: 550px;
  max-width: 470px;
  padding: 20px;
  box-sizing: border-box;
  z-index: 1;
  display: grid;
  align-items: end;
  strong {
    position: absolute;
    bottom: 230px;
    right: 0;
    font-family: var(--helvetica);
    font-size: 4rem;
    transform: rotate(-90deg);
    pointer-events: none;
  }
  @media (max-width: 650px) {
    height: 400px;
    max-width: 250px;
    strong {
      right: -10px;
      font-size: 2.5rem;
      bottom: 248px;
    }
  }
`)

const Texto = styled.div`
  align-self: end;
  font-size: 1.3rem;
  pointer-events: none;
  span {
    margin-top: 50px;
    text-align: center;
    display: block;
    font-family: var(--helvetica);
    text-transform: uppercase;
  }

  @media (max-width: 650px) {
    font-size: 1rem;
  }
`
