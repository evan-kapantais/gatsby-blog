import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import PostCard from '../components/post-card'
import Img from 'gatsby-image'
import styled from 'styled-components'


const PostContainer = styled.div `
  max-width: 850px;
  margin: 3rem auto;
  
  article {
    margin: -10rem auto 2rem auto;
    line-height: 2rem;
    font-size: 1.1rem;
    background: #fff;
    padding: 2.5rem;
    border-radius: 5px;
    font-family: inherit;

    p {
      margin-bottom: 1rem;
    }

    h2 {
      font-size: 2rem;
    }

    h3 {
      margin-bottom: 1rem;
      margin-top: 2rem;
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

const PostHeader = styled.div `
  margin: 4rem 0 2rem 0;
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
    text-transform: uppercase;
    color: rgb(3, 159, 255);
    display: inline-block;
    margin-right: 10px;
  }
`

const FeatureImageWrapper = styled.div `
  max-width: 1200px;
  margin: 0 auto;
`

export const query = graphql`
  query ($slug: String!) {
    markdownRemark (fields: { slug: { eq: $slug } }) {
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
      html
      timeToRead
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
            date (formatString: "DD-MM-YYYY")
            tags
            featuredImage {
              childImageSharp {
                fluid (maxWidth: 300) {
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

  const blogPost = ({ data }) => {

    const featuredImage = data.markdownRemark.frontmatter.featuredImage.childImageSharp.fluid;
    const { title, date, tags } = data.markdownRemark.frontmatter;

    console.log(title);

    return (
      <Layout>
        <PostHeader>
          <h5>{date} / {data.markdownRemark.timeToRead} MIN READ</h5>
          <h1>{title}</h1>
          {tags.map(tag => (
            <h6>#{tag}</h6>
          ))}
        </PostHeader>
        <FeatureImageWrapper>
          <Img style={{zIndex: -2,}}fluid={featuredImage} />
        </FeatureImageWrapper>
        <PostContainer>
          <article dangerouslySetInnerHTML={{__html: data.markdownRemark.html}}/>
          <hr />
          <Link to='/'>More Posts</Link>
          <div>
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <Link to={`/blog/${node.fields.slug}`}>{node.frontmatter.title}</Link>
            ))}
          </div>
        </PostContainer>
      </Layout>
    );
  }

export default blogPost;