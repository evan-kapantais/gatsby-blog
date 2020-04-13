import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import PostCard from '../components/post-card'

import heroImg from '../images/cristina-gottardi-4L-AyDJM-yM-unsplash.jpg'

// TODO: add search
// TODO: optimise SEO
// TODO: image attributions
// TODO: page metadata with React Helmet
// TODO: configure page logo 64x64 and 32x32 (for apps)
// TODO: check mailto link on a mac (works on windows and iphone)
// TODO: add tag sort method at homepage and display tags below if sorted like so
// TODO: query all images
// TODO: replace Markdown with MDX
// TODO: configure a newsletter
// TODO: split posts in more pages
// TODO: rss feed?

const Container = styled.div `

  & > header {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: url(${heroImg}) no-repeat 50% 40% / cover;
    height: 100vh;
    margin: 0 auto;
    text-align: center;
    color: #fff;
    box-shadow: inset 0 -200px 200px #eee;
    /* filter: invert(); */
    user-select: none;

    h1,
    p {
      mix-blend-mode: difference;
    }
    
    h1 {
      font-size: 5rem;
    }
  }
`

const BlogWrapper = styled.div `
  max-width: 650px;
  margin: 2rem auto;

  div:last-child hr {display: none;}
`

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Container>
        <header>
          <h1>{data.site.siteMetadata.title}</h1>
          <p>A blog by Evan Kapantais</p>
        </header>
        <BlogWrapper>
            {data.allMarkdownRemark.edges.map(({ node }) => (
            <PostCard node={node} key={node.frontmatter.title}/>
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