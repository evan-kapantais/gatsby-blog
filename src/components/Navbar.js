import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import HeaderImage from '../images/pine.jpg';

const Nav = styled.nav`
  position: ${props =>
    props.home ? 'absolute' : props.contact ? 'relative' : 'fixed'};
  display: flex;
  justify-content: center;
  width: 100%;
  left: 50%;
  transform: translateX(-50%);
  text-transform: uppercase;
  font-size: 0.8rem;
  font-weight: 600;
  background: ${props =>
    props.home || props.contact
      ? 'transparent'
      : `url(${HeaderImage}) no-repeat 50% 0 / cover`};
  box-shadow: ${props =>
    props.home || props.contact ? 'none' : '0 2px 5px rgba(0, 0, 0, 0.2)'};
  z-index: 1;

  #nav-brand {
    width: 22px;
  }

  .nav-container {
    max-width: calc(960px + 4rem);
    width: 100%;
    padding: 1.5rem 2rem;
    display: flex;
    justify-content: ${props => (props.home ? 'flex-end' : 'space-between')};
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

  console.log(pathname);

  return (
    <Nav
      home={pathname === '/' && true}
      contact={pathname === '/contact' && true}
    >
      <div className="nav-container">
        {pathname !== '/' && (
          <Link className="navbar-brand" to="/">
            Circe
          </Link>
        )}
        <div>
          <Link className="nav-link" to="/">
            Home
          </Link>
          <Link className="nav-link" to="/contact">
            Contact
          </Link>
        </div>
      </div>
    </Nav>
  );
};

export default Navbar;
