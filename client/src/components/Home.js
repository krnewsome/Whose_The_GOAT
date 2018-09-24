import React from 'react';
import MyVotedGoat from './MyVotedGoat';
import SearchForm from './SearchForm';
import SearchResultsSection from './SearchResultsSection';
const NBA = require("nba");
const apiKey = require("../config")
let listItems;
class Home extends React.Component {
  constructor(props) {
   super(props);
   this.state = {
     error: null,
     isLoading: true,
     showVotebutton: 'block',
     votePlayerID:'',
     votedGoatImage:'',
     votedGoatName:'',
     votedGoatPosition:'',
     votedGoatTeam: '',
     votedGoatHeight:'',
     votedGoatWeight:'',
     votedGoatExperience:'',
     playerName: '',
     playerVoteCount: '',
     players: [],
     searchTerm:'',
     currentPage: 1,
     playersPerPage: 10,
     showVoteGoatCard: 'none',
   };
 }

 componentDidMount(){
   // this.getGoatCard()
   this.getTopGoats()
   // this.getNBAPlayers();
 }// end of componentDidMount

getNBAPlayers = (playerName) =>{
  this.setState({
    searchTerm: playerName
  })
  fetch(`https://api.fantasydata.net/v3/nba/stats/JSON/Players`,{
    headers: {
      "Ocp-Apim-Subscription-Key": apiKey.nbaKey
    }
  })
  .then(res => res.json())
  .then(nbaPlayers => {
     this.setState({
       players: nbaPlayers
     })
  })
}

getTopGoats = () => {
  fetch('/home/topGoats')
  .then(res => res.json())
  .then(user => {
    console.log(user)
  })
}


getGoatCard = () => {
  fetch ('/home/userGoatCard')
  .then(res => res.json())
  .then(user => {
    if (user.goatID !== ''){
      this.setState({
        playerVoteCount: user.playerVoteCount
      })
      fetch(`https://api.fantasydata.net/v3/nba/stats/JSON/Player/${user.goatID}`,{
        headers: {
          "Ocp-Apim-Subscription-Key": apiKey.nbaKey
        }
      })
      .then(res => res.json())
      .then(nbaPlayer => {
         this.setState({
           votedGoatName: nbaPlayer.FirstName + ' ' + nbaPlayer.LastName,
           votedGoatImage: nbaPlayer.PhotoUrl,
           votedGoatPosition: nbaPlayer.Position,
           votedGoatTeam: nbaPlayer.Team,
           votedGoatHeight: nbaPlayer.Height,
           votedGoatWeight: nbaPlayer.Weight,
           votedGoatExperience: nbaPlayer.Experience,
           showVoteGoatCard: 'block'
         })
      })
    }
  })
  .catch(error => console.error('Error:', error));
}

  onPag = (pagID) => {
    this.setState({
      currentPage: pagID
    })
  }

  userVote = (votePlayerID, voteButtonType) => {
    fetch ('/home/newGOAT', {
      method: "PUT",
      body: JSON.stringify({votePlayerID, voteButtonType}),
      headers:{
        'Content-Type': 'application/json'
      }
    })//end of fetch
    .then(res =>{
        if(voteButtonType === 'Vote up'){
         this.getGoatCard()
       } else if(voteButtonType === 'Remove Vote'){
         this.setState({
           votedGoatName: '',
           votedGoatImage: '',
           votedGoatPosition: '',
           votedGoatTeam: '',
           votedGoatHeight: '',
           votedGoatWeight: '',
           votedGoatExperience: '',
           showVoteGoatCard: 'none',
         })
        }
      })
    .catch(error => console.error('Error:', error));
  }// end of userVote

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
              <SearchForm onSearch= {this.getNBAPlayers}/>
          </div>
        </div>
        <div  key= "3" className="row">
          <div className="col hCol-4">
            <div className= 'searchResults'>
              <SearchResultsSection
                onPag= {this.onPag}
                currentPage= {this.state.currentPage}
                playersPerPage= {this.state.playersPerPage}
                searchTerm= {this.state.searchTerm}
                players= {this.state.players}
                searchPlayerVoteCount= {this.state.searchPlayerVoteCount}
                buttonDisplay= {this.state.showVotebutton}
                onVote= {this.userVote}
                votePlayerID= {this.state.votePlayerID}
                playerName= {this.state.playerName}

              />
              <ul>
              <li>{listItems}</li>
              </ul>
            </div>
          </div>
          <div key= "4" className="col-4 hCol-2">
            <div className= 'myVotedGoat'>
              <MyVotedGoat
              showVoteGoatCard= {this.state.showVoteGoatCard}
              buttonDisplay= {this.state.showVotebutton}
              playerVoteCount= {this.state.playerVoteCount}
              onVote= {this.userVote}
              votePlayerID= {this.state.votePlayerID}
              votedGoatName = {this.state.votedGoatName}
              votedGoatImage = {this.state.votedGoatImage}
              votedGoatPosition = {this.state.votedGoatPosition}
              votedGoatTeam = {this.state.votedGoatTeam}
              votedGoatHeight = {this.state.votedGoatHeight}
              votedGoatWeight = {this.state.votedGoatWeight}
              votedGoatExperience = {this.state.votedGoatExperience}
              />
            </div>
          </div>
        </div>
      </div>//end of container
      /*---------------------*/
    ]// end of return
  }// end of render
};// end of Home component
export default Home
