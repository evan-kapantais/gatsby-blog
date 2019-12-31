import React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import styled from 'styled-components'
import Circle from '../components/circle'

const Container = styled.div `
  max-width: 500px;
  margin: 4rem auto;
  text-align: center;
  
  p {
    line-height: 1.75rem;
    background: #f2f2f2;
    z-index: 2;
    margin: 0;
  }
`

const ImageWrapper = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 3rem;
  position: relative;

    img {
      margin: 0;
      max-width: 150px;
      border-radius: 50%;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    }
`

const Social = styled.div `
  display: flex;
  justify-content: center;
  padding: 2rem 0;

  a {
    margin: 0 8px;
    width: 24px;
    height: 24px;
    display: block;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: -15px;
      left: 0;
      height: 3px;
      width: 100%;
      background: #333;
      opacity: 0;
      box-shadow: 0 3px 10px rgba(0, 0, 0, 0.5);
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
          <Circle
          width='200'
          />
          <img src={require('../images/portrait.jpg')} alt='portrait' />
        </ImageWrapper>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quo repellat excepturi expedita vel ducimus temporibus quae! Voluptatum eius eligendi iste ea explicabo! Voluptatibus id reprehenderit recusandae suscipit nihil, praesentium soluta quos laudantium, est quia aut sit eius omnis reiciendis tempore porro labore ipsum fuga sunt iure dolorum veritatis dolorem repudiandae earum. Dolores eligendi explicabo alias? Omnis inventore aliquid repellendus id quis voluptatibus vitae corporis officia fugit nobis cupiditate labore aperiam eligendi, nulla quas eum corrupti possimus ipsum commodi officiis neque odit.</p>
        <Social>
          <a href="https://twitter.com/evankapantais"><img src={require('../images/twitter.png')} alt=""/></a>
          <a href="https://www.instagram.com/evan_kapantais/"><img src={require('../images/instagram.png')} alt=""/></a>
          <a href="https://github.com/evan-kapantais"><img src={require('../images/github.png')} alt=""/></a>
        </Social>
      </Container>
    </Layout>
  )
}

export default aboutPage;