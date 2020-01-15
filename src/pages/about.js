import React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import styled, { keyframes } from 'styled-components'

// TODO: rework the header with 2 headings and a div instead

const Container = styled.div `
  max-width: 1000px;
  margin: 8rem auto;
  display: flex;
  align-items: center;
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
`

const title = keyframes `
  100% {
    top: 0;
  }
`

const Content = styled.div `
box-sizing: padding-box;
padding: 0 2rem;

  h2 {
    position: relative;
    overflow: hidden;
    padding: 1px 0;
    color: rgb(3, 159, 255);
    user-select: none;

    &::after {
      content: "Hello Friend!";
      background: white;
      position: absolute;
      color: #333;
      top: 40px;
      width: 50%;
      left: 0;
      padding: 1px 0;
      animation: ${title} 10s ease 1000ms forwards;
    }
  }

  
  p {
    margin: 3rem 0;
    line-height: 2;
    
    a {
      color: rgb(3, 159, 255);

      &:hover {text-decoration: underline;}
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
`

const aboutPage = () => {
  return (
    <Layout title='About'>
      <Seo title='About' />
      <Container>
        <ImageWrapper>
          <img src={require('../images/portrait_01.jpg')} alt='portrait' />
        </ImageWrapper>
        <Content>
          <h2>Hey Stranger!</h2>
          <p>Thanks for dropping by! I am Evan, a frontend developer from sunny Athens, Greece. Professionally, I am trained in the dark arts of sound design and am currently working for a video game company in Barcelona called <a href='https://www.socialpoint.es/' alt='Social Point Webpage'>Social Point</a>. My coding journey (seriously) began at the beginning of 2019, when I dove head-first into web development. I have been coding pretty much every day since then, while at my day-job I work mostly with C#, handling the audio of the company's games and marketing campaigns.</p>
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