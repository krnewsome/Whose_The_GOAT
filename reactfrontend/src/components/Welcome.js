
import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import FormFields from './FormFields';
import ErrorBoundary from './ErrorBoundary';


class Welcome extends React.Component {

/* ---------- CONSTRUCTOR ----------*/
  constructor(props){
    super(props);
    this.state = {
      isLoggedin: false,
      showSignin: true,
      className: "shadow-sm p-3 m-5 bg-white rounded",
      eWlButtonclassName: "my-4 btn btn-warning",
      userNameInput: "form-group nameDiv",
      eWlButtonText: "Enter without Logining in",
      divClassName: 'form-group hideSignin',
      button1Name: 'Login',
    }
  }

  componentDidMount() {
  }

// functions

  // sign in button
  handleClick = e => {
    e.preventDefault();
      this.setState({
        className: "transformDelayOut shadow-sm p-3 m-5 bg-warning rounded ",
        eWlButtonclassName: "transformDelayOut my-4 btn btn-success",
        userNameInput:'transformDelayIn form-group nameDiv',
        divClassName: 'form-group',
        button1Name: 'Register',


      });
  }

/* ---------- RENDER ----------*/
  render(){

    return (
    <div className = 'container-fluid p-3 mb-2 bg-success text-dark' >
      <h1 className = "my-4 jumbotron display-4 shadow-lg p-3 mb-5 bg-white rounded"> Whose the G.O.A.T </h1>
        <form
        id = "loginForm"
        method = "post"
        action = "/users"
        className = {this.state.className}
        >
          <h3> Welcome </h3>
          <button className = {this.state.eWlButtonclassName} id = 'eWlButton'> {this.state.eWlButtonText} </button>
          <ErrorBoundary>
            <CSSTransitionGroup
              transitionName="example"
              transitionEnterTimeout={500}
              transitionLeaveTimeout={300}
            >
            <FormFields divClassName = {this.state.divClassName}/>

            </CSSTransitionGroup>
          </ErrorBoundary>
          <button type="submit" className="btn btn-success">{this.state.button1Name}</button>
          <a id="signupLink" href="#" className = "m-1" onClick = {this.handleClick}>sign-up</a>
        </form>
    </div>
    )
  }
}

export default Welcome;
