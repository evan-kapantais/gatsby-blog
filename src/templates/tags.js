import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import Seo from '../components/seo'
import SideCard from '../components/side-card'

// TODO: add an image header

const Container = styled.div `
  max-width: 1200px;
  margin: 4rem auto;

  h1 {
    text-transform: capitalize;
  }
`

const Posts = styled.div `
  margin: 2rem 0;
`

const AllTags = styled.div `
  a {
    color: rgb(3, 159, 255);

    &:hover {
      text-decoration: underline;
    }
  }
`

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext;
  const { edges, totalCount } = data.allMarkdownRemark;
  // const tagHeader = `${totalCount} post${totalCount === 1 ? "" : "s"} tagged with "${tag}"`;

  return (
    <Layout>
      <Seo title='Tags' />
      <Container>
        <h1>#{tag}</h1>
        <Posts>
          {edges.map(({ node }) => (
            <SideCard node={ node } />
          ))}
        </Posts>
        <AllTags>
          <Link to="/tags">All Tags</Link>
        </AllTags>
      </Container>
    </Layout>
  )
}

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          timeToRead
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            subtitle
            author
            date (formatString: "D MMMM YYYY")
            tags
            featuredImage {
              childImageSharp {
                fluid (maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`