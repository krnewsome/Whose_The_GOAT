import React, { Component } from 'react';
import './css/App.css';

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
        <h1> Welcome </h1>
        <p>{[this.state.users[0].username]}</p>
      </div>
    );
  }
}

export default App;
