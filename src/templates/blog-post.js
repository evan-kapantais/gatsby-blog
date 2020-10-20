import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import SEO from '../components/seo';

import Layout from '../components/layout';
import SmallPost from '../components/SmallPost';

import ideaImg from '../images/icons/idea.png';

// TODO: show similar posts or not if there are not any
// TODO: smaller headings on small screens

const PostContainer = styled.div`
  max-width: calc(960px + 4rem);
  margin: 10rem auto 4rem auto;
  padding: 0 2rem;

  article {
    margin: 0 auto;
    max-width: 800px;
    font-size: 1.2rem;
    line-height: 2.2rem;
    font-family: inherit;

    ul,
    ol {
      line-height: 1.5rem;
      list-style-position: inside;
    }

    a {
      color: rgb(3, 159, 255);

      &:hover {
        text-decoration: underline;
      }
    }

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
      margin: 4rem 0;
      border-left: 5px solid #272936;
      padding: 1rem;
      padding-left: ${props => (props.isProgramming ? '3rem' : '1rem')};
      border-radius: 2px;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);

      &::before {
        content: '';
        display: ${props => (props.isProgramming ? 'block' : 'none')};
        position: absolute;
        background: url(${ideaImg}) no-repeat center / cover;
        width: 24px;
        height: 24px;
        top: 1.3rem;
        left: 1rem;
      }

      & > p {
        margin: 0;
      }
    }

    .deckgo-highlight-code-carbon {
      margin: 4rem 0;
    }
  }

  > hr {
    margin: 6rem auto;
  }
`;

const PostHeader = styled.div`
  max-width: 850px;
  margin: 4rem auto 2rem auto;

  .category {
    text-transform: uppercase;
    font-size: 0.8rem;
    color: #7fceff;
    font-weight: 600;
    margin-bottom: 1rem;
  }

  .article-title {
    font-size: 3.5rem;
    margin: 0 auto 2rem auto;
  }

  .article-subtitle {
    font-family: Georgia, 'Times New Roman', Times, serif;
    color: #777;
    font-weight: 400;
  }

  hr {
    margin: 2rem auto;
  }

  .post-info {
    text-transform: uppercase;
    font-size: 0.8rem;
    color: #777;
    font-weight: 600;
  }

  @media only screen and (max-width: 750px) {
    margin: 4rem auto;

    .article-title {
      font-size: 3rem;
    }
  }
`;

const FeatureImageWrapper = styled.div`
  margin: 4rem auto;

  .gatsby-image-wrapper {
    min-height: 350px;
  }
`;

const MorePosts = styled.div`
  h3 {
    margin-bottom: 2rem;
  }
`;

const MorePostsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;

  @media only screen and (max-width: 822px) {
    max-width: 500px;
    margin: 0 auto;
  }
`;

class blogPost extends React.Component {
  async componentDidMount() {
    try {
      const deckdeckgoHighlightCodeLoader = require('@deckdeckgo/highlight-code/dist/loader');
      await deckdeckgoHighlightCodeLoader.defineCustomElements(window);
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    const featuredImage = this.props.data.markdownRemark.frontmatter
      .featuredImage.childImageSharp.fluid;

    const {
      title,
      subtitle,
      date,
      tags,
    } = this.props.data.markdownRemark.frontmatter;

    const { timeToRead } = this.props.data.markdownRemark;

    return (
      <Layout>
        <SEO post={this.props.data.markdownRemark} />
        <PostContainer isProgramming={tags.find(tag => tag === 'programming')}>
          <PostHeader>
            <p className="category">{tags[0]}</p>
            <h1 className="article-title">{title}</h1>
            <h2 className="article-subtitle">{subtitle}</h2>
            <hr />
            <p className="post-info">
              {date} • {timeToRead} Min Read
            </p>
          </PostHeader>
          <FeatureImageWrapper>
            <Img fluid={featuredImage} />
          </FeatureImageWrapper>
          <article
            dangerouslySetInnerHTML={{
              __html: this.props.data.markdownRemark.html,
            }}
          />
          <hr />
          <MorePosts>
            <h3>Recent Posts</h3>
            <MorePostsWrapper>
              {this.props.data.allMarkdownRemark.edges.map(({ node }) => (
                <SmallPost key={node.frontmatter.title} node={node} />
              ))}
            </MorePostsWrapper>
          </MorePosts>
        </PostContainer>
      </Layout>
    );
  }
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      fields {
        slug
      }
      frontmatter {
        title
        subtitle
        author
        date(formatString: "DD MMM YYYY")
        tags
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 850, maxHeight: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    allMarkdownRemark(
      limit: 2
      sort: { fields: frontmatter___date, order: DESC }
      filter: { fields: { slug: { ne: $slug } } }
    ) {
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
            date(formatString: "D MMMM YYYY")
            tags
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 500) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default blogPost;
