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

  img,
  svg {
    width: 20px;
  }

  svg {
    transition: all 300ms ease;
  }

  svg:hover {
    fill: #fff;
  }

  .footer-social {
    display: flex;

    a {
      margin-left: 0.5rem;
    }
  }

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
      <div className="upper-footer">
        <div className="footer-container">
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
          <div className="footer-social">
            <a href="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#d3d3d3"
                viewBox="0 0 24 24"
              >
                <path d="M22.06,11.987a10.061,10.061,0,1,0-11.633,9.939V14.9H7.872V11.987h2.555V9.771a3.551,3.551,0,0,1,3.8-3.915,15.427,15.427,0,0,1,2.252.2V8.529H15.211a1.454,1.454,0,0,0-1.64,1.571v1.887h2.791L15.915,14.9H13.571v7.03A10.064,10.064,0,0,0,22.06,11.987Z" />
              </svg>
            </a>
            <a href="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#d3d3d3"
                viewBox="0 0 24 24"
              >
                <path d="M22.459,5.5a8.763,8.763,0,0,1-2.471.678A4.337,4.337,0,0,0,21.88,3.794,8.907,8.907,0,0,1,19.144,4.83,4.3,4.3,0,0,0,11.7,7.768a4.446,4.446,0,0,0,.111.983A12.194,12.194,0,0,1,2.935,4.266a4.226,4.226,0,0,0-.582,2.166,4.307,4.307,0,0,0,1.914,3.584,4.292,4.292,0,0,1-1.949-.539V9.53A4.306,4.306,0,0,0,5.77,13.753a4.342,4.342,0,0,1-1.935.075,4.318,4.318,0,0,0,4.028,2.989,8.629,8.629,0,0,1-5.339,1.842A9.277,9.277,0,0,1,1.5,18.6a12.254,12.254,0,0,0,6.613,1.932A12.159,12.159,0,0,0,20.361,8.3c0-.183,0-.367-.013-.551A8.69,8.69,0,0,0,22.5,5.516Z" />
              </svg>
            </a>
            <a href="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#d3d3d3"
                viewBox="0 0 24 24"
              >
                <path d="M12,2.247A10,10,0,0,0,8.837,21.735c.5.094.684-.215.684-.481,0-.237-.009-.867-.013-1.7-2.781.6-3.368-1.342-3.368-1.342A2.648,2.648,0,0,0,5.027,16.75c-.905-.62.071-.608.071-.608a2.1,2.1,0,0,1,1.531,1.03A2.131,2.131,0,0,0,9.542,18a2.129,2.129,0,0,1,.633-1.337c-2.221-.25-4.555-1.11-4.555-4.942A3.859,3.859,0,0,1,6.649,9.042,3.558,3.558,0,0,1,6.737,6.4s.837-.268,2.75,1.025a9.415,9.415,0,0,1,5,0c1.9-1.293,2.737-1.025,2.737-1.025a3.652,3.652,0,0,1,.1,2.647,3.87,3.87,0,0,1,1.025,2.683c0,3.842-2.337,4.687-4.562,4.933a2.4,2.4,0,0,1,.675,1.85c0,1.339-.013,2.414-.013,2.739,0,.262.175.575.688.475A9.988,9.988,0,0,0,12,2.247" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="bottom-footer">
        <div className="footer-container">
          <small>
            Made with{' '}
            <span role="img" aria-label="heart">
              ❤️
            </span>{' '}
            and <GatsbyLink href="https://www.gatsbyjs.org/">Gatsby</GatsbyLink>
          </small>
          <small>&copy; Evan Kapantais, {year}</small>
        </div>
      </div>
    </StyledFooter>
  );
};

export default Footer;
