import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

// TODO: responsive

const Card = styled.div `

  transition: all 300ms ease;

  &:hover {
    transform: translateY(-0.3rem);
  }
  a {
    margin: 4rem 0;
    display: flex;
  }
`

const ImageWrapper = styled.div `
  flex: 2;
`

const Content = styled.div `
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 2rem;

  header {

    * {
      margin: 0;
    }

    h2 {
      font-size: 2rem; 
      margin-bottom: 0.7rem;

      @media (max-width: 1215px) {
        font-size: 1.7rem;
      }
    }

    h4 {
      color: #666;
      font-weight: normal;
      font-family: 'Raleway', sans-serif;
    }
  }

  p { line-height: 1.75; }

  footer {
  display: flex;
  justify-content: space-between;
  align-items: center;

  * { margin: 0; }

  a { 
    display: inline;
    font-size: .8rem;
    font-weight: 600;
    color: rgb(3, 159, 255);
    margin: 0;
    margin-right: .5rem;
    text-transform: capitalize;

    &:last-child { margin-right: 0; }

    &:hover { text-decoration: underline; }
  }

    h6 { color: #666; }
  }
`

const SideCard = ({ node }) => {

  const { title, date, tags } = node.frontmatter;
  const { excerpt, timeToRead } = node;
  const featuredImage = node.frontmatter.featuredImage.childImageSharp.fluid;
  const { slug } = node.fields;

  return (
    <Card>
      <Link to={`/${slug}`}>
        <ImageWrapper>
          <Img fluid={featuredImage} />
        </ImageWrapper>
        <Content>
          <header>
            <h2>{title}</h2>
            <h4>{date}</h4>
          </header>
          <p>{excerpt}</p>
          <footer>
            <div>
              {tags.map(tag => (
              <Link to={`/tags/${tag}`}># {tag} </Link>
              ))}
            </div>
              <h6>{timeToRead} Minute Read</h6>
          </footer>
        </Content>
      </Link>
    </Card>
  );
}

export default SideCard;