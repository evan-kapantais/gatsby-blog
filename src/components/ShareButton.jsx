import React from 'react';
import PropTypes from 'prop-types';

export const FacebookShareButton = ({ url }) => {
  return (
    <a
      href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
      target="_blank"
    >
      <img
        style={{
          width: `20px`,
          height: `20px`,
        }}
        src={require('../images/icons/social/facebook-1.svg')}
        alt="Facebook Icon"
      />
    </a>
  );
};

export const TwitterShareButton = ({ url, text, via }) => {
  return (
    <a
      href={`https://twitter.com/intent/tweet?text=${text}&url=${url}&via=${via}`}
      target="_blank"
    >
      <img
        style={{
          width: `20px`,
          height: `20px`,
        }}
        src={require('../images/icons/social/twitter.svg')}
        alt="Twitter Icon"
      />
    </a>
  );
};

FacebookShareButton.propTypes = {
  url: PropTypes.string.isRequired,
};

TwitterShareButton.propTypes = {
  url: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  via: PropTypes.string.isRequired,
};
