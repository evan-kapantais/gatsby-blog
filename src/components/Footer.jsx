import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'gatsby';
import SocialLinks from './SocialLinks';

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

  .upper-footer {
    padding: 2rem 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  }

  .bottom-footer {
    padding: 1rem 0;
  }

  .footer-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: calc(960px + 4rem);
    margin: 0 auto;
    padding: 0 2rem;
  }

  .footer-nav-link {
    margin-right: 0.5rem;
    transition: all 300ms ease;

    &:hover {
      color: #fff;
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
      <div className="upper-footer">
        <div className="footer-container">
          <small>
            <Link className="footer-nav-link" to="/">
              Home
            </Link>
            <Link className="footer-nav-link" to="/">
              Contact
            </Link>
          </small>
          <SocialLinks color="light" />
        </div>
      </div>
      <div className="bottom-footer">
        <div className="footer-container">
          <small>Website by Evan Kapantais</small>
          <small>&copy; Circe, {year}</small>
        </div>
      </div>
    </StyledFooter>
  );
};

export default Footer;
