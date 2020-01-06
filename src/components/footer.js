import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer `
  padding: 2rem 4rem;
  color: white;
  background: #111111;
`

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <StyledFooter>
      <small>&copy; Evan Kapantais, {year}</small>
    </StyledFooter>
  )
}

export default Footer;