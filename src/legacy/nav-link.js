import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const StyledLink = styled(Link) `
  display: inline-block;
  position: relative;
  letter-spacing: 1px;
  margin-right: 1.5rem;
  font-size: 0.8rem;
  color: ${props => props.color || '#000'};

  &:last-child {margin: 0;}

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    height: 2px;
    width: 100%;
    background: #333;
    opacity: 0;
    transition: all 300ms ease;
  }

  &:hover::after {
    bottom: 0px;
    opacity: 1;
  }
`

const NavLink = (props) => (
  <StyledLink 
  to={props.to} 
  activeStyle={{fontWeight: 600}}
  >
    {props.text}
  </StyledLink>
);

export default NavLink;