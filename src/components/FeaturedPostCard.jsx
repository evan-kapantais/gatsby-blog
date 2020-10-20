import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  align-items: center;
  transition: all 300ms ease;

  @media only screen and (max-width: 800px) {
    flex-direction: column;

    .featured-post-image-wrapper {
      width: 100%;
      margin-bottom: 2rem;
    }

    .featured-post-text-wrapper {
      flex: unset;
      width: 100%;
      padding: 0 !important;
      padding-left: 0;
    }
  }

  .featured-post-image-wrapper {
    flex: 3;
    position: relative;
    border-radius: 3px;
    min-height: 380px;
    overflow: hidden;

    .gatsby-image-wrapper {
      min-height: 380px;
    }

    img {
      filter: grayscale(0.3);
    }
  }

  .featured-post-text-wrapper {
    flex: 1;
    padding: 0 0 0 2rem;
    min-width: 264px;
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

const FeaturedPostCard = ({ node }) => {
  const { title, subtitle, tags, date } = node.frontmatter;
  const { timeToRead } = node;
  const featuredImage = node.frontmatter.featuredImage.childImageSharp.fluid;
  const { slug } = node.fields;

  return (
    <Card key={title}>
      <div className="featured-post-image-wrapper">
        <Link to={`/${slug}`}>
          <Img
            fluid={featuredImage}
            imgStyle={{ transition: 'all 500ms ease' }}
          />
        </Link>
      </div>
      <div className="featured-post-text-wrapper">
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

export default FeaturedPostCard;
