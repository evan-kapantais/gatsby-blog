import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Mode from './mode'
import HamburgerMenu from './hamburger'

const StyledHeader = styled.header `
  position: fixed;
  top: 0;
  width: 100%;
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(238, 238, 238, 0.96);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  z-index: 999;
  transition: all 250ms ease-in-out;

  a:first-child {
    display: flex;
    align-items: center;

    img {
      width: 24px;
      margin-right: 0.5rem;
    }
  }

  > div {
    display: flex;
    align-items: center;
  }

  h1 {
    margin-top: 8px;
    font-size: 1.2rem;
    line-height: 1;
    user-select: none;
    text-transform: uppercase;
  }

  @media (max-width: 700px) {
    padding: 1rem;
  }
`

export const Header = (props) => {
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
        <StyledHeader>
          <Link to='/'>
            <img src={require('../images/icons/bonfire.png')} alt='site logo'/>
            <h1>{data.site.siteMetadata.title}</h1>
          </Link>
          <div>
            {/* <Mode/> */}
            <HamburgerMenu/>
          </div>
        </StyledHeader>
      )}
    />
  );
}

const SIndexHeader = styled.header `
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 2rem;
  z-index: 999;

  @media (max-width: 700px) {padding: 1rem;}
  
  > img {
    width: 24px;
  }
`

export const IndexHeader = () => {
  return (
    <SIndexHeader>
      {/* <Mode/> */}
      <HamburgerMenu/>
    </SIndexHeader>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header