import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

const Card = styled.article `
  margin: 4rem 0;
  padding: 1rem;
`

const CardHeader = styled.div `
  display: flex;
  align-items: flex-end;

  * {
    margin: 0;
  }

  div { 
    flex: 6;

    h2 {
      font-size: 2rem; 
    }
  }

  h4 {
    flex: 3;
    color: #666;
    text-align: right;
    font-weight: normal;
    font-family: 'Raleway', sans-serif;
  }

  @media only screen and (max-width: 590px) {
    display: block;
    text-align: center;

    div {
      margin-bottom: 0.5rem;
    }

    h4 {
      text-align: center;
    }
  }
`

const CardContent = styled.div`
  p { line-height: 1.75; }

  @media only screen and (max-width: 590px) {
    text-align: justify;
  }
`

const ImageWrapper = styled.div `
  margin: 2rem 0;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
  transition: all 300ms ease;

  &:hover {
    box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.2);
    transform: scale(1.01);
  }
`

const CardFooter = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;

  * { margin: 0; }

  a { 
    font-size: .8rem;
    font-weight: 600;
    color: rgb(3, 159, 255);
    margin-right: .5rem;
    text-transform: capitalize;

    &:last-child { margin-right: 0; }

    &:hover { text-decoration: underline; }
   }

   h6 { color: #666; }
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
            <p>{excerpt}</p>
          </CardContent>
        </Link>
        <CardFooter>
          <div>
            {tags.map(tag => (
            <Link to={`/tags/${tag}`}>#{tag} </Link>
            ))}
          </div>
            <h6>{timeToRead} Minute Read</h6>
        </CardFooter>
      </Card>
  );
}

export default PostCard;