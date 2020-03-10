import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import Tag from './tag'

// TODO: responsive

const Card = styled.div `
  transition: all 300ms ease;

  &:hover {
    
  }

  a {
    margin: 4rem 0;
    display: flex;
  }
`

const ImageWrapper = styled.div `
  flex: 2;

  & > div {
    height: 100%;
  }

  /* @media (max-width: 1200px) {display: none;} */
`

const Content = styled.div `
  flex: 3;
  padding: 0 1rem;
  position: relative;

  header {
    min-height: 120px;
    margin-bottom: 2rem;

    * {margin: 0;}

    h2 {
      margin-bottom: 0.5rem;

      @media (max-width: 1215px) {
        font-size: 1.7rem;
      }
    }

    h3 {
      color: #777;
      font-size: 1rem;
    }
  }

  p {line-height: 1.75;}

  footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 1rem;
  right: 1rem;


  * { margin: 0; }

  div > * {
    display: inline-block;
  }

    h6 { color: #666; }
  }
`

const SideCard = ({ node }) => {

  const { title, subtitle, date, tags } = node.frontmatter;
  const { timeToRead } = node;
  const { slug } = node.fields;
  const featuredImage = node.frontmatter.featuredImage.childImageSharp.fluid;

  return (
    <Card>
      <Link to={`/${slug}`}>
        <ImageWrapper>
          <Img fluid={featuredImage} />
        </ImageWrapper>
        <Content>
          <header>
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
          </header>
          <footer>
            <div>
              {tags.map(tag => (
              <Tag tag={tag} />
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