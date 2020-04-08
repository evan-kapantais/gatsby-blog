import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import Layout from '../components/layout'
import SmallPost from '../components/small-post'
import Tag from '../components/tag'

import ideaImg from '../images/idea.png'

// TODO: show similar posts or not if there are not any

const PostHeader = styled.div `
  max-width: 850px;
  margin: 4rem auto 2rem auto;

  h1 {
    font-size: 4rem;
    margin: 1rem auto;
  }

  h2 {
    font-family: 'Questrial', sans-serif;
    font-weight: normal;
    color: #777;
  }

  h4 {color: #777;}

  @media only screen and (max-width: 750px) {
    margin: 4rem auto;
    
    h1 {font-size: 3rem;}
  }
`

const FeatureImageWrapper = styled.div `
  position: relative;
  max-width: 850px;
  margin: 4rem auto;
`

const PostContainer = styled.div `
  max-width: 850px;
  margin: 2rem auto;
  background: #fff;
  border-radius: 5px;

  @media(max-width: 1000px) {margin: 0 auto 4rem auto;}

  @media (max-width: 700px) {padding: 2.5rem 1rem;}
  
  article {
    line-height: 2rem;
    font-family: inherit;

    ul,
    ol {
      line-height: 1.5rem;
    }

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
      position: relative;
      border-left: 5px solid #272936;
      padding: 1rem;
      padding-left: ${props => props.isProgramming ? '3rem' : '1rem'};
      border-radius: 2px;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);

      &::before {
        content: '';
        display: ${props => props.isProgramming ? 'block' : 'none'};
        position: absolute;
        background: url(${ideaImg}) no-repeat center / cover;
        width: 24px;
        height: 24px;
        top: 1.3rem;
        left: 1rem;
      }

      & > p {margin: 0;}
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

class blogPost extends React.Component {

  async componentDidMount() {
    try {
      const deckdeckgoHighlightCodeLoader = require("@deckdeckgo/highlight-code/dist/loader")
      await deckdeckgoHighlightCodeLoader.defineCustomElements(window);
  } catch (err) {
    console.error(err);
    }
  }
  
  render() {
    const featuredImage = this.props.data.markdownRemark.frontmatter.featuredImage.childImageSharp.fluid;
    const { title, subtitle, author, date, tags } = this.props.data.markdownRemark.frontmatter;

    return (
      <Layout>
        <PostHeader>
          <h4>{date}</h4>
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
        </PostHeader>
        <FeatureImageWrapper>
          <Img style={{zIndex: -2}} fluid={featuredImage} />
        </FeatureImageWrapper>
        <PostContainer isProgramming={tags.find(tag => tag === 'programming')}>
          <article 
          dangerouslySetInnerHTML={{__html: this.props.data.markdownRemark.html}}/>
          <footer>
            <p>by <b>{author}</b></p>
            {tags.map(tag => (
              <Tag key={tag} tag={tag} />
            ))}
          </footer>
          <hr />
          <MorePosts>
            <h3 to='/'>Now Read This</h3>
            <MorePostsWrapper>
              {this.props.data.allMarkdownRemark.edges.map(({ node }) => (
                <SmallPost key={node.frontmatter.title} node={ node }/>
              ))}
            </MorePostsWrapper>
          </MorePosts>
        </PostContainer>
      </Layout>
    );
  }
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