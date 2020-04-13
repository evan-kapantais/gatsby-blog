import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div `
  text-align: right;
  margin-bottom: 2rem;
`

const Button = styled.button `
  background: transparent;
  margin-right: 1rem;
  padding: 0;
  outline: none;
  border: none;
  cursor: pointer;
  line-height: 1;

  &:last-child {margin: 0;}
`

const SmallerFont = styled(Button) `
  font-size: 0.9rem;
`

const LargerFont = styled(Button) `
  font-size: 1.5rem;
`

const Reset = styled(Button) ``

class FontSize extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      size: 1.1,
    }
  }

  increase = () => {
    if (this.state.size < 1.5) {
      this.setState({
        size: this.state.size + 0.1,
      });
    }
  }

  decrease = () => {
    if (this.state.size > 0.8)
    this.setState({
      size: this.state.size - 0.1,
    });
  }

  reset = () => {
    this.setState({
      size: 1.1,
    });
  }

  componentDidUpdate() {
    const article = document.querySelector('article');
    article.style.fontSize = `${this.state.size}rem`;
  }
  
  render() {
    return (
      <Wrapper>
        <SmallerFont onClick={this.decrease}>A-</SmallerFont>
        <LargerFont onClick={this.increase}>A+</LargerFont>
        <Reset onClick={this.reset}>Reset</Reset>
      </Wrapper>
    );
  }
}

export default FontSize;