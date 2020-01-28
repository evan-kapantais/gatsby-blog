import React from 'react'
import styled from 'styled-components'

const ModeBtn = styled.button `
  position: relative;
  margin: 0 1rem;
  width: 56px;
  height: 30px;
  border-radius: 20px;
  background: ${props => props.isDarkModeOn ? '#fff' : '#000'};
  border: none;
  transition: all 300ms ease;

  &:focus {outline: none;}

  &::before {
    content: '';
    background: transparent;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    z-index: 99;
  }

  img {
    position: absolute;
    margin: 0;
    top: 3px;
    left: 3px;
    display: block;
    transform: ${props => props.isDarkModeOn ? 'translateX(26px)' : 'translateX(0)'};
    transition: all 300ms ease;
  
    // the moon
    &:first-child {
      opacity: ${props => props.isDarkModeOn ? 1 : 0};
    }

    // the sun
    &:last-child {
      opacity: ${props => props.isDarkModeOn ? 0 : 1};
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
    console.log(`is dark mode on: ` + this.state.isDarkModeOn);

    if (this.state.isDarkModeOn) {
      document.body.style.backgroundColor = '#111';
      document.body.style.color = '#fff';
    } else {
      document.body.style.backgroundColor = '#fff';
      document.body.style.color = '#000';
    }
  }

  render() {
    return (
      <ModeBtn onClick={this.onClick} isDarkModeOn={this.state.isDarkModeOn}>
        <img src={require(`../images/moon-colour.png`)} alt='' />
        <img src={require(`../images/sun-colour.png`)} alt='' />
      </ModeBtn>
    );
  }
}

export default Mode;