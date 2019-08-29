import React, { Component } from "react"

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { error: undefined }
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo)

    this.setState({ error })
  }

  render() {
    const { error } = this.state

    if (error) return <div>Error occurred: {error}</div>

    return this.props.children
  }
}

export default ErrorBoundary
