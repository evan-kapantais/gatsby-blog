import React from 'react'
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/seo'
import PostCard from '../components/post-card'

import '../stylesheets/globals.scss'

// TODO: adjust grid depending on article count

const IndexPage = ({ data }) => {

  const BlogWrapper = styled.div `
    padding: 4rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 4rem;

    // The entire first post card
    a:first-of-type {
      grid-column: 1 / -1;
      display: flex;
      align-items: center;

      &:hover div:nth-child(2) {
        transform: translate(-4.5rem, -1rem);
        /* box-shadow: none; */
      }

      &:hover div:first-of-type {
        transform: translateX(10px);
      }

      // Image wrapper
      div:first-of-type {
        flex: 4;
        transition: 500ms ease;
      }

      // Post card content
      div:nth-child(2) {
        background-color: rgba(255, 255, 255, 1);
        background-color: lightskyblue;
        box-shadow: 0 0 20px 2px rgba(0, 0, 0, .3);
        flex: 3;
        padding: 4rem;
        transform: translate(-4rem, -1rem);
        transition: 500ms;
        z-index: 999;

        h1 {
          font-size: 5rem;
          margin-bottom: 2rem;
        }

        h3 {
          max-width: 80%;
          font-size: 2rem;
          line-height: 2.5rem;
        }

        h4 {
          margin: 0;
          text-transform: uppercase;
        }

        div {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
      }
    }
  `

  return (
    <Layout>
      <SEO title='Home' />
      <BlogWrapper>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Link to={`/blog/${node.fields.slug}`}>
            <div>
              <Img fluid={node.frontmatter.featuredImage.childImageSharp.fluid} />
            </div>
            <div>
              {node.frontmatter.tags.map(tag => (
                <h4>#{tag}</h4>
              ))}
              <h1>{node.frontmatter.title}</h1>
              <h3>{node.frontmatter.subtitle}</h3>
              <div>
                <h5>{node.frontmatter.date}</h5>
                <h5>{node.timeToRead} Minute Read</h5>
              </div>
            </div>
          </Link>
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
        excerpt
        timeToRead
        fields {
          slug
        }
        frontmatter{
          title
          subtitle
          date (formatString: "DD-MM-YYYY")
          author
          tags
          featuredImage {
            childImageSharp {
              fluid (maxWidth: 800, maxHeight: 500) {
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