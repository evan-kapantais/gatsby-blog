import React from 'react'
import styled, { keyframes } from 'styled-components'

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
`

const AddressContainer = styled.div `
    min-width: 600px;
    display: flex;
    flex-direction: column;
`

const Address = styled.div `
  display: flex;
  align-items: center;

  &:first-child {
    margin-bottom: 2rem;
  }

  p {
    font-size: 1.8rem;
    line-height: 1.25;
  }
`

const float = keyframes `
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(0, 12px);
  }

  100% {
    transform: translate(0, 0);
  }
`

const Image = styled.img `
  display: block;
  max-width: 160px;
  max-height: 160px;
  margin-right: 4rem;
  animation: ${float} 5s ease-in-out infinite;
  animation-delay: ${props => props.delay || 0};
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
          <AddressContainer>
           <Address>
             <Image src={require('../images/home.png')} alt='home'/>
             <p>
               Carrer de Saragossa 133 <br />
               Floor 1, Apartment 3 <br />
               08006 <br />
               Barcelona <br />
               Spain
             </p>
           </Address>
           <Address>
             <Image delay='1000ms' src={require('../images/building.png')} alt='company' />
             <p>
               Carrer de Llacuna <br />
               10th Floor <br />
               08018 <br />
               Barcelona <br />
               Spain <br />
             </p>
           </Address>
          </AddressContainer>
          <SectionHeading>or via regular mail. <br /> &larr;</SectionHeading>
        </Mail>
      </Container>
    </Layout>
  );
}

export default contactPage;