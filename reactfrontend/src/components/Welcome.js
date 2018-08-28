
import React from 'react';
import SignupForm from './SignupForm.js'

class Welcome extends React.Component {

/* ---------- CONSTRUCTOR ----------*/
  constructor(props){
    super(props);
    this.state = {
      isLoggedin: false,
      showSignUp: false,
      showLogin: true,
      className: "shadow-sm p-3 m-5 bg-white rounded",
      signupFormDisplay: "transformDelayOut shadow-sm p-3 m-5 bg-warning rounded",
      eWlButtonclassName: "my-4 btn btn-warning",
      eWlButtonText: "Enter without Logining in",
      opacity: 'none',
    }
  }

  componentDidMount() {

  }

  componentWillUnmount() {
    this.onClickChangeForm()
  }

// functions

  // sign in button
  handleClick = e => {
    e.preventDefault();
    console.log(e.target.textContent)
    let userSelection = e.target.textContent
    if (userSelection === 'sign-up'){
      let form = document.querySelector('form');
      let eWlButton = document.getElementById('eWlButton');
      let signupForm = document.getElementById('signupForm');

      console.log(form)
      this.setState({
        className: form.className = "transformDelayOut shadow-sm p-3 m-5 bg-warning rounded ",
        eWlButtonclassName: eWlButton.className = "transformDelayOut my-4 btn btn-success",
        signupFormDisplay: signupForm.className= "transformDelayOut shadow-sm p-3 m-5 bg-warning rounded"
        // showLogin: this.showLogin = false,
        // showSignUp: this.showLogin = true,
      });
    } else if (userSelection === 'Login'){

    } else {
      console.log('wups')
    }
  }



/* ---------- RENDER ----------*/
  render(){


    return (
    <div className = 'container-fluid p-3 mb-2 bg-success text-dark' >
      <h1 className = "my-4 jumbotron display-4 shadow-lg p-3 mb-5 bg-white rounded"> Whose the GOAT </h1>
        <SignupForm className= {this.state.signupFormDisplay} showSignUp= {this.state.showSignUp}/>
        <form
        id = "loginForm"
        method = "post"
        action = "/users"
        className = {this.state.className}
        onClick = {this.handleClick}
        style= {{display: this.state.showLogin ? 'block' : 'none'}}
        >
          <h3> Welcome </h3>
          <button className = {this.state.eWlButtonclassName} id = 'eWlButton'> {this.state.eWlButtonText} </button>
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control mx-auto" id="exampleInputEmail1" name= "email" aria-describedby="emailHelp" placeholder="Enter email"/>
            <small id="emailHelp" className="form-text text-muted font-italic">We will never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" className="form-control mx-auto" name= "password" id="exampleInputPassword1" placeholder="Password"/>
          </div>
          <button type="submit" className="btn btn-success">Login</button>
          <a href="#" className = "m-1">sign-up</a>
        </form>
    </div>
    )
  }
}

export default Welcome;
