import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledHeader = styled.header `
  padding: 2rem;
  margin: 0 auto;
  display: flex;
  justify-content: ${props => props.notitle ? 'flex-end' : 'space-between'};
  align-items: center;

  @media (max-width: 800px) {
    padding: 2rem 0;
  }

  & > a {
    display: ${props => props.notitle ? 'none' : 'auto'};
  }

  h1 {
    margin: 0;
    font-size: 2rem;
    user-select: none;
    text-transform: uppercase;
  }

  nav {
    font-size: 0.8rem;
    font-weight: normal;
    
    a {margin-right: 1.5rem;}
    
    a:last-child {margin: 0;}
    
    a {
      display: inline-block;
      position: relative;
      letter-spacing: 1px;

      &::after {
        content: '';
        position: absolute;
        bottom: -5px;
        left: 0;
        height: 1px;
        width: 100%;
        background: #333;
        opacity: 0;
        box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);
        transition: all 300ms ease;
      }

      &:hover::after {
        bottom: 0px;
        opacity: 1;
      }
    }
  }
`

const Header = (props) => {
  
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
        <StyledHeader notitle={props.notitle}>
          <Link to='/'>
            <h1>{data.site.siteMetadata.title}</h1>
            <small>{data.site.siteMetadata.description}</small>
          </Link>
          <nav>
            <Link to='/'>BLOG</Link>
            <Link to='/about'>ABOUT</Link>
            <Link to='/contact'>CONTACT</Link>
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