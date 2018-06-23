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

    window.addEventListener('load', this.listener)
  }

  componentWillUnmount() {
    window.removeEventListener('load', this.listener)
  }

  render() {
    return !this.state.loaded ? <div /> : <img {...this.props} />
  }
}

export default AsyncImage
