import React from 'react'

class AsyncImage extends React.Component {
  state = {
    loaded: false,
  }

  componentDidMount() {
    this.listener = () => {
      const img = new Image(this.props.width, this.props.height)

      img.src = this.props.src

      img.onload = () => {
        this.setState({
          loaded: true,
        })
      }
    }

    if (!document.readyState || document.readyState === 'complete') {
      this.listener()
    } else {
      window.addEventListener('load', this.listener)
    }
  }

  componentWillUnmount() {
    if (typeof this.listener === 'function') {
      window.removeEventListener('load', this.listener)
    }
  }

  render() {
    return !this.state.loaded ? <div /> : <img {...this.props} />
  }
}

export default AsyncImage
