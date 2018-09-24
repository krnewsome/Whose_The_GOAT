/*---------- IMPORT COMPONENT----------*/

import React from 'react';


/*---------- PHOTO COMPONENT----------*/

class NbaPlayerCard extends React.Component {

  render(props){

    const handleClick = e => {
      console.log(e.target.textContent, e.target.id)
      this.props.onVote(e.target.id, e.target.textContent)
    };//end of handleClick


    return [
    <li className="photo-wrap mx-auto my-3" style={{width: 18 + 'rem'}}>
      <div class="card">
        <img class="card-img-top" src={this.props.playerPhoto} alt='Image of NBA player'></img>
          <div class="card-body">
            <h5 class="card-title">Name: {this.props.name}</h5>
            <p class="card-text">Position: {this.props.playerPosition}</p>
            <p class="card-text">Team: {this.props.playerTeam}</p>
            <p class="card-text">Height: {this.props.playerHeight}</p>
            <p class="card-text">Weight: {this.props.playerWeight}</p>
            <button id= {this.props.votePlayerID} style= { {display: this.props.buttonDisplay} } onClick = {handleClick} className="btn btn-primary">Vote up</button>
            <button id= {this.props.votePlayerID} style= { {display: this.props.buttonDisplay} } type='submit' onClick = {this.handleClick} className="btn btn-primary voteDown">Remove Vote</button>
          </div>
      </div>
    </li>
    ]
  }
}//end of Photo component

/*---------- EXPORTS ----------*/

export default NbaPlayerCard;
