import React, { Component } from 'react';


export default class ErrorBoundary extends Component {

  state = {
    hasError: false,
  };

  componentDidCatch(){
    this.setState({ hasError: true})
  }

  render(){
    if (this.state.hasError) {
      return <h3>Something went wrong - check your code</h3>
    }
    return this.props.children;
  }
}
