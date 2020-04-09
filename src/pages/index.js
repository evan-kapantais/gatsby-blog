import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/seo'
import PostCard from '../components/post-card'
import FeaturedPost from '../components/featured-post'
import Tag from '../components/tag'

import '../stylesheets/index.scss'

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

const IndexPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;
  const latestPost = posts[0].node;
  const olderPosts = posts.slice(1);

  console.log(latestPost);

  return (
    <Layout>
      <SEO title='Home' />
      <div className='container'>
        <section className='hero-section'>
          <h1><span>A blog by</span> Evan Kapantais</h1>
        </section>
        <section className='featured-section'>
          <div className='section-wrapper'>
            <h2 className='section-heading'>Latest Story</h2>
            <div className='featured-post'>
            <Link className='image-link' to={`/${latestPost.fields.slug}`}>
              {/* <Img fluid={latestPost.frontmatter.featuredImage.childImageSharp.fluid} /> */}
              <img src={require(`../${latestPost.frontmatter.directImage}`)} alt=""/>
            </Link>
            <Link className='content-link' to={`/${latestPost.fields.slug}`}>
              <header>
                <h1>{latestPost.frontmatter.title}</h1>
                <h3>{latestPost.frontmatter.subtitle}</h3>
              </header>
              <footer>
                {latestPost.frontmatter.tags.map(tag => (
                  <Tag tag={tag}/>
                ))}
                <h5>{latestPost.timeToRead} minute read</h5>
              </footer>
            </Link>
            </div>
          </div>
        </section>
        {/* <FeaturedPost node={latestPost} /> */}
        {/* <div className='blog-wrapper'>
          {olderPosts.map(({ node }) => (
            <div key={node.frontmatter.title}>
              <PostCard node={node} />
            </div>
          ))}
        </div> */}
      </div>
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
          directImage
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