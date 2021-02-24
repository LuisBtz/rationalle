import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

export default function Logo() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "rationalleLogo.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `)
  const logo = data.file.childImageSharp.fluid

  return (
    <LogoWrapper>
      <Img fluid={logo} imgStyle={{ objectFit: "contain" }} />
    </LogoWrapper>
  )
}

const LogoWrapper = styled.div`
  width: 95%;
  margin: 0 auto;
`
