import React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import styled from 'styled-components'

import HamburgerMenu from '../components/hamburger'

// TODO: rework the header with 2 headings and a div instead
// TODO: responsive

const Container = styled.div `
  max-width: 1200px;
  margin: 8rem auto;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 980px) {
    flex-direction: column;
    justify-content: center;
  }
`

const ImageWrapper = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  overflow: hidden;

  img {margin: 0;}

  @media only screen and (max-width: 980px) {
    max-width: 300px;
    height: 300px;
    border-radius: 50%;
  }

  @media only screen and (max-width: 480px) {
    max-width: 200px;
    height: 200px;
  }
`

const Content = styled.div `
box-sizing: padding-box;
padding: 0 2rem;
  
  div {
    margin: 3rem 0;
    line-height: 1.75;
    
    a {
      color: rgb(3, 159, 255);

      &:hover {text-decoration: underline;}
    }

    @media only screen and (max-width: 980px) {
      text-align: center;
    }

    @media only screen and (max-width: 480px) {
      text-align: justify;
    }
  }
`

const Social = styled.div `
  display: flex;
  justify-content: flex-start;

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
      box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);
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

  @media only screen and (max-width: 980px) {
    justify-content: center;
  }
`

const aboutPage = () => {
  return (
    <Layout title='About'>
      <Seo title='About' />
      <HamburgerMenu />
      <Container>
        <ImageWrapper>
          <img src={require('../images/portrait_01.jpg')} alt='portrait' />
        </ImageWrapper>
        <Content>
          <div>
            <h2>Hey Stranger!</h2>
            <p>If you haven't noticed by now, this is my blog; thanks for dropping by! I'll give you a bit of info so we can become real friends. By training, I am a sound designer specializing in video games. Currently I am based in beautiful Barcelona, Spain, but my country of origin is Greece. Besides my day job, I like to code websites and apps and write stuff about topics that interest me. Here you can find posts on religion, a bit of politics, books and tech. Although this page is solely dedicated to my writing, you can also find my frontend work over at my <a href=''>other website</a> &#40;the link is broken, I know, I know&#41;.</p>
            <p>Should you want to reach out to me, you can find me on my social media below.</p>
            <p>Happy reading!</p>
          </div>
          <Social>
            <a href="https://twitter.com/evankapantais"><img src={require('../images/twitter.png')} alt=''/></a>
            <a href="https://www.instagram.com/evan_kapantais/"><img src={require('../images/instagram.png')} alt=''/></a>
            <a href="https://github.com/evan-kapantais"><img src={require('../images/github.png')} alt=''/></a>
          </Social>
        </Content>
      </Container>
    </Layout>
  )
}

export default aboutPage;