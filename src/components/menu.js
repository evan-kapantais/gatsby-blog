import React from 'react'
import styled from 'styled-components'

import { GithubLink, DevLink, MediumLink, TwitterLink, InstagramLink } from './social-links'

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
`

const Panel = styled.div`
  position: absolute;
  top: 10rem;
  right: 2rem;  
  right: ${props => props.isOpen ? '2rem' : '-2rem'};
  flex-direction: column;
  z-index: 990;
  transition: all 500ms ease;

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
          <GithubLink isOpen={this.state.isOpen}/>
          <DevLink/>
          <MediumLink/>
          <TwitterLink/>
          <InstagramLink/>
          {/* <a href="mailto:evankapantais@gmail.com?subject=Hey%20Evan!">say hello</a> */}
        </Panel>
      </>
    );
  }
}

export default HamburgerMenu;