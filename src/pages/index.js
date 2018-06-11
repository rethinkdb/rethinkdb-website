import React from 'react'

import HeroNotes from '../components/heroNotes'
import Button from '../components/button'
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
