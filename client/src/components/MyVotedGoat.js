import React from 'react';

class MyVotedGoat extends React.Component {

  handleClick = e => {
    console.log(e.target.textContent)
    this.props.onVote(e.target.id, e.target.textContent)
  };//end of handleClick

  render(props) {
    return [
      <h3 key= "1" >Top 5 Rated G.O.A.Ts</h3>,
        <ul key= "2" >
          <li> Kobe [insert votes] </li>
          <li> Lebron [insert votes] </li>
          <li> KD  [insert votes] </li>
          <li> Curry [insert votes] </li>
          <li> Shack [insert votes] </li>
        </ul>,
        <div key= "3" className = 'userVotedGOAT'>
          <h4> My Voted G.O.A.T </h4>
          <ul>
            <li>
              <div className="card">
                <h4> Votes: {this.props.playerVoteCount} </h4>
                <img className="card-img-top" src=".../100px180/" alt="PlayerAvatar"></img>
                <div className="card-body">
                  <h5 className="card-title">{this.props.votedGoatName}</h5>
                  <ul>
                    <li className="card-text">{this.props.votedGoatPPG}</li>
                    <li>{this.props.votedGoatRPG}</li>
                    <li>{this.props.votedGoatAPG}</li>
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
