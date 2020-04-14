import React from 'react'
import styled from 'styled-components'

const Button = styled.button `
  background: none;
  border: none;

  > div {
    width: 15px;
    height: 2px;
    border-radius: 2px;
    background: #000;
    transition: all 500ms ease-in-out;
  }
`

const CloseButton = styled.button `
  position: absolute;
  top: 2rem;
  right: 2rem;
  width: 15px;
  height: 18px;
  background: none;
  border: none;

  &::after {
    content: '';
    position: absolute;
    top: calc(50% - 1px);
    left: 0;
    width: 100%;
    height: 2px;
    background: #000;
  }

  @media (max-width: 700px) {
    top: 1rem;
    right: 1rem;
  }
`

const OpenButton = styled(Button) `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div {
    margin: 2px auto;

    &:first-child {
      transition-delay: 100ms;
      transform: ${props => props.isOpen ? 'translateY(-2rem)' : 'none'};
      opacity: ${props => props.isOpen ? 0 : 1};
    }
    
    &:nth-child(2) {
      transform: ${props => props.isOpen ? 'translateX(100px)' : 'none'};
    }
    
    &:last-child {
      transition-delay: 100ms;
      transform: ${props => props.isOpen ? 'translateY(2rem)' : 'none'};
      opacity: ${props => props.isOpen ? 0 : 1};
    }
  }
`

export const MenuOpen = (props) => (
  <OpenButton
  onClick={props.onClick} 
  isOpen={props.isOpen}
  >
    <div/>
    <div/>
    <div/>
  </OpenButton>
);

export const MenuClose = (props) => (
  <CloseButton
  onClick={props.onClick}
  isOpen={props.isOpen}
  >
    <div/>
    <div/>
  </CloseButton>
);


export default MenuOpen;