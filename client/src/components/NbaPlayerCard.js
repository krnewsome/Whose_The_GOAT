/*---------- IMPORTS ----------*/
import React from 'react';

/*---------- NBAPLAYERCARD CLASS COMPONENT----------*/
class NbaPlayerCard extends React.Component {
  // RENDER
  render(props){
    // handleClick function
    const handleClick = e => {
      this.props.onVote(e.target.id, e.target.textContent)
    };// END OF HANDLE CLICK FUNCTION

    return [
      <li key='1' className="photo-wrap mx-auto my-3" style={{width: 18 + 'rem'}}>
        <div className="card">
          <img className="card-img-top" src={this.props.playerPhoto} alt='NBA player'></img>
            <div className="card-body">
              <h5 className="card-title"><u>{this.props.name}</u></h5>
              <div className="containerNBAStats">
                <div id= 'nbaPlayerCardText' className="row">
                  <div className="col"><p className="card-text">Team: {this.props.playerTeam}</p></div>
                  <div className="col"><p className="card-text">Position: {this.props.playerPosition}</p></div>
                  <div className="w-100"></div>
                  <div className="col"> <p className="card-text">Height: {this.props.playerHeight}</p></div>
                  <div className="col"><p className="card-text">Weight: {this.props.playerWeight}</p></div>
                </div>
              </div>
              <button id= {this.props.votePlayerID} style= { {display: this.props.buttonDisplay} } onClick = {handleClick} className="btn btn-primary">Vote up</button>
            </div>
        </div>
      </li>
    ]// END OF RETURN
  }// END OF RENDER
}// END OF NBAPLAYERCARD CLASS COMPONENT

/*---------- EXPORTS ----------*/
export default NbaPlayerCard;
