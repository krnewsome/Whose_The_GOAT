import React from 'react';
import MyVotedGoat from './MyVotedGoat';
import SearchForm from './SearchForm';
import SearchResultsSection from './SearchResultsSection';
const NBA = require("nba");


class Home extends React.Component {
  constructor(props) {
   super(props);
   this.state = {
     error: null,
     isLoading: true,
     showVotebutton: 'block',
     votePlayerID:'',
     votedGoatName:'',
     votedGoatPPG:'',
     votedGoatRPG:'',
     votedGoatAPG:'',
     playerName: '',
     playerVoteCount: '',
     ppg:'',
     rpg:'',
     apg:'',

   };
 }

 componentDidMount(){
   this.getGoatCard()
 }// end of componentDidMount

getGoatCard = () => {
  fetch ('/home/userGoatCard')
  .then(res => res.json())
  .then(user => {
    if (user.goatID !== ''){
      return this.setState({
        votedGoatName: user.goatcard.goatName,
        votedGoatPPG: user.goatcard.goatPPG,
        votedGoatRPG: user.goatcard.goatRPG,
        votedGoatAPG: user.goatcard.goatAPG,
        votePlayerID: user.goatID,
        showVotebutton: 'none',
        playerVoteCount: user.playerVoteCount

      })
    } else {
      return this.setState({
        votedGoatName: user.goatcard.goatName,
        votedGoatPPG: user.goatcard.goatPPG,
        votedGoatRPG: user.goatcard.goatRPG,
        votedGoatAPG: user.goatcard.goatAPG,
        votePlayerID: user.goatID,
      })
    }
  })
  .catch(error => console.error('Error:', error));
}

  //perform search for player
  performSearch = (playerName) => {
    let player = NBA.findPlayer(playerName)
    NBA.stats.playerInfo({ PlayerID: player.playerId })
    .then(data => {
      this.setState({
        playerName: data.commonPlayerInfo[0].displayFirstLast,
        ppg: data.playerHeadlineStats[0].pts,
        rpg: data.playerHeadlineStats[0].reb,
        apg: data.playerHeadlineStats[0].ast,
        votePlayerID: data.commonPlayerInfo[0].personId,
      })
    });
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
      console.log('Sucess', res)
    })
    .catch(error => console.error('Error:', error));
  }// end of userVote

  removeUserVote = (votePlayerID) => {

    fetch ('/home/removeGOAT', {
      method: "PUT",
      headers:{
        'Content-Type': 'application/json'
      }
    })//end of fetch
    .then(res => {
      this.getGoatCard()
      console.log('Sucess', res)
    })
    .catch(error => console.error('Error:', error));
  }// end of removeUserVote

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
              <SearchResultsSection
                playerVoteCount= {this.playerVoteCount}
                buttonDisplay= {this.state.showVotebutton}
                onVote= {this.userVote}
                votePlayerID= {this.state.votePlayerID}
                playerName= {this.state.playerName}
                ppg={this.state.ppg}
                rpg= {this.state.rpg}
                apg= {this.state.apg}
              />
            </div>
          </div>
          <div key= "4" className="col-4 hCol-2">
            <div className= 'myVotedGoat'>
              <MyVotedGoat
              buttonDisplay= {this.state.showVotebutton}
              playerVoteCount= {this.state.playerVoteCount}
              onVote= {this.userVote}
              votePlayerID= {this.state.votePlayerID}
              votedGoatName = {this.state.votedGoatName}
              votedGoatPPG = {this.state.votedGoatPPG}
              votedGoatRPG = {this.state.votedGoatRPG}
              votedGoatAPG = {this.state.votedGoatAPG}
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
