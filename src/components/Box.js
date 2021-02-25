import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

export default function Box({ constraintsRef }) {
  return (
    <BoxWrapper drag dragConstraints={constraintsRef} dragElastic={0.1}>
      <Texto>
        <p>
          A label born out of New York but a project that spans cities,
          countries and cultures. It’s a collaboration of design and style that
          brings women together, celebrates unique style, and focuses on
          sustainable and ethical practices.
        </p>
        <span>Coming Soon</span>
      </Texto>
      <strong>2021</strong>
    </BoxWrapper>
  );
}

const top = Math.floor(Math.random() * 25) + 1;
const left = Math.floor(Math.random() * 50) + 1;

const myArray = ['#f2ffb4', '#E1BFFF', '#F2FFB4', '#FF989B'];

const randomItem = myArray[Math.floor(Math.random() * myArray.length)];

const BoxWrapper = motion.custom(styled.div`
  cursor: move;
  background: ${randomItem};
  height: 550px;
  max-width: 470px;
  padding: 20px;
  box-sizing: border-box;
  position: absolute;
  top: ${top}%;
  left: ${left}%;
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
`);

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
`;
