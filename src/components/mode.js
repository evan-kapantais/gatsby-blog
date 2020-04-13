import React from 'react'
import styled, {keyframes} from 'styled-components'

const orbit = keyframes `
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(360deg);
  }
`

const ModeBtn = styled.button `
  position: relative;
  margin: 0 1rem;
  width: 20px;
  height: 20px;
  background: none;
  border: none;
  cursor: pointer;
  animation: ${orbit} 20s linear infinite;
  transition: all 300ms ease;

  img {
    position: absolute;
    top: 0;
    left: 0;
    transition: all 250ms ease;
  
    // the moon
    &:first-child {
      opacity: ${props => props.isDarkModeOn ? 0 : 1};
      transform: ${props => props.isDarkModeOn ? 'scale(0)' : 'scale(1)'};
    }
    
    // the sun
    &:last-child {
      opacity: ${props => props.isDarkModeOn ? 1 : 0};
      transform: ${props => props.isDarkModeOn ? 'scale(1)' : 'scale(0)'};
    }
  }
`

class Mode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDarkModeOne: false,
    }
  }

  onClick = () => {
    this.setState({
      isDarkModeOn: !this.state.isDarkModeOn
    });
  }

  componentDidUpdate() {
    if (this.state.isDarkModeOn) {
      document.body.style.backgroundColor = '#111';
      document.body.style.color = '#fff';
    } else {
      document.body.style.backgroundColor = '#eee';
      document.body.style.color = '#000';
    }
  }

  render() {
    return (
      <ModeBtn onClick={this.onClick} isDarkModeOn={this.state.isDarkModeOn}>
        <img src={require(`../images/icons/moon-colour.png`)} alt='' />
        <img src={require(`../images/icons/sun-colour.png`)} alt='' />
      </ModeBtn>
    );
  }
}

export default Mode;