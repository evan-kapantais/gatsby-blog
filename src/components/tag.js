import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const StyledLink = styled(Link) `
  margin-bottom: 1rem;
  color: darkred;
  font-weight: bold;
  text-transform: capitalize;
  font-size: ${props => props.size || `0.8rem`};
`

const Tag = (props) => {
  return (
    <StyledLink size={props.size} to={`/tags/${props.tag}`}>{props.tag}</StyledLink>
  );
}

export default Tag;