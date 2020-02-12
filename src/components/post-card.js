import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import Tag from './tag'

const Card = styled.article `
  margin: 4rem 0;
  padding: 1rem;
  grid-column: 2 / 3;
`

const CardHeader = styled.div `
  display: flex;
  align-items: flex-end;
  margin-bottom: 1.5rem;

  * {margin: 0;}

  div { 
    flex: 6;

    h2 {font-size: 2rem; }
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

const CardContent = styled.div`
  p { line-height: 1.75; }
`

const ImageWrapper = styled.div `
  margin: 2rem 0;
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

  const { title, date, tags } = node.frontmatter;
  const { excerpt, timeToRead } = node;
  const featuredImage = node.frontmatter.featuredImage.childImageSharp.fluid;
  const { slug } = node.fields;

  return (
      <Card>
        <Link to={`/${slug}`}>
          <CardHeader>
            <div>
              <h2>{title}</h2>
            </div>
            <h4>{date}</h4>
          </CardHeader>
          <ImageWrapper>
            <Img fluid={featuredImage} />
          </ImageWrapper>
          <CardContent>
            <div dangerouslySetInnerHTML={{__html: excerpt}} />
          </CardContent>
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