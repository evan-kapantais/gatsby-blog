import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import Seo from '../components/seo'
import PostCard from '../components/post-card'
import Tag from '../components/tag'

// TODO: add more-tags list

const Container = styled.div `
  display: grid;
  grid-template-columns: 2fr 5fr;
  margin: 5rem auto;
  padding: 0 2rem;

  section:first-child {
    position: relative;    
    border-right: 1px solid;

    div {
      position: sticky;
      top: 2rem;

      h3 {
        margin: 0;
        line-height: 1.5;
        text-transform: capitalize;
  
        a {
          color: rgb(3, 159, 255);
  
          &:hover {text-decoration: underline;}
        }
      }
    }
  }

  @media (max-width: 900px) {
    display: block;
    max-width: 700px;

    section:first-child {
      border: none;

      div {
        padding-left: 1rem;
  
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

  div:last-child hr {display: none;}

  @media (max-width: 900px) {
    margin: 0 auto;
  }
`

const MoreTags = styled.div`
  p {margin-bottom: 0.5rem;}

  div {
    max-width: 300px;

    a {
      margin: .2rem;
      display: inline-block;
      transition: all 300ms ease;
    
      &:hover {
        transform: scale(1.05);
      }
    }
  }
`

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext;
  const { edges, totalCount } = data.taggedBooks;

  return (
    <Layout>
      <Seo title='Tags' />
      <Container>
        <section>
          <div>
            <h3><Link to={`/tags/${tag}`}>#{tag}</Link></h3>
            <p>{totalCount} posts found</p>
            <MoreTags>
              <p>More Tags</p>
              <div>
                {data.allTags.group.map(({ tag }) => (
                  <Tag tag={tag} />
                ))}
              </div>
            </MoreTags>
          </div>
        </section>
        <Posts>
          {edges.map(({ node }) => (
            <div>
              <PostCard node={ node } />
              <hr/>
            </div>
          ))}
        </Posts>
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
    taggedBooks: allMarkdownRemark(
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
    allTags: allMarkdownRemark {
      group(field: frontmatter___tags) {
        tag: fieldValue
        totalCount
      }
    }
  }
`