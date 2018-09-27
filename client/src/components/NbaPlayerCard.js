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
            <h5 class="card-title"><u>{this.props.name}</u></h5>
            <div class="containerNBAStats">
              <div class="row">
                <div class="col"><p class="card-text">Team: {this.props.playerTeam}</p></div>
                <div class="col"><p class="card-text">Position: {this.props.playerPosition}</p></div>
                <div class="w-100"></div>
                <div class="col"> <p class="card-text">Height: {this.props.playerHeight}</p></div>
                <div class="col"><p class="card-text">Weight: {this.props.playerWeight}</p></div>
              </div>
            </div>
            <button id= {this.props.votePlayerID} style= { {display: this.props.buttonDisplay} } onClick = {handleClick} className="btn btn-primary">Vote up</button>
          </div>
      </div>
    </li>
    ]
  }
}//end of Photo component

/*---------- EXPORTS ----------*/

export default NbaPlayerCard;
