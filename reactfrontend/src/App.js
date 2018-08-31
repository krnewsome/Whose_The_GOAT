
import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';
import './css/App.css';
import Welcome from './components/Welcome.js';
import Home from './components/Home.js';




class App extends Component {

  render() {
    return (
      <BrowserRouter>
          <div className='App'>
          <Switch>
            <Route exact path='/' render={() => <Welcome /> }/>
            <Route path='/Home' render={() => <Home/> }/>
          </Switch>
          </div>
      </BrowserRouter>

    );
  }
}

export default App;
