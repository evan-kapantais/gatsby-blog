import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import Seo from'../components/seo'

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
    border: none;
    border-bottom: 1px solid grey;
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
    border: 1px solid #333;
    background: #fff;
    width: 200px;
    transition: all 200ms ease;
    
    &:first-child {
      margin-right: 1rem;
    }

    &:hover {
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
  }

  onBlur = () => {
    if (this.state.name === '') {
      this.labelRef.current.style.top = '0.5rem';
      this.labelRef.current.style.color = 'red';
    } else {
      this.labelRef.current.style.top = '-1.5rem';
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

  section {
    margin: 10rem 0;
  }
`

const Email = styled.section `
  display: flex;
`

const SectionHeading = styled.h1`
  font-size: 6rem;
  text-align: center;
  margin-bottom: 4rem;
  text-align: left;
  text-shadow: 5px 5px rgb(3, 159, 255);
  text-shadow: 5px 5px lightskyblue;
`

const Mail = styled.section `
  display: flex;

  h1 {
    text-align: right;
  }

  div {
    min-width: 600px;
  }
`

const contactPage = () =>  {

  return (
    <Layout>
      <Seo title='Contact' />
      <Container>
        <Email>
          <SectionHeading>You can reach me through email &rarr;</SectionHeading>
          <ContactForm />
        </Email>
        <Mail>
          <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2992.590729276319!2d2.1429936157408034!3d41.40469370288429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a2a09c49bfdf%3A0x58ec251a3ee70da9!2sCarrer%20de%20Saragossa%2C%20133%2C%2008006%20Barcelona!5e0!3m2!1sen!2ses!4v1579561266214!5m2!1sen!2ses" width="600" height="450" frameborder="0" allowfullscreen=""></iframe>
          </div>
          <SectionHeading>or via regular mail. <br /> &larr;</SectionHeading>
        </Mail>
      </Container>
    </Layout>
  );
}

export default contactPage;