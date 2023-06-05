//rce
import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  // need to define 'getDerivedStateFromError' and 'componentDidCatch' to use ErrorBoundary
  static getDerivedStateFromError(error) {
    // return the state
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // log the error
    console.log(error);
    console.log(info);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong!</h1>;
    }
    // this.props.children is the component that are actually rendering and wrapped by ErrorBoundary
    return this.props.children;
  }
}

export default ErrorBoundary;
