import React from 'react'
import styled from 'styled-components'
import Gatsby from '../images/gatsby.png'

const StyledFooter = styled.footer `
max-width: 1200px;
margin: 0 auto;
  padding: 2rem 4rem;
  /* color: white; */
  /* background: #111111; */
  display: flex;
  justify-content: space-between;

  a {
    color: #532C85;
  }
`

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <StyledFooter>
      <small>&copy; Evan Kapantais, {year}</small>
      <small>Made with <a href="https://www.gatsbyjs.org/">Gatsby</a> and ❤️.</small>
    </StyledFooter>
  )
}

export default Footer;