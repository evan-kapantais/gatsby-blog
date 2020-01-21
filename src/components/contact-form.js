import React from 'react'
import styled from 'styled-components'

const Form = styled.form `
  min-width: 600px;
  margin: 0 auto;

  div:first-child {
    position: relative;

    label {
      position: absolute;
      top: 0.5rem;
      left: 0.5rem;
      transition: all 200ms ease;
    }

    /* input:focus ~ label {
      top: -1rem;
    } */
  }

  label {
    display: block;
  }

  input,
  textarea {
    width: 100%;
    display: block;
    padding: 0.5rem;
    border: 2px solid #333;
    background: #fff;
  }

  input {
    margin-bottom: 2rem;
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

    this.labelRef = React.createRef();
    this.inputRef = React.createRef();
  }

  onChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  }

  onFocus = () => {
    this.labelRef.current.style.top = '-1.5rem';
    this.labelRef.current.style.fontSize = '0.8rem';
  }
  
  onBlur = () => {
    if (this.state.name === '') {
      this.labelRef.current.style.top = '0.5rem';
      this.labelRef.current.style.color = 'red';
      this.labelRef.current.style.fontSize = '1rem';
    } else {
      this.labelRef.current.style.top = '-1.5rem';
      this.labelRef.current.style.fontSize = '0.8rem';
    }
  }

  componentDidUpdate() {
    this.labelRef.current.style.color = this.state.name === '' ? 'red' : 'green';
  }

  render() {
    return (
      <Form name='contact' data-netlify='true'>
        <div>
          <input type='text' id='name' placeholder='' onChange={this.onChange} value={this.state.name} onFocus={this.onFocus} onBlur={this.onBlur} required />
          <label htmlFor='name' ref={this.labelRef}>* Name</label>
        </div>
        {/* <label htmlFor='email'>* Email</label> */}
        <input type='email' placeholder='Email' required />
        {/* <label htmlFor='subject'>Subject</label> */}
        <input type='text' placeholder='Hey Evan!' />
        {/* <label htmlFor='message'>* Message</label> */}
        <textarea name='message' id='message' cols='30' rows='5' placeholder='Yout Message Here' required />
        <Buttons>
          <input type='submit' value='Submit' />
          <input type='reset' value='Reset' />
        </Buttons>
      </Form>
    );
  }
}

export default ContactForm;