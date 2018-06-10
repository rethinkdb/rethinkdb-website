import React from 'react'
import { CSSTransition } from 'react-transition-group'
import Link from 'gatsby-link'

import styles from './drawer.module.css'

export default ({ opened, toggle }) => (
  <div>
    <CSSTransition
      in={opened}
      timeout={200}
      classNames="drawer-slide"
      unmountOnExit={true}
    >
      <nav key="drawer" className={styles.drawer}>
        <span className={styles.link} onClick={toggle}>
          <div className={styles.cross}>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
          </div>
          close
        </span>
        <Link className={styles.link} activeClassName="active" to="/faq">
          faq
        </Link>
        <Link className={styles.link} activeClassName="active" to="/docs">
          docs
        </Link>
        <Link className={styles.link} activeClassName="active" to="/api">
          api
        </Link>
        <Link className={styles.link} activeClassName="active" to="/community">
          community
        </Link>
      </nav>
    </CSSTransition>
    <CSSTransition
      in={opened}
      timeout={200}
      classNames="backdrop-fade"
      unmountOnExit={true}
    >
      <div className={styles.backdrop} key="backdrop" onClick={toggle} />
    </CSSTransition>
  </div>
)
