import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const StyledLink = styled(Link) `
  padding: 0 10px;
  border-radius: 20px;
  border: 1px solid lightskyblue;
  color: rgb(3, 159, 255);
  background-color: rgba(3, 159, 255, 0.2);
  font-size: 0.8rem;
`

const Tag = (props) => {
  return (
    <StyledLink to={`/tags/${props.tag}`}>#{props.tag}</StyledLink>
  );
}

export default Tag;