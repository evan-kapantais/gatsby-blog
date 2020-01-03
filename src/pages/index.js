import React from 'react'
import { graphql } from 'gatsby'
import styled, { keyframes } from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'
import PostCard from '../components/post-card'

import heroImg from '../images/zach-lezniewicz-o8cMgOUB-Z0-unsplash.jpg'
import '../stylesheets/globals.scss'

// TODO: rework grid
// TODO: scss in styled components
// TODO: adjust grid dependng on article count

const styles = {
  circleWidth: '420px',
}

const Hero = styled.div `
  height: 80vh;
  background: #111 url(${heroImg}) no-repeat center/cover;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  box-shadow: inset 0 10px 100px 100px rgba(0, 0, 0, .2);
  
  * {margin: 0;}
  `

const HeroContainer = styled.div `
  text-align: center;
  mix-blend-mode: difference;
  position: relative;
  user-select: none;
  
  h1 {
    font-size: 4rem;
    letter-spacing: 6px;
    text-transform: uppercase;
    margin-bottom: 1rem;
    position: relative;
  }

  small {
    font-weight: 600;
    text-transform: uppercase;
  }

  h4 {
    font-size: 2rem;
    font-weight: 200;
    letter-spacing: 4px;
  }
`

const spin = keyframes `
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const Circle = styled.div `
  border-style: dashed solid dashed solid;
  border-width: 2px;
  width: ${styles.circleWidth};
  height: ${styles.circleWidth};
  position: absolute;
  border-radius: 50%;
  mix-blend-mode: overlay;
  background: rgba(0, 0, 0, .3);
  animation: ${spin} 80s linear forwards infinite;
`

const IndexPage = ({ data }) => {

  const BlogWrapper = styled.div `
    max-width: 1000px;
    margin: -50px auto 2rem auto;
    display: grid;
    grid-template-columns: ${data.allMarkdownRemark.totalCount % 3 === 0 ? `repeat(3, 1fr)` : `repeat(2, 1fr)`};
    gap: 2rem;
  `

  return (
    <Layout title='Home' position='absolute'>
      <SEO title='Home' />
      <Hero>
        <Circle />
        <HeroContainer>
          <h1>{data.site.siteMetadata.title}</h1>
          <small>A Blog By</small>
          <h4>{data.site.siteMetadata.author}</h4>
        </HeroContainer>
      </Hero>
      <BlogWrapper>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <PostCard node={node} />
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