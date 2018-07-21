const path = require('path')

module.exports.createPages = async ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;
  const docsTemplate = path.resolve('./src/pages/docs.js')
  const docsPath = path.resolve(__dirname, 'docs')

  const result = await graphql(
    `
      {
        allMarkdownRemark {
          edges {
            node {
              fileAbsolutePath
              frontmatter {
                path
                parentPage
                title
                sideTitle
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
    const filePath = node.node.fileAbsolutePath.replace(docsPath, '')

    if (!pagePath) {
      continue;
    }

    const data = {
      ...node.node.frontmatter,
      filePath: filePath,
      html: node.node.html,
      htmlAst: node.node.htmlAst
    }

    createPage({
      path: pagePath,
      component: docsTemplate,
      layout: 'index',
      context: {
        pagePath
      }
    })
  }
}
