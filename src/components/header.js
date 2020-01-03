import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'

// TODO: !!!IMPORTANT!!! fix blog post header

const Header = (props) => {
  
  const StyledHeader = styled.header `
    padding: 1rem 2rem;
    color: ${props.position === 'absolute' ? 'white' : '#333'};
    position: ${props.position};
    top: 0;
    right: 0;
    left: 0;
    margin-bottom: 4rem;

    h1 {
      margin-bottom: .5rem;
    }

    a {
      margin-left: 5px;
      border-bottom: 1px solid;
      padding-bottom: 4px;
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
        {props.title === 'Home' ? <Link to='/about'>Go to my bio.</Link> : <Link to='/'>Go back home.</Link>}
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