import React from 'react';
import NbaPlayerCard from './NbaPlayerCard';

class SearchResultsSection extends React.Component {

  render (props){
  const buttonDisplay= this.props.buttonDisplay
  const userVote = this.props.onVote
  const results = this.props.players
  const searchTerm = this.props.searchTerm
  let nbaPlayers;
  let filtered=[];
  const indexOfLastPlayer = this.props.currentPage * this.props.playersPerPage;
  const indexOfFirstPlayer = indexOfLastPlayer - this.props.playersPerPage;
  const currentPlayers = this.props.players.slice(indexOfFirstPlayer, indexOfLastPlayer);

  results.forEach(function(player){
    if(currentPlayers.length > 0 && searchTerm == player.FirstName){
      filtered.push(player)
      nbaPlayers = filtered.map((player, key) =>
        <NbaPlayerCard
        key={key}
        name= {player.FirstName + ' ' + player.LastName}
        playerPhoto= {player.PhotoUrl}
        playerPosition= {player.Position}
        playerTeam= {player.Team}
        playerHeight= {player.Height}
        playerWeight= {player.Weight}
        votePlayerID= {player.PlayerID}
        buttonDisplay= {buttonDisplay}
        onVote= {userVote}
        />
      );//end of map
    }
  })//end of forEach




//Page Numbers
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(filtered.length / this.props.playersPerPage); i++){
    pageNumber.push(i);
  }
  const handlePagination = e => {
    this.props.onPag(Number(e.target.id))
    console.log(Number(e.target.id))
    }

let  pagination= pageNumber.map(number =>
    <button
    class="page-item"
    key= {number}
    id= {number}
    onClick = {handlePagination}
    >
    {number}
    </button>
  );

    return [
      <h1 key= "1"     onClick = {this.handlePagination}
> Search Results </h1>,
      <ul>
      {nbaPlayers}
      </ul>,
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          {pagination}
        </ul>
      </nav>
      // <div key= "2" className = 'searchResultsContainer'>
      //   <ul>
      //     <li>
      //       <div className="card">
      //         <h4>Votes: {props.searchPlayerVoteCount}</h4>
      //         <img className="card-img-top" src=".../100px180/" alt="PlayerAvatar"></img>
      //         <div className="card-body">
      //           <h5 className="card-title">{props.playerName}</h5>
      //           <ul>
      //             <li className="card-text"> Points Per Game: {props.ppg}</li>
      //             <li>Rebounds Per Game: {props.rpg}</li>
      //             <li>Assit Per Game: {props.apg}</li>
      //           </ul>
      //           <button id= {props.votePlayerID} style= { {display: props.buttonDisplay} } onClick = {this.handleClick} className="btn btn-primary">Vote up</button>
      //           <button id= {props.votePlayerID} style= { {display: props.buttonDisplay} } type='submit' onClick = {this.handleClick} className="btn btn-primary voteDown">Remove Vote</button>
      //         </div>
      //       </div>
      //     </li>
      //   </ul>
      // </div>
    ];
  }
}

export default SearchResultsSection;
