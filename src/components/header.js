import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import HamburgerMenu from './hamburger'

const StyledHeader = styled.header `
  width: 100%;
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  display: ${props => props.noheader ? 'none' : 'flex'};
  justify-content: ${props => props.notitle ? 'flex-end' : 'space-between'};
  align-items: center;
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
        <StyledHeader notitle={props.notitle} noheader={props.noheader}>
          {/* <Link to='/'>
            <img src={require('../images/noose.png')} alt=''/>
          </Link> */}
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