import React from 'react';

const SocialLinks = ({ color }) => {
  return (
    <div>
      <a className="social-link" href="https://www.instagram.com/circe_blog/">
        <svg
          className={`social-svg social-svg-${color}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M12,3.8c2.67,0,2.986.01,4.041.058A5.552,5.552,0,0,1,17.9,4.2a3.31,3.31,0,0,1,1.9,1.9,5.552,5.552,0,0,1,.344,1.857C20.188,9.014,20.2,9.33,20.2,12s-.01,2.986-.058,4.041A5.552,5.552,0,0,1,19.8,17.9a3.31,3.31,0,0,1-1.9,1.9,5.552,5.552,0,0,1-1.857.344c-1.054.048-1.371.058-4.041.058s-2.987-.01-4.041-.058A5.552,5.552,0,0,1,6.1,19.8a3.31,3.31,0,0,1-1.9-1.9,5.552,5.552,0,0,1-.344-1.857C3.812,14.986,3.8,14.67,3.8,12s.01-2.986.058-4.041A5.552,5.552,0,0,1,4.2,6.1,3.31,3.31,0,0,1,6.1,4.2,5.552,5.552,0,0,1,7.959,3.86C9.014,3.812,9.33,3.8,12,3.8M12,2c-2.716,0-3.056.012-4.123.06a7.355,7.355,0,0,0-2.427.465A5.106,5.106,0,0,0,2.525,5.45,7.355,7.355,0,0,0,2.06,7.877C2.012,8.944,2,9.284,2,12s.012,3.056.06,4.123a7.355,7.355,0,0,0,.465,2.427A5.106,5.106,0,0,0,5.45,21.475a7.355,7.355,0,0,0,2.427.465C8.944,21.989,9.284,22,12,22s3.056-.011,4.123-.06a7.355,7.355,0,0,0,2.427-.465,5.106,5.106,0,0,0,2.925-2.925,7.355,7.355,0,0,0,.465-2.427c.048-1.067.06-1.407.06-4.123s-.012-3.056-.06-4.123a7.355,7.355,0,0,0-.465-2.427A5.106,5.106,0,0,0,18.55,2.525a7.355,7.355,0,0,0-2.427-.465C15.056,2.012,14.716,2,12,2Z" />
          <path d="M12,6.865A5.135,5.135,0,1,0,17.135,12,5.135,5.135,0,0,0,12,6.865Zm0,8.468A3.333,3.333,0,1,1,15.333,12,3.333,3.333,0,0,1,12,15.333Z" />
          <circle cx="17.338" cy="6.662" r="1.2" />
        </svg>
      </a>
      <a href="https://www.facebook.com/circeblog/" className="social-link">
        <svg
          className={`social-svg social-svg-${color}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M22.06,11.987a10.061,10.061,0,1,0-11.633,9.939V14.9H7.872V11.987h2.555V9.771a3.551,3.551,0,0,1,3.8-3.915,15.427,15.427,0,0,1,2.252.2V8.529H15.211a1.454,1.454,0,0,0-1.64,1.571v1.887h2.791L15.915,14.9H13.571v7.03A10.064,10.064,0,0,0,22.06,11.987Z" />
        </svg>
      </a>
    </div>
  );
};

export default SocialLinks;
