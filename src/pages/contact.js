import React, { useState } from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import SocialLinks from '../components/SocialLinks';

const ContactPage = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [text, setText] = useState('');

  const formEvents = {
    handleHover: e => {
      const card = document.querySelector('.contact-card');
      card.classList.add('submit-shadow');
      e.target.classList.add('submit-button-hover');
    },
    handleLeave: e => {
      const card = document.querySelector('.contact-card');
      card.classList.remove('submit-shadow');
      e.target.classList.remove('submit-button-hover');
    },
    handleFocus: () => {
      const card = document.querySelector('.contact-card');
      card.classList.add('focus-shadow');
    },
    handleBlur: () => {
      const card = document.querySelector('.contact-card');
      !name &&
        !surname &&
        !email &&
        !subject &&
        !text &&
        card.classList.remove('focus-shadow');
    },
  };

  return (
    <Layout>
      <SEO title="contact" />
      <section id="contact">
        <div className="contact-card">
          <div className="content">
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              action="/success"
            >
              <h2>Contact</h2>
              <div className="contact-row">
                <div>
                  <label htmlFor="name">Name *</label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Jon"
                    value={name}
                    onChange={e => {
                      setName(e.target.value);
                    }}
                    onFocus={formEvents.handleFocus}
                    onBlur={formEvents.handleBlur}
                    // required
                  />
                </div>
                <div>
                  <label htmlFor="surname">Surname</label>
                  <input
                    id="surname"
                    type="text"
                    placeholder="Doe"
                    value={surname}
                    onChange={e => setSurname(e.target.value)}
                    onFocus={formEvents.handleFocus}
                    onBlur={formEvents.handleBlur}
                  />
                </div>
              </div>
              <label htmlFor="email">Email *</label>
              <input
                id="email"
                type="email"
                placeholder="john@doe.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                onFocus={formEvents.handleFocus}
                onBlur={formEvents.handleBlur}
                // required
              />
              <label htmlFor="subject">Subject</label>
              <input
                id="subject"
                type="text"
                placeholder="Subject"
                value={subject}
                onChange={e => setSubject(e.target.value)}
                onFocus={formEvents.handleFocus}
                onBlur={formEvents.handleBlur}
              />
              <label htmlFor="text">Message *</label>
              <textarea
                name="text"
                id="text"
                cols="30"
                rows="10"
                placeholder="Your text here"
                value={text}
                onChange={e => setText(e.target.value)}
                onFocus={formEvents.handleFocus}
                onBlur={formEvents.handleBlur}
                // required
              ></textarea>
              <button
                onMouseEnter={e => formEvents.handleHover(e)}
                onMouseLeave={e => formEvents.handleLeave(e)}
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
          <div className="image-wrapper">
            <div className="contact-card-side">
              <h1>Circe</h1>
              <SocialLinks color="light" className="center-items" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
