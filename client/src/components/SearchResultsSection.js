import React from 'react';

class SearchResultsSection extends React.Component  {

  handleSubmit = e => {
    e.preventDefault();

    console.log(e.target[0].id)
    this.props.onVote(e.target[0].id)
  };//end of handleSubmit

  render (props) {
    return [
      <h1 key= "1" > Search Results </h1>,
      <div key= "2" className = 'searchResultsContainer'>
        <ul>
          <li>
          <form
          id = "voteForm"
          method = "post"
          className = 'voteForm'
          onSubmit={this.handleSubmit}
          >
            <div className="card">
              <h4>[votes:]</h4>
              <img className="card-img-top" src=".../100px180/" alt="PlayerAvatar"></img>
              <div className="card-body">
                <h5 className="card-title">{this.props.playerName}</h5>
                <ul>
                  <li className="card-text"> Points Per Game: {this.props.ppg}</li>
                  <li>Rebounds Per Game: {this.props.rpg}</li>
                  <li>Assit Per Game: {this.props.apg}</li>
                </ul>
                <button id= {this.props.votePlayerID} type='submit' className="btn btn-primary">Vote up</button>
                <button type='submit' className="btn btn-primary voteDown">Remove Vote</button>
              </div>
            </div>
            </form>
          </li>
        </ul>
      </div>
    ];
  }
}

export default SearchResultsSection;
