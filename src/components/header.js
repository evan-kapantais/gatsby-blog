import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import HamburgerMenu from './hamburger'
import { NavLink, SpecialLink } from './nav-link'

const StyledHeader = styled.div `
  position: ${props => props.position || 'relative'};
  top: 0;
  display: ${props => props.noheader ? 'none' : 'flex'};
  width: 100%;
  margin: 0 auto;
  padding: 2rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  justify-content: ${props => props.notitle ? 'flex-end' : 'space-between'};
  align-items: center;
  background: #fff;
  z-index: 999;
  transition: all 500ms ease-in-out;

  & > a:first-child,
  & > a:nth-child(2) {
    display: ${props => props.notitle ? 'none' : 'auto'};
  }

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

    p {
      margin: 0;
    }

  @media (max-width: 670px) {
    box-shadow: ${props => props.notitle ? 'none' : '0 0 3px lightgrey'};
    padding: 0.5rem 1rem;

    h1 {font-size: 1rem;}
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
              subtitle
              description
              author
            }
          }
        }
      `}
      render={data => (
        <StyledHeader notitle={props.notitle} noheader={props.noheader} position={props.position}>
          <Link to='/'>
            <h1>{data.site.siteMetadata.title}</h1>
          </Link>
          {/* <HamburgerMenu /> */}
          <nav>
            <NavLink to='politics'/>
            <NavLink to='religion'/>
            <NavLink to='books'/>
            <SpecialLink to='tech'/>
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