import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'

const Card = styled.div`
  transition: all 300ms ease;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  position: relative;

  &:hover { transform: translateY(-5px); }

  * {
    margin: 0;
    padding: 0;
  }
`

const Content = styled.div`
  padding: 1rem;
  
  header {
    min-height: 5rem;

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
    color: #666;
    font-weight: bold;
  
    h5 {
      font-size: 0.8rem;
      text-transform: capitalize;
    }

    div a {
      color: rgb(3, 159, 255);
      font-size: 0.8rem;
      margin-right: 0.5rem;

      &:last-child {margin: 0;}
      
      &:hover {text-decoration: underline;}
    }
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
          <h5>{node.frontmatter.date}</h5>
        </header>
        <p>{node.excerpt}</p>
        </Link>
        <footer>
          <div>
            {node.frontmatter.tags.map(tag => (
              <Link key={tag} to={`/tags/${tag}`}>#{tag} </Link>
            ))}
          </div>
          <h5>{node.timeToRead} Min Read</h5>
        </footer>
      </Content>
    </Card>
  );
}

export default SmallPost;