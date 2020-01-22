import React from 'react'
import styled, { keyframes } from 'styled-components'

import Layout from '../components/layout'
import Seo from'../components/seo'
import ContactForm from '../components/contact-form'

// TODO: animation library
// TODO: merge it

const Card = styled.div`
  /* max-width: 1800px; */
  margin: 6rem auto;
  position: relative;
  display: flex;
  align-items: center;

  section img {
    display: block;
    margin: 0;
  }
`

const Content = styled.section `
  padding: 2rem;
  transform: translateX(8rem);
  background: white;
  border-radius: 5px;
  box-shadow: -3px -3px 10px rgba(0, 0, 0, 0.1);

  h1 {
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
`

const Social = styled.div `
  display: flex;
  justify-content: flex-end;
  margin-top: 2rem;

  a {
    margin: 0 0.3rem;
    position: relative;
    display: block;
    width: 1.2rem;

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
`

const contactPage = () => (
  <Layout>
    <Seo title='Contact' />
    <Card>
      <Content>
        <h2>Contact</h2>
        <ContactForm width='400px' />
        <Social>
          <a href="https://twitter.com/evankapantais">
            <img src={require('../images/github.png')} alt=""/>
          </a>
          <a href="https://github.com/evan-kapantais">
            <img src={require('../images/twitter.png')} alt=""/>
          </a>
          <a href="https://www.instagram.com/evan_kapantais/">
            <img src={require('../images/instagram.png')} alt=""/>
          </a>
        </Social>
      </Content>
      <section>
        <img src={require('../images/benjamin-gremler-q_TzfAt4NQ8-unsplash.jpg')} alt='Barcelona Aerial View'/>
      </section>
    </Card>
  </Layout>
)

export default contactPage;