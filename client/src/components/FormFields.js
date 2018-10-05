/*--------- IMPORTS ----------*/
import React from 'react';

/*--------- CLASS COMPONENT ----------*/
class FormFields extends React.Component {

  // RENDER
  render(props){

    // RETURN
    return [
      // username input field
      <div key = '1' id="divUserNameInput" className={this.props.divClassName}>
        <label htmlFor="userNameInput">Username</label>
        <input type="name" className="form-control mx-auto" id="userNameInput" name= "userName" aria-describedby="nameHelp" placeholder="Enter username"/>
      </div>,

      // email address input field
      <div key = '2' className="form-group">
        <label htmlFor="emailInput">Email address</label>
        <input type="email" className="form-control mx-auto" id="emailInput" name= "email" aria-describedby="emailHelp" placeholder="Enter email"/>
        <small id="emailHelp" className="form-text  font-italic" style={{color: 'white'}}>We will never share your email with anyone else.</small>
      </div>,

      // password input field
      <div key = '3' className="form-group">
        <label htmlFor="passwordInput1">Password</label>
        <input type="password" className="form-control mx-auto" name= "password" id="passwordInput1" placeholder="Password"/>
      </div>,

      // confirm password input field
      <div key = '4' className={this.props.divClassName}>
        <label htmlFor="passwordInput2">Confirm Password</label>
        <input type="password" className="form-control mx-auto" name= "password2" id="passwordInput2" placeholder="Confirm Password"/>
      </div>
    ]// END OF RETURN
  }// END OF RENDER
}// END OF FORM FIELD COMPONENT

/*--------- EXPORTS ----------*/
export default FormFields;
