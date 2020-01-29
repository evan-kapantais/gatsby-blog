import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Menu = styled.div `
  width: 40px;
  height: 40px;
  background: ${props => props.isOpen ? '#fff' : '#000'};
  background: #000;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  z-index: 999;
  transition: all 800ms ease-in-out;

  &:hover {
    cursor: pointer;
  }

 div {
    width: 15px;
    height: 2px;
    border-radius: 2px;
    margin: 2px auto;
    background: ${props => props.isOpen ? '#000' : '#fff'};
    background: #fff;
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
  position: fixed;
  top: 0;
  right: ${props => props.isOpen ? '0' : '-400px'};
  height: 100%;
  border-left: 1px solid lightgrey;
  border-bottom: 1px solid lightgrey;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  z-index: 990;
  transition: all 500ms ease;

  header {
    padding: 1rem;

    a > img {
      width: 50px;
      height: 50px;
      margin: 0;
    }
  }

  main {
    margin: 4rem 2rem;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    a {
      display: flex;
      align-items: center;
      margin: 0.5rem 0;
      font-size: 0.8rem;
      background:rgba(255, 255, 255, 0.1); 
      border: 2px solid #999;
      width: fit-content;
      padding: 5px 10px;
      border-radius: 20px;
      user-select: none;
      transition: all 200ms ease;

      &:hover {transform: scale(1.05);}

      img {
        width: 20px;
        height: 20px;
        margin: 0;
        margin-left: 10px;
      }
    }
  }

  footer {
    padding: 1rem;
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

  openPanel = () => {
    this.setState({
      isOpen: true
    });
  }

  closePanel = (e) => {
    
    if (e.type === 'click') {
      this.setState({
        isOpen: false
      });
    } else {
      console.log(e.target);
      setTimeout(() => {
        this.setState({
          isOpen: false
        });
      }, 500);
    }
  }

  render() {
    return (
      <>
        <Menu onMouseEnter={this.openPanel} onClick={this.togglePanel} isOpen={this.state.isOpen}>
          <div />
          <div />
          <div />
        </Menu>
        <Panel isOpen={this.state.isOpen} onMouseLeave={this.closePanel}>
          <header>
            <Link to='/' onClick={this.clickLink}>
              <img src={require('../images/noose.png')} alt=''/>
            </Link>
          </header>
          <main>
            <a href='https://github.com/evan-kapantais'>
              evan-kapantais
              <img src={require('../images/github-colour.png')} alt=""/>
            </a>
            <a href='https://twitter.com/evankapantais'>
              @evan-kapantais
              <img src={require('../images/twitter-colour.png')} alt=""/>
            </a>
            <a href='https://instagram.com/evan_kapantais'>
              evan_kapantais
              <img src={require('../images/instagram-colour.png')} alt=""/>
            </a>
            <a href="mailto:evankapantais@gmail.com?subject=Hey%20Evan!">say hello</a>
            <a href="https://evankapantais.com">my web stuff website</a>
          </main>
          <footer>
            <small>&copy; Evan Kapantais</small>

          </footer>
        </Panel>
      </>
    );
  }
}

export default HamburgerMenu;