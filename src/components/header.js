import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'

const StyledHeader = styled.header `
  padding: 1rem 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    text-transform: uppercase;
    margin: 0 0 .5rem 0;
    font-size: 2rem;
    user-select: none;
  }

  p {
    margin: 0;
  }

  nav a {
    font-size: .9rem;
    margin-left: 1.5rem;
  }
`
const Header = () => (

  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `}

    render={data => (
      <StyledHeader>
        <Link to='/'>
          <h1>{data.site.siteMetadata.title}</h1>
          <p>{data.site.siteMetadata.description}</p>
        </Link>
        <nav>
          <Link to='/'>HOME</Link>
          <Link to='/about'>ABOUT</Link>
          <Link to='/blog'>BLOG</Link>
        </nav>
      </StyledHeader>
    )}
  />
);

export default Header