import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import HamburgerMenu from './hamburger'
import Brand from './brand'
import DarkMode from './mode'

const StyledHeader = styled.header `
  width: 100%;
  padding: 1rem;
  height: 100px;
  display: flex;
  justify-content: ${props => props.notitle ? 'flex-end' : 'space-between'};
  align-items: flex-start;
  transition: all 500ms ease-in-out;

  div {
    display: flex;
    align-items: center;
  }

  @media (max-width: 450px) {
    display: auto;
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
          <Brand notitle={props.notitle} title={data.site.siteMetadata.title}/>
          <div>
            <DarkMode />
            <HamburgerMenu />
          </div>
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