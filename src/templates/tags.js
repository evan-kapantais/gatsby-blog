import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import Seo from '../components/seo'
import PostCard from '../components/post-card'
import HamburgerMenu from '../components/hamburger'

// TODO: add an image header
// TODO: responsive
// TODO: add hamburger
// TODO: add more-tags list

const Container = styled.div `
  display: grid;
  grid-template-columns: 2fr 5fr;
  margin: 10rem auto;
  padding: 0 2rem;

  section:first-child {
    position: relative;    
    border-right: 1px solid;

    h3 {
      position: sticky;
      top: 2rem;
      margin-top: 1rem;
      line-height: 1.5;
      text-transform: capitalize;

      a {
        color: rgb(3, 159, 255);

        &:hover {text-decoration: underline;}
      }
    }
  }

  @media (max-width: 900px) {
    display: block;
    max-width: 700px;

    section:first-child {
      border: none;

      h3 {
        margin-left: 1rem;

        br {display: none;}
      }
    }
  }
`

const Posts = styled.div `
  max-width: 700px;
  margin: 0 auto 0 4rem;
  justify-content: center;

  article:first-child {margin-top: 0;}

  /* div:last-child hr {display: none;} */

  @media (max-width: 900px) {
    margin: 0 auto;
  }
`

const AllTags = styled.div `
  grid-column: 2 / 3;
  margin-left: 5rem;

  a {
    color: rgb(3, 159, 255);

    &:hover {text-decoration: underline;}
  }

  @media (max-width: 900px) {margin-left: 1rem;}
`

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext;
  const { edges, totalCount } = data.allMarkdownRemark;
  // const tagHeader = `${totalCount} post${totalCount === 1 ? "" : "s"} tagged with "${tag}"`;

  return (
    <Layout>
      <Seo title='Tags' />
      <HamburgerMenu />
      <Container>
        <section>
          <h3><Link to={`/tags/${tag}`}>#{tag}</Link></h3>
        </section>
        <Posts>
          {edges.map(({ node }) => (
            <div>
              <PostCard node={ node } />
              <hr/>
            </div>
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
          excerpt (pruneLength: 600, format: HTML)
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