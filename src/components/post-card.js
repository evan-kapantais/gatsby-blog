import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

const Card = styled.article `
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  overflow: hidden;
  transition: transform 300ms ease;
  background: #fff;
  min-height: 300px;

  &:hover {
    transform: translateY(-5px);
  }
`

const ImageWrapper = styled.div `
  flex: 2;
`

const CardContent = styled.div `
  padding: 1rem;
  min-height: 280px;
  position: relative;
  flex: 1;

  h1 {
    font-size: 1.2rem;
    }

  p {
    font-size: .8rem;
    line-height: 1.2rem;
  }
` 

const Tag = styled.h5 `
  display: inline-block;
  margin-right: 10px;
  text-transform: uppercase;
  font-size: 12px;
  margin-bottom: 1rem;
  color: rgb(3, 159, 255);
`

const CardFooter = styled.div `
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  right: 1rem;

  h5 {
    margin: 0;
    font-size: .7rem;
    color: #555;
  }
`

const PostCard = ({ node }) => {

  const { title, date, tags } = node.frontmatter;
  const { excerpt, timeToRead } = node;
  const featuredImage = node.frontmatter.featuredImage.childImageSharp.fluid;
  const { slug } = node.fields;

  console.log(tags);

  return (
    <Link to={`/blog/${slug}`}>
      <Card>
        <ImageWrapper>
          <Img fluid={featuredImage} />
        </ImageWrapper>
        <CardContent>
          <div>
            {tags.map(tag => (
              <Tag>#{tag}</Tag>
            ))}
            <h1>{title}</h1>
          </div>
          <div>
            <p>{excerpt}</p>
          </div>
          <CardFooter>
            <h5>{date}</h5>
            <h5>{timeToRead} MIN READ</h5>
          </CardFooter>
        </CardContent>
      </Card>
    </Link>
  );
}

export default PostCard;