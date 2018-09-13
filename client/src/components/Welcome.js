
import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import FormFields from './FormFields';
import ErrorBoundary from './ErrorBoundary';
import {Link} from 'react-router-dom';


class Welcome extends React.Component {

  /* ---------- CONSTRUCTOR ----------*/
  constructor(props){
    super(props);
    this.state = {
      isLoggedin: false,
      showSignin: true,
      className: "shadow-sm p-3 m-5 bg-white rounded",
      eWlButtonclassName: "btn btn-outline-warning",
      userNameInput: "form-group nameDiv",
      eWlButtonText: "Enter without Logining in",
      divClassName: 'form-group hideSignin',
      button1Name: 'Login',
      formButtonAction: '/login',
    }
  }


  // functions
  handleEWLButton = e => {
    e.preventDefault();
      this.setState({

      });
  }// end of handleClick

    // sign in button
    handleSignUpButton = e => {
      e.preventDefault();
        this.setState({
          className: "transformDelayOut shadow-sm p-3 m-5 bg-warning rounded ",
          eWlButtonclassName: "transformDelayOut my-4 btn btn-success",
          userNameInput:'transformDelayIn form-group nameDiv',
          divClassName: 'form-group',
          button1Name: 'Register',
          formButtonAction: '/signUp',
        });
    }// end of handleClick

/* ---------- RENDER ----------*/
  render(){

    return (
    <div className = 'container-fluid p-3 mb-2 bg-success text-dark' >
      <h1 className = "my-4 jumbotron display-4 shadow-lg p-3 mb-5 bg-white rounded"> Whose the G.O.A.T </h1>
        <form
        id = "loginForm"
        method = "post"
        action = {this.state.formButtonAction}
        className = {this.state.className}
        >
          <h3> Welcome </h3>
          <p className = {this.state.eWlButtonclassName} id = 'eWlButton'>
            <Link className="navbar-brand" to='/home' >{this.state.eWlButtonText}</Link>
          </p>
          <ErrorBoundary>
            <CSSTransitionGroup
              transitionName="example"
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
    )
  }
}

export default Welcome;
