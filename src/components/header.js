import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import NavLink from '../components/nav-link'

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
      height: 50px;
    }

    h1 {
      margin: 0;
      font-size: 1.5rem;
      user-select: none;
      text-transform: uppercase;
    }
  }

  nav {
    transition: all 500ms ease-in-out;

    @media (max-width: 750px) {margin-top: -200px;}
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
            <NavLink to='/' text='BLOG'/>
            <NavLink to='/about' text='ABOUT'/>
            <NavLink to='/contact' text='CONTACT'/>
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