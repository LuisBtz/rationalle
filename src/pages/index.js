import React, { useRef } from "react"
import Logo from "../components/Logo"
import styled from "styled-components"
import Box from "../components/Box"
import Footer from "../components/Footer"

export default function IndexPage() {
  const constraintsRef = useRef(null)
  return (
    <>
      <Wrapper ref={constraintsRef}>
        <Logo />
        <Box constraintsRef={constraintsRef} />
        <Footer />
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: #f9f7ee;
  overflow: hidden;
  position: relative;
`
