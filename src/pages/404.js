import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'

const Container = styled.div `
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;

  h1 {
    font-size: 10rem;
    margin: 0;
  }

  p,
  a {
    font-size: 1.2rem;
    line-height: 1.5;
  }

  a {
    color: rgb(3, 159, 255);

    &:hover {
      text-decoration: underline;
    }
  }

  h2 {margin-bottom: 4rem;}

  @media (max-width: 360px) {

    h1 {font-size: 8rem;}
  }
`

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Container>
      <h1>404</h1>
      <h2>NOT FOUND</h2>
      <p>Oups, you just hit a route that doesn&#39;t exist... the sadness.</p>
      <Link to='/'>Go back home.</Link>
    </Container>
  </Layout>
)

export default NotFoundPage;
