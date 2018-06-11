import React from 'react'

const HeroNotes = props => {
  const stargazers =
    props.stargazers > 1000
      ? Math.round(props.stargazers / 1000) + 'k'
      : props.stargazers

  return (
    <div>
      <strong>Latest Release:</strong> {props.latestRelease}
      {stargazers} stars on GitHub
    </div>
  )
}

export default HeroNotes
