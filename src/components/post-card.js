import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import Tag from './tag'

const Card = styled.article `
  margin: 4rem 0;
  padding: 2rem;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  transition: all 300ms ease;

  &:hover {transform: translateY(-5px); box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);}
`

const CardContent = styled.div `

  header {
    margin: 0 auto 4rem auto;
    text-align: center;

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
  }

  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h6 {
      color: #666; margin: 0;
    }
  }
`

const ImageWrapper = styled.div `
  margin-bottom: 2rem;
`

const PostCard = ({ node }) => {

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
          <CardContent>
            <header>
              <h2>{title}</h2>
              <h3>{subtitle}</h3>
            </header>
            <footer>
              <div>
                {tags.map(tag => (
                <Tag key={tag} tag={tag} />
                ))}
              </div>
                <h6>{timeToRead} Minute Read</h6>
            </footer>
          </CardContent>
        </Link>
      </Card>
  );
}

export default PostCard;