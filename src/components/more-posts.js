import React from 'react'
import {graphql, StaticQuery} from 'gatsby'
import styled from 'styled-components'

import PostCard from './post-card'

// TODO: exclude identical posts

const MorePostsContainer = styled.div `
  display: flex;
  justify-content: space-between;
  
  a:first-child {
    margin-right: 1rem;
  }
`

const MorePosts = () => (
  <StaticQuery
  query={graphql`
    query Query {
      allMarkdownRemark (limit: 2, sort: {fields: frontmatter___date, order: DESC}) {
        edges {
          node {
            html
            excerpt
            timeToRead
            fields {
              slug
            }
            frontmatter {
              title
              date
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
  `}
  render={data => (
    <MorePostsContainer>
      {data.allMarkdownRemark.edges.map(({node}) => (
        <PostCard node={node} />
      ))}
    </MorePostsContainer>
  )}
  />
);

export default MorePosts;