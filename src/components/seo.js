import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

function SEO({ post }) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            url
          }
        }
      }
    `
  );

  const defaults = data.site.siteMetadata;

  const title = post?.frontmatter.title || defaults.title;
  const description = post?.frontmatter.subtitle || defaults.description;
  const url =
    typeof post !== 'undefined'
      ? `${defaults.url}/${post.fields.slug}`
      : defaults.url;
  const image = post?.frontmatter.featuredImage.childImageSharp.fluid || '';
  const type = typeof post !== 'undefined' ? 'article' : 'website';

  return (
    <Helmet title={title} titleTemplate={`%s | ${defaults.title}`}>
      <title>{title}</title>
      <link rel="canonical" href={url} />
      <meta name="description" content={description} />
      {image && <meta name="image" content={image} />}

      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {image && <meta property="og:image" content={image} />}

      <meta name="twitter:card" content="sumary_large_image" />
      <meta name="twitter:creator" content={defaults.author} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}
    </Helmet>
  );
}

export default SEO;
