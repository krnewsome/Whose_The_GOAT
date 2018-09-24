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

    if(currentPlayers.length > 0 &&
      searchTerm.toUpperCase() == player.FirstName.toUpperCase() ||
      searchTerm.toUpperCase() == player.LastName.toUpperCase() ||
      searchTerm.toUpperCase() == player.FirstName.toUpperCase() + ' ' + player.LastName.toUpperCase()){
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
    ];
  }
}

export default SearchResultsSection;
