import React from 'react';

class SearchForm extends React.Component  {

  state = {
    searchText: '',
  }//end of state

  onSearchChange = e => {
    console.log('onSearchChange')
    this.setState({ searchText: e.target.value });
  };//end of onSearchChange

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSearch(this.searchTag.value)
    e.currentTarget.reset();
  };//end of handleSubmit


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
    ];
  }
}

export default SearchForm;
