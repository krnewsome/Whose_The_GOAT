'use strict'

import React, { Component } from 'react';
import './css/App.css';
import Welcome from './components/Welcome.js'

class App extends Component {
  state = {users: [{}]}

  componentDidMount() {

    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }

  render() {
    return (
      <div className="App">
        <Welcome />
        
      </div>
    );
  }
}

export default App;
