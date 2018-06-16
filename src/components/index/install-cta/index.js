import React from 'react'
import cx from 'classnames'

import Button from '../../button'
import styles from './install-cta.module.css'

export default props => (
  <div className={cx(styles.installCta, props.className)}>
    <h2>Install in seconds on Linux, OS X, or Windows</h2>
    <div className={styles.buttons}>
      <Button to="/docs">Install RebirthDB</Button>
      <Button to="/faq" reverse={true}>
        Lean more
      </Button>
    </div>
  </div>
)
