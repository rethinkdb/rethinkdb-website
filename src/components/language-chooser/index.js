import React from 'react'

import styles from './language-chooser.module.css'

const LANGUAGE_KEY = 'rethinkdb-website-preferred-language'
const ALLOWED_LANGUAGES = ['javascript', 'ruby', 'python', 'java']

class LanguageChooser extends React.Component {
  componentDidMount() {
    this.state = {
      language: 'javascript',
    }

    if (localStorage.hasOwnProperty(LANGUAGE_KEY)) {
      this.state.language = localStorage.getItem(LANGUAGE_KEY)
    }

    if (ALLOWED_LANGUAGES.indexOf(this.state.language) === -1) {
      this.state.language = 'javascript'
    }

    this.setLanguage = this.setLanguage.bind(this)
  }

  setLanguage(language) {
    return function() {
      this.setState({
        language,
      })
    }
  }

  render() {
    return <div className="switcher" />
  }
}

export default LanguageChooser
