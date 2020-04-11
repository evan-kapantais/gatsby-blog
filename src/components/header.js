import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import HamburgerMenu from './hamburger'

const StyledHeader = styled.header `
  position: ${props => props.position || 'fixed'};
  top: 0;
  width: 100%;
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  display: ${props => props.noheader ? 'none' : 'flex'};
  justify-content: ${props => props.notitle ? 'flex-end' : 'space-between'};
  align-items: center;
  background: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
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

    @media (max-width: 700px) {
    box-shadow: ${props => props.notitle ? 'none' : '0 0 3px lightgrey'};
    padding: 1rem;

    h1 {font-size: 1.2rem;}

    p {font-size: 0.8rem;}
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
        <StyledHeader 
        notitle={props.notitle} 
        noheader={props.noheader}
        position={props.position}
        >
          <Link to='/'>
            <h1>{data.site.siteMetadata.title}</h1>
            <p>{data.site.siteMetadata.subtitle}</p>
          </Link>
          <HamburgerMenu />
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