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
    font-size: 8rem;
  }

  small {font-size: 1rem;}

  nav {
    font-weight: 600;
    a {margin: 0 1rem;}
  }
`


const blogPage = () => {
  return (
    <Layout position='relative' color='#333' header='none'>
      <Header>
        <h1>The Morning Digest</h1>
        {/* <small>Select Articles By</small>
        <h2>Evan Kapantais</h2> */}
        <nav>
          <Link to='/'>HOME</Link>
          <Link to='/about'>ABOUT</Link>
          <Link to='/blog'>BLOG</Link>
        </nav>
      </Header>
    </Layout>
  );
}

export default blogPage