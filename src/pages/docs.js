import React from 'react'
import Link from 'gatsby-link'
import rehypeReact from 'rehype-react'

import additionalTree from '../utils/additionalTree'
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

  const sidebarLinks = additionalTree(pages).additionalTree

  const docsPage = props.pathContext.data

  return (
    <div className={styles.docs}>
      <nav className={styles.navigation}>
        {sidebarLinks.map((header, i) => (
          <React.Fragment key={i}>
            <h3 className={styles.additionalCategory} key="header">
              {header.name}
            </h3>
            <ul className={styles.additionalSublinks} key="slide">
              {header.children.map((entry, j) => (
                <li key={j}>
                  <Link to={entry.path}>{entry.title}</Link>
                </li>
              ))}
            </ul>
          </React.Fragment>
        ))}
      </nav>
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
