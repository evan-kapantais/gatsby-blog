import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'
import PostCard from '../components/post-card'
import SocialContainer from '../components/social'

// TODO: make header logo component
// TODO: add social to side panel
// TODO: unify styles (color and background)
// TODO: add tag sort method at homepage and display tags below if sorted like so
// TODO: query all images
// TODO: replace Markdown with MDX
// TODO: check duplicate transformer-remark plugin
// TODO: configure a newsletter
// TODO: typography
// TODO: header: remove margins
// TODO: even out general margins
// TODO: split posts in more pages
// TODO: rss feed?
// TODO: add dark mode

const Logo = styled.div `
  margin: 0;

  img {
    display: block;
    width: 100px;
    height: 100px;
    margin: 0;
  }
`

const Container = styled.div `

  header {
    text-align: center;
    position: relative;
    margin: 5rem auto 10rem auto;


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

  div:last-child hr {display: none;}
`

const IndexPage = ({ data }) => {
  return (
    <Layout notitle='true'>
      <SEO title='Home' />
      <Container>
        <header>
          <Logo>
            <img src={require('../images/noose.png')} alt=""/>
          </Logo>
          <h1> {data.site.siteMetadata.title} </h1>
          <p> {data.site.siteMetadata.description} </p>
          <SocialContainer />
        </header>
        <BlogWrapper>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <div key={node.frontmatter.title}>
              <PostCard node={node} />
              <hr />
            </div>
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
              fluid (maxWidth: 700, maxHeight: 350) {
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