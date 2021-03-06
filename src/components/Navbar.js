import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Nav = styled.nav`
  position: ${props => (props.home ? 'absolute' : 'fixed')};
  display: flex;
  justify-content: center;
  width: 100%;
  left: 50%;
  transform: translateX(-50%);
  text-transform: uppercase;
  font-size: 0.85rem;
  font-weight: 600;
  color: white;
  background: ${props => (props.home ? 'transparent' : '#111')};
  z-index: 1;

  #nav-brand {
    width: 22px;
  }

  .nav-container {
    max-width: calc(960px + 4rem);
    width: 100%;
    padding: 1.5rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    > div {
      display: flex;
      align-items: center;
    }

    > div:first-child {
      a {
        &:first-child {
          margin-left: 0;
        }

        &:last-child {
          margin-right: 0;
        }
      }
    }

    > div:last-child {
      a {
        &:first-child {
          margin-left: 0;
        }

        &:last-child {
          margin-right: 0;
        }
      }
    }
  }

  a,
  .subscribe-button {
    margin: 0 0.5rem;
  }

  .nav-link {
    position: relative;
    color: ${props => (props.home ? '#777' : 'rgb(215, 215, 215)')};
    transition: all 300ms ease;

    &:after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 0;
      width: 100%;
      height: 2px;
      opacity: 0;
      background: ${props => (props.home ? '#333' : '#fff')};
      transition: all 300ms ease;
    }

    &:hover {
      color: ${props => (props.home ? '#222' : '#fff')};
    }

    &:hover:after {
      opacity: 1;
      bottom: -5px;
    }
  }

  .nav-social-icon {
    width: 20px;
  }
`;

const Navbar = () => {
  let pathname;

  if (typeof window !== 'undefined') {
    pathname = window.location.pathname;
  }

  return (
    <Nav home={pathname === '/' && true}>
      <div className="nav-container">
        <div>
          {pathname !== '/' && (
            <Link to="/">
              <img
                id="nav-brand"
                src={require('../images/icons/logo-02-02-white-background.png')}
                alt="brand logo"
              />
            </Link>
          )}
          <Link className="nav-link" to="/">
            Home
          </Link>
          <Link className="nav-link" to="/about">
            About
          </Link>
        </div>
        <div>
          <a href="https://github.com/evan-kapantais">
            <img
              src={require('../images/icons/social/GitHub-Mark-64px.png')}
              alt="github logo"
              className="nav-social-icon"
              aria-label="social network icon"
            />
          </a>
          <a href="https://www.facebook.com/evankapantais/">
            <img
              src={require('../images/icons/social/f_logo_RGB-Black_100.png')}
              alt="facebook logo"
              className="nav-social-icon"
              aria-label="social network icon"
            />
          </a>
          <a href="https://twitter.com/evankapantais">
            <img
              src={require('../images/icons/social/Twitter_Logo_Black.png')}
              alt="twitter logo"
              className="nav-social-icon"
              aria-label="social network icon"
            />
          </a>
        </div>
      </div>
    </Nav>
  );
};

export default Navbar;
