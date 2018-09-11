import React from 'react'
import Link from 'gatsby-link'

import Button from '../../components/button'
import Github from '../github'
import styles from './footer.module.css'

export default props => (
  <footer className={styles.footer}>
    <div className={styles.gettingStarted}>
      <h3>Join 100,000 developers</h3>
      <small>Install in seconds on Linux or OS X.</small>
      <br />
      <Button to="/docs" cta={true}>
        Install
      </Button>
      <Button to="/faqs" reverse={true}>
        Learn more
      </Button>
      <hr />
      <p>
        <a
          href="https://spectrum.chat/rethinkdb"
          target="_blank"
          rel="noopener noreferrer"
        >
          rethinkdb on spectrum
        </a>
      </p>
    </div>

    <section>
      <nav className={styles.footerLinks}>
        <section>
          <strong>Getting started</strong>
          <ul className={styles.links}>
            <li>
              <Link to="/faq">FAQ</Link>
            </li>
            <li>
              <Link to="/install">Install</Link>
            </li>
            <li>
              <Link to="/docs/quickstart">Quickstart</Link>
            </li>
            <li>
              <Link to="/docs/guide/javascript/">Tutorial</Link>
            </li>
          </ul>
        </section>
        <section>
          <strong>Documentation</strong>
          <ul className={styles.links}>
            <li>
              <Link to="/api/javascript/">API</Link>
            </li>
            <li>
              <Link to="/docs/introduction-to-reql/">Intro to ReQL</Link>
            </li>
            <li>
              <Link to="/docs/cookbook/javascript/">Cookbook</Link>
            </li>
            <li>
              <Link to="/docs/architecture">Architecture</Link>
            </li>
          </ul>
        </section>
        <section>
          <strong>Community</strong>
          <ul className={styles.links}>
            <li>
              <Link to="/community">Events</Link>
            </li>
            <li>
              <a href="https://github.com/rethinkdb/rethinkdb">GitHub</a>
            </li>
            <li>
              <a href="https://twitter.com/rethinkdb">Twitter</a>
            </li>
          </ul>
        </section>
        <section>
          <strong>RethinkDB</strong>
          <ul className={styles.links}>
            <li>
              <Link to="/blog/">Blog</Link>
            </li>
          </ul>
        </section>
      </nav>
      <h3 className={styles.star}>
        <a href={props.github} target="_blank" rel="noopener noreferrer">
          <Github color="#fff" size="20" />
          &nbsp;&nbsp; Star this project on GitHub
        </a>
      </h3>
    </section>
  </footer>
)
