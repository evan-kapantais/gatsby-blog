import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer `
  padding: 2rem;
  display: flex;
  justify-content: center;
  color: white;
  background: #111111;

  p {
    margin: 0;
    font-weight: 600;
    letter-spacing: 1px;
  }
`

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <StyledFooter>
      <p>&copy; Evan Kapantais, {year}</p>
    </StyledFooter>
  )
}

export default Footer;