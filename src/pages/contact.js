import React from 'react'
import styled, { keyframes } from 'styled-components'

import Layout from '../components/layout'
import Seo from'../components/seo'
import ContactForm from '../components/contact-form'

// TODO: animation library

const Container = styled.div`
  max-width: 1200px;
  margin: 4rem auto;
`

const Section = styled.section `
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* margin: 10rem 0; */
  height: 100vh;
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

const Address = styled.div`
  display: flex;
  align-items: center;

  p {
    font-size: 2rem;
    line-height: 1.5;
    width: 500px;
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

const Social = styled(Section)`

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

const contactPage = () => (
  <Layout>
    <Seo title='Contact' />
    <Container>
      <Section>
        <SectionHeading>You can reach me by email, <br /> &rarr;</SectionHeading>
        <ContactForm />
      </Section>
      <Section>
        <Address>
          <p>
            Carrer de la Llacuna 166 <br />
            10th Floor <br />
            08018 <br />
            Barcelona <br />
            Spain <br />
          </p>
        </Address>
        <SectionHeading style={{textAlign: `right`}}>traditional mail,<br />&larr;</SectionHeading>
      </Section>
      <Social>
        <SectionHeading>or<br /> social <br />media.<br />&rarr;</SectionHeading>
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
          <a href='https://www.facebook.com/evankapantais'>
            <SocialImage src={require('../images/facebook-colour.png')} alt='facebook icon' delay='600ms' />
          </a>
          <a href='https://www.linkedin.com/in/evankapantais/'>
            <SocialImage src={require('../images/linkedin-colour.png')} alt='linkedin icon' delay='1100ms' />
          </a>
        </div>
      </Social>
    </Container>
  </Layout>
)

export default contactPage;