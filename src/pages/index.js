import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout';
import PostCard from '../components/PostCard';
import FeaturedPostCard from '../components/FeaturedPostCard';
import Navbar from '../components/Navbar';

import HeaderImage from '../images/peter-gargiulo-cGNCepznaV8-unsplash.jpg';

// TODO: add search
// TODO: optimise SEO
// TODO: image attributions
// TODO: page metadata with React Helmet
// TODO: configure page logo 64x64 and 32x32 (for apps)
// TODO: check mailto link on a mac (works on windows and iphone)
// TODO: add tag sort method at homepage and display tags below if sorted like so
// TODO: query all images
// TODO: replace Markdown with MDX
// TODO: configure a newsletter
// TODO: split posts in more pages
// TODO: rss feed?
// TODO: add dark mode

const Container = styled.div`
  & > header {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: url(${HeaderImage}) no-repeat center / cover;
    /* background: radial-gradient(black 20%, #111 80%); */
    height: 45vh;
    color: #fff;

    h1 {
      font-size: 2.5rem;
    }

    p {
      font-size: 1.25rem;
    }
  }

  .heading-container {
    margin: 72px auto 0.5rem auto;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 48px;
      margin-right: 1rem;
    }
  }
`;

const BlogWrapper = styled.div`
  max-width: calc(960px + 4rem);
  padding: 0 2rem;
  margin: 4rem auto;

  hr {
    margin: 4rem 0;
  }
`;

const FeaturedArticle = styled.div`
  /* margin: 4rem auto; */
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4rem;

  @media only screen and (max-width: 800px) {
    gap: 1rem;
  }

  @media only screen and (max-width: 730px) {
    grid-template-columns: 1fr;
    row-gap: 2rem;

    > div {
      max-width: 500px;
      margin: 0 auto;
    }
  }
`;

const IndexPage = ({ data }) => {
  console.log(data.site.siteMetadata.icon);
  const featuredArticle = data.allMarkdownRemark.edges[0].node;
  return (
    <Layout title="Home">
      <Container>
        <header>
          <div className="heading-container">
            <img
              className="brand-logo"
              src={require(`../${data.site.siteMetadata.icon}`)}
              alt=""
            />
            <h1>{data.site.siteMetadata.title}</h1>
          </div>
          <p>{data.site.siteMetadata.subtitle}</p>
        </header>
        <BlogWrapper>
          <FeaturedArticle>
            <FeaturedPostCard
              node={featuredArticle}
              key={featuredArticle.frontmatter.title}
            />
          </FeaturedArticle>
          <hr />
          <BlogGrid>
            {data.allMarkdownRemark.edges.slice(1).map(({ node }) => (
              <PostCard node={node} key={node.frontmatter.title} />
            ))}
          </BlogGrid>
        </BlogWrapper>
      </Container>
    </Layout>
  );
};

export const postsQuery = graphql`
  {
    site {
      siteMetadata {
        title
        subtitle
        description
        author
        icon
      }
    }
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      totalCount
      edges {
        node {
          excerpt(pruneLength: 600, format: HTML)
          timeToRead
          html
          fields {
            slug
          }
          frontmatter {
            title
            subtitle
            date(formatString: "DD MMM YY")
            author
            tags
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 700, maxHeight: 350) {
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
`;

export default IndexPage;
