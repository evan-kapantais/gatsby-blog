import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const SLink = styled(Link) `
  position: relative;
  color: #fff;
  font-weight: 600;
  margin-right: 1rem;

  &:last-child {margin-right: 0;}

  &::after {
    content: '';
    position: absolute;
    bottom: -7px;
    left: 0;
    height: 2px;
    width: 100%;
    background-color: #fff;
    opacity: 0;
    transition: all 300ms ease;
  }

  &:hover::after {
    opacity: 1;
  }
`

const NavLink = ({ to, text }) => {
  return (
    <SLink to={to}>{text}</SLink>
  );
}

export default NavLink;