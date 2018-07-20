import React from 'react'
import visit from 'unist-util-visit'
import Slugger from 'github-slugger'

import styles from './table-of-contents.module.css'

const TableOfContents = props => {
  const slugger = new Slugger()
  const titles = []

  visit(props.ast, 'element', node => {
    if (node.tagName === 'h1') {
      // children[0] is the link
      // children[1] is the text
      if (node.children[1] && node.children[1].type === 'text') {
        titles.push({
          content: node.children[1].value,
          link: slugger.slug(node.children[1].value),
        })
      }
    }
  })

  return (
    <div className={styles.tableOfContents}>
      <h3 className={styles.title}>In this article</h3>
      {titles.map((title, i) => (
        <a href={`#${title.link}`} className={styles.link} key={i}>
          {title.content}
        </a>
      ))}
    </div>
  )
}

export default TableOfContents
