import React from 'react'
import styled, { keyframes } from 'styled-components'

import Social from './social'

const Beat = keyframes`
  0% { transform: scale(1); }

  20% { transform: scale(1.2); }

  50% {transform: scale(1);}
  
  100% { transform: scale(1); }
`

const StyledFooter = styled.footer `
  position: relative;
  width: 100%;
  padding: 2rem;
  display: flex;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  justify-content: space-between;
  align-items: center;

  small > span {
    display: inline-block;
    user-select: none;
    line-height: 1;
    animation: ${Beat} 1s ease infinite forwards;
  }

  @media (max-width: 700px) {
    padding: 1rem;
    & > div {
      display: none;
    }
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
      <small>Made with <span role='img' aria-label='heart'>❤️</span>and <GatsbyLink href="https://www.gatsbyjs.org/">Gatsby</GatsbyLink>.</small>
      {/* <Social /> */}
    </StyledFooter>
  )
}

export default Footer;