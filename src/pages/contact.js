import React from 'react'
import styled, { keyframes } from 'styled-components'

import Layout from '../components/layout'
import Seo from'../components/seo'
import ContactForm from '../components/contact-form'

// TODO: animation library
// TODO: merge it

const Container = styled.div`
  max-width: 1200px;
  margin: 18rem auto;

  h1 {
    text-align: center;
    line-height: 1.75;
    font-weight: normal;

    a {
      color: rgb(3, 159, 255);
      position: relative;

      &::after {
        content: '';
        position: absolute;
        height: 3px;
        width: 100%;
        background: rgb(3, 159, 255);
        bottom: -10px;
        opacity: 0;
        left: 0;
        transition: all 500ms ease;
      }

      &:hover::after {
        opacity: 1;
        bottom: -4px;
      }
    }
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    a {
      margin: 4rem .5rem;
      position: relative;
      display: block;

      &::after {
        content: '';
        position: absolute;
        bottom: -20px;
        left: 0;
        height: 3px;
        width: 100%;
        background: #333;
        opacity: 0;
        transition: all 500ms ease;
      }

      &:hover::after {
        bottom: -10px;
        opacity: 1;
      }

      img {
        margin: 0;
        display: block;
        top: 0;
        left: 0;
      }
    }
  }
`

const contactPage = () => (
  <Layout>
    <Seo title='Contact' />
    <Container>
      <h1>You can send me an email at <a href='mailto: evankapantais@gmail.com'>evankapantais@gmail.com</a> <br/> or find me on my social media.</h1>
      <div>
        <a href="https://twitter.com/evankapantais">
          <img src={require('../images/github.png')} alt=""/>
        </a>
        <a href="https://github.com/evan-kapantais">
          <img src={require('../images/twitter.png')} alt=""/>
        </a>
        <a href="https://www.instagram.com/evan_kapantais/">
          <img src={require('../images/instagram.png')} alt=""/>
        </a>
      </div>
    </Container>
  </Layout>
)

export default contactPage;