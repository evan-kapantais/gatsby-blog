import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'

import Tag from './tag'

const Card = styled.div`
  transition: all 300ms ease;
  position: relative;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  overflow: hidden;

  &:hover { transform: translateY(-5px); }

  * {
    margin: 0;
  }
`

const Content = styled.div`
  padding: 1rem;
  
  header {
    min-height: 5rem;
    text-align: center;

    h3 {margin-bottom: 1rem;}

    h5 {
      color: #666;
      font-weight: normal;
    }
  }

  p {
    margin: 1rem 0;
    line-height: 1.5;
  }

  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 0;
  
    h5 {
      color: #666;
      font-size: 0.8rem;
      text-transform: capitalize;
    }

    div a {margin-right: 0.5rem;}
  }

`

const SmallPost = ({ node }) => {
  return (
    <Card>
      <Link to={`/${node.fields.slug}`}>
        <Img fluid={node.frontmatter.featuredImage.childImageSharp.fluid} />
      </Link>
      <Content>
        <Link to={`/${node.fields.slug}`}>
        <header>
          <h3>{node.frontmatter.title}</h3>
          {/* <h5>{node.frontmatter.date}</h5> */}
        </header>
        {/* <p>{node.excerpt}</p> */}
        </Link>
        <footer>
          <div>
            {node.frontmatter.tags.map(tag => (
              <Tag key={tag} tag={tag} />
            ))}
          </div>
          <h5>{node.timeToRead} Min Read</h5>
        </footer>
      </Content>
    </Card>
  );
}

export default SmallPost;