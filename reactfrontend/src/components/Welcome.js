
import React from 'react';

const Welcome = () => {

  return (
    <div className = 'container-fluid p-3 mb-2 bg-success text-dark' >
      <h1 className = "my-4 jumbotron display-4 shadow-lg p-3 mb-5 bg-white rounded"> Whose the GOAT </h1>
        <form className= "shadow-sm p-3 m-5 bg-white rounded">
          <h3> Welcome </h3>
          <button className = "my-4 btn btn-warning">Enter without Logining in</button>
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control mx-auto" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
            <small id="emailHelp" className="form-text text-muted font-italic">We will never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" className="form-control mx-auto" id="exampleInputPassword1" placeholder="Password"/>
          </div>
          <button type="submit" className="btn btn-success">Login</button>
          <a href="#" className = "m-1">sign-up</a>
        </form>
    </div>
  )
}


export default Welcome;
