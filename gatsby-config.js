module.exports = {
  siteMetadata: {
    title: 'RebirthDB',
    fullTitle: 'Rebirth DB: the open-source database for the realtime web',
    keywords: 'RebirthDB, Rebirth, Rethink, RethinkDB, database, real-time, scalable, open-source'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-workbox',
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      }
    }
  ]
}
