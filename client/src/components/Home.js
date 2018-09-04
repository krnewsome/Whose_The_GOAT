import React from 'react';
import TopRatedGOATList from './TopRatedGOATList';
import SearchForm from './SearchForm';
import SearchResultsSection from './SearchResultsSection';
const NBA = require("nba");


class Home extends React.Component {
  constructor(props) {
   super(props);
   this.state = {
     error: null,
     isLoading: true,
     playerName: '',
     ppg:'',
     rpg:'',
     apg:'',

   };
 }

  componentDidMount(){
    console.log(this.state.playerName)
    fetch('/search-location-weather',{
      headers: {
        url: "http://localhost:5000/search-location-weather"
      }
    })
		.then(res => console.log(res))
    .then(result => {
    console.log(result)
    })
  }

  //perform search for player
  performSearch = (playerName) => {
    console.log(playerName)
    let player = NBA.findPlayer(playerName)
    console.log(player)
    NBA.stats.playerInfo({ PlayerID: player.playerId })
    .then(data => {
      console.log(data.playerHeadlineStats[0].pts)
      this.setState({
        playerName: data.commonPlayerInfo[0].displayFirstLast,
        ppg: data.playerHeadlineStats[0].pts,
        rpg: data.playerHeadlineStats[0].reb,
        apg: data.playerHeadlineStats[0].ast,
      })
    });
  }

  render(){

    return [
      <div key= "1" className="container">
        <div className="row">
          <div className="col hCol-1">
            <h1>Welcome to Whose the G.O.A.T</h1>
              <p> Vote on who you think is the Greatest of All Time (G.O.A.T) and see how your vote compares against others.
                  As the NBA star accumlates votes watch as your voted palyer rises to the top.
                  The top 5 NBA Stars will be displayed on the home page for everyone to see.
                  Join other voters in the <a href= '/Home'> Discussion Area </a> to debate and sway votes to get your G.O.A.T NBA Star to rise to the top!
              </p>
          </div>
        </div>
        <div key= "2" className="row">
          <div className="col hCol-3">
            <h3> Instructions </h3>
              <p> Search for your favorite NBA player and select the 'up' arrow to place your vote
                or the down arrow to remove your vote. Each user only is able to place one vote so choose carefully!.
                You are able to change your vote at anytime.
              </p>
              <SearchForm onSearch= {this.performSearch}/>
          </div>
        </div>
        <div  key= "3" className="row">
          <div className="col hCol-4">
            <div className= 'searchResults'>
              <SearchResultsSection playerName= {this.state.playerName} ppg={this.state.ppg} rpg= {this.state.rpg} apg= {this.state.apg} />
            </div>
          </div>
          <div key= "4" className="col-4 hCol-2">
            <div className= 'topGoatList'>
              <TopRatedGOATList />
            </div>
          </div>
        </div>
      </div>//end of container
      /*---------------------*/
    ]// end of return
  }// end of render
};// end of Home component
export default Home
