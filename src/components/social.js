import React from 'react'
import styled from 'styled-components'

const SocialContainer = styled.div `
  margin: ${props => props.margin || `2rem`};
  display: flex;
  justify-content: center;

  a {
    margin-right: 1rem;
    width: 24px;
    height: 24px;
    display: block;
    position: relative;

    &:last-child {margin: 0;}

    &::after {
      content: '';
      position: absolute;
      bottom: -15px;
      left: 0;
      height: 3px;
      width: 100%;
      background: #333;
      opacity: 0;
      transition: all 400ms ease;
    }

    &:hover::after {
      bottom: -8px;
      opacity: 1;
    }

    img {
      margin: 0;
      position: absolute;
      top: 0;
      left: 0;
    }
  }
`

const Social = (props) => (
  <SocialContainer margin={props.margin}>
    <a href="https://twitter.com/evankapantais">
      <img src={require('../images/twitter.png')} alt=''/>
    </a>
    <a href="https://www.instagram.com/evan_kapantais/">
      <img src={require('../images/instagram.png')} alt=''/>
    </a>
    <a href="https://github.com/evan-kapantais">
      <img src={require('../images/github.png')} alt=''/>
    </a>
  </SocialContainer>
);

export default Social;