import React from 'react'
import { graphql } from 'gatsby'
import styled, { keyframes } from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'
import PostCard from '../components/post-card'

import '../stylesheets/globals.scss'

const IndexPage = ({ data }) => {

  const BlogWrapper = styled.div `
    max-width: 800px;
    margin: 2rem auto 2rem auto;
    gap: 2rem;
  `

  return (
    <Layout title='Home' position='absolute' color='white'>
      <SEO title='Home' />
      <BlogWrapper>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <>
            <PostCard node={node} />
            <hr />
          </>
        ))}
      </BlogWrapper>
    </Layout>
  )
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
        excerpt (pruneLength: 600)
        timeToRead
        fields {
          slug
        }
        frontmatter{
          title
          date (formatString: "DD-MM-YYYY")
          author
          tags
          featuredImage {
            childImageSharp {
              fluid (maxWidth: 1000, maxHeight: 400) {
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