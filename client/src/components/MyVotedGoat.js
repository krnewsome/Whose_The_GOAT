/*--------- IMPORTS ----------*/
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
              <div id= 'nbaPlayerCardText' className="card">
                <h4> Votes: {this.props.playerVoteCount} </h4>
                <img className="card-img-top" src={this.props.votedGoatImage} alt="Voted GOAT "></img>
                <div className="card-body">
                  <h5 className="card-title"><u>{this.props.votedGoatName}</u></h5>
                  <div class="containerNBAStats">
                    <div class="row">
                      <div class="col"><p class="card-text">Team: {this.props.votedGoatTeam}</p></div>
                      <div class="col"><p class="card-text">NBA Exp: {this.props.votedGoatExperience}</p></div>
                      <div class="w-100"></div>
                      <div class="col"> <p class="card-text">Height: {this.props.votedGoatHeight}</p></div>
                      <div class="col"><p class="card-text">Weight: {this.props.votedGoatWeight}</p></div>
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
