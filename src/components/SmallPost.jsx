import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';

const Card = styled.div`
  position: relative;
  border-radius: 3px;
  overflow: hidden;
  transition: all 300ms ease;

  * {
    margin: 0;
  }
`;

const Content = styled.div`
  padding: 1rem 0;

  .post-category {
    text-transform: uppercase;
    font-size: 0.8rem;
    color: #7fceff;
    font-weight: 600;
    margin-bottom: 1rem;
  }

  .post-heading {
    margin-bottom: 1rem;
    font-size: 1.5rem;
    font-weight: 600;
  }

  .post-subheading {
    line-height: 1.5;
    font-family: Georgia, 'Times New Roman', Times, serif;
    margin-bottom: 1rem;
  }

  .post-info {
    text-transform: uppercase;
    font-size: 0.8rem;
    color: #777;
    font-weight: 600;
  }
`;

const SmallPost = ({ node }) => {
  return (
    <Card>
      <Link to={`/${node.fields.slug}`}>
        <Img fluid={node.frontmatter.featuredImage.childImageSharp.fluid} />
      </Link>
      <Content>
        <Link to={`/${node.fields.slug}`}>
          <p className="post-category">{node.frontmatter.tags[0]}</p>
          <h3 className="post-heading">{node.frontmatter.title}</h3>
          <p className="post-subheading">{node.frontmatter.subtitle}</p>
          <p className="post-info">
            {node.frontmatter.date} • {node.timeToRead} Min Read
          </p>
        </Link>
      </Content>
    </Card>
  );
};

export default SmallPost;
