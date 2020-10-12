import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

const Card = styled.div`
  transition: all 300ms ease;

  .post-image-wrapper {
    border-radius: 3px;
    overflow: hidden;
    min-height: 280px;

    .gatsby-image-wrapper {
      min-height: 280px;
    }
  }

  img {
    margin-bottom: 2rem;
    filter: grayscale(1);
  }

  &:hover img {
    transform: scale(1.02);
    filter: grayscale(0);
  }

  .post-category {
    text-transform: uppercase;
    font-size: 0.8rem;
    color: #7fceff;
    font-weight: 600;
    margin-bottom: 1rem;
  }

  .post-heading {
    margin-bottom: 1rem;
    font-size: 2rem;
    font-weight: 600;
  }

  .post-subheading {
    line-height: 1.5;
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-size: 1.1rem;
    margin-bottom: 1rem;
  }

  .post-info {
    text-transform: uppercase;
    font-size: 0.8rem;
    color: #777;
    font-weight: 600;
  }
`;

const PostCard = ({ node }) => {
  const { title, subtitle, tags, date } = node.frontmatter;
  const { timeToRead } = node;
  const featuredImage = node.frontmatter.featuredImage.childImageSharp.fluid;
  const { slug } = node.fields;

  return (
    <Card key={title}>
      <Link to={`/${slug}`}>
        <div className="post-image-wrapper">
          <Img
            fluid={featuredImage}
            imgStyle={{ transition: 'all 500ms ease' }}
            style={{ marginBottom: '2rem' }}
          />
        </div>
      </Link>
      <div className="post-text-wrapper">
        <Link to={`/${slug}`}>
          <p className="post-category">{tags[0]}</p>
          <h2 className="post-heading">{title}</h2>
          <p className="post-subheading">{subtitle}</p>
          <p className="post-info">
            {date} • {timeToRead} Min Read
          </p>
        </Link>
      </div>
    </Card>
  );
};

export default PostCard;
