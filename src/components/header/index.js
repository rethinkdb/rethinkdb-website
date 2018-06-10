import React from 'react'
import Link from 'gatsby-link'

import Hamburger from './hamburger'
import styles from './header.module.css'

const Header = ({ title, toggleDrawer }) => (
  <header className={styles.header}>
    <h1 className={styles.title}>
      <Link to="/">{title}</Link>
    </h1>
    <div className="space" />
    <nav className={styles.links}>
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
    <Hamburger onClick={toggleDrawer} />
  </header>
)

export default Header
