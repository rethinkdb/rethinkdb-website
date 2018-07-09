import React from 'react'
import cx from 'classnames'

import AsyncImage from '../../async-image'
import Button from '../../button'
import ui from '../../../assets/rethinkdb-ui.png'
import styles from './scale-cluster.module.css'

export default props => (
  <div className={cx(styles.scaleCluster, props.className)}>
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <h2 className={styles.title}>Scale your cluster in seconds</h2>

        <p>
          When you're ready to scale your app, shard and replicate in a few
          clicks using an intuitive web UI. If you need it, a simple API
          provides precise control over the cluster:
        </p>

        <code>
          <pre>
            r<br />
            &nbsp;&nbsp;.table(<span className="str">'games'</span>)<br />
            &nbsp;&nbsp;.reconfigure({'{'}shards: <span className="nb">5</span>,
            replicas: <span className="nb">3</span>
            {'}'})
          </pre>
        </code>

        <p>
          Monitor your production cluster with live statistics and complete
          visibility into running jobs:
        </p>

        <code>
          <pre>
            r<br />
            &nbsp;&nbsp;.db(<span className="str">'rethinkdb'</span>)<br />
            &nbsp;&nbsp;.table(<span className="str">'jobs'</span>)<br />
            &nbsp;&nbsp;.changes()
          </pre>
        </code>

        <Button to="/docs/sharding-and-replication/" reverse={true}>
          Learn more &nbsp;<span className={styles.buttonArrow}>&rsaquo;</span>
        </Button>
      </div>
      <figure className={styles.image}>
        <AsyncImage src={ui} />
      </figure>
    </div>
  </div>
)
