import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledHeader = styled.header `
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  height: 100px;
  margin: 0 auto;
  display: flex;
  justify-content: ${props => props.notitle ? 'flex-end' : 'space-between'};
  align-items: center;
  transition: all 500ms ease-in-out;

  @media (max-width: 450px) {
    display: auto;
  }

  & > a {
    display: ${props => props.notitle ? 'none' : 'flex'};

    img {
      display: block;
      margin: 0 0.5rem 0 0;
      max-width: 50px;
    }

    h1 {
      margin: 0;
      font-size: 1.5rem;
      user-select: none;
      text-transform: uppercase;
    }
  }

  nav {
    font-size: 0.8rem;
    transition: all 500ms ease-in-out;

    @media (max-width: 750px) {
      margin-top: -200px;
    }
    
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
        height: 2px;
        width: 100%;
        background: #333;
        opacity: 0;
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
            <img src={require('../images/noose.png')} alt='logo'/>
            <h1>{data.site.siteMetadata.title}</h1>
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