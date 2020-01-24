import React from 'react'
import styled, { keyframes } from 'styled-components'

import Layout from '../components/layout'
import Seo from'../components/seo'
import ContactForm from '../components/contact-form'

const Card = styled.div`
  margin: 8rem auto 10rem auto;
  position: relative;
  max-width: 1200px;
  min-width: 500px;
  height: 674.89px;

  @media (max-width: 660px) {
    height: unset;
    margin-bottom: 4rem;
  }

  section:first-child {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -999;

    img {
      display: block;
      margin: 0 auto;
    }

    @media (max-width: 660px) {
      position: relative;
    }
  }
`

const Content = styled.section `
  width: 500px;
  position: absolute;
  top: 10rem;
  right: 2rem;
  padding: 2rem;
  background: white;
  border-radius: 5px;
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.2);
  z-index: 29;
  transition: all 300ms ease;

  @media (max-width: 660px) {
    position: relative;
    top: 0;
    left: 0;
    margin: 2rem auto;
  }
`

const contactPage = () => (
  <Layout>
    <Seo title='Contact' />
    <Card>
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