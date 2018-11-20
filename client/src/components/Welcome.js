/*---------- IMPORTS ----------*/
import React from 'react';
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
    console.log(e)
      e.preventDefault();
      e.target.style.display = 'none'
        this.setState({
          className: "transformDelayOut shadow-sm p-3 m-5 rounded ",
          eWlButtonclassName: "transformDelayOut my-4 btn btn-success",
          userNameInput:'transformDelayIn form-group nameDiv',
          divClassName: 'form-group',
          button1Name: 'Register',
          formButtonAction: '/signUp'
        });// END OF STATE

  }// END OF HANDLESIGNUPBUTTON FUNCTION

/* ---------- RENDER ----------*/
  render(){

    return (
    <div className = 'container-fluid p-3 mb-2 text-dark' >
      <ErrorBoundary>
        <h1 id= 'whoseTheGoatTitle' className = "my-4 jumbotron display-4 shadow-lg p-3 mb-5 rounded"> Whose the G.O.A.T </h1>
          <form
          id = "loginForm"
          method = "post"
          action = {this.state.formButtonAction}
          className = {this.state.className}
          >
            <h3><strong> Welcome </strong></h3>
            <p className = "btn btn-outline-warning" id = 'eWlButton'>
              <Link id='linkewl' className="navbar-brand" to='/home' >{this.state.eWlButtonText}</Link>
            </p>
              <FormFields divClassName = {this.state.divClassName}/>
            <button id="loginButton" className="btn btn btn-outline-success" onClick= {this.handleLoginButton}>{this.state.button1Name}</button>
            <button id="signupButton" className = "btn btn btn-outline-success" onClick = {this.handleSignUpButton}>Sign-up</button>
          </form>
      </ErrorBoundary>
    </div>
    )// END OF RETURN
  }// END OF RENDER
}// END OF WELCOME CLASS COMPONENT

/*---------- EXPORTS ----------*/
export default Welcome;
