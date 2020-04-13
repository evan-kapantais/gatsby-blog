import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const StyledLink = styled(Link) `
  padding: 5px;
  border-radius: 3px;
  font-size: 0.8rem;
  font-weight: 600;
  color: rgb(3, 159, 255);
  background-color: rgba(3, 159, 255, 0.1);
  margin: 0 0.5rem 0 0;

  &:last-child {margin-right: 0;}
`

const Tag = (props) => {
  return (
    <StyledLink to={`/tags/${props.tag}`}>{props.tag}</StyledLink>
  );
}

export default Tag;