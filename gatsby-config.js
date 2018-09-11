module.exports = {
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-workbox',
    'gatsby-plugin-react-next',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-transformer-yaml',
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-custom-blocks',
            options: {
              blocks: {
                note: 'note',
                warning: 'note warning'
              }
            }
          },
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix: 'language-'
            }
          },
          'gatsby-remark-component',
          'gatsby-remark-autolink-headers'
        ]
      }
    },
    { resolve: 'gatsby-source-github-repository', options: { user: 'RethinkDB', repo: 'rethinkdb' } },
    // { resolve: 'gatsby-source-github-repository', options: { user: 'RethinkDB', repo: 'rethinkdb' } },
    { resolve: 'gatsby-plugin-nprogress', options: { color: '#ff7d92', } },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'site',
        path: './site.yaml'
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/docs`,
        name: 'docs',
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'sponsors',
        path: './src/assets/sponsors/'
      }
    }
  ]
}
