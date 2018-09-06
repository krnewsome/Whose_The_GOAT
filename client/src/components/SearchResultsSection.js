import React from 'react';

class SearchResultsSection extends React.Component  {

  handleClick = e => {
    console.log(e.target.textContent)
    this.props.onVote(e.target.id, e.target.textContent)
  };//end of handleSubmit

  render (props) {
    return [
      <h1 key= "1" > Search Results </h1>,
      <div key= "2" className = 'searchResultsContainer'>
        <ul>
          <li>
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
                <button id= {this.props.votePlayerID} onClick = {this.handleClick} className="btn btn-primary">Vote up</button>
                <button id= {this.props.votePlayerID} type='submit' onClick = {this.handleClick} className="btn btn-primary voteDown">Remove Vote</button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    ];
  }
}

export default SearchResultsSection;
