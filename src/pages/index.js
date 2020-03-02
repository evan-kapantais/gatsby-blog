import React from 'react'
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'
import PostCard from '../components/post-card'
import Footer from '../components/footer'
import SocialContainer from '../components/social'
import NavLink from '../components/nav-link'

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
  display: flex;

  section:first-child {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: fixed;
    top: 0;
    left: 0;
    padding: 0 6rem;
    background:  #222333 url('https://source.unsplash.com/collection/1976082/1600x900') no-repeat center / cover;
    color: #fff;
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

    div {
      mix-blend-mode: difference;

      h1 {
        text-transform: uppercase;
        margin-bottom: 1rem;
      }
  
      p {margin: 0.5rem;}
    }
  }

  section:last-child {
    margin-left: 509.75px;
    width: 100%;
  }
`

const BlogWrapper = styled.div `
  padding: 0 15%;

  div:last-child hr {display: none;}
`

const IndexPage = ({ data }) => {
  return (
    <Container>
      <SEO title='Home' />
        <section>
          <nav>
            <NavLink to='/' text='Blog' />
            <NavLink to='/about' text='About' />
            <NavLink to='/contact' text='Contact' />
          </nav>
          <div>
            <h1>{data.site.siteMetadata.title}</h1>
            <p>{data.site.siteMetadata.subtitle}</p>
            <p>{data.site.siteMetadata.description}</p>
          </div>
          {/* <SocialContainer /> */}
        </section>
        <section>
          <BlogWrapper>
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <PostCard key={node.frontmatter.title} node={node} />
            ))}
          </BlogWrapper>
          <Footer />
        </section>
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