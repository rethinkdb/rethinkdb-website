import React from 'react'
import Img from 'gatsby-image'
import cx from 'classnames'

import styles from './sponsors.module.css'

export default props => (
  <div className={cx(styles.sponsors, props.className)}>
    <h2 className={styles.title}>RethinkDB is sponsored by :</h2>
    <div className={styles.sponsorsImages}>
      {props.images.map((img, i) => {
        const { link } = props.links.find(
          link => link.image === img.resolutions.originalName
        )

        return (
          <div className={styles.sponsor} key={i}>
            <a href={link} target="_blank" rel="noopener noreferrer">
              <Img resolutions={img.resolutions} />
            </a>
          </div>
        )
      })}
    </div>
  </div>
)
