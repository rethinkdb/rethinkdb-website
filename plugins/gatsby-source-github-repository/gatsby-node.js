const axios = require('axios')
const crypto = require('crypto')

const digest = str => crypto.createHash('md5').update(str).digest('hex')

exports.sourceNodes = async ({ boundActionCreators }, { user, repo }) => {
  const { createNode } = boundActionCreators

  let release
  let stargazers

  try {
    let { data } = await axios(`https://api.github.com/repos/${user || 'RebirthDB'}/${repo || 'rebirthdb'}/releases/latest`)

    release = `RebirthDB ${data.name}`
  } catch (err) {
    if (err.response && err.response.status === 404) {
      release = 'None'
    } else {
      console.error(`couldn't fetch github releases`, err)
    }
  }

  try {
    let { data } = await axios(`https://api.github.com/repos/${user || 'RebirthDB'}/${repo || 'rebirthdb'}`)

    stargazers = data.stargazers_count
  } catch (err) {
      console.error(`couldn't fetch github releases`, err)
  }

  createNode({
    id: 'rebirthdb-github-repository',
    children: [],
    parent: null,
    release,
    stargazers,
    internal: {
      contentDigest: digest(release + stargazers),
      description: 'Get informations about RebirthDB repository',
      type: 'GithubRepositoryInformations',
      mediaType: 'text/plain'
    }
  })
}
