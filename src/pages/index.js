import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout';
import PostCard from '../components/PostCard';
import FeaturedPostCard from '../components/FeaturedPostCard';
import SEO from '../components/seo';

import HeaderImage from '../images/pine.jpg';

// TODO: add search
// TODO: optimise SEO
// TODO: image attributions
// TODO: page metadata with React Helmet
// TODO: configure page logo 64x64 and 32x32 (for apps)
// TODO: check mailto link on a mac (works on windows and iphone)
// TODO: query all images
// TODO: configure a newsletter
// TODO: rss feed?
// TODO: add dark mode

const Container = styled.div`
  > header {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 60vh;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
    background: url(${HeaderImage}) no-repeat 50% 35% / cover;

    h1,
    p {
      color: #fff;
      mix-blend-mode: difference;
    }

    h1 {
      font-size: 3.5rem;
    }

    p {
      font-size: 1.5rem;
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
  const featuredArticle = data.allMarkdownRemark.edges[0].node;
  return (
    <Layout title="Home">
      <SEO title="Home" />
      <Container>
        <header>
          <div className="heading-container">
            <h1>{data.site.siteMetadata.title}</h1>
          </div>
          <p>{data.site.siteMetadata.description}</p>
        </header>
        <BlogWrapper>
          <div>
            <FeaturedPostCard
              node={featuredArticle}
              key={featuredArticle.frontmatter.title}
            />
          </div>
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
