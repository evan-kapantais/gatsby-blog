import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'
import PostCard from '../components/post-card'

import '../stylesheets/globals.scss'

// TODO: configure tag pages in gatsby-node
// TODO: replace Markdown with MDX

const Container = styled.div `

  header {
    text-align: center;
    margin: 10rem auto;

    h1 {
      text-transform: uppercase;
      margin-bottom: 0.5rem;
    }

    div {
      margin: 2rem;
      display: flex;
      justify-content: center;

      a {
        margin-right: 1rem;
        width: 24px;
        height: 24px;
        display: block;
        position: relative;

        &:last-child {margin: 0;}

        &::after {
          content: '';
          position: absolute;
          bottom: -15px;
          left: 0;
          height: 3px;
          width: 100%;
          background: #333;
          opacity: 0;
          box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);
          transition: all 400ms ease;
        }

        &:hover::after {
          bottom: -8px;
          opacity: 1;
        }

        img {
          margin: 0;
          position: absolute;
          top: 0;
          left: 0;
        }
      }
    }
  }
`

const BlogWrapper = styled.div `
  max-width: 700px;
  margin: 2rem auto;

  hr:last-child {
    display: none;
  }
`

const IndexPage = ({ data }) => {

  return (
    <Layout notitle>
      <SEO title='Home' />
      <Container>
        <header>
          <h1> {data.site.siteMetadata.title} </h1>
          <p> {data.site.siteMetadata.description} </p>
          <div>
            <a href="https://twitter.com/evankapantais"><img src={require('../images/twitter.png')} alt=''/></a>
            <a href="https://www.instagram.com/evan_kapantais/"><img src={require('../images/instagram.png')} alt=''/></a>
            <a href="https://github.com/evan-kapantais"><img src={require('../images/github.png')} alt=''/></a>
          </div>
        </header>
        <BlogWrapper>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <>
              <PostCard node={node} />
              <hr />
            </>
          ))}
        </BlogWrapper>
      </Container>
    </Layout>
  );
}

export const postsQuery = graphql`
{
  site {
    siteMetadata {
      title
      description
      author
    }
  }
  allMarkdownRemark (sort: {fields: frontmatter___date, order: DESC}) {
    totalCount
    edges {
      node {
        excerpt (pruneLength: 600, format: HTML)
        timeToRead
        html
        fields {
          slug
        }
        frontmatter{
          title
          subtitle
          date (formatString: "D MMMM YYYY")
          author
          tags
          featuredImage {
            childImageSharp {
              fluid (maxWidth: 1000, maxHeight: 600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
    totalCount
  }
}
`

export default IndexPage;