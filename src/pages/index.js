import React from 'react'
import cx from 'classnames'

import Button from '../components/button'
import AsyncImage from '../components/async-image'
import Hero from '../components/index/hero'
import HeroNotes from '../components/index/heroNotes'
import SplitFeature from '../components/index/split-feature'
import LiveRequest from '../components/index/live-request'
import InstallCta from '../components/index/install-cta'
import Sponsors from '../components/index/sponsors'
import WhatsInTheBox from '../components/index/whats-in-the-box'
import styles from './index.module.css'
import '../main.css'

import specBirth from '../assets/spec-birth.png'

const IndexPage = ({ data }) => (
  <div>
    <Hero />
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
          <h1>RebirthDB pushes JSON to your apps in realtime.</h1>
          <p>
            When your app polls for data, it becomes slow, unscalable, and
            cumbersome to maintain.<br />
            <br />
            RebirthDB is the open-source, scalable database that makes building
            realtime apps dramatically easier.<br />
            <br />
            <Button to="/docs">
              What is RebirthDB&nbsp;<span className={styles.buttonArrow}>
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
    <WhatsInTheBox className={styles.section} />
    <InstallCta className={styles.section} />
    <SplitFeature className={styles.specBirth}>
      <article>
        <h2>Spectrum + RebirthDB</h2>
        <p>
          Spectrum is a community platform, kinda of a Slack rival, and it uses
          RethinkDB as the primary database too! It's our new home for sharing
          ideas and discussing the project future, we talk about features,
          funding, database questions, etc.
        </p>
      </article>
      <figure>
        <AsyncImage src={specBirth} width="390" />
      </figure>
    </SplitFeature>
    <Sponsors
      className={styles.section}
      images={data.allFile.edges.map(edge => edge.node.childImageSharp)}
      links={data.yaml.index.sponsorsLinks}
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

    allFile(filter: { sourceInstanceName: { eq: "sponsors" } }) {
      edges {
        node {
          childImageSharp {
            resolutions {
              ...GatsbyImageSharpResolutions_noBase64
              originalName
            }
          }
        }
      }
    }

    yaml {
      index {
        twitterAccount
        githubLink
        releaseLink
        sponsorsLinks {
          image
          link
        }
      }
    }
  }
`
