/*---------- IMPORTS ----------*/
import React from 'react';

/*---------- SEARCHFORM CLASS COMPONENT----------*/
class SearchForm extends React.Component  {

  state = {
    searchText: '',
  }// END OF STATE

  // onSearchChange function
  onSearchChange = e => {
    this.setState({ searchText: e.target.value });
  };// END OF ONSEARCHCHANGE FUNCTION

  // handleSubmit function
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSearch(this.searchTag.value)
    e.currentTarget.reset();
  };// END OF HANDLESUBMIT FUNCTION

  // RENDER
  render (props) {

    return [
      <h3 key= "1" > Search Your G.O.A.T! </h3>,
      <form
        className = 'searchForm'
        onSubmit={this.handleSubmit}
        key= "2"
      >
        <div className="form-group">
          <label htmlFor="userNameInput"> <button type="submit" className="btn btn btn-outline-success"> Search </button> </label>
          <input
            type="search"
            onChange={this.onSearchChange}
            name="search"
            ref={(input) => this.searchTag = input}
            className="form-control mx-auto"
            placeholder="Search for your favorite NBA Star"
          />

        </div>
      </form>
    ];// END OF RETURN
  }// END OF RENDER
}// END OF SEARCHFORM CLASS COMPONENT

/*---------- EXPORTS ----------*/
export default SearchForm;
