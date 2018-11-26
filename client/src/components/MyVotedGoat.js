/*---------- IMPORTS ----------*/
import React from 'react';

/*--------- MYVOTEDGOAT CLASS COMPONENT ----------*/
class MyVotedGoat extends React.Component {

  // handle click function
  handleClick = e => {
    this.props.onVote(e.target.id, e.target.textContent)
  };// END OF HANDLE CLICK

  // handle goatName link function
  handleGoatLink = e => {
    this.props.onSearch(e.target.textContent)
  }// END OF HANDLE GOATNAME LINK

  // RENDER
  render(props) {
    let topGoats = this.props.top5VotedGoats.map((player, index) =>
    <li key={player.topGoatKeyID}>
      <button onClick={this.handleGoatLink}> <strong>{player.topGoatName}</strong> </button> <p>Rank: {player.goatRank} Votes: {player.topGoatVotes}</p>
    </li>
  );// END OF MAP
    return [
      <h3 key= "1" >Top 5 Rated G.O.A.Ts</h3>,
        <ul key= "2" >
          {topGoats}
        </ul>,
        <div key= "3" className = 'userVotedGOAT' style={{display: this.props.showVoteGoatCard}}>
          <h4> My Voted G.O.A.T </h4>
          <ul>
            <li>
              <div id= 'nbaPlayerCardText' className="card d-none d-md-block">
                <h4> Votes: {this.props.playerVoteCount} </h4>
                <img className="card-img-top" src={this.props.votedGoatInfo.PhotoUrl} alt="Voted GOAT "></img>
                <div className="card-body">
                  <h5 className="card-title"><u>{this.props.votedGoatInfo.FirstName + ' ' + this.props.votedGoatInfo.LastName}</u></h5>
                  <div><p>Team: {this.props.votedGoatInfo.Team}</p></div>
                  <div className="containerNBAStats">
                    <div className="row">
                      <div className="col"><p className="card-text">Pos: {this.props.votedGoatInfo.Position}</p></div>
                      <div className="col"><p className="card-text">NBA Exp: {this.props.votedGoatInfo.Experience}</p></div>
                      <div className="w-100"></div>
                      <div className="col"> <p className="card-text">Height: {this.props.votedGoatInfo.Height}</p></div>
                      <div className="col"><p className="card-text">Weight: {this.props.votedGoatInfo.Weight}</p></div>
                    </div>
                  </div>
                  <button id= {this.props.votePlayerID} className= "btn btn-primary" onClick = {this.handleClick}>Remove Vote
                  </button>
                </div>
              </div>
            </li>
          </ul>
        </div>
    ];// END OF RETURN
  }// END OF RENDER
}// END OF MYVOTEDGOAT CLASS COMPONENT

/*--------- EXPORTS ----------*/
export default MyVotedGoat;
