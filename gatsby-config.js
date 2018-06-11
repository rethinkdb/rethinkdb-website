module.exports = {
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-workbox',
    'gatsby-plugin-react-next',
    'gatsby-plugin-catch-links',
    'gatsby-transformer-yaml',
    'gatsby-transformer-json',
    { resolve: 'gatsby-source-github-last-release', options: { user: 'RethinkDB', repo: 'rethinkdb' } },
    // { resolve: 'gatsby-source-github-last-release', options: { user: 'RebirthDB', repo: 'rebirthdb' } },
    { resolve: 'gatsby-plugin-nprogress', options: { color: '#ff7d92', } },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'site',
        path: './site.yaml'
      }
    }
  ]
}
