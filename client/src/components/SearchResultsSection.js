/*---------- IMPORTS ----------*/
import React from 'react';
import NbaPlayerCard from './NbaPlayerCard';

/*---------- SEARCHRESULTSECTION CLASS COMPONENT----------*/
class SearchResultsSection extends React.Component {

  // RENDER
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

  // create player search results cards based on search term
  results.forEach(function(player){
    // compare search term with player names
    if(currentPlayers.length > 0 &&
      searchTerm.toUpperCase() == player.FirstName.toUpperCase() ||
      searchTerm.toUpperCase() == player.LastName.toUpperCase() ||
      searchTerm.toUpperCase() == player.FirstName.toUpperCase() + ' ' + player.LastName.toUpperCase()){
      filtered.push(player)
      // map over nba players and create nbaplayer card
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
      );//  END OF NBAPLAYER MAP
    }// END OF IF
  })// END OF FOREACH

  // create page numbers
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(filtered.length / this.props.playersPerPage); i++){
    pageNumber.push(i);
  }// END OF FOR LOOP

  // handlePagination function
  const handlePagination = e => {
    this.props.onPag(Number(e.target.id))
  }// END OF HANDLEPAGINATION FUNCTION

  // create pagitonation buttons/numbers
  let pagination= pageNumber.map(number =>
    <button
      class="page-item"
      key= {number}
      id= {number}
      onClick = {handlePagination}
    >
    {number}
    </button>
  );// END OF PAGINATION MAP

    return [
      <h1 key= "1" onClick = {this.handlePagination}> <u>Search Results</u> </h1>,
      <ul>
      {nbaPlayers}
      </ul>,
      <nav aria-label="Page navigation example">
        <ul class="pagination">
        {pagination}
        </ul>
      </nav>
    ];//END OF RETURN
  }// END OF RENDER
}// END OF SEARCHRESULTSECTION CLASS COMPONENT

/*---------- EXPORTS ----------*/
export default SearchResultsSection;
