import React from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import Layout from '../components/layout'
import SmallPost from '../components/small-post'

// TODO: responsive more posts grid
// TODO: responsive
// TODO: rework more posts
// TODO: show similar posts or not if there are not any

const PostHeader = styled.div `
  max-width: 1200px;
  margin: 6rem auto 2rem auto;
  text-align: center;

  h5 {
    font-size: 1rem;
    color: #666;
    margin: 0;
  }

  h1 {
    font-size: 4rem;
    margin: 1rem auto;

  }

  @media only screen and (max-width: 750px) {
    margin: 4rem auto;
    
    h1 {
      font-size: 3rem;
    }
  }

  a {
    color: rgb(3, 159, 255);
    font-weight: bold;
    margin-right: 10px;
    text-transform: capitalize;

    &:hover {
      text-decoration: underline;
    }

    &:last-child { margin: 0; }

    &:hover {text-decoration: underline;}
  }
`

const FeatureImageWrapper = styled.div `
  max-width: 1200px;
  padding: 1rem;
  margin: 0 auto;
`

const PostContainer = styled.div `
  max-width: 850px;
  margin: -8rem auto 4rem auto;

  @media(max-width: 1000px) {
    margin: 0 auto 4rem auto;
  }

  article {
    line-height: 2rem;
    font-size: 1rem;
    background: #fff;
    padding: 2.5rem;
    border-radius: 5px;
    font-family: inherit;
    font-weight: 400;

    @media (max-width: 700px) {
      padding: 2.5rem 1rem;
    }

    a {
      color: rgb(3, 159, 255);

      &:hover { text-decoration: underline; }
    }

    p {margin-bottom: 1rem;}

    h2 {
      font-size: 2rem;
      margin-bottom: 3rem;
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
      font-style: italic;
      margin: 2rem auto;
    }
  }
`

const MorePosts = styled.div`
  padding: 1rem;

  h3 {margin-bottom: 4rem;}
`

const MorePostsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;

  @media only screen and (max-width: 822px) {
    max-width: 500px;
    margin: 0 auto;
  }
`

const Newsletter = styled.div`
  
`

const blogPost = ({ data }) => {

  const featuredImage = data.markdownRemark.frontmatter.featuredImage.childImageSharp.fluid;
  const { title, date, tags } = data.markdownRemark.frontmatter;

  return (
    <Layout>
      <PostHeader>
        <h5>{date}</h5>
        <h1>{title}</h1>
        {tags.map(tag => (
          <Link to={`/tags/${tag}`} key={tag}>#{tag}</Link>
        ))}
      </PostHeader>
      <FeatureImageWrapper>
        <Img style={{zIndex: -2,}}fluid={featuredImage} />
      </FeatureImageWrapper>
      <PostContainer>
        <article dangerouslySetInnerHTML={{__html: data.markdownRemark.html}}/>
        <hr />
        <Newsletter>

        </Newsletter>
        <MorePosts>
          <h3 to='/'>Now Read This</h3>
          <MorePostsWrapper>
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <SmallPost node={ node }/>
            ))}
          </MorePostsWrapper>
        </MorePosts>
      </PostContainer>
    </Layout>
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
      author
      date (formatString: "DD MMMM YYYY")
      tags
      featuredImage {
        childImageSharp {
          fluid(maxWidth: 1200, maxHeight: 600) {
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