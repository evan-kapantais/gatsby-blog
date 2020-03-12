import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const StyledLink = styled(Link) `
  margin: 0 0.5rem 0 0;
  color: darkred;
  font-weight: bold;
  font-size: 0.8rem;
  /* &:last-child {margin-right: 0;} */
`

const Tag = (props) => {
  return (
    <StyledLink to={`/tags/${props.tag}`}>{props.tag}</StyledLink>
  );
}

export default Tag;