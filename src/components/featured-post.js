import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import Tag from './tag'

const Wrapper = styled.section `
  padding: 4rem;

  & > h2 {
    color: darkred;

    
  }
`

const Card = styled.article `
  margin: 0 0rem;
  display: flex;
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
    max-width: 80%;

    * {margin: 0;}


    h1 {
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

const FeaturedPost = ({ node }) => {

  const { title, subtitle, date, tags } = node.frontmatter;
  const { timeToRead } = node;
  const featuredImage = node.frontmatter.featuredImage.childImageSharp.fluid;
  const { slug } = node.fields;

  return (
    <Wrapper>
      <h2>Latest Story</h2>
      <Card>
        <Link to={`/${slug}`}>
          <Img fluid={featuredImage} />
        </Link>
        <Link to={`/${slug}`}>
          <header>
            <h1>{title}</h1>
            <h3>{subtitle}</h3>
          </header>
        </Link>
      </Card>
    </Wrapper>
  );
}

export default FeaturedPost;