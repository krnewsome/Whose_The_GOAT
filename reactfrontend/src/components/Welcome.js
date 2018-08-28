
import React from 'react';

class Welcome extends React.Component {

/* ---------- CONSTRUCTOR ----------*/
  constructor(props){
    super(props);
    this.state = {
      showSignUp: false,
      showLogin: true,
      className: "shadow-sm p-3 m-5 bg-white rounded",
      eWlButtonclassName: "my-4 btn btn-warning",
      opacity: 'none',
    }
  }

  componentDidMount() {

  }

  componentWillUnmount() {
    this.onClickChangeForm()
  }

// functions

  handleClick = e => {
    e.preventDefault();
    console.log(e.target.textContent)
    let userSelection = e.target.textContent
    if (userSelection === 'sign-up'){
      let form = document.querySelector('form');
      let eWlButton = document.getElementById('eWlButton');
      console.log(form)
      form.className = "shadow-sm p-3 m-5 bg-warning rounded";
      eWlButton.className = "my-4 btn btn-success";
      this.setState({className: form.className})
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
        <form
        id = "loginForm"
        method = "post"
        action = "/users"
        className = {this.state.className}
        onClick={this.handleClick}
        >
          <h3> Welcome </h3>
          <button className = {this.state.eWlButtonclassName} id = 'eWlButton'> Enter without Logining in </button>
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
