import React from 'react'
import Link from 'gatsby-link'
import cx from 'classnames'

import AsyncImage from '../../async-image'
import community from '../../../assets/whats-in-the-box/community.png'
import favoriteStack from '../../../assets/whats-in-the-box/favorite.stack.png'
import modernApps from '../../../assets/whats-in-the-box/modern.apps.png'
import robustArchitecture from '../../../assets/whats-in-the-box/robust.architecture.png'
import styles from './whats-in-the-box.module.css'

export default props => (
  <div className={cx(styles.whatsInTheBox, props.className)}>
    <h2 className={styles.title}>What's in the box ?</h2>
    <div className={styles.grid}>
      <article>
        <h3>Work with your favorite stack</h3>
        <p>
          Query JSON documents with Python, Ruby, Node.js{' '}
          <Link to="docs/install-drivers">or dozens of other languages</Link>.
          Build modern apps using your favorite web framework, paired with
          realtime technologies like <a href="https://socket.io/">socket.io</a>{' '}
          or <a href="http://signalr.net/">SignalR</a>.
        </p>
        <AsyncImage src={favoriteStack} />
      </article>
      <article>
        <h3>Robust architecture</h3>
        <p>
          RethinkDB integrates the latest advances in database technology. It
          has a modern distributed{' '}
          <Link to="docs/architecture">architecture</Link>, a highly-optimized
          buffer cache, and a state of the art storage engine. All of these
          components work together to create a robust, scalable,
          high-performance database.
        </p>
        <AsyncImage src={robustArchitecture} />
      </article>
      <article>
        <h3>Everything you need to build modern apps</h3>
        <p>
          Express relationships using <Link to="docs/joins">joins</Link>, build{' '}
          <Link to="docs/geo">location-aware apps</Link>, or store{' '}
          <Link to="docs/binary">multimedia</Link> and{' '}
          <Link to="docs/dates-and-times">time-series data</Link>. Do analytics
          with <Link to="docs/map-reduce">aggregation and map/reduce</Link>, and
          speed up your apps using{' '}
          <Link to="docs/indexing">flexible indexing</Link>.
        </p>
        <AsyncImage src={modernApps} />
      </article>
      <article>
        <h3>Built with love by the open source community</h3>
        <p>
          Developed by a core team of database experts and over 100 contributors
          from around the world, RethinkDB is shaped by developers like you
          participating in{' '}
          <Link to="community">an open development process</Link>.
        </p>
        <AsyncImage src={community} />
      </article>
    </div>
  </div>
)
