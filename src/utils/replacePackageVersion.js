import visit from 'unist-util-visit'

// replace package version in docs
export default docsPage =>
  visit(docsPage.htmlAst, 'text', node => {
    if (node.value.indexOf('[[packageVersion]]') > -1) {
      node.value = node.value.replace(
        /\[\[packageVersion\]\]/g,
        props.data.githubRepositoryInformations.version
      )
    }
  })
