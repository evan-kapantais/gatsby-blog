import React from 'react'
import styled from 'styled-components'

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

const Social = styled.div `
  display: flex;
  align-items: flex-end;

  a {
    margin: 0 0.3rem;
    position: relative;
    display: block;

    &::after {
      content: '';
      position: absolute;
      bottom: -20px;
      left: 0;
      height: 3px;
      width: 100%;
      background: #000;
      opacity: 0;
      transition: all 500ms ease;
    }

    &:hover::after {
      bottom: -10px;
      opacity: 1;
    }

    img {
      width: 1.5rem;
      margin: 0;
      display: block;
      max-width: auto;
      top: 0;
      left: 0;
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

    this.formRef = React.createRef();
  }

  onChange = (event) => {

    this.setState({
      [event.target.id]: event.target.value,
    });
  }

  render() {
    return (
      <Form name='contact' data-netlify='true' ref={this.formRef}>
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
          <Social>
            <a href="https://twitter.com/evankapantais">
              <img src={require('../images/github.png')} alt=""/>
            </a>
            <a href="https://github.com/evan-kapantais">
              <img src={require('../images/twitter.png')} alt=""/>
            </a>
            <a href="https://www.instagram.com/evan_kapantais/">
              <img src={require('../images/instagram.png')} alt=""/>
            </a>
          </Social>
        </footer>
      </Form>
    );
  }
}

export default ContactForm;