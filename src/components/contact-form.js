import React from 'react'
import styled from 'styled-components'

const Form = styled.form `
  min-width: 600px;
  margin: 0 auto;

  div {
    position: relative;

    label {
      display: block;
      position: absolute;
      top: 0.5rem;
      left: 0.5rem;
      transition: all 200ms ease;
    }

    input,
    textarea {
      width: 100%;
      outline: none;
      margin-bottom: 2rem;
      display: block;
      padding: 0.5rem;
      border: 2px solid #333;
      background: #fff;
      transition: all 200ms ease;
    }
  }

`

const Buttons = styled.div `
  position: relative;
  
  input {
    width: 200px;
    transition: all 200ms ease;

    &:hover {
      cursor: pointer;
      background: #333;
      color: #fff;
    }
  }
`

class ContactForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      subject: '',
      message: '',
    };
  }

  onChange = (event) => {

    this.setState({
      [event.target.id]: event.target.value,
    });
  }

  onFocus = (event) => {
    const labelStyle = event.target.nextSibling.style;
    const divStyle = event.target.style;

    labelStyle.top = '-1.5rem';
    labelStyle.fontSize = '0.8rem';
    // divStyle.boxShadow = '5px 5px lightskyblue';
  }

  onBlur = (event) => {
    const labelStyle = event.target.nextSibling.style;
    const divStyle = event.target.style;

    // divStyle.boxShadow = 'none';

    if (this.state[event.target.id] === '') {
      labelStyle.top = '0.5rem';
      labelStyle.fontSize = '1rem';
    } else {
      labelStyle.top = '-1.5rem';
      labelStyle.fontSize = '0.8rem';
    }
  }

  render() {
    return (
      <Form name='contact' data-netlify='true'>
        <div>
          <input type='text' id='name' onChange={this.onChange} value={this.state.name} onFocus={this.onFocus} onBlur={this.onBlur} required />
          <label htmlFor='name'>Name *</label>
        </div>
        <div>
          <input type='email' id='email' onChange={this.onChange} value={this.state.email} onFocus={this.onFocus} onBlur={this.onBlur} required />
          <label htmlFor='email'>Email *</label>
        </div>
        <div>
          <input type='text' id='subject' onChange={this.onChange} value={this.state.subject} onFocus={this.onFocus} onBlur={this.onBlur} />
          <label htmlFor='subject'>Subject</label>
        </div>
        <div>
          <textarea name='message' id='message' cols='30' rows='10' onChange={this.onChange} value={this.state.message} onFocus={this.onFocus} onBlur={this.onBlur} required />
          <label htmlFor='message'>Message *</label>
        </div>
        <Buttons>
          <input type='submit' value='Submit' />
        </Buttons>
      </Form>
    );
  }
}

export default ContactForm;