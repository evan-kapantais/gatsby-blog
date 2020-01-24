import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Menu = styled.div `
  display: block;
  width: 40px;
  height: 40px;
  background: #000;
  position: fixed;
  top: 1.5rem;
  left: 0.5rem;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
  z-index: 999;

 div {
    width: 15px;
    height: 2px;
    border-radius: 2px;
    margin: 2px auto;
    background: #fff;
  }
`

const Panel = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  background: #000;
  height: 100vh;
  width: 100%;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 998;

  a {
    margin: 1rem auto;
  }
`

class HamburgerMenu extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    }
    this.panelRef = React.createRef();
  }

  handlePanel = () => {
    
  }


  render() {
    return (
      <>
        <Menu onClick={this.handlePanel}>
          <div />
          <div />
          <div />
        </Menu>
        <Panel ref={this.panelRef} isOpen={this.state.isOpen}>
          <Link to='/'>BLOG</Link>
          <Link to='/about'>ABOUT</Link>
          <Link to='/contact'>CONTACT</Link>
        </Panel>
      </>
    );
  }
}

export default HamburgerMenu;