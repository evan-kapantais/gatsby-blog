import React from 'react'
import styled from 'styled-components'

import SocialContainer from '../components/social'

const Form = styled.form `
  margin: 0 auto;
  font-size: 0.8rem;

  div {
    position: relative;

    label {
      font-size: 0.8rem;
      transition: all 200ms ease;
    }

    input,
    textarea {
      width: 100%;
      margin-bottom: 1rem;
      display: block;
      padding: 0.3rem;
      border: 1px solid lightgrey;
    }

    textarea {
      resize: vertical;
      min-height: 50px;
    }
  }

  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      transition: all 200ms ease;
      border: 1px solid #000;
      text-transform: uppercase;
      font-weight: bold;
      background: #000;
      color: #fff;
      padding: 0.5rem 1rem;

      &:hover {
        background: #fff;
        cursor: pointer;
        color: #000;
      }

      &:focus {
        background: #000;
        color: #fff;
        box-shadow: none;
      }
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

  render() {
    return (
      <Form name='contact' data-netlify='true'>
        <div>
          <label htmlFor='name'>Name *</label>
          <input type='text' id='name' onChange={this.onChange} value={this.state.name} required />
        </div>
        <div>
          <label htmlFor='email'>Email *</label>
          <input type='email' id='email' onChange={this.onChange} value={this.state.email} required />
        </div>
        <div>
          <label htmlFor='subject'>Subject</label>
          <input type='text' id='subject' onChange={this.onChange} value={this.state.subject} />
        </div>
        <div>
          <label htmlFor='message'>Message *</label>
          <textarea name='message' id='message' cols='30' rows='5' onChange={this.onChange} value={this.state.message} required />
        </div>
        <footer>
          <button type='submit' value='Submit'>Submit</button>
          <SocialContainer margin='0' />
        </footer>
      </Form>
    );
  }
}

export default ContactForm;