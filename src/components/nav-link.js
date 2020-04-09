import React from 'react'
import styled from 'styled-components'

import { Link } from 'gatsby'

const StyledLink = styled(Link) `
  display: inline-block;
  text-transform: capitalize;
  margin: 0 0.5rem;
`

const NavLink = (props) => {
  return (
    <StyledLink to={`/tags/${props.to}`}>
      {props.to}
    </StyledLink>
  );
}

export default NavLink