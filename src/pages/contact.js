import React from 'react'
import styled, { keyframes } from 'styled-components'

import Layout from '../components/layout'
import Seo from'../components/seo'
import ContactForm from '../components/contact-form'

// TODO: animation library
// TODO: merge it

const Card = styled.div`
  margin: 6rem auto 0 auto;
  position: relative;
  max-width: 1200px;

  h1 {
    font-size: 4rem;
  }

  section:first-child {
    img {
      display: block;
      margin: 0 auto;
    }
  }
`

const Content = styled.section `
  max-width: 500px;
  margin: 0 auto;
  transform: translate(18rem, -30rem);
  padding: 2rem;
  background: white;
  border-radius: 5px;
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.2);
  z-index: 999;
  transition: all 300ms ease;

  @media (max-width: 1175px) {
    transform: translate(0, -20rem);
  }

  @media (max-width: 800px) {
    transform: translate(0, -10rem);
  }

  @media (max-width: 600px) {
    transform: translate(0, 0);
    margin: 2rem auto;
  }

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
`

const contactPage = () => (
  <Layout>
    <Seo title='Contact' />
    <Card>
      {/* <h1>Contact</h1> */}
      <section>
        <img src={require('../images/benjamin-gremler-q_TzfAt4NQ8-unsplash.jpg')} alt='Barcelona Aerial View'/>
      </section>
      <Content>
        <ContactForm width='500px' />
      </Content>
    </Card>
  </Layout>
)

export default contactPage;