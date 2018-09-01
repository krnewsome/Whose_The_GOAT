import React from 'react';

function SearchForm() {
  return [
    <h3>Search Your G.O.A.T! </h3>,
    <form
      id = 'searchForm'
      method = "get"
      action = ''
      className = 'searchForm'
    >
      <div class="form-group">
        <label for="userNameInput"> <button type="submit" className="btn btn btn-outline-success"> Search your favorite NBA Star </button> </label>
        <input type="name" className="form-control mx-auto" id="userNameInput" name= "userName" aria-describedby="nameHelp" placeholder="Enter username"/>
      </div>,
    </form>
  ];
}

export default SearchForm;
