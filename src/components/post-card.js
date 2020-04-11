import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import Tag from './tag'

const Card = styled.div `
  margin: 4rem 0;
  padding: 1.5rem;
  height: 100%;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  transition: all 300ms ease;

  &:hover img {
    transform: scale(1.1);
  }
`

const CardHeader = styled.div `
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
    display: block;
    text-align: center;

    div {margin-bottom: 0.5rem;}

    h4 {text-align: center;}
  }
`
const ImageWrapper = styled.div `
  margin-bottom: 2rem;
`

const CardFooter = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;

   h6 {
    color: #666; margin: 0;
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
        <ImageWrapper>
          <Img
          fluid={featuredImage}
          imgStyle={{
            transition: 'all 500ms ease',
          }}
          />
        </ImageWrapper>
        <CardHeader>
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
        </CardHeader>
      </Link>
      <CardFooter>
        <div>
          {tags.map(tag => (
          <Tag key={tag} tag={tag} />
          ))}
        </div>
          <h6>{timeToRead} Minute Read</h6>
      </CardFooter>
    </Card>
  );
}

export default PostCard;