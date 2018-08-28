
import React from 'react';

class SignupForm extends React.Component {

  render(){
    return (
    <div id = 'signupForm' style= {{display: this.props.showSignUp ? 'block' : 'none'}} className = 'container-fluid p-3 mb-2 bg-success text-dark' >
      <h1 className = "my-4 jumbotron display-4 shadow-lg p-3 mb-5 bg-white rounded"> Whose the GOAT </h1>

    </div>
    )
  }
}

export default SignupForm;
