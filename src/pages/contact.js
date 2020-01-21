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
    border: 2px solid #333;
    /* border-bottom: 1px solid grey; */
    background: #fff;
    box-shadow: 5px 5px #333;
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
        <input type='email' placeholder='Email' />
        {/* <label htmlFor='subject'>Subject</label> */}
        <input type='text' placeholder='Hey Evan!' required />
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

const Container = styled.div`
  max-width: 1200px;
  margin: 4rem auto;

  section {
    margin: 10rem 0;
  }
`

const Email = styled.section`
  display: flex;
`

const SectionHeading = styled.h1`
  font-size: 6rem;
  text-align: center;
  margin: 0;
  text-align: left;
  text-shadow: 5px 5px lightskyblue;
  transition: all 200ms ease-in-out;

  &:hover {
    text-shadow: 10px 10px wheat;
  }
`

const Mail = styled.section`
  display: flex;

  h1 {
    text-align: right;
  }
`

const AddressContainer = styled.div`
  min-width: 600px;
  display: flex;
  flex-direction: column;
`

const Address = styled.div`
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

const float = keyframes`
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

const Image = styled.img`
  max-width: 160px;
  max-height: 160px;
  margin-right: 4rem;
  animation: ${float} 5s ease-in-out infinite;
  animation-delay: ${props => props.delay || 0};
`

const wiggle = keyframes`
  0% {
    transform: rotate(0deg);
  }
  33% {
    transform: rotate(5deg);
  }
  66% {
    transform: rotate(-5deg);
  }
  100% {
    transform: rotate(0deg);
  }
`

const SocialImage = styled(Image)`
  margin: 0;
`


const Social = styled.section`
  display: flex;
  justify-content: space-between;


  a {
    display: block;
    transition: all 300ms ease;

    &:hover {
      transform: scale(1.1);
      animation: ${wiggle} 300ms ease-in-out both alternate;
    }
  }

  div {
    display: grid;
    grid-template-columns: repeat(3, 160px);
    grid-template-rows: 160px 160px;
    align-items: center;
    gap: 4rem;
    min-width: 600px;
  }
`

const contactPage = () =>  {

  return (
    <Layout>
      <Seo title='Contact' />
      <Container>
        <Email>
          <SectionHeading>You can reach me by email, <br /> &rarr;</SectionHeading>
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
               Carrer de la Llacuna 166 <br />
               10th Floor <br />
               08018 <br />
               Barcelona <br />
               Spain <br />
             </p>
           </Address>
          </AddressContainer>
          <SectionHeading>via <br /> regular mail, <br /> &larr;</SectionHeading>
        </Mail>
        <Social>
          <SectionHeading>or my <br /> social <br /> media. <br />&rarr;</SectionHeading>
          <div>
            <a href='https://github.com/evan-kapantais'>
              <SocialImage src={require('../images/github-colour.png')} alt='github icon' delay='100ms' />
            </a>
            <a href='https://twitter.com/evankapantais'>
              <SocialImage src={require('../images/twitter-colour.png')} alt='twitter icon' delay='600ms' />
            </a>
            <a href='https://www.instagram.com/evan_kapantais/'>
              <SocialImage src={require('../images/instagram-colour.png')} alt='instagram icon' delay='1100ms' />
            </a>
            <a href='facebook.com'>
              <SocialImage src={require('../images/facebook-colour.png')} alt='facebook icon' delay='600ms' />
            </a>
            <a href='https://www.linkedin.com/in/evankapantais/'>
              <SocialImage src={require('../images/linkedin-colour.png')} alt='linkedin icon' delay='1100ms' />
            </a>
          </div>
        </Social>
      </Container>
    </Layout>
  );
}

export default contactPage;