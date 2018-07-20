import React from 'react'
import Link from 'gatsby-link'
import rehypeReact from 'rehype-react'
import visit from 'unist-util-visit'

import additionalTree from '../utils/additionalTree'
import AsyncImage from '../components/async-image'
import SupportedPlatforms from '../components/supported-platforms'
import TableOfContents from '../components/table-of-contents'
import LanguageChooser from '../components/language-chooser'

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    asyncimage: AsyncImage,
    supportedplatforms: SupportedPlatforms,
    toc: TableOfContents,
  },
}).Compiler

import styles from './docs.module.css'

const Docs = props => {
  const pages = props.data.allMarkdownRemark.edges.map(n => ({
    ...n.node.frontmatter,
  }))

  const sidebarLinks = additionalTree(pages).additionalTree

  const docsPage = props.pathContext.data

  // replace package version in docs
  if (docsPage && docsPage.htmlAst) {
    visit(docsPage.htmlAst, 'text', node => {
      if (node.value.indexOf('[[packageVersion]]') > -1) {
        node.value = node.value.replace(
          /\[\[packageVersion\]\]/g,
          props.data.githubRepositoryInformations.version
        )
      }
    })
  }

  return (
    <div className={styles.docs}>
      <nav className={styles.navigation}>
        {sidebarLinks.map((header, i) => (
          <React.Fragment key={i}>
            <h3 className={styles.additionalCategory} key="header">
              {header.name}
            </h3>
            <ul className={styles.additionalSublinks} key="slide">
              {header.children
                .filter(entry => !entry.disableSidebarLink)
                .sort((a, b) => a.sidebarPosition - b.sidebarPosition)
                .map((entry, j) => (
                  <li key={j}>
                    <Link to={entry.path}>{entry.title}</Link>
                  </li>
                ))}
            </ul>
          </React.Fragment>
        ))}
      </nav>
      <article>
        {docsPage && !docsPage.hideTitle && <h1>{docsPage.title}</h1>}
        {docsPage && docsPage.toc && <TableOfContents ast={docsPage.htmlAst} />}
        {docsPage && docsPage.switcher && <LanguageChooser />}
        {docsPage && renderAst(docsPage.htmlAst)}
      </article>
    </div>
  )
}

export default Docs

export const query = graphql`
  query DocsQuery {
    githubRepositoryInformations {
      version
    }

    allMarkdownRemark(filter: { frontmatter: { parentPage: { eq: "docs" } } }) {
      edges {
        node {
          frontmatter {
            path
            parentPage
            title
            category
            disableSidebarLink
            sidebarPosition
            switcher
            toc
          }
        }
      }
    }
  }
`
