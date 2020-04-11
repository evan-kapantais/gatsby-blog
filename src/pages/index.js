import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'
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
// TODO: add dark mode

const Container = styled.div `

  header {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: url(${heroImg}) no-repeat 50% 20% / cover;
    background-attachment: fixed;
    height: 100vh;
    text-align: center;
    margin: 0 auto;
    user-select: none;
    
    &::after {
      content: '';
      position: absolute;
      bottom: 2rem;
      left: 50%;
      width: 12px;
      height: 12px;
      border-bottom: 2px solid #222333;
      border-right: 2px solid #222333;
      transform: rotate(45deg);
    }
    
    h1 {
      mix-blend-mode: difference;
      color: #fff;
      position: relative;
      margin: 0;
      padding: 0;
      font-size: 4rem;
    }

    img {
      width: 64px;
      height: 64px;
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
    <Layout noheader padding='0'>
      <SEO title='Home' />
      <Container>
        <header>
          <img src={require('../images/icons/bonfire.png')} alt=""/>
          <h1>THE BONFIRE</h1>
          <p>A blog by Evan Kapantais</p>
        </header>
        <BlogWrapper>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <div key={node.frontmatter.title}>
              <PostCard node={node} />
              {/* <hr /> */}
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