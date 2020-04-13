import React from 'react'
import styled from 'styled-components'

import heroImg from '../images/fabrice-villard-Du41jIaI5Ww-unsplash.jpg'

const Menu = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 999;
  transition: all 800ms ease-in-out;

  &:hover {cursor: pointer;}

 div {
    width: 15px;
    height: 2px;
    border-radius: 2px;
    margin: 2px auto;
    background: #000;
    transition: all 500ms ease;

    &:first-child {
      transform-origin: center;
      transform: ${props => props.isOpen ? 'rotate(45deg) translate(4px, 5px)' : 'none'};
      width: ${props => props.isOpen ? '20px' : '15px'};
    }

    &:nth-child(2) {
      transform: ${props => props.isOpen ? 'translateX(100px)' : 'none'};
    }

    &:last-child {
      transform: ${props => props.isOpen ? 'rotate(-45deg) translate(4px, -4px)' : 'none'};
      width: ${props => props.isOpen ? '20px' : '15px'};
    }
  }

  @media (min-width: 700px) {
    display: none;
  }
`

const Panel = styled.div`
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  right: ${props => props.isOpen ? '0' : '-100%'};
  display: none;
  flex-direction: column;
  padding: 2rem 1rem;
  background: #fff;
  background: url(${heroImg}) no-repeat 25% 70% / cover;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  z-index: 990;
  transition: all 500ms ease;

  & > header {
    text-align: center;
    margin-bottom: 2rem;

    & > h1 {text-transform: unset;}
  }

  main {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    a {
      position: relative;
      display: flex;
      align-items: center;
      margin: 0.5rem 0;
      font-size: 0.8rem;
      border: 1px solid #999;
      width: fit-content;
      padding: 5px 10px;
      border-radius: 20px;
      user-select: none;
      overflow: hidden;
      transition: all 200ms ease;

      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: -100px;
        width: 20px;
        height: 200px;
        background: rgba(255, 255, 255, 0.2);
        background: rgba(0, 0, 0, 0.1);
        transform: rotate(20deg) translateY(-20px);
        transition: all 800ms ease;
      }

      &:hover::after {
        left: 100%;
      }

      img {
        width: 20px;
        height: 20px;
        margin: 0;
        margin-left: 10px;
      }
    }
  }

  @media (max-width: 700px) {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;

    & > header {
      margin-bottom: 4rem;
    }

    & > main {
      align-items: center;
    }
  }
`

class HamburgerMenu extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }
  }

  togglePanel = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  mouseLeave = (e) => {
    if (e.target.getAttribute('aria-current') === 'page') {
      return;
    } else {
      setTimeout(() => {
        this.setState({
          isOpen: false
        });
      }, 300);
    }
  }

  closePanel = (e) => {
    this.setState({
      isOpen: false
    });
  }

  clickLink = (e) => {
    e.preventDefault();

    let target = e.target.getAttribute('href');

    if (target === null) {
      target = '/';
    }

    setTimeout(() => {
      window.location = target;
    }, 500);

    this.setState({isOpen: false});
  }

  render() {
    return (
      <>
        <Menu 
        onClick={this.togglePanel} 
        isOpen={this.state.isOpen}
        >
          <div />
          <div />
          <div />
        </Menu>
        <Panel
        isOpen={this.state.isOpen} 
        onTouchMove={this.closePanel}
        >
          <header>
            <h1>Say hi!</h1>
          </header>
          <main>
            <a href='https://github.com/evan-kapantais' onClick={this.clickLink}>
              evan-kapantais
              <img src={require('../images/icons/social/github-colour.png')} alt=""/>
            </a>
            <a href='https://dev.to/evankapantais' onClick={this.clickLink}>
              evankapantais
              <img src={require('../images/icons/social/dev.png')} alt=""/>
            </a>
            <a href='https://medium.com/@evan_kapantais' onClick={this.clickLink}>
              evan_kapantais
              <img src={require('../images/icons/social/medium.png')} alt=""/>
            </a>
            <a href='https://twitter.com/evankapantais' onClick={this.clickLink}>
              evan-kapantais
              <img src={require('../images/icons/social/twitter-colour.png')} alt=""/>
            </a>
            <a href='https://instagram.com/evan_kapantais' onClick={this.clickLink}>
              evan_kapantais
              <img src={require('../images/icons/social/instagram-colour.png')} alt=""/>
            </a>
            <a href="mailto:evankapantais@gmail.com?subject=Hey%20Evan!" onClick={this.clickLink}>say hello</a>
          </main>
        </Panel>
      </>
    );
  }
}

export default HamburgerMenu;