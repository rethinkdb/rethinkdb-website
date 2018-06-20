import React from 'react'
import rehypeReact from 'rehype-react'
import Github from '../components/github'

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: { github: Github },
}).Compiler

import styles from './docs.module.css'

const Docs = props => {
  const pages = props.data.allMarkdownRemark.edges.map(n => ({
    ...n.node.frontmatter,
  }))

  const docsPage = props.pathContext.data

  return (
    <div className={styles.docs}>
      <article>{docsPage && renderAst(docsPage.htmlAst)}</article>
    </div>
  )
}

export default Docs

export const query = graphql`
  query DocsQuery {
    allMarkdownRemark(filter: { frontmatter: { parentPage: { eq: "docs" } } }) {
      edges {
        node {
          frontmatter {
            path
            parentPage
            title
            category
          }
        }
      }
    }
  }
`
