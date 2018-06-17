import React from 'react'
import cx from 'classnames'

import styles from './split-feature.module.css'

export default props => (
  <section className={cx(styles.split, props.className)}>
    <div className={styles.content}>{props.children}</div>
  </section>
)
