import React from 'react'
import { SlideDown } from 'react-slidedown'
import { CSSTransition } from 'react-transition-group'
import Link from 'gatsby-link'
import { withRouter } from 'react-router-dom'
import uniq from 'lodash.uniq'

import 'react-slidedown/lib/slidedown.css'
import styles from './drawer.module.css'

const drawerTransition = {
  enter: styles.transitionDrawerEnter,
  enterActive: styles.transitionDrawerEnterActive,
  exit: styles.transitionDrawerExit,
  exitActive: styles.transitionDrawerExitActive,
}

const backdropTransition = {
  enter: styles.transitionBackdropEnter,
  enterActive: styles.transitionBackdropEnterActive,
  exit: styles.transitionBackdropExit,
  exitActive: styles.transitionBackdropExitActive,
}

class Drawer extends React.Component {
  state = {
    additionalTree: [],
    additionalTreeToggles: [],
  }

  constructor(props) {
    super(props)

    this.unlisten = props.history.listen(this.pageChange.bind(this))

    this.toggleAdditionalTreeCategory = this.toggleAdditionalTreeCategory.bind(
      this
    )
  }

  componentWillUnmount() {
    this.unlisten()
  }

  pageChange() {
    const isDocs = location.pathname.indexOf('/docs') > -1
    const isApi = location.pathname.indexOf('/api') > -1

    const parentPage = isDocs ? 'docs' : isApi ? 'api' : null

    if (!parentPage) {
      this.setState({
        additionalTree: [],
        additionalTreeToggles: [],
      })

      return
    }

    let additionalTree = []

    let additionalPages = this.props.pages.filter(
      page => page.parentPage === parentPage
    )

    uniq(additionalPages.map(p => p.category)).forEach(header => {
      additionalTree.push({
        name: header,
        children: [],
      })
    })

    additionalPages.forEach(page => {
      const headerIndex = additionalTree.findIndex(
        entry => entry.name === page.category
      )

      additionalTree[headerIndex].children.push(page)
    })

    this.setState({
      additionalTree,
      additionalTreeToggles: additionalTree.map(() => false),
    })
  }

  toggleAdditionalTreeCategory(i) {
    return () => {
      this.setState(state => {
        const additionalTreeToggles = state.additionalTreeToggles.slice()
        additionalTreeToggles[i] = !additionalTreeToggles[i]

        return {
          ...state,
          additionalTreeToggles,
        }
      })
    }
  }

  render() {
    return (
      <React.Fragment>
        <CSSTransition
          in={this.props.opened}
          timeout={200}
          classNames={drawerTransition}
          unmountOnExit={true}
        >
          <nav key="drawer" className={styles.drawer}>
            <span className={styles.link} onClick={this.props.toggle}>
              <div className={styles.cross}>
                <div className={styles.line} />
                <div className={styles.line} />
              </div>
              close
            </span>
            <Link className={styles.link} onClick={this.props.toggle} to="/faq">
              faq
            </Link>
            <Link
              className={styles.link}
              onClick={this.props.toggle}
              to="/docs"
            >
              docs
            </Link>
            <Link className={styles.link} onClick={this.props.toggle} to="/api">
              api
            </Link>
            <Link
              className={styles.link}
              onClick={this.props.toggle}
              to="/community"
            >
              community
            </Link>
            {this.state.additionalTree.map((header, i) => (
              <React.Fragment key={i}>
                <h3
                  className={styles.additionalCategory}
                  key="header"
                  onClick={this.toggleAdditionalTreeCategory(i)}
                >
                  {header.name}
                </h3>
                <SlideDown
                  className={styles.additionalCategorySlide}
                  key="slide"
                  closed={!this.state.additionalTreeToggles[i]}
                >
                  <ul className={styles.additionalSublinks}>
                    {header.children.map((entry, j) => (
                      <li key={j}>
                        <Link to={entry.path}>{entry.title}</Link>
                      </li>
                    ))}
                  </ul>
                </SlideDown>
              </React.Fragment>
            ))}
          </nav>
        </CSSTransition>
        <CSSTransition
          in={this.props.opened}
          timeout={200}
          classNames={backdropTransition}
          unmountOnExit={true}
        >
          <div
            className={styles.backdrop}
            key="backdrop"
            onClick={this.props.toggle}
          />
        </CSSTransition>
      </React.Fragment>
    )
  }
}

export default withRouter(Drawer)
