import React from 'react'
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'
import PostCard from '../components/post-card'
import Footer from '../components/footer'
import NavLink from '../components/nav-link'

// TODO: new layout
// TODO: grid view toggle
// TODO: optimise SEO
// TODO: image attributions
// TODO: page metadata with React Helmet
// TODO: configure page logo 64x64 and 32x32 (for apps)
// TODO: check mailto link on a mac (works on windows and iphone)
// TODO: add tag sort method at homepage and display tags below if sorted like so
// TODO: rework tags page
// TODO: query all images
// TODO: replace Markdown with MDX
// TODO: check duplicate transformer-remark plugin
// TODO: configure a newsletter
// TODO: split posts in more pages
// TODO: rss feed?
// TODO: add dark mode

const Container = styled.div `

  & > header {
    text-align: center;
    background:  #222333 url('https://source.unsplash.com/collection/1976082/1600x900') no-repeat center / cover;
    background-blend-mode: overlay;
    
    nav {
      position: absolute;
      top: 2rem;
      left: 2rem;

      * {
        margin-right: 1rem;
        mix-blend-mode: difference;
      }

      a:last-child {margin: 0;}
    }

    p {margin: 0.5rem;}
  }

  section {
    margin-left: 40%;

    h1 {margin: 2rem 0;}
  }
`

const BlogWrapper = styled.div `
  max-width: 600px;
  margin: 4rem auto;
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
        </header>
        <BlogWrapper>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <div key={node.frontmatter.title}>
              <PostCard node={node} />
            </div>
          </aside>
          <section>
            <h1 style={{textAlign: `center`}}>Blog</h1>
            <BlogWrapper>
              {data.allMarkdownRemark.edges.map(({ node }) => (
                <PostCard key={node.frontmatter.title} node={node} />
              ))}
            </BlogWrapper>
            <Footer />
          </section>
        </Layout>
      </Container>
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