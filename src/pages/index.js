import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'
import PostCard from '../components/post-card'

import '../stylesheets/globals.scss'

// TODO: configure tag pages in gatsby-node
// TODO: replace Markdown with MDX
// TODO: try a side card version
// TODO: add categories in header || add a browse by topic list
// TODO: add contact page

const BlogWrapper = styled.div `
  max-width: 800px;
  margin: 2rem auto;
  gap: 2rem;
`

const IndexPage = ({ data }) => {

  return (
    <Layout>
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
        excerpt (pruneLength: 400)
        timeToRead
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