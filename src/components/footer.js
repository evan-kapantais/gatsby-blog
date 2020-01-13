import React from 'react'
import styled, { keyframes } from 'styled-components'

const StyledFooter = styled.footer `
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 4rem;
  display: flex;
  justify-content: space-between;
`

const Beat = keyframes`
  0% { transform: scale(1); }

  20% { transform: scale(1.2); }
  
  100% { transform: scale(1); }
`

const CodepenLink = styled.a `
  display: inline-block;
  animation: ${Beat} 1000ms ease infinite forwards;
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
      <small>Made with <CodepenLink href="https://codepen.io/Camp_Evan/full/wvvVmGa"><span role='img' aria-label='heart'>❤️</span></CodepenLink> and <GatsbyLink href="https://www.gatsbyjs.org/">Gatsby</GatsbyLink>.</small>
    </StyledFooter>
  )
}

export default Footer;