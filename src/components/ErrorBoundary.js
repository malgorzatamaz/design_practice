import React, { Component } from "react"

/**
 * Error boundary for catching components errors
 * my error boundary
 * */
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

    console.log(error)
    if (error) return <div>Error occurred: {error}</div>

    return this.props.children
  }
}

export default ErrorBoundary
