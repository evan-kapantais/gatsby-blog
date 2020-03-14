import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const SLink = styled(Link) `
  position: relative;
  margin-right: 1rem;
  letter-spacing: 1px;
  text-transform: capitalize;

  &:last-child {margin-right: 0;}

  &::after {
    content: '';
    position: absolute;
    bottom: -7px;
    left: 0;
    height: 2px;
    width: 100%;
    background-color: #000;
    opacity: 0;
    transition: all 300ms ease-in-out;
  }

  &:hover::after {
    opacity: 1;
  }
`

const NavLink = ({ link }) => {
  return (
    <SLink to={`/${link}`}>{link}</SLink>
  );
}

export default NavLink;