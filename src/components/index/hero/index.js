import React from 'react'

import Button from '../../button'
import styles from './hero.module.css'

export default () => (
  <div className={styles.hero}>
    <div className={styles.heroText}>
      <strong>The open-source database</strong>
      <br />
      <span className="light">for the realtime web</span>
    </div>
    <br />
    <Button to="/docs" cta={true}>
      Install RebirthDB&nbsp;<span className={styles.buttonArrow}>
        &rsaquo;
      </span>
    </Button>
  </div>
)
