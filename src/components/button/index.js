import React from 'react'
import { navigateTo } from 'gatsby-link'
import cx from 'classnames'

import styles from './button.module.css'

export default props => {
  const classes = cx([
    styles.button,
    {
      [styles.cta]: props.cta,
      [styles.reverse]: props.reverse,
    },
  ])

  const onClick = props.to ? () => navigateTo(props.to) : props.onClick

  return (
    <button onClick={onClick} className={classes}>
      {props.children}
    </button>
  )
}
