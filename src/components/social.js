import React from 'react'
import styled from 'styled-components'

const SocialContainer = styled.div `
  display: flex;
  justify-content: space-between;

  > a {
    margin-right: 0.7rem;
    width: 20px;
    height: 20px;
    display: block;
    position: relative;

    &:last-child {margin: 0;}

    > img {
      width: 100%;
      margin: 0;
      position: absolute;
      top: 0;
      left: 0;
    }
  }
`

const Social = (props) => (
  <SocialContainer margin={props.margin} justify={props.justify}>
    <a href="https://github.com/evan-kapantais">
      <img src={require('../images/icons/social/dev.png')} alt=''/>
    </a>
    <a href="https://twitter.com/evankapantais">
      <img src={require('../images/icons/social/twitter-colour.png')} alt=''/>
    </a>
    <a href="https://www.instagram.com/evan_kapantais/">
      <img src={require('../images/icons/social/instagram-colour.png')} alt=''/>
    </a>
    <a href="https://github.com/evan-kapantais">
      <img src={require('../images/icons/social/github-colour.png')} alt=''/>
    </a>
  </SocialContainer>
);

export default Social;