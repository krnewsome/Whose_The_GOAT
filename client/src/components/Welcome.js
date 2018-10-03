/*---------- IMPORTS ----------*/
import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import FormFields from './FormFields';
import ErrorBoundary from './ErrorBoundary';
import {Link} from 'react-router-dom';

/*---------- WELCOME CLASS COMPONENT----------*/
class Welcome extends React.Component {

  /* ---------- CONSTRUCTOR ----------*/
  constructor(props){
    super(props);
    this.state = {
      isLoggedin: false,
      showSignin: true,
      className: "shadow-sm p-3 m-5 rounded",
      eWlButtonclassName: "btn btn-outline-warning",
      userNameInput: "form-group nameDiv",
      eWlButtonText: "Enter without Logining in",
      divClassName: 'form-group hideSignin',
      button1Name: 'Login',
      formButtonAction: '/login',
    }// END OF STATE
  }// END OF CONSTRUCTOR

  /*--------- FUNCTIONS ----------*/
  // handleSignUpButton function
  handleSignUpButton = e => {
    e.preventDefault();
      this.setState({
        className: "transformDelayOut shadow-sm p-3 m-5 rounded ",
        eWlButtonclassName: "transformDelayOut my-4 btn btn-success",
        userNameInput:'transformDelayIn form-group nameDiv',
        divClassName: 'form-group',
        button1Name: 'Register',
        formButtonAction: '/signUp',
      });// END OF STATE 
  }// END OF HANDLESIGNUPBUTTON FUNCTION

/* ---------- RENDER ----------*/
  render(){

    return (
    <div className = 'container-fluid p-3 mb-2 text-dark' >
      <h1 id= 'whoseTheGoatTitle' className = "my-4 jumbotron display-4 shadow-lg p-3 mb-5 rounded"> Whose the G.O.A.T </h1>
        <form
        id = "loginForm"
        method = "post"
        action = {this.state.formButtonAction}
        className = {this.state.className}
        >
          <h3><strong> Welcome </strong></h3>
          <p className = {this.state.eWlButtonclassName} id = 'eWlButton'>
            <Link id='linkewl' className="navbar-brand" to='/home' >{this.state.eWlButtonText}</Link>
          </p>
          <ErrorBoundary>
            <CSSTransitionGroup
              transitionName= "example"
              transitionEnterTimeout={500}
              transitionLeaveTimeout={300}
            >
            <FormFields divClassName = {this.state.divClassName}/>

            </CSSTransitionGroup>
          </ErrorBoundary>

          <button type="submit" className="btn btn btn-outline-success">{this.state.button1Name}</button>
          <button id="signupLink" className = "btn btn btn-outline-success" onClick = {this.handleSignUpButton}>Sign-up</button>
        </form>
    </div>
    )// END OF RETURN
  }// END OF RENDER
}// END OF WELCOME CLASS COMPONENT

/*---------- EXPORTS ----------*/
export default Welcome;
