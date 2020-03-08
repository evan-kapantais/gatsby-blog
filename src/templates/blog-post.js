import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import Layout from '../components/layout'
import Tag from '../components/tag'
import NavLink from '../components/nav-link'
import SideCard from '../components/side-card'

// TODO: show similar posts or not if there are not any
// TODO: query featured image data
// TODO: responsive

const SBlogPost = styled.div `
  aside {
    position: fixed;
    height: 100%;
    padding: 0 2rem;
    max-width: 40%;
    color: #fff;
    background-color: #222333;

    nav {
      padding: 2rem 0;
    }

    main {
      margin-top: 4rem;
    }

    & main > div:first-child {
      margin: 4rem auto;
    }

    h1 {
      font-size: 3rem;
      margin: 2rem auto 1rem auto;
      color: #fff;
    }

    h2 {
      font-family: 'Questrial', sans-serif;
      margin: 1rem auto 2rem auto; 
      font-weight: normal;
      color: #ddd;
    }

    footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      
      h4 {
        color: #ddd;
        margin: 0;  
      }
    }

    @media only screen and (max-width: 750px) {
      margin: 4rem auto;
      
      h1 {font-size: 3rem;}
    }
  }

  section {
    margin-left: 40%;
  }
`

const PostContainer = styled.div `
  margin: 4rem auto;
  max-width: 1000px;
  padding: 0 10%;

  @media(max-width: 1000px) {margin: 0 auto 4rem auto;}

  @media (max-width: 700px) {padding: 2.5rem 1rem;}
  
  article {
    line-height: 2rem;
    font-family: inherit;
    font-weight: 400;
    font-size: 1.1rem;

    a {
      color: rgb(3, 159, 255);

      &:hover {text-decoration: underline;}
    }

    p {margin-bottom: 1rem;}

    h2 {
      font-size: 2rem;
      margin: 3rem 0 1rem 0;
    }

    h3 {
      margin: 2rem auto 1rem auto;
      font-family: inherit;
    }

    h4 {
      font-weight: 300;
      margin-bottom: 1rem;
    }

    blockquote {
      border-left: 5px solid #333;
      padding-left: 20px;
      margin: 2rem auto;
    }
  }

  & > footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 2rem 0;

    p {
      margin: 0;
    }
  }

  hr {margin: 2rem auto;}
`

const MorePosts = styled.div`
  & > h3 {margin-bottom: 4rem;}
`

const MorePostsWrapper = styled.div`

  @media only screen and (max-width: 822px) {
    max-width: 500px;
    margin: 0 auto;
  }
`

const blogPost = ({ data }) => {

  const featuredImage = data.markdownRemark.frontmatter.featuredImage.childImageSharp.fluid;
  const { title, subtitle, author, date, tags, featuredImageSource, featuredImageCaption } = data.markdownRemark.frontmatter;

  return (
    <SBlogPost>
      <Layout>
        <aside>
          <nav>
            <NavLink to='/' text='Blog'/>
            <NavLink to='/about' text='About'/>
            <NavLink to='/contact' text='Contact'/>
          </nav>
          <main>
            <Img fluid={featuredImage}/>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <footer>
            <h4>{date}</h4>
            <div>
              {tags.map(tag => (
                <Tag key={tag} tag={tag} />
              ))}
            </div>
            </footer>
          </main>
        </aside>
        <section>
          <PostContainer>
            <article dangerouslySetInnerHTML={{__html: data.markdownRemark.html}}/>
            <hr />
            <MorePosts>
              <h3 to='/'>Now Read This</h3>
              <MorePostsWrapper>
                {data.allMarkdownRemark.edges.map(({ node }) => (
                  <SideCard key={node.frontmatter.title} node={ node }/>
                ))}
              </MorePostsWrapper>
            </MorePosts>
          </PostContainer>
        </section>
      </Layout>
    </SBlogPost>
  );
}

export const query = graphql`
query ($slug: String!) {
  markdownRemark (fields: { slug: { eq: $slug } }) {
    html
    timeToRead
    fields {
      slug
    }
    frontmatter {
      title
      subtitle
      author
      date (formatString: "DD MMMM YYYY")
      tags
      featuredImageSource
      featuredImageCaption
      featuredImage {
        childImageSharp {
          fluid(maxWidth: 850, maxHeight: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
  allMarkdownRemark (limit: 4, sort: {fields: frontmatter___date, order: DESC}, filter: {fields: {slug: {ne: $slug}}}) {
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
          subtitle
          date (formatString: "D MMMM YYYY")
          tags
          featuredImage {
            childImageSharp {
              fluid (maxWidth: 500) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
}
`

export default blogPost;