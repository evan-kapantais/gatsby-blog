import React from 'react'
import { Link, StaticQuery } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Header = () => {
  
  const StyledHeader = styled.header `
    padding: 2rem 0;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid lightgrey;

    h1 {
      margin: 0 0 0.5rem 0;
      font-size: 2rem;
      user-select: none;
      text-transform: uppercase;
    }

    small {
      font-size: 1rem;
    }

    p { margin: 0; }

    nav {
      font-size: 0.8rem;
      font-weight: 700;

      a:first-child { margin-right: 1.5rem; }

      a {
        display: inline-block;
        position: relative;

        &::after {
          content: '';
          position: absolute;
          bottom: -15px;
          left: 0;
          height: 3px;
          width: 100%;
          background: #333;
          opacity: 0;
          box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);
          transition: all 400ms ease;
        }

        &:hover::after {
          bottom: -8px;
          opacity: 1;
        }
      }
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
            <h1>{data.site.siteMetadata.title}</h1>
            <small>{data.site.siteMetadata.description}</small>
          </Link>
          <nav>
            <Link to='/'>BLOG</Link>
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