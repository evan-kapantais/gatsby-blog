import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'

const Card = styled.div`
  transition: all 300ms ease;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  min-height: 550px;
  position: relative;

  &:hover { transform: translateY(-5px); }

  * {
    margin: 0;
    padding: 0;
  }

  h3 {
    margin-bottom: 1rem;
    min-height: 3rem;
  }

  p { margin: 2rem 0; }

  footer {
    display: flex;
    justify-content: space-between;
    color: #666;

    h5:first-child {
      text-transform: capitalize;
      color: rgb(3, 159, 255);
    }
  }
`

const Content = styled.div`
  padding: 1rem;
`

const SmallPost = ({ node }) => {
  return (
    <Link to={`/blog/${node.fields.slug}`}>
      <Card>
        <Img fluid={node.frontmatter.featuredImage.childImageSharp.fluid} />
        <Content>
          <h3>{node.frontmatter.title}</h3>
          <p>{node.excerpt}</p>
          <footer>
            <h5>{node.frontmatter.tags.length > 1 ? `#${node.frontmatter.tags[0]}, [...]` : `#${node.frontmatter.tags[0]}`}</h5>
            <h5>{node.frontmatter.date}</h5>
            <h5>{node.timeToRead} Min Read</h5>
          </footer>
        </Content>
      </Card>
    </Link>
  );
}

export default SmallPost;