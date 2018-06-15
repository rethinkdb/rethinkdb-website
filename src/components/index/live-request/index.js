import React from 'react'
import cx from 'classnames'

import styles from './live-request.module.css'

class LiveRequest extends React.Component {
  state = {
    results: [
      { player: 'alyssa', score: 148 },
      { player: 'john', score: 96 },
      { player: 'donna', score: 79 },
    ],
    visible: [0, 0, 0],
  }

  constructor() {
    super()

    setTimeout(() => this.setState({ visible: [0, 1, 0] }), 1500)
    setTimeout(() => this.setState({ visible: [0, 1, 1] }), 3800)
    setTimeout(() => this.setState({ visible: [1, 1, 1] }), 6000)
  }

  render() {
    return (
      <React.Fragment>
        <div className={styles.request}>
          <div className={styles.lines}>
            1<br />
            2<br />
            3<br />
            4<br />
            5<br />
          </div>
          <pre className={styles.code}>
            r<br />
            &nbsp;&nbsp;.table(<span className={styles.str}>'game'</span>)<br />
            &nbsp;&nbsp;.orderBy(<span className={styles.str}>
              'score'
            </span>)<br />
            &nbsp;&nbsp;.limit(<span className={styles.nmb}>3</span>)<br />
            &nbsp;&nbsp;.changes()
          </pre>
          <div />
        </div>
        <div className={styles.results}>
          {this.state.results.map((result, i) => (
            <div
              className={cx(styles.result, {
                [styles.visible]: this.state.visible[i],
              })}
              key={i}
            >
              <pre className={styles.code}>
                {'{'}&nbsp;
                <span className={styles.str}>player</span>:&nbsp;
                <span className={styles.str}>'{result.player}'</span>,​&nbsp;
                <span className={styles.str}>score</span>:&nbsp;
                <span className={styles.nmb}>{result.score}</span>
                &nbsp;{'}'}
              </pre>
            </div>
          ))}
        </div>
      </React.Fragment>
    )
  }
}

export default LiveRequest
