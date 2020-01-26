import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Link } from 'gatsby'

// TODO: animate nav links
// TODO: resolve null target on logo click

const Menu = styled.div `
  width: 40px;
  height: 40px;
  background: ${props => props.isOpen ? '#fff' : '#000'};
  position: absolute;
  top: 2rem;
  right: -100px;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  z-index: 999;
  transition: all 800ms ease-in-out;

  @media (max-width: 750px) {
    right: 2rem;
  }

  &::after,
  &::before {
    display: ${props => props.isOpen ? 'none' : 'auto'};
    content: 'MENU';
    color: #000;
    position: absolute;
    top: 10px;
    left: -60px;
    font-size: 0.8rem;
    opacity: 0;
    transition: all 400ms ease;
  }
  
  &::before {
    display: ${props => props.isOpen ? 'block' : 'none'};
    content: 'CLOSE';
    color: #fff;
  }

  &:hover {
    cursor: pointer;
  }

  &:hover::after,
  &:hover::before {
    opacity: 1;
  }

 div {
    width: 15px;
    height: 2px;
    border-radius: 2px;
    margin: 2px auto;
    background: ${props => props.isOpen ? '#000' : '#fff'};
    transition: all 800ms ease;
  }
`

const Panel = styled.div`
  position: fixed;
  top: 0;
  right: ${props => props.isOpen ? '0' : '-100%'};
  background: #000;
  height: 100vh;
  width: 100%;
  color: #fff;
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 998;
  transition: all 500ms ease;

  @media (max-width: 750px) {
    display: flex;
  }

  & > a {
    color: white;
    position: absolute;
    display: flex;
    align-items: center;
    top: 1.5rem;
    left: 2rem;

    img {
      max-width: 50px;
      margin: 0 0.5rem 0 0;
    }

    h1 {
      font-size: 1.5rem;
      margin: 0;
    }
  }

  nav {
    display: flex;
    flex-direction: column;
    justify-content: center;

    a {
      margin: 1rem auto;
      position: relative;

      &::after {
        content: '';
        position: absolute;
        bottom: -5px;
        left: 50%;
        height: 2px;
        width: 0px;
        background: #fff;
        transition: all 300ms ease;
      }

      &:hover::after {
        left: 0;
        width: 100%;
      }
    }
  }
`

class HamburgerMenu extends React.Component  {
  constructor(props) {
    super(props);
    this.logoRef = React.createRef();
    this.state = {
      isOpen: false
    }
  }

  onChange = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  clickLink = (e) => {
    e.preventDefault();

    const target = e.target.getAttribute('href');

    setTimeout(() => {
      if (target === null) {
        window.location.href = '/';
      } else {
        window.location.href = target;
      }
    }, 500);

    this.setState({
      isOpen: false,
    });
  }

  render() {
    return (
      <>
        <Menu onClick={this.onChange} isOpen={this.state.isOpen}>
          <div />
          <div />
          <div />
        </Menu>
        <Panel isOpen={this.state.isOpen}>
          <Link to='/' onClick={this.clickLink}>
            <img src={require('../images/noose-white.png')} alt=''/>
            <h1>EVAN KAPANTAIS</h1>
          </Link>
          <nav>
            <Link to='/' onClick={this.clickLink}>BLOG</Link>
            <Link to='/about' onClick={this.clickLink} delay='500ms'>ABOUT</Link>
            <Link to='/contact' onClick={this.clickLink} delay='1000ms'>CONTACT</Link>
          </nav>
        </Panel>
      </>
    );
  }
}

export default HamburgerMenu;