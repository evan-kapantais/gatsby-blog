import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'gatsby';

const Beat = keyframes`
  0% { transform: scale(1); }

  20% { transform: scale(1.2); }

  50% {transform: scale(1);}
  
  100% { transform: scale(1); }
`;

const StyledFooter = styled.footer`
  position: relative;
  background: #111;
  color: #d3d3d3;
  font-weight: 600;

  .footer-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: calc(960px + 4rem);
    margin: 0 auto;
    padding: 2rem;

    @media only screen and (max-width: 600px) {
      small:first-child {
        display: none;
      }
    }
  }

  .footer-nav-link {
    margin-right: 0.5rem;

    &:last-child {
      margin-right: 0;
    }
  }

  small > span {
    display: inline-block;
    user-select: none;
    line-height: 1;
    margin: 0 0.2rem;
    animation: ${Beat} 1s ease infinite forwards;
  }
`;

const GatsbyLink = styled.a`
  color: #cda8ff;

  &:hover {
    text-decoration: underline;
  }
`;

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <StyledFooter>
      <div className="footer-container">
        <small>
          Made with{' '}
          <span role="img" aria-label="heart">
            ❤️
          </span>{' '}
          and <GatsbyLink href="https://www.gatsbyjs.org/">Gatsby</GatsbyLink>
        </small>
        <small>&copy; Evan Kapantais, {year}</small>
        <small>
          <Link className="footer-nav-link" to="/">
            Home
          </Link>
          <Link className="footer-nav-link" to="/about">
            About
          </Link>
          <Link className="footer-nav-link" to="/">
            Contact
          </Link>
        </small>
      </div>
    </StyledFooter>
  );
};

export default Footer;
