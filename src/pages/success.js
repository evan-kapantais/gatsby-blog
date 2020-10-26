import React, { useEffect } from 'react';
import { Link } from 'gatsby';
import SocialLinks from '../components/SocialLinks';

const Success = () => {
  useEffect(() => {
    const message = document.querySelector('.success-message');

    message.classList.add('shown');
  }, []);
  return (
    <section id="success">
      <div className="success-message-container">
        <h1 className="success-message">
          <span>Thanks</span> for getting in touch!
        </h1>
      </div>
      <SocialLinks color="dark" className="center-items" />
      <div className="back-home">
        <Link to="/">Go back home</Link>
      </div>
    </section>
  );
};

export default Success;
