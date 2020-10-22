module.exports = {
  siteMetadata: {
    title: `Evan Kapantais`,
    description: `A blog about politics, religion and ideas.`,
    author: `Evan Kapantais`,
    url: `https://blog.evankapantais.com`,
    icon: 'images/icons/brand/logo-03-solid-on-black.svg',
    twitterHandle: 'evankapantais',
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
              markdownCaptions: true,
            },
          },
          {
            resolve: `gatsby-remark-highlight-code`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        // icon: `src/images/icons/logo-02-02-white-background.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-69171075-2',
      },
    },
  ],
};
