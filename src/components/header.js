import React from 'react'
import { Link, StaticQuery } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Header = () => {
  
  const StyledHeader = styled.header `
    padding: 1.5rem 0;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid lightgrey;

    h1 {
      margin: 0;
      font-size: 2rem;
      user-select: none;
    }

    p { margin: 0; }

    nav {
      font-size: 0.8rem;

      a:first-child { margin-right: 1.5rem; }
    }
  `

  return (
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
            <h1>{data.site.siteMetadata.title.toUpperCase()}</h1>
            <small>{data.site.siteMetadata.description}</small>
          </Link>
          <nav>
            <Link to='/blog'>BLOG</Link>
            <Link to='/about'>ABOUT</Link>
          </nav>
        </StyledHeader>
      )}
    />
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header