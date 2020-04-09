import React from 'react'
import styled from 'styled-components'

import { Link } from 'gatsby'

const StyledLink = styled(Link) `
  display: inline-block;
  text-transform: capitalize;
  position: relative;
  margin: 0 0.5rem;

  &::after {
    content: '';
    width: 2px;
    height: 1px;
    position: absolute;
    bottom: -15px;
    left: calc(50% - 2px);
    background-color: #222333;
    opacity: 0.5;
    transition: 
      bottom 100ms ease-in-out,
      opacity 100ms ease-in-out,
      width 300ms 50ms ease-in-out,
      left 300ms 50ms ease-in-out;
  }

  &:hover::after {
    bottom: -10px;
    opacity: 1;
    width: 100%;
    left: 0;
  }
`



const StyledSpecialLink = styled(StyledLink) `
  /* background: #222333; */
  border: 1px solid #222333;
  /* color: #fff; */
  padding: 0.3rem 0.8rem;
  border-radius: 3px;

  &::after {
    display: none;
  }
`

export const NavLink = ({ to }) => {
  return (
    <StyledLink to={`/tags/${to}`}>
      {to}
    </StyledLink>
  );
}

export const SpecialLink = ({ to }) => {
  return (
    <StyledSpecialLink to={`tags/${to}`}>
      {to}
    </StyledSpecialLink>
  );
}

export default NavLink