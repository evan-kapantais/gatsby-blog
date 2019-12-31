import React from 'react'
import styled, { keyframes } from 'styled-components'

const Circle = (props) => {

  const spin = keyframes `
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  `

  const StyledCircle = styled.div `
    border-style: dashed dashed dashed solid;
    border-width: 2px;
    border-color: rgba(0, 0, 0, 0.5) rgba(0, 0, 0, 0.5) rgba(0, 0, 0, 0.5) rgb(3, 159, 255);
    width: ${props.width}px;
    height: ${props.width}px;
    position: absolute;
    z-index: -999;
    border-radius: 50%;
    animation: ${spin} 80s linear forwards infinite;
  `


  return (
    <StyledCircle />
  )
}

export default Circle;