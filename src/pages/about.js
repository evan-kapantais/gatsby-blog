import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import styled from 'styled-components';

const PageWrapper = styled.div`
  max-width: calc(960px + 4rem);
  padding: 0 2rem;
  margin: 10rem auto 10rem auto;

  a {
    color: #7fceff;

    &:hover {
      text-decoration: underline;
    }
  }

  header {
    display: flex;
    margin-bottom: 8rem;
    border-radius: 3px;
    overflow: hidden;

    @media only screen and (max-width: 645px) {
      flex-direction: column;
    }

    .image-wrapper {
      position: relative;
      min-height: 450px;
      width: 100%;
      filter: grayscale(0.9);

      @media only screen and (max-width: 645px) {
        min-height: 350px;
      }

      img {
        width: 100%;
        height: 100%;
        position: absolute;
        object-fit: cover;
      }
    }

    .text-wrapper {
      background: rgb(245, 245, 245);
      padding: 1rem;
      width: 50%;
      display: flex;
      align-items: flex-end;
      justify-content: flex-end;

      @media only screen and (max-width: 645px) {
        width: 100%;
        justify-content: flex-start;
      }

      h1 {
        font-size: 4rem;
      }
    }
  }

  main {
    margin: 0 auto;
    max-width: 800px;
    font-size: 1.2rem;
    line-height: 1.8;

    section {
      margin-bottom: 4rem;
    }

    h2 {
      margin-bottom: 1rem;
    }

    p {
      margin: 1rem 0;
    }
  }
`;

const AboutPage = () => {
  return (
    <Layout>
      <SEO title="About" />
      <PageWrapper>
        <header>
          <div className="image-wrapper">
            <img
              src={require('../images/portrait-03-copy.jpg')}
              alt="author portrait"
            />
          </div>
          <div className="text-wrapper">
            <h1>About</h1>
          </div>
        </header>
        <main>
          <section>
            <h2>Who</h2>
            <p>
              My name is{' '}
              <a href="https://en.wikipedia.org/wiki/Evangelos">Evan(gelos)</a>{' '}
              Kapantais and I am a sound-designer-slash-aspiring-web-developer
              from{' '}
              <a href="https://goo.gl/maps/YBSLVA6eVN2G9YMF7">Athens, Greece</a>
              .
            </p>
            <p>
              The things I enjoy doing the most are sound design, web
              development and writing. If you'd asked me ten years ago what I
              would like to do for a living I would have gladly picked any of
              the three.
            </p>
            <p>
              I spend most of my free time making websites and apps, while
              reading, writing, skateboarding and going on weekend trips are
              things that I always try to include in my routine.
            </p>
          </section>
          <section>
            <h2>Before</h2>
            <p>
              I was born and bred in Athens. After graduating high school, I
              spent three years studying for my Bachelor's degree in Music
              Production & Engineering, while the following year I spent abroad
              in Leeds, UK pursuing my Master's degree in Music Technology &
              Computer Music.
            </p>
          </section>
          <section>
            <h2>What</h2>
            <p>
              I have been working in the audio industry for a good seven years
              now. The first three I spent in Athens working with clients on
              video games, films and commercials. In 2017 I emigrated to
              beautiful Barcelona after being hired by a mobile game company. I
              have been living there since, working as part of the company's
              audio team.
            </p>
            <p>
              Aside from sound design, I am also immensely interested in all
              things web development. I spend most of my free time working on
              frontend projects and brushing up on my coding skills.
            </p>
            <p>
              When the pandemic hit in March, 2020 I moved back to Athens in
              order to spend this time back home.
            </p>
          </section>
          <section>
            <h2>The Blog</h2>
            <p>
              I don't really have the clearest of idea on how this works, but
              ever since I picked up writing I felt I needed my personal space
              on the web to post my thoughts about the subjects I am interested
              in. This page was primarily intended for subject that do not
              revolve around tech, but a merger of the two would be likely. The
              subjects I am interested in include geopolitics, religion and
              public affairs, to name just a few.
            </p>
            <p>
              My favourite authors include Christopher Hitchens, Richard
              Dawkins, Sam Harris, George Orwell, Franz Kafka and Aldous Huxley.
            </p>
          </section>
        </main>
      </PageWrapper>
    </Layout>
  );
};

export default AboutPage;
