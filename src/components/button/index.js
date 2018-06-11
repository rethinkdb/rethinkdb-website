import React from 'react'
import cx from 'classnames'

import styles from './button.module.css'

export default props => (
  <button className={cx([styles.button, { [styles.cta]: props.cta }])}>
    {props.children}
  </button>
)
