/*--------- IMPORTS ----------*/
import React from 'react';
import MyVotedGoat from './MyVotedGoat';
import SearchForm from './SearchForm';
import SearchResultsSection from './SearchResultsSection';
const apiKey = require("../config");
let top5VotedGoats =[];

/*--------- HOME CLASS COMPONENT ----------*/
class Home extends React.Component {
  constructor(props) {
   super(props);
   this.state = {
     isLoading: true,
     showVotebutton: 'block',
     votePlayerID:'',
     votedGoatInfo:'',
     playerName: '',
     playerVoteCount: '',
     players: [],
     searchTerm:'',
     currentPage: 1,
     playersPerPage: 2,
     showVoteGoatCard: 'none',
     top5VotedGoats:[],
    };// END OF STATE
  }// END OF CONSTRUCTOR

  // COMPONENT DID MOUNT
  componentDidMount(){
    this.getTopGoats()
    this.getGoatCard()
    this.getNBAPlayers('');
  }// end of componentDidMount

  /*--------- FUNCTIONS ----------*/
  // GET NBA players function
  getNBAPlayers = (playerName) =>{
    this.setState({
      searchTerm: playerName
    })// END OF SETSTATE
    fetch(`https://api.fantasydata.net/v3/nba/stats/JSON/Players`,{
      headers: {
        "Ocp-Apim-Subscription-Key": apiKey.nbaKey
      }
    })// END OF FETCH
    .then(res => res.json())
    .then(nbaPlayers => {
       this.setState({
         players: nbaPlayers
       })// END OF SETSTATE
    })// END OF THEN
  }// end of get NBA players

  // GET goat function
  getGoat = (userGoatID, userGoatVote, goatType, goatRank) => {
    fetch(`https://api.fantasydata.net/v3/nba/stats/JSON/Player/${userGoatID}`,{
      headers: {
        "Ocp-Apim-Subscription-Key": apiKey.nbaKey
      }
    })// END OF FETCH
    .then(res => res.json())
    .then(nbaPlayer => {
      if(goatType === 'voted'){
        this.setState({
          votedGoatInfo: nbaPlayer,
          showVoteGoatCard: 'block'
        })// END OF SET STATE
      } else if (goatType === 'top') {
        if(top5VotedGoats.length === 5){
          top5VotedGoats=[];
        }
        top5VotedGoats.push({
          topGoatKeyID: nbaPlayer.PlayerID,
          goatRank: goatRank + 1,
          topGoatName: nbaPlayer.FirstName + ' ' + nbaPlayer.LastName,
          topGoatVotes: userGoatVote
        })// END OF PUSH
        top5VotedGoats.sort(function (a, b) {
          return a.goatRank - b.goatRank;
        })// END OF SORT
        this.setState({
          top5VotedGoats: top5VotedGoats,
          isLoading: false,
        })// END OF SETSTATE
      }// END OF ELSE IF
    })// END OF THEN
    .catch(function(err) {
      console.log('There was an error loading top goats')
    })// END OF CATCH
  }// END OF GET GOAT FUNCTION

  // GET topgoats function
  getTopGoats = () => {
    fetch('/home/topGoats')
    .then(res => res.json())
    .then(player => {
      for (let i = 0; i < player.top5VotedGoats.length; i++){
        this.getGoat(player.top5VotedGoats[i].pID, player.top5VotedGoats[i].pVoteCount, 'top', i);

      }// END OF FOR LOOP

    })// END OF THEN
    .catch((err)=>{
      console.log(err)
    })
  }// END OF GET TOPGOATS

  // GET goat function
  getGoatCard = () => {
    fetch ('/home/userGoatCard')
    .then(res => res.json())
    .then(user => {
      if (user.goatID !== ''){
        this.setState({
          playerVoteCount: user.playerVoteCount
        })// END OF SET STATE
        this.getGoat(user.goatID, '','voted','')
      }// END OF IF
    })// END OF THEN
    .catch(error => console.error('Error:', error));
  }// END OF GET GOAT CARD FUNCTION

  // pagination function
  onPag = (pagID) => {
    this.setState({
      currentPage: pagID
    })// END OF SET STATE
  }// END OF PAGINATION

  // userVote function
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
           votedGoatInfo:'',
           showVoteGoatCard: 'none',
         })
        }
      })// END OF THEN
      .then(()=>{
      })// END OF THEN
    .catch(error => console.error('Error:', error));
  }// END OF USERVOTE FUNCTION

  // RENDER
  render(){

    return [
      <div key= "1"  className="container">
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
        <div className="row">
          <div className="col hCol-3">
            <h3> Instructions </h3>
              <p> Search for your favorite NBA player and select the 'up' arrow to place your vote
                or the down arrow to remove your vote. Each user only is able to place one vote so choose carefully!.
                You are able to change your vote at anytime.
              </p>
              <SearchForm onSearch= {this.getNBAPlayers}/>
          </div>
        </div>
        <div className="row">
          <div className="col hCol-4">
            <div className= 'searchResults'>
              <SearchResultsSection
                onPag= {this.onPag}
                currentPage= {this.state.currentPage}
                playersPerPage= {this.state.playersPerPage}
                searchTerm= {this.state.searchTerm}
                players= {this.state.players}
                buttonDisplay= {this.state.showVotebutton}
                onVote= {this.userVote}
                votePlayerID= {this.state.votePlayerID}
                playerName= {this.state.playerName}
              />
            </div>
          </div>
          <div className="col-4 hCol-2">
            <div className= 'myVotedGoat'>
            {
              (this.state.isLoading)
            ? <p>Loading...</p>
            :
              <MyVotedGoat
              onSearch= {this.getNBAPlayers}
              top5VotedGoats= {this.state.top5VotedGoats}
              showVoteGoatCard= {this.state.showVoteGoatCard}
              buttonDisplay= {this.state.showVotebutton}
              playerVoteCount= {this.state.playerVoteCount}
              onVote= {this.userVote}
              votePlayerID= {this.state.votePlayerID}
              votedGoatInfo= {this.state.votedGoatInfo}
              />
            }
            </div>
          </div>
        </div>
      </div>// END OF CONTAINER
      /*---------------------*/
    ]// END OF RETURN
  }// END OF RENDER
};// END OF HOME CLASS COMPONENT

/*--------- EXPORTS ----------*/
export default Home;
