import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import Seo from'../components/seo'

const Form = styled.form `
  width: 600px;
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
    /* margin-bottom: 0.2rem; */
  }

  input,
  textarea {
    width: 100%;
    border: none;
    border-bottom: 1px solid grey;
  }

  input {
    margin-bottom: 2rem;
    padding: 0.5rem;
    outline: none;

    &:focus {
      border-color: rgb(3, 159, 255);
    }
  }
`

const Buttons = styled.div `
  display: flex;
  justify-content: flex-start;

  * {margin: 0 0.5rem;}
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
    this.labelRef.current.style.top = '-1rem';
  }

  onBlur = () => {
    if (this.state.name === '') {
      this.labelRef.current.style.top = '0.5rem';
      this.labelRef.current.style.color = 'red';
    } else {
      this.labelRef.current.style.top = '-1rem';
    }
  }

  componentDidUpdate() {
    this.labelRef.current.style.color = this.state.name === '' ? 'red' : 'green';
  }

  render() {
    return (
      <Form name='contact' data-netlify='true'>
        <div>
          <input type='text' id='name' placeholder='' onChange={this.onChange} value={this.state.name} onFocus={this.onFocus} onBlur={this.onBlur} />
          <label htmlFor='name' ref={this.labelRef}>Name</label>
        </div>
        {/* <label htmlFor='email'>Email</label> */}
        <input type='email' placeholder='Email' />
        {/* <label htmlFor='subject'>Subject</label> */}
        <input type='text' placeholder='Hey Evan!' />
        {/* <label htmlFor='message'>Message</label> */}
        <textarea name='message' id='message' cols='30' rows='5' placeholder='Yout Message Here' />
        <Buttons>
          <input type='submit' value='Submit' />
          <input type='reset' value='Reset' />
        </Buttons>
      </Form>
    );
  }
}

const Container = styled.div `
  max-width: 1200px;
  margin: 4rem auto;
`

const Email = styled.section `

  h1 {
    font-size: 6rem;
    text-align: center;
    margin-bottom: 4rem;
  }
`

const Mail = styled.section `

`

const contactPage = () =>  {

  return (
    <Layout>
      <Seo title='Contact' />
      <Container>
        <Email>
          <h1>You can reach me through email,</h1>
          <ContactForm />
        </Email>
        <Mail>

        </Mail>
      </Container>
    </Layout>
  );
}

export default contactPage;