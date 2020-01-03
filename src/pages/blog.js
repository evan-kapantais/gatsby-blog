import React from 'React'
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'

const Header = styled.header `
  text-align: center;
  background: rgba(0, 0, 0, 0.1);
  padding: 2rem 0;
  
  * {
    font-family: 'Times New Roman', Times, serif;
  }

  h1 {
    font-size: 4rem;
  }

  small {font-size: 1rem;}
`


const blogPage = () => {
  return (
    <Layout position='relative' color='#333'>
      <Header>
        <h1>The Morning Herald</h1>
        <small>Select Articles By</small>
        <h2>Evan Kapantais</h2>
      </Header>
    </Layout>
  );
}

export default blogPage