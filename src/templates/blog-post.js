import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import Layout from '../components/layout'
import SmallPost from '../components/small-post'
// import FontSize from '../components/font-size'
import Tag from '../components/tag'

// TODO: show similar posts or not if there are not any

const PostHeader = styled.div `
  max-width: 850px;
  margin: 4rem auto;

  h1 {
    font-size: 4rem;
    margin: 1rem auto;
  }

  h2 {
    font-family: 'Questrial', sans-serif;
    font-weight: normal;
    color: #555;
  }

  h4 {
    color: #888;
  }

  @media only screen and (max-width: 750px) {
    margin: 4rem auto;
    
    h1 {font-size: 3rem;}
  }
`

const FeatureImageWrapper = styled.div `
  position: relative;
  max-width: 1200px;
  padding: 1rem;
  margin: 4rem auto;
`

const PostContainer = styled.div `
  max-width: 850px;
  margin: 2rem auto;
  background: #fff;
  border-radius: 5px;
  /* padding: 2rem 2.5rem; */

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
      font-size: 120%;
      font-family: 'Work Sans', sans-serif;
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

const blogPost = ({ data }) => {

  const featuredImage = data.markdownRemark.frontmatter.featuredImage.childImageSharp.fluid;
  const { title, subtitle, author, date, tags } = data.markdownRemark.frontmatter;

  return (
    <Layout>
      <FeatureImageWrapper>
        <Img style={{zIndex: -2,}} fluid={featuredImage} />
      </FeatureImageWrapper>
      <PostHeader>
        <h4>{date}</h4>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        {/* {tags.map(tag => (
          <Tag key={tag} tag={tag} />
        ))} */}
      </PostHeader>
      <PostContainer>
        {/* <FontSize /> */}
        <article dangerouslySetInnerHTML={{__html: data.markdownRemark.html}}/>
        <hr />
        <MorePosts>
          <h3 to='/'>Now Read This</h3>
          <MorePostsWrapper>
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <SmallPost key={node.frontmatter.title} node={ node }/>
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
      subtitle
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