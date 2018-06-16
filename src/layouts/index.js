import React from 'react'
import Helmet from 'react-helmet'

import Header from '../components/header'
import Drawer from '../components/drawer'
import Footer from '../components/footer'

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
    const meta = this.props.data.yaml.siteMetadata

    return (
      <div>
        <Helmet>
          <title>{meta.fullTitle}</title>
          <meta name="og:sitename" content={meta.title} />
          <meta name="og:description" content={meta.fullTitle} />
          <meta name="description" content={meta.fullTitle} />
          <meta name="keywords" content={meta.keywords} />
        </Helmet>
        <Header title={meta.title} toggleDrawer={this.toggleDrawer} />
        <Drawer opened={this.state.drawer} toggle={this.toggleDrawer} />
        <main>{this.props.children()}</main>
        <Footer />
      </div>
    )
  }
}

export default Layout

export const query = graphql`
  query IndexLayoutQuery {
    yaml {
      siteMetadata {
        title
        fullTitle
        keywords
      }
    }
  }
`
