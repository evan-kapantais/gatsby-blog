import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import Tag from './tag'

const Card = styled.div `
  margin: 4rem auto;
  padding: 1.5rem;
  height: 100%;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  transition: all 300ms ease;

  &:hover img {
    transform: scale(1.1);
  }

  > img {margin-bottom: 2rem;}

  header {
    margin: 0 auto 2rem auto;

    * {margin: 0;}


    h2 {
      font-size: 2rem;
      margin-bottom: 1rem;
      }

    h3 {
      color: #777;
      font-weight: normal;
      }

    h4 {
      flex: 3;
      color: #666;
      text-align: right;
      font-weight: normal;
    }

    @media only screen and (max-width: 590px) {
      div {margin-bottom: 0.5rem;}
      h4 {text-align: center;}
    }
  }

  > footer {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h6 {color: #666; margin: 0;}
  }

  @media (max-width: 700px) {
    max-width: 500px;

    header {
      h2 {font-size: 1.6rem;}

      h3 {font-size: 1.3rem;}
    }
  }

  @media (max-width: 600px) {
    max-width: 400px;

    header {
      h2 {font-size: 1.4rem;}

      h3 {font-size: 1.2rem;}
    }
  }
`

const PostCard = ({ node }) => {

  const { title, subtitle, tags } = node.frontmatter;
  const { timeToRead } = node;
  const featuredImage = node.frontmatter.featuredImage.childImageSharp.fluid;
  const { slug } = node.fields;

  return (
    <Card key={title}>
      <Link to={`/${slug}`}>
        <Img
        fluid={featuredImage}
        imgStyle={{transition: 'all 500ms ease',}}
        style={{marginBottom: '2rem'}}
        />
        <header>
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
        </header>
      </Link>
      <footer>
        <div>
          {tags.map(tag => (
          <Tag key={tag} tag={tag} />
          ))}
        </div>
        <h6>{timeToRead} Minute Read</h6>
      </footer>
    </Card>
  );
}

export default PostCard;