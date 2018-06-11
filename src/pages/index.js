import React from 'react'

import HeroNotes from '../components/heroNotes'
import hero from '../assets/hero.png'
import '../main.css'

const IndexPage = ({ data }) => (
  <div>
    <img src={hero} alt="RebirtDB hero" />
    <HeroNotes latestRelease={data.githubLastRelease.release} />
  </div>
)

export default IndexPage

export const query = graphql`
  query IndexPageQuery {
    githubLastRelease {
      release
    }
  }
`
