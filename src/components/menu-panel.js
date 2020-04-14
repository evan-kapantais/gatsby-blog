import React from 'react'
import styled, {keyframes} from 'styled-components'

import { MenuClose } from './menu-buttons'

import panelImg from '../images/fabrice-villard-Du41jIaI5Ww-unsplash.jpg'

const Bounce = keyframes `
  from {
    transform: translateY(0);
  }
  
  50% {
    transform: translateY(-12px);
  }

  to {
    transform: translateY(0);
  }
`

const Panel = styled.div `
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  width: 100%;
  height: 100%;
  box-shadow: 5px 0 10px rgba(0, 0, 0, 0.1);
  left: ${props => props.isOpen ? '0' : '-100%'};
  padding: 2rem 1rem;
  background: #fff;
  background: url(${panelImg}) no-repeat center / cover;
  transition: all 500ms ease-in-out;

  > div {
    max-width: 600px;

    > header {
      text-align: center;
      margin-bottom: 2rem;
    }
  }

  main {
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
      position: relative;
      display: block;
      margin: 0 1rem;
      user-select: none;
      width: 64px;
      height: 64px;
      overflow: hidden;
      transition: all 200ms ease;

      &:hover {
        animation: ${Bounce} 500ms cubic-bezier(.21,.45,.89,.56) forwards;
        animation-timing-function: cubic-bezier(0.175, 0.585, 0.32, 1.575);
      }
    }
  }
`

const MenuPanel = (props) => {
  return (
    <Panel
    isOpen={props.isOpen} 
    onTouchMove={props.closePanel}
    >
      <MenuClose
      isOpen={props.isOpen}
      onClick={props.togglePanel}
      />
      <div>
        {/* <header>
          <h1>Say hi!</h1>
        </header> */}
        <main>
          <a href='https://github.com/evan-kapantais' onClick={props.clickLink}>
            <img src={require('../images/icons/social/github-colour.png')} alt=""/>
          </a>
          <a href='https://dev.to/evankapantais' onClick={props.clickLink}>
            <img src={require('../images/icons/social/dev.png')} alt=""/>
          </a>
          <a
          style={{
            borderRadius: '50%'
          }}
          href='https://medium.com/@evan_kapantais' onClick={props.clickLink}>
            <img src={require('../images/icons/social/medium.png')} alt=""/>
          </a>
          <a href='https://twitter.com/evankapantais' onClick={props.clickLink}>
            <img src={require('../images/icons/social/twitter-colour.png')} alt=""/>
          </a>
          <a href='https://instagram.com/evan_kapantais' onClick={props.clickLink}>
            <img src={require('../images/icons/social/instagram-colour.png')} alt=""/>
          </a>
        </main>
      </div>
    </Panel>
  );
}

export default MenuPanel