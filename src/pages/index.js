import React from "react"
import Layout from "../components/layout"
import Logo from "../components/Logo"
import styled from "styled-components"
import BoxWrapper from "../components/BoxWrapper"
import Footer from "../components/Footer"

export default function IndexPage() {
  return (
    <Layout>
      <Wrapper>
        <Logo />
        <BoxWrapper />
        <Footer />
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: #f9f7ee;
  overflow: hidden;
  position: relative;
`
