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
  }

  input,
  textarea {
    width: 100%;
    margin-bottom: 2rem;
    display: block;
    padding: 0.5rem;
    border: 2px solid #333;
    background: #fff;
  }

  input {
    outline: none;


    &:focus {
      border-color: rgb(3, 159, 255);
    }
  }
`

const Buttons = styled.div `
  display: flex;
  width: auto;
  margin: 1rem 0;
  padding: 0;
  position: relative;
  
  input {
    border: 2px solid #333;
    background: #fff;
    width: 200px;
    box-shadow: none;
    transition: all 200ms ease;
    
    &:first-child {
      margin-right: 1rem;
    }

    &:hover {
      cursor: pointer;
      background: #333;
      color: #fff;
      border: 1px solid #333;
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

    labelStyle.top = '-1.5rem';
    labelStyle.fontSize = '0.8rem';
  }

  onBlur = (event) => {
    const labelStyle = event.target.nextSibling.style;

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