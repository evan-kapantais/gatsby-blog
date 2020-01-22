import React from 'react'
import styled from 'styled-components'

const Form = styled.form `
  margin: 0 auto;
  width: ${props => props.width || 'auto'};
  font-size: 0.8rem;

  div {
    position: relative;
    /* display: flex; */

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
      outline: none;
      border: 1px solid lightgrey;
    }

    textarea {
      resize: vertical;
      min-height: 50px;
    }
  }

  button {
    width: 100%;
    /* background: white; */
    transition: all 200ms ease;
    border: 1px solid #333;
    text-transform: uppercase;
    font-weight: bold;
    background: #333;
    color: #fff;
    padding: 0.5rem;

    &:hover {
      background: #fff;
      cursor: pointer;
      color: #333;
    }

    &:focus {
      background: #333;
      color: #fff;
      box-shadow: none;
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
      <Form width={this.props.width} name='contact' data-netlify='true'>
        <div>
          <label htmlFor='name'>Name *</label>
          <input type='text' id='name' placeholder='' onChange={this.onChange} value={this.state.name} onFocus={this.onFocus} onBlur={this.onBlur} required />
        </div>
        <div>
          <label htmlFor='email'>Email *</label>
          <input type='email' id='email' placeholder=''onChange={this.onChange} value={this.state.email} onFocus={this.onFocus} onBlur={this.onBlur} required />
        </div>
        <div>
          <label htmlFor='subject'>Subject</label>
          <input type='text' id='subject' placeholder='' onChange={this.onChange} value={this.state.subject} onFocus={this.onFocus} onBlur={this.onBlur} />
        </div>
        <div>
          <label htmlFor='message'>Message *</label>
          <textarea name='message' id='message' placeholder='' cols='30' rows='5' onChange={this.onChange} value={this.state.message} onFocus={this.onFocus} onBlur={this.onBlur} required />
        </div>
        <button type='submit' value='Submit'>Submit</button>
      </Form>
    );
  }
}

export default ContactForm;