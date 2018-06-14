import React from 'react'

import styles from './split-feature.module.css'

export default props => (
  <section className={styles.split}>{props.children}</section>
)
