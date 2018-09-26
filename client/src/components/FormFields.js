import React from 'react';


class FormFields extends React.Component {

  render(props){

    return [

      <div key = '1' id="divUserNameInput" className={this.props.divClassName}>
        <label htmlFor="userNameInput">Username</label>
        <input type="name" className="form-control mx-auto" id="userNameInput" name= "userName" aria-describedby="nameHelp" placeholder="Enter username"/>
      </div>,
        <div key = '2' className="form-group" >
          <label htmlFor="emailInput">Email address</label>
          <input type="email" className="form-control mx-auto" id="emailInput" name= "email" aria-describedby="emailHelp" placeholder="Enter email"/>
          <small id="emailHelp" className="form-text text-muted font-italic">We will never share your email with anyone else.</small>
        </div>,
        <div key = '3' className={this.props.divClassName}>
          <label htmlFor="userZipInput">User Zip Code</label>
          <input type="number" className="form-control mx-auto" name= "userZip" id="userZipInput" placeholder="Enter Zip Code"/>
        </div>,
        <div key = '4' className="form-group">
          <label htmlFor="passwordInput1">Password</label>
          <input type="password" className="form-control mx-auto" name= "password" id="passwordInput1" placeholder="Password"/>
        </div>,
        <div key = '5' className={this.props.divClassName}>
          <label htmlFor="passwordInput2">Confirm Password</label>
          <input type="password" className="form-control mx-auto" name= "password2" id="passwordInput2" placeholder="Confirm Password"/>
        </div>
    ]// end of return
  }


}// end of form elements


export default FormFields;
