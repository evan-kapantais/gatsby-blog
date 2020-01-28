import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import NavLink from '../components/nav-link'
import ModeBtn from './mode'
import HamburgerMenu from './hamburger'

const StyledHeader = styled.header `
  width: 100%;
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
    min-width: 278px;

    img {
      display: block;
      margin: 0;
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
    display: flex;
    align-items: center;
    transition: all 500ms ease-in-out;
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
            <ModeBtn />
            {/* <NavLink to='/' text='BLOG'/>
            <NavLink to='/contact' text='CONTACT'/> */}
            <HamburgerMenu />
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