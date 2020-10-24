import React, { useState, useEffect } from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

const ContactPage = () => {
  const [hasContent, setHasContent] = useState(false);
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [text, setText] = useState('');

  const formEvents = {
    handleHover: e => {
      const card = document.querySelector('.contact-card');
      card.classList.add('submit-shadow');
      e.target.style.background = 'blueviolet';
    },
    handleLeave: e => {
      const card = document.querySelector('.contact-card');
      card.classList.remove('submit-shadow');
      e.target.style.background = 'violet';
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
            <form>
              <h2>Contact</h2>
              <div className="contact-row">
                <input
                  type="text"
                  placeholder="Jon"
                  value={name}
                  onChange={e => {
                    setName(e.target.value);
                  }}
                  onFocus={formEvents.handleFocus}
                  onBlur={formEvents.handleBlur}
                  required
                />
                <input
                  type="text"
                  placeholder="Doe"
                  value={surname}
                  onChange={e => setSurname(e.target.value)}
                  onFocus={formEvents.handleFocus}
                  onBlur={formEvents.handleBlur}
                />
              </div>
              <input
                type="email"
                placeholder="john@doe.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                onFocus={formEvents.handleFocus}
                onBlur={formEvents.handleBlur}
                required
              />
              <input type="text" placeholder="Subject" />
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
                required
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
            <img
              src={require('../images/fabrice-villard-Du41jIaI5Ww-unsplash.jpg')}
              alt=""
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
