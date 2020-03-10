import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import styled, { keyframes } from 'styled-components'

import Tag from './tag'

const Card = styled.article `
  margin: 2rem 0;
  border-radius: 3px;
  position: relative;
  transition: all 300ms ease;

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
      font-weight: normal;
    }

    @media only screen and (max-width: 590px) {
      display: block;
      text-align: center;

      div {margin-bottom: 0.5rem;}
    }
  }

  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h6 {
      color: #666; 
      margin: 0;
    }
  }
`

const ImageWrapper = styled.div `
  margin-bottom: 2rem;
`

const PostCard = ({ node }) => {

  const { title, subtitle, tags } = node.frontmatter;
  const { timeToRead } = node;
  const featuredImage = node.frontmatter.featuredImage.childImageSharp.fluid;
  const { slug } = node.fields;

  return (
      <Card>
        <Link to={`/${slug}`}>
          {/* <ImageWrapper>
            <Img fluid={featuredImage} />
          </ImageWrapper> */}
          <header>
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
          </header>
        </Link>
        <footer>
          {/* <div>
            {tags.map(tag => (
            <Tag key={tag} tag={tag} />
            ))}
          </div>
            <h6>{timeToRead} Minute Read</h6> */}
        </footer>
      </Card>
  );
}

export default PostCard;