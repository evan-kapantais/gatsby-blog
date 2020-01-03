import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'

// TODO: !!!IMPORTANT!!! fix blog post header

const Header = (props) => {
  
  const StyledHeader = styled.header `
    padding: 2rem 4rem;
    color: ${props.color};
    position: ${props.position};
    display: flex;
    justify-content: space-between;
    align-items: center;
    top: 0;
    right: 0;
    left: 0;
    margin-bottom: 4rem;

    h1 {
      margin: 0;
      font-size: 2rem;
    }

    a {
      margin-left: 1.5rem;
      font-size: 0.8rem;
    }
  `

  return (
      <StyledHeader>
        <h1>
          You're 
          {
            props.title === 'Home' ? ' Home' : props.title === 'About' ? ' at my Bio' : ' Reading An Article'
          }
        </h1>
        <nav>
          <Link to='/'>HOME</Link>
          <Link to='/about'>ABOUT</Link>
        </nav>
      </StyledHeader>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header