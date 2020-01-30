import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import Seo from '../components/seo'
import PostCard from '../components/post-card'
import Tag from '../components/tag'

const Container = styled.div `
  display: grid;
  grid-template-columns: 2fr 5fr;
  margin: 5rem auto;
  padding: 0 2rem;

  @media (max-width: 900px) {
    display: block;
    max-width: 700px;
  }
`

const Header = styled.section `
  position: relative;    
  border-right: 1px solid;

  & > div {
    position: sticky;
    top: 2rem;

    header {

      h3 {
        margin: 0;
        line-height: 1.5;

        a {
          color: rgb(3, 159, 255);

          &:hover {text-decoration: underline;}
        }
      }
    }
  }

  @media (max-width: 900px) {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    border: none;
    margin-bottom: 2rem;
    border-bottom: 1px solid lightgrey;

    & > div {
        width: 100%;
        padding-left: 1rem;
        display: flex;
        justify-content: space-between;
  
        br {display: none;}
      }
  }
`

const Posts = styled.section `
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
  padding: 0;
  p {margin-bottom: 0.5rem;}

  div {
    max-width: 300px;

    a {
      margin: 0 0.5rem 0.5rem 0;
      display: inline-block;
      transition: all 300ms ease;

      &:last-child {margin-right: 0;}
    
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
        <Header>
          <div>
            <header>
              <h3><Link to={`/tags/${tag}`}>#{tag}</Link></h3>
              <p>{totalCount} posts found</p>
            </header>
            <MoreTags>
              <p>More Tags</p>
              <div>
                {data.allTags.group.map(({ tag }) => (
                  <Tag key={tag} tag={tag} />
                ))}
              </div>
            </MoreTags>
          </div>
        </Header>
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