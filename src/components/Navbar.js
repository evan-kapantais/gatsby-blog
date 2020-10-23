import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import HeaderImage from '../images/pine.jpg';
import SocialLinks from './SocialLinks';

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
  background: ${props =>
    props.home ? 'transparent' : `url(${HeaderImage}) no-repeat 50% 0 / cover`};
  box-shadow: ${props =>
    props.home ? 'none' : '0 2px 5px rgba(0, 0, 0, 0.2)'};
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
  }

  .nav-link {
    position: relative;
    color: #777;
    transition: all 300ms ease;
    margin-right: 1rem;

    &:after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 0;
      width: 100%;
      height: 2px;
      opacity: 0;
      background: #333;
      transition: all 300ms ease;
    }

    &:hover {
      color: #333;
    }

    &:hover:after {
      opacity: 1;
      bottom: -5px;
    }
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
            <Link className="nav-link" to="/">
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
        <SocialLinks color="dark" />
      </div>
    </Nav>
  );
};

export default Navbar;
