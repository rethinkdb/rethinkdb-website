import React from 'react'
import Link from 'gatsby-link'

import styles from './docs.module.css'

const Docs = props => {
  const pages = props.data.allMarkdownRemark.edges.map(n => ({
    ...n.node.frontmatter,
  }))

  const docsPage = props.pathContext.data

  return (
    <div className={styles.docs}>
      <article>
        {docsPage && (
          <div dangerouslySetInnerHTML={{ __html: docsPage.html }} />
        )}
      </article>
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
