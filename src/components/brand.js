import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const BrandLink = styled(Link) `
  display: ${props => props.notitle ? 'none' : 'flex'};
  align-items: center;
  min-width: 278px;

  img {
      display: block;
      margin: 0;
      max-width: 50px;
      height: 50px;
    }

    h1 {
      margin: 0;
      font-size: 1.5rem;
      user-select: none;
      text-transform: uppercase;
    }
`

const Brand = (props) => (
  <BrandLink to='/' notitle={props.notitle}>
    <img src={require('../images/noose.png')} alt=''/>
    <h1>{props.title}</h1>
  </BrandLink>
);

export default Brand;