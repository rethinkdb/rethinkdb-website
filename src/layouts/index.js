import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import Drawer from '../components/drawer'
import './index.css'

class Layout extends React.Component {
  state = {
    drawer: false,
  }

  constructor() {
    super()

    this.toggleDrawer = this.toggleDrawer.bind(this)
  }

  toggleDrawer() {
    this.setState(state => ({
      ...state,
      drawer: !state.drawer,
    }))
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>{this.props.data.site.siteMetadata.fullTitle}</title>
          <meta
            name="og:sitename"
            content={this.props.data.site.siteMetadata.title}
          />
          <meta
            name="og:description"
            content={this.props.data.site.siteMetadata.fullTitle}
          />
          <meta
            name="description"
            content={this.props.data.site.siteMetadata.fullTitle}
          />
          <meta
            name="keywords"
            content={this.props.data.site.siteMetadata.keywords}
          />
        </Helmet>
        <Header
          title={this.props.data.site.siteMetadata.title}
          toggleDrawer={this.toggleDrawer}
        />
        <Drawer opened={this.state.drawer} toggle={this.toggleDrawer} />
        <main>
          {this.props.children()}
        </main>
      </div>
    )
  }
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
