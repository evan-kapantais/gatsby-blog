import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import Tag from './tag'

const Card = styled.article `
  margin: 6rem;
  display: flex;
  /* max-width: 700px; */
  justify-content: center;
  align-items: center;

  a:first-child {
    flex: 1;
  }

  a:last-child {
    flex: 1;
  }

  header {
    margin: 0 auto 2rem auto;
    text-align: center;
    max-width: 80%;

    * {margin: 0;}


    h2 {
      font-size: 2rem;
      margin-bottom: 1rem;
      }

    h3 {
      color: #777;
      font-weight: normal;
      }

    @media only screen and (max-width: 590px) {
      display: block;
      text-align: center;
    }
  }
`

const ImageWrapper = styled.div `
  margin-bottom: 2rem;
`

const FeaturedPost = ({ node }) => {

  const { title, subtitle, date, tags } = node.frontmatter;
  const { timeToRead } = node;
  const featuredImage = node.frontmatter.featuredImage.childImageSharp.fluid;
  const { slug } = node.fields;

  return (
      <Card>
        <Link to={`/${slug}`}>
          <ImageWrapper>
            <Img fluid={featuredImage} />
          </ImageWrapper>
        </Link>
        <Link to={`/${slug}`}>
          <header>
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
          </header>
        </Link>
      </Card>
  );
}

export default FeaturedPost;