import React from 'React'
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import PostCard from '../components/post-card'

const BlogIntro = styled.section `
  height: 95vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Wrapper = styled.div ` 
  max-width: 800px;
  margin: 15rem auto;
  text-align: center;
  line-height: 2;
  text-decoration: underline;
  text-decoration-color: rgba(3, 159, 255, 0.4);
  font-size: 1.5rem;

  a {
    position: relative;
  }

  a::after {
    content: '';
    position: absolute;
    top: calc(50% + 20px);
    left: 50%;
    width: 20px;
    height: 20px;
    border-bottom: 2px solid #333;
    border-left: 2px solid #333;
    transform: rotate(-45deg);
    transform-origin: bottom left;
  }
`

const PostsSection = styled.section `
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  max-width: 1200px;
  padding: 2rem;
  margin: 0 auto;
  gap: 2rem;
  margin-bottom: 4rem;
`

const blogPage = ({ data }) => {
  return (
    <Layout position='relative' color='#333' title='Blog'>
      <BlogIntro>
        <Wrapper>
          <p>Hello there, dear reader. Here I will occasionally (but ,hopefully, not rarely) write about the topics that interest me the most. These might not always have to do with programming and could wildly vary from politics to religion, from history to tech tutorials. You might have noticed there's not much going on here yet.</p>
          <p>We'll get there. Eventually. Bear with me is all I'm saying.</p>
          <Link to='/blog#posts'>Go To Posts</Link>
        </Wrapper>
      </BlogIntro>
      <PostsSection id="posts">
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <PostCard node={node} />
        ))}
      </PostsSection>
    </Layout>
  );
}

export const postsQuery = graphql`
  {
    allMarkdownRemark (sort: {fields: frontmatter___date, order: DESC}) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date
            tags
            featuredImage {
              childImageSharp {
                fluid (maxWidth: 800, maxHeight: 500) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          html
          timeToRead
          excerpt
        }
      }
    }
  }
`

export default blogPage