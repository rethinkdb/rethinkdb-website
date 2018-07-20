const path = require('path')

module.exports.createPages = async ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;
  const docsTemplate = path.resolve('./src/pages/docs.js')

  const result = await graphql(
    `
      {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                path
                parentPage
                title
                category
                switcher
                toc
              }
              html
              htmlAst
            }
          }
        }
      }
    `
  )

  for (let node of result.data.allMarkdownRemark.edges) {
    const pagePath = node.node.frontmatter.path

    if (!pagePath) {
      continue;
    }

    const data = {
      ...node.node.frontmatter,
      html: node.node.html,
      htmlAst: node.node.htmlAst
    }

    createPage({
      path: pagePath,
      component: docsTemplate,
      layout: 'index',
      context: {
        data
      }
    })
  }
}
