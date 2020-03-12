import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import styled, { keyframes } from 'styled-components'

import Tag from './tag'

const Card = styled.article `
  position: relative;
  padding: 2rem 0;
  border-radius: 5px;
  transition: all 300ms ease;

  * {
    margin: 0;
  }

  &:hover {

    header {
      transform: translateY(0);
      opacity: 1;
    }

    footer {
      h5, div {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }

  header {
    color: #444;
    transform: translateY(-5px);
    opacity: 0;
    transition: all 300ms ease-in-out;


    @media only screen and (max-width: 590px) {
      display: block;
      text-align: center;

      div {margin-bottom: 0.5rem;}
    }
  }

  main {
    margin: 1rem 0;

    h2 {
      font-size: 2rem;
      margin-bottom: 1rem;
    }

    h3 {
      color: #777;
      font-weight: normal;
    }
  }

  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h5 {
      color: #444;
      transform: translateY(5px);
      opacity: 0;
      transition: all 300ms 100ms ease-in-out;
    }

    & > div {
      opacity: 0;
      transition: all 300ms 100ms ease-in-out;
    }
  }
`

const PostCard = ({ node }) => {

  const { title, subtitle, date, tags } = node.frontmatter;
  const { timeToRead } = node;
  // const featuredImage = node.frontmatter.featuredImage.childImageSharp.fluid;
  const { slug } = node.fields;

  return (
      <Card>
        <Link to={`/${slug}`}>
          <header>
            <h5>{date}</h5>
          </header>
          <main>
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
          </main>
          <footer>
            <h5>{timeToRead} Minute Read</h5>
            <div>
              {tags.map(tag => (
              <Tag key={tag} tag={tag} />
              ))}
            </div>
          </footer>
        </Link>
      </Card>
  );
}

export default PostCard;