import React from 'react'
import Seo from '../components/seo'
import styled from 'styled-components'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Social from '../components/social'

// TODO: rework the header with 2 headings and a div instead
// TODO: responsive

const Container = styled.div `
  max-width: 650px;
  margin: 0 auto;
  padding: 1rem;

  div {
    margin: 2rem 0;
    line-height: 1.8;

    p {
      margin: 0.5rem 0;
    }

    a {
      color: rgb(3, 159, 255);

      &:hover {text-decoration: underline;}
    }
  }
`

const aboutPage = () => {
  return (
    <Layout title='About'>
      <Seo title='About' />
      <Container>
        <h2>Hey Stranger!</h2>
        <div>
          <p>If you haven't noticed by now, this is my blog; thanks for dropping by! I'll give you a bit of info so we can become real friends. By training, I am a sound designer specializing in video games. Currently I am based in beautiful Barcelona, Spain, but my country of origin is Greece. Besides my day job, I like to code websites and apps and write stuff about topics that interest me. Here you can find posts on religion, a bit of politics, books and tech. Although this page is solely dedicated to my writing, you can also find my frontend work over at my <a href='https://www.evankapantais.com'>other website</a> &#40;the link is broken, I know, I know&#41;.</p>
          <p>Should you want to reach out to me, you can email me <Link to='/contact'>here</Link> or find me on my social media.</p>
          <p>Happy reading!</p>
        </div>
        <Social justify='flex-start' />
      </Container>
    </Layout>
  )
}

export default aboutPage;