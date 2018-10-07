import React, { Component } from 'react';


export default class ErrorBoundary extends Component {
  constructor(props){
    super(props)
    this.state = {
      hasError: false,
    };
  }


  componentDidCatch(err, info){
    this.setState({ hasError: true})
  }

  render(){
    if (this.state.hasError) {
      return <h3>Something went wrong - check your code</h3>
    }
    return this.props.children;
  }
}
