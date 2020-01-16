const path = require('path');
const _ = require('lodash');

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'MarkdownRemark') {
    const slug = path.basename(node.fileAbsolutePath, '.md');

    createNodeField({
      node,
      name: `slug`,
      value: slug
    });
  }
}

exports.createPages = async({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve(`./src/templates/blog-post.js`);
  const tagTemplate = path.resolve(`./src/templates/tags.js`);

  const res = await graphql(`
    query {
      postsRemark: allMarkdownRemark (sort: { order: DESC , fields: [frontmatter___date]}) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              tags
            }
          }
        }
      }
      tagsGroup: allMarkdownRemark {
        group (field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `);

  if (res.errors) {
    reporter.panicOnBuild(`Error while running gatsby-node query.`);
    return;
  }

  const posts = res.data.postsRemark.edges;

  posts.forEach(({ node }) => {
    createPage({
      component: blogPostTemplate,
      path: `/blog/${node.fields.slug}`,
      context: {
        slug: node.fields.slug
      }
    });
  });

  const tags = res.data.tagsGroup.group;

  tags.forEach(tag => {
    createPage({
      path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
      component: tagTemplate,
      context: {
        tag: tag.fieldValue,
      },
    });
  });
}