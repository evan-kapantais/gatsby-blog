import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

const Card = styled.article `
  margin: 4rem 0;
  padding: 1rem;
`

const CardHeader = styled.div `
  h2 { 
    width: 60%;
    margin: 0 auto;
    text-align: center;
    font-size: 2rem; 
    margin-bottom: 2rem;
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    * {
      margin: 0;
    }
  }
`

const CardContent = styled.div`
  p { line-height: 1.75; }
`

const ImageWrapper = styled.div `
  margin: 1rem 0 2rem 0;
`

const CardFooter = styled.div `
  display: flex;
  align-items: center;

  * { margin: 0; }

  a{ 
    font-size: .8rem;
    font-weight: 600;
    font-family: Arial, Helvetica, sans-serif;
    color: rgb(3, 159, 255);
    text-transform: uppercase;
    margin-right: .5rem;

    &:last-child { margin: 0; }
   }
`

const PostCard = ({ node }) => {

  const { title, date, tags } = node.frontmatter;
  const { excerpt, timeToRead } = node;
  const featuredImage = node.frontmatter.featuredImage.childImageSharp.fluid;
  const { slug } = node.fields;

  return (
      <Card>
        <Link to={`/blog/${slug}`}>
          <CardHeader>
            <h2>{title}</h2>
            <div>
              <h6>{date}</h6>
              <h6>{timeToRead} MINUTE READ</h6>
            </div>
          </CardHeader>
          <ImageWrapper>
            <Img fluid={featuredImage} />
          </ImageWrapper>
          <CardContent>
            <p>{excerpt}</p>
          </CardContent>
        </Link>
        <CardFooter>
          {tags.map(tag => (
          <Link to='/'>#{tag} </Link>
          ))}
        </CardFooter>
      </Card>
  );
}

export default PostCard;