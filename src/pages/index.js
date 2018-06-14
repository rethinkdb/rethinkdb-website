import React from 'react'
import cx from 'classnames'

import HeroNotes from '../components/heroNotes'
import Button from '../components/button'
import SplitFeature from '../components/index/split-feature'
import LiveRequest from '../components/index/live-request'
import styles from './index.module.css'
import '../main.css'

const IndexPage = ({ data }) => (
  <div>
    <div className={styles.hero}>
      <div className={styles.heroText}>
        <strong>The open-source database</strong>
        <br />
        <span className="light">for the realtime web</span>
      </div>
      <br />
      <Button cta={true}>
        Install RebirthDB&nbsp;<span className={styles.buttonArrow}>
          &rsaquo;
        </span>
      </Button>
    </div>
    <HeroNotes
      latestRelease={data.githubRepositoryInformations.release}
      stargazers={data.githubRepositoryInformations.stargazers}
      twitter={data.yaml.index.twitterAccount}
      release={data.yaml.index.releaseLink}
      github={data.yaml.index.githubLink}
    />
    <div className={cx(styles.section, styles.intro)}>
      <SplitFeature>
        <article>
          <h1>RethinkDB pushes JSON to your apps in realtime.</h1>
          <p>
            When your app polls for data, it becomes slow, unscalable, and
            cumbersome to maintain.<br />
            <br />
            RethinkDB is the open-source, scalable database that makes building
            realtime apps dramatically easier.<br />
            <br />
            <Button>
              What is RethinkDB&nbsp;<span className={styles.buttonArrow}>
                &rsaquo;
              </span>
            </Button>
          </p>
        </article>
        <figure>
          <LiveRequest />
        </figure>
      </SplitFeature>
    </div>
  </div>
)

export default IndexPage

export const query = graphql`
  query IndexPageQuery {
    githubRepositoryInformations {
      release
      stargazers
    }

    yaml {
      index {
        twitterAccount
        githubLink
        releaseLink
      }
    }
  }
`
