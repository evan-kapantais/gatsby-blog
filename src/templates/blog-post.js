import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import MorePosts from '../components/more-posts'
import Img from 'gatsby-image'
import styled from 'styled-components'

// TODO: increase paragraph font size
// TODO: reduce article max-width

const PostContainer = styled.div `
  max-width: 800px;
  margin: 2rem auto;
  
  article {
    margin: 2rem auto;
    line-height: 2rem;
    font-size: 22px;
    font-family: Georgia, 'Times New Roman', Times, serif;

    blockquote {
      border-left: 5px solid #333;
      padding-left: 20px;
      font-style: italic;
      margin: 2rem auto;
    }
  }
`

const PostHeader = styled.div `
  margin-bottom: 2rem;
  text-align: center;

  h5 {
    color: rgb(3, 159, 255);
    margin-bottom: 1rem;
  }

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  h6 {
    color: grey;
    text-transform: uppercase;
    color: rgb(3, 159, 255);
    display: inline-block;
    margin-right: 10px
  }
`

const MorePostsWrapper = styled.div `

`

export const query = graphql`
  query ($slug: String!) {
    markdownRemark (fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
        date
        tags
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 1200, maxHeight: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      html
      timeToRead
    }
  }
`

  const blogPost = ({ data }) => {

    const featuredImage = data.markdownRemark.frontmatter.featuredImage.childImageSharp.fluid;
    const { title, date, tags } = data.markdownRemark.frontmatter;

    return (
      <Layout position='relative' title={title}>
        <PostContainer>
          <PostHeader>
            <h5>{date} / {data.markdownRemark.timeToRead} MIN READ</h5>
            <h1>{title}</h1>
            {tags.map(tag => (
              <h6>#{tag}</h6>
            ))}
          </PostHeader>
          <Img fluid={featuredImage} />
          <article dangerouslySetInnerHTML={{__html: data.markdownRemark.html}}/>
          <hr/>
          <MorePostsWrapper>
            <h3>Here, read some more.</h3>
            <MorePosts />
          </MorePostsWrapper>
        </PostContainer>
      </Layout>
    );
  }

export default blogPost;