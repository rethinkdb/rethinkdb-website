const axios = require('axios')
const crypto = require('crypto')

const digest = str => crypto.createHash('md5').update(str).digest('hex')

exports.sourceNodes = async ({ boundActionCreators }, { user, repo }) => {
  const { createNode } = boundActionCreators

  let lastRelease

  try {
    let { data } = await axios(`https://api.github.com/repos/${user || 'RebirthDB'}/${repo || 'rebirthdb'}/releases/latest`)

    lastRelease = `RebirthDB ${data.name}`
  } catch (err) {
    if (err.response && err.response.status === 404) {
      lastRelease = 'None'
    } else {
      console.error(`couldn't fetch github repository and/or releases`, err)
    }
  }

  createNode({
    id: 'rebirthdb-last-release',
    children: [],
    parent: null,
    release: lastRelease,
    internal: {
      contentDigest: digest(lastRelease),
      description: 'Last release of repo',
      type: 'GithubLastRelease',
      mediaType: 'text/plain'
    }
  })
}
