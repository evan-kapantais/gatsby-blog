import React from 'react'
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'
import PostCard from '../components/post-card'
import SocialContainer from '../components/social'

// TODO: optimise SEO
// TODO: image attributions
// TODO: page metadata with React Helmet
// TODO: configure page logo 64x64 and 32x32 (for apps)
// TODO: check mailto link on a mac (works on windows and iphone)
// TODO: add tag sort method at homepage and display tags below if sorted like so
// TODO: query all images
// TODO: replace Markdown with MDX
// TODO: check duplicate transformer-remark plugin
// TODO: configure a newsletter
// TODO: split posts in more pages
// TODO: rss feed?
// TODO: add dark mode

const Container = styled.div `
  margin: 10rem auto;

  header {
    text-align: center;
    max-width: 700px;
    margin: 4rem auto;
    position: relative;

    h1 {
      text-transform: uppercase;
      margin-bottom: 0.5rem;
    }

    p {margin: 0.5rem;}

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
    <Layout noheader>
      <SEO title='Home' />
      <Container>
        <header>
          <h1>{data.site.siteMetadata.title}</h1>
          <p>{data.site.siteMetadata.subtitle}</p>
          <p>{data.site.siteMetadata.description}</p>
          <Link to='/about'>About</Link>
          <Link to='/contact'>Contact</Link>
          {/* <SocialContainer /> */}
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
      subtitle
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