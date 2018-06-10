import React from 'react'

import styles from './hamburger.module.css'

const Button = props => (
  <button onClick={props.onClick} className={styles.hamburger}>
    <div className={styles.line} />
    <div className={styles.line} />
    <div className={styles.line} />
  </button>
)

export default Button
