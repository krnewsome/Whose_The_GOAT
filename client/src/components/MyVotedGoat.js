import React from 'react';

class MyVotedGoat extends React.Component {

  handleClick = e => {
    console.log(e.target.textContent)
    this.props.onVote(e.target.id, e.target.textContent)
  };//end of handleClick

  handleGoatLink = e => {
    console.log(e.target.textContent)
    this.props.onSearch(e.target.textContent)
  }


  render(props) {
    return [
      <h3 key= "1" >Top 5 Rated G.O.A.Ts</h3>,
        <ul key= "2" >
          <button onClick={this.handleGoatLink}> <strong>{this.props.topGoatName1}</strong> </button> <p>Votes: {this.props.topGoatVotes1}</p>
          <button onClick={this.handleGoatLink}> <strong>{this.props.topGoatName2}</strong> </button> <p>Votes: {this.props.topGoatVotes2}</p>
          <button onClick={this.handleGoatLink}> <strong>{this.props.topGoatName3}</strong> </button> <p>Votes: {this.props.topGoatVotes3}</p>
          <button onClick={this.handleGoatLink}> <strong>{this.props.topGoatName4}</strong> </button> <p>Votes: {this.props.topGoatVotes4}</p>
          <button onClick={this.handleGoatLink}> <strong>{this.props.topGoatName5}</strong> </button> <p>Votes: {this.props.topGoatVotes5}</p>
        </ul>,
        <div key= "3" className = 'userVotedGOAT' style={{display: this.props.showVoteGoatCard}}>
          <h4> My Voted G.O.A.T </h4>
          <ul>
            <li>
              <div className="card">
                <h4> Votes: {this.props.playerVoteCount} </h4>
                <img className="card-img-top" src={this.props.votedGoatImage} alt="voted GOAT image"></img>
                <div className="card-body">
                  <h5 className="card-title">{this.props.votedGoatName}</h5>
                  <ul>
                    <li className="card-text">Team: {this.props.votedGoatTeam}</li>
                    <li>Years in the NBA: {this.props.votedGoatExperience}</li>
                    <li>Height: {this.props.votedGoatHeight}</li>
                    <li>Wieght: {this.props.votedGoatWeight}</li>
                  </ul>
                  <button id= {this.props.votePlayerID} className= "btn btn-primary" onClick = {this.handleClick}>Remove Vote
                  </button>
                </div>
              </div>
            </li>
          </ul>
        </div>
    ];
  }
}

export default MyVotedGoat;
