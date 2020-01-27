import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import styled from 'styled-components'

const Container = styled.div `
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;

  h1 {
    font-size: 10rem;
    margin: 0;
  }

  h2 {margin-bottom: 4rem;}

  p {margin: 0;}

  @media (max-width: 360px) {
    h1 {
      font-size: 8rem;
    }
  }
`

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Container>
      <h1>404</h1>
      <h2>NOT FOUND</h2>
      <p>Oups, you just hit a route that doesn&#39;t exist... the sadness.</p>
    </Container>
  </Layout>
)

export default NotFoundPage;
