import React from 'react'
import styled, { keyframes } from 'styled-components'

const Beat = keyframes`
  0% { transform: scale(1); }

  20% { transform: scale(1.2); }
  
  100% { transform: scale(1); }
`

const StyledFooter = styled.footer `
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  justify-content: space-between;

  span {
    display: inline-block;
    user-select: none;
    animation: ${Beat} 1000ms ease infinite forwards;
  }
`

const GatsbyLink = styled.a `
  color: #532C85;

  &:hover { text-decoration: underline; }
`

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <StyledFooter>
      <small>&copy; Evan Kapantais, {year}</small>
      <small>Made with <span role='img' aria-label='heart'>❤️</span> and <GatsbyLink href="https://www.gatsbyjs.org/">Gatsby</GatsbyLink>.</small>
    </StyledFooter>
  )
}

export default Footer;