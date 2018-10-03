/*---------- IMPORTS ----------*/
import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';
import './css/App.css';
import Welcome from './components/Welcome.js';
import Home from './components/Home.js';
import NavBar from './components/NavBar';

/*---------- APP CLASS COMPONENT----------*/
class App extends Component {

  // render
  render() {

    return (
      <BrowserRouter>
          <div className='App'>
          <NavBar />
          <Switch>
            <Route exact path='/' render={() => <Welcome /> }/>
            <Route exact path='/home' render={() => <Home /> }/>
          </Switch>
          </div>
      </BrowserRouter>

    );// END OF RETURN
  }// END OF RENDER
}// END OF APP CLASS COMPONENT

/*---------- EXPORTS ----------*/
export default App;
